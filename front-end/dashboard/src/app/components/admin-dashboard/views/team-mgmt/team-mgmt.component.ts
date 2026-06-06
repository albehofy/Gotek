import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-team-mgmt',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './team-mgmt.component.html',
  styleUrl: './team-mgmt.component.css'
})
export class TeamMgmtComponent implements OnInit {
  fb = inject(FormBuilder);
  api = inject(ApiService);

  users: any[] = [];
  departments: any[] = [];
  currentUser: any = null;

  isLoading = true;
  showDeptModal = false;
  showAssignModal = false;

  deptForm!: FormGroup;
  assignForm!: FormGroup;
  selectedUserId: any = null;

  ngOnInit() {
    const userStr = localStorage.getItem('gotek_user') || sessionStorage.getItem('gotek_user');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    }

    this.initForms();
    this.loadData();
  }

  initForms() {
    this.deptForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['']
    });

    this.assignForm = this.fb.group({
      department_id: ['', [Validators.required]]
    });
  }

  loadData() {
    this.isLoading = true;
    this.api.getUsers().subscribe({
      next: (users) => {
        this.users = users || [];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });

    this.api.getDepartments().subscribe(depts => {
      this.departments = depts || [];
    });
  }

  openDeptModal() {
    this.deptForm.reset();
    this.showDeptModal = true;
  }

  submitDept() {
    if (this.deptForm.invalid) return;

    this.api.addDepartment(this.deptForm.value).subscribe({
      next: () => {
        this.showDeptModal = false;
        this.loadData();
      }
    });
  }

  openAssignModal(user: any) {
    this.selectedUserId = user.id;
    this.assignForm.reset({ department_id: user.department_id || '' });
    this.showAssignModal = true;
  }

  submitAssign() {
    if (this.assignForm.invalid) return;
    const deptId = this.assignForm.value.department_id;

    this.api.updateUserDepartment(this.selectedUserId, deptId).subscribe({
      next: () => {
        this.showAssignModal = false;
        this.loadData();
      }
    });
  }

  deleteUser(id: any) {
    if (confirm('هل أنت متأكد من حذف هذا الحساب نهائياً من النظام؟')) {
      this.api.deleteUser(id).subscribe({
        next: () => {
          this.loadData();
        }
      });
    }
  }

  deleteDept(id: any) {
    if (confirm('هل أنت متأكد من حذف هذا القسم؟ قد يؤثر هذا على المهام المرتبطة به.')) {
      this.api.deleteDepartment(id).subscribe({
        next: () => {
          this.loadData();
        }
      });
    }
  }

  closeModal() {
    this.showDeptModal = false;
    this.showAssignModal = false;
  }
}
