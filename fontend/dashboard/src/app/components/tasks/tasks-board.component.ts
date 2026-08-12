import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';

@Component({
  selector: 'app-tasks-board',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-list-check" style="color:var(--violet-light);"></i> Task Board & Pipeline</h2>
          <p class="subtitle">Workflow management, auto-calculated margins, inline attachments & team mentions</p>
        </div>
        <button class="btn btn-primary" (click)="openCreateModal()">
          <i class="fa-solid fa-plus"></i> Add New Task
        </button>
      </div>

      <!-- Pipeline Kanban Columns -->
      <div class="kanban-pipeline">
        <div class="kanban-column" *ngFor="let col of columns">
          <div class="column-header" [ngClass]="col.key">
            <span>{{ col.title }}</span>
            <span class="count-badge">{{ getTasksForColumn(col.key).length }}</span>
          </div>

          <div class="column-body">
            <div class="task-card glass-panel" *ngFor="let task of getTasksForColumn(col.key)" (click)="openTaskDetails(task)">
              <div class="card-top">
                <span class="deal-tag" *ngIf="task.deal">{{ task.deal.title }}</span>
                <span class="subcat-tag" *ngIf="task.sub_category">{{ task.sub_category.name_ar }}</span>
              </div>
              <h4 class="task-title">{{ task.title }}</h4>
              <p class="task-desc" *ngIf="task.scope">{{ task.scope }}</p>

              <!-- Margin Auto-Derived Preview -->
              <div class="margin-row" *ngIf="task.client_price > 0">
                <div class="price-item">
                  <small>سعر العميل:</small>
                  <span>{{ task.client_price }} EGP</span>
                </div>
                <div class="price-item">
                  <small>أجر الموظف:</small>
                  <span>{{ task.employee_price }} EGP</span>
                </div>
                <div class="margin-badge">
                  هامش الشركة: +{{ (task.client_price - task.employee_price) }} EGP
                </div>
              </div>

              <!-- Inline Attachments Preview (Thumbnail grid) -->
              <div class="attachments-preview-grid" *ngIf="getImageAttachments(task).length > 0">
                <img 
                  *ngFor="let img of getImageAttachments(task)" 
                  [src]="img.file_url" 
                  class="inline-thumb" 
                  alt="Attachment Preview" 
                  (click)="expandImage(img.file_url, $event)"
                />
              </div>

              <!-- Card Footer -->
              <div class="card-footer">
                <div class="assigned-users">
                  <span *ngFor="let u of task.users" class="avatar-circle" [title]="u.name">{{ u.name.charAt(0) }}</span>
                </div>
                <div class="subtask-indicator" *ngIf="task.subtasks_count > 0">
                  <i class="fa-solid fa-diagram-project"></i> {{ task.subtasks_count }} فرعية
                </div>
              </div>
            </div>

            <div class="empty-column" *ngIf="getTasksForColumn(col.key).length === 0">
              لا توجد مهام
            </div>
          </div>
        </div>
      </div>

      <!-- Create Task Modal -->
      <div class="crm-modal-backdrop" *ngIf="showCreateModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-plus text-orange"></i> إنشاء مهمة جديدة</h3>
            <button class="close-btn" (click)="showCreateModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="taskForm" (ngSubmit)="saveTask()">
            <div class="form-grid">
              <div class="form-group full-width">
                <label>عنوان المهمة <span class="required">*</span></label>
                <input type="text" formControlName="title" placeholder="مثال: تصوير وتعديل 20 فيديو ريلز" />
              </div>

              <div class="form-group">
                <label>مرتبطة بـ صفقة (Deal)</label>
                <app-prime-picker-select
                  formControlName="deal_id"
                  [items]="deals"
                  optionLabel="title"
                  optionValue="id"
                  placeholder="اختر الصفقة..."
                ></app-prime-picker-select>
              </div>

              <div class="form-group">
                <label>القسم والمركز</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="اختر القسم..."
                ></app-prime-picker-select>
              </div>

              <!-- Pricing & Auto Margin -->
              <div class="form-group">
                <label>سعر العميل للمهمة (Client Price)</label>
                <input type="number" formControlName="client_price" (input)="computeMargin()" placeholder="120" />
              </div>

              <div class="form-group">
                <label>مستحق الموظف المنفذ (Employee Price)</label>
                <input type="number" formControlName="employee_price" (input)="computeMargin()" placeholder="100" />
              </div>

              <div class="form-group full-width margin-calc-box">
                <label>هامش أرباح الشركة التلقائي (Company Margin Auto-Calculated):</label>
                <div class="calculated-margin-val">+{{ computedMarginVal }} EGP</div>
                <small class="text-muted">يتم حسابه آلياً بدقة: margin = client_price - employee_price دون إدخال يدوي</small>
              </div>

              <div class="form-group">
                <label>مرحلة العمل بالخط (Status Pipeline)</label>
                <select formControlName="status">
                  <option value="new">جديد (New)</option>
                  <option value="in_progress">قيد التنفيذ (In Progress)</option>
                  <option value="content_creator">صانع المحتوى (Content Creator)</option>
                  <option value="in_review">قيد المراجعة (In Review)</option>
                  <option value="client_feedback">ملاحظات العميل (Client Feedback)</option>
                  <option value="done">مكتمل (Done)</option>
                </select>
              </div>

              <div class="form-group">
                <label>الأولوية</label>
                <select formControlName="priority">
                  <option value="low">منخفضة</option>
                  <option value="medium">متوسطة</option>
                  <option value="high">عالية</option>
                  <option value="urgent">عاجلة جداً</option>
                </select>
              </div>

              <div class="form-group full-width">
                <label>نطاق التجهيز المطلوب (Agreed Scope)</label>
                <textarea formControlName="scope" rows="2" placeholder="المواصفات المطلوبة مسبقاً من العقد..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showCreateModal = false">إلغاء</button>
              <button type="submit" class="btn btn-primary" [disabled]="taskForm.invalid || loading">
                {{ loading ? 'جاري الحفظ...' : 'حفظ ونشر المهمة' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Task Detail Drawer / Modal -->
      <div class="crm-modal-backdrop" *ngIf="selectedTask">
        <div class="crm-modal-card glass-panel extra-wide-modal">
          <div class="modal-header">
            <div>
              <h3>{{ selectedTask.title }}</h3>
              <span class="badge" [ngClass]="selectedTask.status">{{ selectedTask.status }}</span>
            </div>
            <button class="close-btn" (click)="selectedTask = null"><i class="fa-solid fa-xmark"></i></button>
          </div>

          <div class="task-detail-grid">
            <div class="detail-main">
              <!-- Margin Banner -->
              <div class="pricing-banner glass-panel">
                <div class="banner-item">
                  <small>سعر العميل:</small>
                  <h4>{{ selectedTask.client_price }} EGP</h4>
                </div>
                <div class="banner-item">
                  <small>أجر الموظف:</small>
                  <h4>{{ selectedTask.employee_price }} EGP</h4>
                </div>
                <div class="banner-item margin-highlight">
                  <small>هامش الشركة التلقائي:</small>
                  <h4>+{{ (selectedTask.client_price - selectedTask.employee_price) }} EGP</h4>
                </div>
              </div>

              <!-- Attachments Upload & Inline Preview -->
              <div class="detail-section">
                <h4><i class="fa-solid fa-images text-orange"></i> المرفقات والصور Inline</h4>
                <div class="image-previews-container">
                  <div *ngFor="let att of selectedTask.attachments" class="img-preview-box">
                    <img *ngIf="att.is_image" [src]="att.file_url" class="inline-preview-img" (click)="expandImage(att.file_url, $event)" />
                    <div *ngIf="!att.is_image" class="file-doc-box">
                      <i class="fa-solid fa-file-lines"></i>
                      <span>{{ att.file_name || 'مستند' }}</span>
                    </div>
                  </div>
                </div>

                <div class="upload-box">
                  <input type="file" #fileInput (change)="onFileSelected($event)" style="display:none;" />
                  <button type="button" class="btn btn-glass" (click)="fileInput.click()">
                    <i class="fa-solid fa-upload"></i> رفع مرفق / صورة جديدة
                  </button>
                </div>
              </div>

              <!-- Comments / Notes Thread with Mentions -->
              <div class="detail-section">
                <h4><i class="fa-solid fa-comments text-orange"></i> التعليقات والإشارات (&#64;mentions)</h4>
                <div class="notes-thread">
                  <div class="note-item" *ngFor="let note of selectedTask.notes">
                    <div class="note-author font-bold">{{ note.user?.name || 'مستخدم' }}</div>
                    <div class="note-text">{{ note.note }}</div>
                    <small class="note-date">{{ note.created_at | date:'short' }}</small>
                  </div>
                </div>

                <div class="add-note-box">
                  <textarea [(ngModel)]="newNoteText" placeholder="اكتب تعليقاً... يمكنك كتابة &#64;اسم_الموظف لتنبيهه فورا" rows="2"></textarea>
                  <button class="btn btn-primary" (click)="submitNote()">إرسال التعليق</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Expanded Image Viewer -->
      <div class="lightbox-overlay" *ngIf="expandedImageUrl" (click)="expandedImageUrl = null">
        <img [src]="expandedImageUrl" class="lightbox-img" />
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .crm-module-container { padding: 28px 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }
    .module-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap; }
    .module-header h2 { font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }
    .kanban-pipeline { display: flex; gap: 14px; overflow-x: auto; padding-bottom: 14px; align-items: flex-start; -webkit-overflow-scrolling: touch; }
    .kanban-column { flex: 0 0 270px; min-width: 270px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); display: flex; flex-direction: column; max-height: calc(100vh - 180px); overflow: hidden; transition: border-color 0.2s; }
    .kanban-column:hover { border-color: var(--border-v); }
    .column-header { padding: 13px 16px; font-weight: 700; color: #fff; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid transparent; font-size: 0.84rem; background: rgba(0,0,0,0.18); }
    .column-header.new { border-color: var(--violet-light); }
    .column-header.in_progress { border-color: var(--amber-light); }
    .column-header.content_creator { border-color: var(--pink-light); }
    .column-header.in_review { border-color: var(--teal-light); }
    .column-header.client_feedback { border-color: var(--blue-light); }
    .column-header.done { border-color: var(--emerald-light); }
    .count-badge { background: rgba(255,255,255,0.08); border: 1px solid var(--border); padding: 2px 8px; border-radius: 100px; font-size: 0.7rem; font-weight: 700; color: var(--text-2); }
    .column-body { padding: 10px; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 9px; }
    .task-card { padding: 14px; border-radius: var(--r); cursor: pointer; background: rgba(255,255,255,0.025); border: 1px solid var(--border); transition: all 0.2s var(--ease); }
    .task-card:hover { background: rgba(124,58,237,0.07); border-color: var(--border-v); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.4); }
    .card-top { display: flex; gap: 5px; margin-bottom: 8px; flex-wrap: wrap; }
    .deal-tag { font-size: 0.68rem; padding: 2px 8px; border-radius: 100px; background: var(--violet-soft); color: var(--violet-light); border: 1px solid rgba(124,58,237,0.2); font-weight: 600; }
    .subcat-tag { font-size: 0.68rem; padding: 2px 8px; border-radius: 100px; background: var(--teal-soft); color: var(--teal-light); border: 1px solid rgba(13,148,136,0.2); font-weight: 600; }
    .task-title { font-size: 0.88rem; color: #fff; margin-bottom: 6px; font-weight: 600; line-height: 1.35; }
    .task-desc { font-size: 0.8rem; color: var(--text-2); margin-bottom: 10px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .margin-row { background: var(--emerald-soft); border: 1px solid rgba(5,150,105,0.15); padding: 8px 10px; border-radius: 8px; margin-bottom: 10px; display: flex; flex-direction: column; gap: 3px; }
    .margin-badge { color: var(--emerald-light); font-weight: 700; font-size: 0.76rem; margin-top: 4px; padding-top: 4px; border-top: 1px solid rgba(5,150,105,0.15); text-align: right; }
    .attachments-preview-grid { display: flex; gap: 5px; margin-bottom: 10px; flex-wrap: wrap; }
    .inline-thumb { width: 42px; height: 42px; object-fit: cover; border-radius: 7px; border: 1px solid var(--border); cursor: pointer; transition: transform 0.2s; }
    .inline-thumb:hover { transform: scale(1.08); }
    .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 8px; margin-top: 4px; }
    .avatar-circle { width: 24px; height: 24px; border-radius: 50%; background: linear-gradient(135deg, var(--violet), var(--teal)); color: #fff; font-size: 0.65rem; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; margin-right: -4px; border: 2px solid var(--bg); }
    .empty-column { text-align: center; color: var(--text-3); font-size: 0.82rem; padding: 24px 12px; }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 20px; }
    .crm-modal-card { width: 100%; max-width: 520px; background: #10101e; border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: 0 24px 80px rgba(0,0,0,0.7); animation: modalIn 0.22s var(--ease); max-height: 90vh; overflow-y: auto; }
    .wide-modal { max-width: 680px; }
    .extra-wide-modal { max-width: 860px; }
    @keyframes modalIn { from { opacity:0; transform: translateY(16px) scale(0.97); } to { opacity:1; transform:none; } }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid var(--border); }
    .modal-header h3 { font-size: 1.05rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 9px; }
    .close-btn { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); font-size: 0.9rem; cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
    .close-btn:hover { background: var(--rose-soft); color: var(--rose-light); border-color: rgba(225,29,72,0.2); }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding: 20px 24px; }
    .full-width { grid-column: span 2; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: var(--text); outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--violet); background: rgba(124,58,237,0.06); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .form-group select option { background: #12121e; color: var(--text); }
    .modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 16px 24px; border-top: 1px solid var(--border); }
    .lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 1500; display: flex; align-items: center; justify-content: center; cursor: pointer; }
    .lightbox-img { max-width: 90vw; max-height: 90vh; border-radius: 12px; box-shadow: 0 0 60px rgba(0,0,0,0.8); }
    .required { color: var(--rose-light); }
    .subtask-indicator { font-size: 0.72rem; color: var(--text-2); display: flex; align-items: center; gap: 4px; }
  `]
})
export class TasksBoardComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  tasks: any[] = [];
  deals: any[] = [];
  departments: any[] = [];

  columns = [
    { key: 'new', title: 'New' },
    { key: 'in_progress', title: 'In Progress' },
    { key: 'content_creator', title: 'Content Creation' },
    { key: 'in_review', title: 'In Review' },
    { key: 'client_feedback', title: 'Client Feedback' },
    { key: 'done', title: 'Completed' }
  ];

  showCreateModal = false;
  selectedTask: any = null;
  expandedImageUrl: string | null = null;
  newNoteText = '';
  computedMarginVal = 0;
  loading = false;

  taskForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  initForm(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      deal_id: [null],
      department_id: [null],
      client_price: [0],
      employee_price: [0],
      status: ['new', Validators.required],
      priority: ['medium', Validators.required],
      scope: ['']
    });
  }

  loadData(): void {
    this.apiService.getTasks({ parents_only: 'true' }).subscribe(res => this.tasks = res || []);
    this.apiService.getDeals().subscribe(res => this.deals = res || []);
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
  }

  getTasksForColumn(colKey: string) {
    return this.tasks.filter(t => t.status === colKey);
  }

  computeMargin(): void {
    const cp = Number(this.taskForm.value.client_price || 0);
    const ep = Number(this.taskForm.value.employee_price || 0);
    this.computedMarginVal = Math.max(0, cp - ep);
  }

  openCreateModal(): void {
    this.taskForm.reset({ status: 'new', priority: 'medium', client_price: 0, employee_price: 0 });
    this.computedMarginVal = 0;
    this.showCreateModal = true;
  }

  saveTask(): void {
    if (this.taskForm.invalid) return;
    this.loading = true;

    this.apiService.createTask(this.taskForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showCreateModal = false;
        this.loadData();
      },
      error: () => this.loading = false
    });
  }

  openTaskDetails(task: any): void {
    this.selectedTask = task;
  }

  getImageAttachments(task: any) {
    if (!task.attachments) return [];
    return task.attachments.filter((a: any) => a.is_image || a.file_type === 'image');
  }

  expandImage(url: string, event: Event): void {
    event.stopPropagation();
    this.expandedImageUrl = url;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && this.selectedTask) {
      const formData = new FormData();
      formData.append('file', file);
      this.apiService.addTaskAttachment(this.selectedTask.id, formData).subscribe(res => {
        if (res.data) {
          if (!this.selectedTask.attachments) this.selectedTask.attachments = [];
          this.selectedTask.attachments.push(res.data);
        }
      });
    }
  }

  submitNote(): void {
    if (!this.newNoteText.trim() || !this.selectedTask) return;
    this.apiService.addTaskNote(this.selectedTask.id, this.newNoteText).subscribe(res => {
      if (res.data) {
        if (!this.selectedTask.notes) this.selectedTask.notes = [];
        this.selectedTask.notes.push(res.data);
        this.newNoteText = '';
      }
    });
  }
}
