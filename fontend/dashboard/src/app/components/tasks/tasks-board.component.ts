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
          <h2><i class="fa-solid fa-tasks text-orange"></i> لوحة المهام المتقدمة (Task Board & Pipeline)</h2>
          <p class="subtitle">توزيع المهام، حساب الهامش الربحي تلقائياً، المرفقات والصور Inline، وتنبيهات الإشارة &#64;mentions</p>
        </div>
        <button class="btn btn-primary" (click)="openCreateModal()">
          <i class="fa-solid fa-plus"></i> إضافة مهمة جديدة
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
    .crm-module-container { padding: 24px; }
    .module-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .subtitle { color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; }
    .kanban-pipeline { display: grid; grid-template-columns: repeat(6, minmax(260px, 1fr)); gap: 16px; overflow-x: auto; padding-bottom: 16px; }
    .kanban-column { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; display: flex; flex-direction: column; max-height: 80vh; }
    .column-header { padding: 14px; font-weight: 700; color: #fff; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--orange); }
    .column-header.new { border-color: #3b82f6; }
    .column-header.in_progress { border-color: #f59e0b; }
    .column-header.content_creator { border-color: #a855f7; }
    .column-header.in_review { border-color: #06b6d4; }
    .column-header.client_feedback { border-color: #ec4899; }
    .column-header.done { border-color: #10b981; }
    .count-badge { background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; }
    .column-body { padding: 12px; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 12px; }
    .task-card { padding: 14px; border-radius: 12px; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
    .task-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,0.5); }
    .card-top { display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap; }
    .deal-tag, .subcat-tag { font-size: 0.72rem; padding: 2px 8px; border-radius: 10px; background: rgba(255,255,255,0.08); color: var(--orange-light); }
    .task-title { font-size: 0.95rem; color: #fff; margin-bottom: 6px; }
    .task-desc { font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 10px; line-height: 1.4; }
    .margin-row { background: rgba(0,0,0,0.3); padding: 8px; border-radius: 8px; margin-bottom: 10px; font-size: 0.78rem; }
    .margin-badge { color: #10b981; font-weight: bold; margin-top: 4px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 4px; }
    .attachments-preview-grid { display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap; }
    .inline-thumb { width: 44px; height: 44px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; }
    .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; }
    .avatar-circle { width: 24px; height: 24px; border-radius: 50%; background: var(--orange); color: #fff; font-size: 0.7rem; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; }
    .empty-column { text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 20px 0; }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1200; }
    .crm-modal-card { width: 100%; max-width: 520px; padding: 24px; background: #12121e; border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; }
    .wide-modal { max-width: 680px; }
    .extra-wide-modal { max-width: 840px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .full-width { grid-column: span 2; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .close-btn { background: transparent; border: none; color: #a0a0ab; font-size: 1.2rem; cursor: pointer; }
    .margin-calc-box { background: rgba(16, 185, 129, 0.1); border: 1px dashed #10b981; padding: 12px; border-radius: 12px; text-align: center; }
    .calculated-margin-val { font-size: 1.5rem; font-weight: 800; color: #10b981; }
    .pricing-banner { display: flex; justify-content: space-around; padding: 16px; border-radius: 12px; margin-bottom: 20px; }
    .margin-highlight h4 { color: #10b981; }
    .image-previews-container { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 12px; }
    .inline-preview-img { width: 90px; height: 90px; object-fit: cover; border-radius: 12px; border: 2px solid var(--orange); cursor: pointer; }
    .notes-thread { max-height: 200px; overflow-y: auto; margin-bottom: 12px; display: flex; flex-direction: column; gap: 8px; }
    .note-item { background: rgba(255,255,255,0.04); padding: 10px; border-radius: 8px; }
    .add-note-box textarea { width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; margin-bottom: 8px; }
    .lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 1500; display: flex; align-items: center; justify-content: center; cursor: pointer; }
    .lightbox-img { max-width: 90vw; max-height: 90vh; border-radius: 12px; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; }
    .form-group label { display: block; margin-bottom: 6px; font-size: 0.85rem; color: #fff; }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; outline: none; }
  `]
})
export class TasksBoardComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  tasks: any[] = [];
  deals: any[] = [];
  departments: any[] = [];

  columns = [
    { key: 'new', title: 'جديد (New)' },
    { key: 'in_progress', title: 'قيد التنفيذ' },
    { key: 'content_creator', title: 'صانع المحتوى' },
    { key: 'in_review', title: 'قيد المراجعة' },
    { key: 'client_feedback', title: 'ملاحظات العميل' },
    { key: 'done', title: 'مكتمل (Done)' }
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
