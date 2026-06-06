import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { EchoService } from '../../../../services/echo.service';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder);
  api = inject(ApiService);
  echo = inject(EchoService);

  tasks: any[] = [];
  deals: any[] = [];
  departments: any[] = [];
  employees: any[] = [];
  currentUser: any = null;

  isLoading = true;
  showSliceModal = false;
  showAssignModal = false;
  showDetailModal = false;

  sliceForm!: FormGroup;
  assignForm!: FormGroup;
  noteForm!: FormGroup;

  selectedTask: any = null;
  taskNotes: any[] = [];
  selectedFile: File | null = null;
  isUploading = false;

  // Filter keys
  selectedDealFilter: string = '';
  selectedDeptFilter: string = '';

  // Columns for board layout
  todoTasks: any[] = [];
  inProgressTasks: any[] = [];
  inReviewTasks: any[] = [];
  doneTasks: any[] = [];

  ngOnInit() {
    const userStr = localStorage.getItem('gotek_user') || sessionStorage.getItem('gotek_user');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    }

    this.initForms();
    this.loadData();
    this.setupWebSockets();
  }

  ngOnDestroy() {
    this.echo.leaveChannel('tasks');
  }

  initForms() {
    this.sliceForm = this.fb.group({
      deal_id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      department_id: ['', [Validators.required]],
      priority: ['medium', [Validators.required]],
      client_price: [0, [Validators.required, Validators.min(0)]],
      employee_price: [0, [Validators.min(0)]]
    });

    this.assignForm = this.fb.group({
      user_ids: [[], [Validators.required]]
    });

    this.noteForm = this.fb.group({
      note: ['', [Validators.required]]
    });
  }

  loadData() {
    this.isLoading = true;
    this.api.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks || [];
        this.groupTasks();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });

    this.api.getDeals().subscribe(deals => {
      this.deals = deals || [];
    });

    this.api.getDepartments().subscribe(depts => {
      this.departments = depts || [];
    });

    if (this.currentUser?.role === 'admin' || this.currentUser?.role === 'manager' || this.currentUser?.role === 'department_manager') {
      this.api.getUsers().subscribe(users => {
        // Filter users that are employees
        this.employees = (users || []).filter((u: any) => u.role === 'employee');
      });
    }
  }

  setupWebSockets() {
    this.echo.listenPrivate('tasks', '.task.updated', (data: any) => {
      if (data && data.task) {
        // Find and replace the updated task in list
        const idx = this.tasks.findIndex(t => t.id === data.task.id);
        if (idx !== -1) {
          this.tasks[idx] = data.task;
        } else {
          this.tasks.push(data.task);
        }
        this.groupTasks();

        // If currently viewing details of this task, refresh detail modal
        if (this.selectedTask && this.selectedTask.id === data.task.id) {
          this.openDetails(data.task);
        }
      }
    });
  }

  groupTasks() {
    // Filter tasks first
    let filtered = this.tasks;
    if (this.selectedDealFilter) {
      filtered = filtered.filter(t => t.deal_id === Number(this.selectedDealFilter));
    }
    if (this.selectedDeptFilter) {
      filtered = filtered.filter(t => t.department_id === Number(this.selectedDeptFilter));
    }

    this.todoTasks = filtered.filter(t => t.status === 'todo');
    this.inProgressTasks = filtered.filter(t => t.status === 'in_progress');
    this.inReviewTasks = filtered.filter(t => t.status === 'in_review' || t.status === 'changes_requested');
    this.doneTasks = filtered.filter(t => t.status === 'done' || t.status === 'approved');
  }

  onFilterChange() {
    this.groupTasks();
  }

  openSliceModal() {
    this.sliceForm.reset({ priority: 'medium', client_price: 0, employee_price: 0 });
    this.showSliceModal = true;
  }

  submitSlice() {
    if (this.sliceForm.invalid) return;

    this.api.addTask(this.sliceForm.value).subscribe({
      next: () => {
        this.showSliceModal = false;
        this.loadData();
      }
    });
  }

  openAssignModal(task: any) {
    this.selectedTask = task;
    // Map current user ids
    const currentIds = (task.users || []).map((u: any) => u.id);
    this.assignForm.patchValue({ user_ids: currentIds });
    this.showAssignModal = true;
  }

  submitAssign() {
    if (this.assignForm.invalid) return;

    this.api.assignTaskMembers(this.selectedTask.id, this.assignForm.value.user_ids).subscribe({
      next: () => {
        this.showAssignModal = false;
        this.loadData();
      }
    });
  }

  moveTask(task: any, newStatus: string) {
    this.api.updateTaskStatus(task.id, newStatus).subscribe({
      next: () => {
        this.loadData();
      }
    });
  }

  openDetails(task: any) {
    this.selectedTask = task;
    this.isLoading = true;
    this.api.getTask(task.id).subscribe(res => {
      this.selectedTask = res;
      this.taskNotes = res.notes || [];
      this.showDetailModal = true;
      this.isLoading = false;
    });
  }

  submitNote() {
    if (this.noteForm.invalid) return;

    this.api.addTaskNote(this.selectedTask.id, this.noteForm.value.note).subscribe({
      next: (res) => {
        this.noteForm.reset();
        // Reload details to get notes list with creator
        this.openDetails(this.selectedTask);
      }
    });
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  uploadFile() {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.api.addTaskAttachment(this.selectedTask.id, this.selectedFile).subscribe({
      next: () => {
        this.selectedFile = null;
        this.isUploading = false;
        this.openDetails(this.selectedTask);
      },
      error: () => {
        this.isUploading = false;
      }
    });
  }

  deleteTask(id: any) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة نهائياً؟')) {
      this.api.deleteTask(id).subscribe({
        next: () => {
          this.showDetailModal = false;
          this.loadData();
        }
      });
    }
  }

  closeModal() {
    this.showSliceModal = false;
    this.showAssignModal = false;
    this.showDetailModal = false;
  }
}
