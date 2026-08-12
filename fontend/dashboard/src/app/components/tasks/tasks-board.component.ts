import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-tasks-board',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimePickerSelectComponent,
    DialogModule,
    InputTextModule,
    TextareaModule,
    DropdownModule
  ],
  template: `
    <div class="tb-shell">

      <!-- ── PAGE HEADER ────────────────────────────────────────── -->
      <div class="tb-header">
        <div class="tb-header-left">
          <div class="tb-icon-badge"><i class="fa-solid fa-list-check"></i></div>
          <div>
            <h2>لوحة المهام والتنفيذ</h2>
            <p>سحب وإسقاط البطاقات بين الأعمدة لتحديث الحالة فوراً</p>
          </div>
        </div>
        <div class="tb-header-right">
          <div class="tb-stats">
            <span class="stat-pill">
              <i class="fa-solid fa-circle-dot" style="color:var(--violet-light)"></i>
              {{ tasks.length }} الإجمالي
            </span>
            <span class="stat-pill emerald">
              <i class="fa-solid fa-check-circle"></i>
              {{ getTasksForColumn('done').length }} مكتمل
            </span>
          </div>
          <button class="btn-new-task" (click)="openCreateModal()">
            <i class="fa-solid fa-plus"></i> مهمة جديدة
          </button>
        </div>
      </div>

      <!-- ── KANBAN BOARD ───────────────────────────────────────── -->
      <div class="kanban-board">
        <div
          class="kanban-col"
          *ngFor="let col of columns"
          [attr.data-col]="col.key"
          (dragover)="onDragOver($event, col.key)"
          (dragleave)="onDragLeave($event)"
          (drop)="onDrop($event, col.key)"
          [class.drag-over]="dragOverCol === col.key"
        >
          <!-- Column Header -->
          <div class="col-hd" [style.--col-accent]="col.color">
            <div class="col-hd-left">
              <span class="col-dot" [style.background]="col.color"></span>
              <span class="col-title">{{ col.title }}</span>
            </div>
            <span class="col-count" [style.color]="col.color">
              {{ getTasksForColumn(col.key).length }}
            </span>
          </div>

          <!-- Cards -->
          <div class="col-body">
            <div
              class="tk-card"
              *ngFor="let task of getTasksForColumn(col.key)"
              draggable="true"
              (dragstart)="onDragStart($event, task)"
              (dragend)="onDragEnd()"
              (click)="openTaskDetail(task)"
              [class.dragging]="draggingTask?.id === task.id"
            >
              <!-- Priority ribbon -->
              <div class="priority-ribbon" [class]="'p-' + (task.priority || 'medium')"></div>

              <!-- Top tags -->
              <div class="tk-tags" *ngIf="task.deal || task.sub_category">
                <span class="tag tag-deal" *ngIf="task.deal">
                  <i class="fa-solid fa-handshake"></i> {{ task.deal.title | slice:0:18 }}{{ task.deal.title?.length > 18 ? '...' : '' }}
                </span>
                <span class="tag tag-cat" *ngIf="task.sub_category">
                  {{ task.sub_category.name_ar }}
                </span>
              </div>

              <!-- Title -->
              <div class="tk-title">{{ task.title }}</div>

              <!-- Scope preview -->
              <div class="tk-scope" *ngIf="task.scope">{{ task.scope }}</div>

              <!-- Margin chip -->
              <div class="tk-margin" *ngIf="task.client_price > 0">
                <span class="m-item"><i class="fa-solid fa-arrow-up-right-dots"></i> {{ task.client_price | number:'1.0-0' }} EGP</span>
                <span class="m-sep">→</span>
                <span class="m-profit">+{{ (task.client_price - task.employee_price) | number:'1.0-0' }} margin</span>
              </div>

              <!-- Thumbnails -->
              <div class="tk-thumbs" *ngIf="getImageAttachments(task).length > 0">
                <img
                  *ngFor="let img of getImageAttachments(task).slice(0,3)"
                  [src]="getFileUrl(img)"
                  class="thumb"
                  (click)="expandImage(getFileUrl(img), $event)"
                  (error)="handleImageError($event)"
                  alt="مرفق"
                />
                <span class="thumb-more" *ngIf="getImageAttachments(task).length > 3">
                  +{{ getImageAttachments(task).length - 3 }}
                </span>
              </div>

              <!-- Footer -->
              <div class="tk-foot">
                <div class="tk-avatars">
                  <div
                    *ngFor="let u of (task.users || []).slice(0,4)"
                    class="av-sm"
                    [title]="u.name"
                  >{{ u.name?.charAt(0) }}</div>
                  <div class="av-sm av-more" *ngIf="(task.users || []).length > 4">
                    +{{ (task.users || []).length - 4 }}
                  </div>
                </div>
                <div class="tk-foot-right">
                  <span class="tk-attach" *ngIf="(task.attachments || []).length > 0">
                    <i class="fa-solid fa-paperclip"></i> {{ (task.attachments || []).length }}
                  </span>
                  <span class="priority-badge" [class]="'pb-' + (task.priority || 'medium')">
                    {{ task.priority || 'medium' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Empty column drop zone -->
            <div class="col-empty" *ngIf="getTasksForColumn(col.key).length === 0">
              <i class="fa-regular fa-circle-dot"></i>
              <span>Drop here</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── TASK DETAIL SIDE DRAWER ────────────────────────────── -->
      <div class="drawer-backdrop" *ngIf="selectedTask" (click)="closeDetail($event)">
        <div class="detail-drawer" (click)="$event.stopPropagation()">

          <!-- Drawer Header -->
          <div class="drawer-hd">
            <div class="drawer-hd-left">
              <div class="drawer-task-av">
                <i class="fa-solid fa-list-check"></i>
              </div>
              <div class="drawer-hd-text">
                <h3 class="drawer-title">{{ selectedTask.title }}</h3>
                <div class="drawer-meta">
                  <span class="priority-badge" [class]="'pb-' + (selectedTask.priority || 'medium')">
                    <i class="fa-solid fa-bolt"></i> {{ selectedTask.priority | uppercase }}
                  </span>
                  <span class="deal-tag" *ngIf="selectedTask.deal">
                    <i class="fa-solid fa-handshake"></i> {{ selectedTask.deal.title }}
                  </span>
                </div>
              </div>
            </div>
            <button class="close-btn" (click)="selectedTask = null" title="إغلاق">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Pipeline Progress Switcher -->
          <div class="pipeline-switcher">
            <div class="ps-label"><i class="fa-solid fa-bars-progress"></i> مرحلة التنفيذ (الحالة):</div>
            <div class="ps-grid">
              <button
                *ngFor="let col of columns"
                class="ps-step"
                [class.active]="selectedTask.status === col.key"
                (click)="updateTaskStatus(selectedTask, col.key)"
              >
                <span class="ps-dot" [style.background]="col.color"></span>
                <span class="ps-name">{{ col.title }}</span>
                <i class="fa-solid fa-check ps-check" *ngIf="selectedTask.status === col.key"></i>
              </button>
            </div>
          </div>

          <!-- Drawer Body -->
          <div class="drawer-body">

            <!-- Pricing Margin Hero Card -->
            <div class="pricing-hero-card" *ngIf="selectedTask.client_price > 0">
              <div class="ph-stat">
                <span class="ph-lbl"><i class="fa-solid fa-user-tie"></i> سعر العميل</span>
                <strong class="ph-val teal">{{ selectedTask.client_price | number:'1.2-2' }} <small>EGP</small></strong>
              </div>
              <div class="ph-divider"></div>
              <div class="ph-stat">
                <span class="ph-lbl"><i class="fa-solid fa-laptop-code"></i> تكلفة الموظف</span>
                <strong class="ph-val amber">{{ selectedTask.employee_price | number:'1.2-2' }} <small>EGP</small></strong>
              </div>
              <div class="ph-divider"></div>
              <div class="ph-stat ph-margin">
                <span class="ph-lbl"><i class="fa-solid fa-chart-line"></i> صافي الربح</span>
                <strong class="ph-val emerald">+{{ (selectedTask.client_price - selectedTask.employee_price) | number:'1.2-2' }} <small>EGP</small></strong>
              </div>
            </div>

            <!-- Scope / Description Card -->
            <div class="drawer-card" *ngIf="selectedTask.scope">
              <div class="dc-head"><i class="fa-solid fa-file-lines"></i> وصف ومواصفات المهمة</div>
              <div class="dc-body scope-text">{{ selectedTask.scope }}</div>
            </div>

            <!-- Team Assignment Section -->
            <div class="drawer-card">
              <div class="dc-head"><i class="fa-solid fa-user-plus"></i> الفريق المكلف بالمهمة</div>
              <div class="team-assign-container">
                <div class="team-chips-grid">
                  <div class="team-chip-card" *ngFor="let u of (selectedTask.users || [])">
                    <div class="tc-av">{{ u.name?.charAt(0) }}</div>
                    <div class="tc-info">
                      <span class="tc-name">{{ u.name }}</span>
                      <small class="tc-role">{{ u.email || 'عضو الفريق' }}</small>
                    </div>
                    <button class="tc-remove-btn" (click)="removeUserFromTask(u.id)" title="إزالة من المهمة">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div class="notes-empty" *ngIf="!(selectedTask.users || []).length" style="padding:4px 0;">
                    لا يوجد أعضاء مكلفين حالياً
                  </div>
                </div>

                <!-- Add Team Member Dropdown -->
                <div class="assign-user-picker">
                  <select class="user-select-input" #userSelect (change)="assignUserFromSelect(userSelect)">
                    <option value="" disabled selected>+ إضافة عضو جديد من أي فريق...</option>
                    <option *ngFor="let u of allUsers" [value]="u.id">{{ u.name }} ({{ u.email || 'فريق العمل' }})</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Attachments -->
            <div class="drawer-card">
              <div class="dc-head"><i class="fa-solid fa-paperclip"></i> المرفقات والملفات</div>
              <div class="att-grid" *ngIf="(selectedTask.attachments || []).length > 0">
                <div *ngFor="let att of selectedTask.attachments" class="att-item">
                  <div class="att-img-wrap" *ngIf="isImage(att)">
                    <img
                      [src]="getFileUrl(att)"
                      class="att-img"
                      (click)="expandImage(getFileUrl(att), $event)"
                      (error)="handleImageError($event)"
                      alt="مرفق"
                    />
                    <button class="att-del-btn" (click)="deleteAttachment(selectedTask, att, $event)" title="حذف المرفق">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                  <div *ngIf="!isImage(att)" class="att-doc" style="position:relative;">
                    <i class="fa-solid fa-file-pdf"></i>
                    <span>{{ att.file_name || att.name || 'مستند' }}</span>
                    <button class="att-del-btn" (click)="deleteAttachment(selectedTask, att, $event)" title="حذف المرفق">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="upload-zone-modern" (click)="fileInput.click()">
                <input type="file" #fileInput (change)="onFileSelected($event)" style="display:none" />
                <div class="uz-icon"><i class="fa-solid fa-cloud-arrow-up"></i></div>
                <div class="uz-text">
                  <strong>اضغط لرفع ملف أو سحب وإسقاط المستند هنا</strong>
                  <small>يدعم الصور والملفات المرفقة (PNG, JPG, PDF)</small>
                </div>
              </div>
            </div>

            <!-- Comments & Discussion -->
            <div class="drawer-card">
              <div class="dc-head"><i class="fa-solid fa-comments"></i> التعليقات والملاحظات</div>
              <div class="notes-timeline">
                <div class="note-bubble" *ngFor="let note of (selectedTask.notes || [])">
                  <div class="note-av">{{ note.user?.name?.charAt(0) || 'U' }}</div>
                  <div class="note-content">
                    <div class="note-meta">
                      <strong class="note-author">{{ note.user?.name || 'مستخدم' }}</strong>
                      <span class="note-time">{{ note.created_at | date:'short' }}</span>
                    </div>
                    <div class="note-text">{{ note.note }}</div>
                  </div>
                </div>
                <div class="notes-empty" *ngIf="!(selectedTask.notes || []).length">
                  <i class="fa-regular fa-comments"></i> لا توجد تعليقات بعد... كن أول من يضيف تعليقاً!
                </div>
              </div>
              <div class="add-note-box">
                <textarea
                  [(ngModel)]="newNoteText"
                  placeholder="اكتب تعليقاً أو ملاحظة..."
                  rows="2"
                  dir="rtl"
                ></textarea>
                <button class="btn-send-note-modern" (click)="submitNote()" [disabled]="!newNoteText.trim()">
                  <i class="fa-solid fa-paper-plane"></i> إرسال التعليق
                </button>
              </div>
            </div>

            <!-- Activity History Timeline -->
            <div class="drawer-card">
              <div class="dc-head"><i class="fa-solid fa-clock-rotate-left"></i> سجل النشاط والتغييرات (Task History)</div>
              <div class="activity-timeline">
                <div class="act-bubble" *ngFor="let act of taskActivities">
                  <div class="act-icon"><i class="fa-solid fa-circle-dot"></i></div>
                  <div class="act-body">
                    <div class="act-desc">{{ act.description }}</div>
                    <div class="act-meta">
                      <span class="act-user"><i class="fa-solid fa-user-gear"></i> {{ act.user_name || 'النظام' }}</span>
                      <span class="act-time"><i class="fa-solid fa-clock"></i> {{ act.created_at | date:'medium' }}</span>
                    </div>
                  </div>
                </div>
                <div class="notes-empty" *ngIf="taskActivities.length === 0">
                  <i class="fa-solid fa-history"></i> لا توجد سجلات تغييرات حتى الآن
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- ── CREATE TASK MODAL (PrimeNG Dialog) ─────────────────── -->
      <p-dialog [(visible)]="showCreateModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="مهمة جديدة" [style]="{ width: '640px' }">
        <form [formGroup]="taskForm" (ngSubmit)="saveTask()">
          <div class="modal-body">
            <div class="form-grid">

              <div class="fg full">
                <label>عنوان المهمة <span class="req">*</span></label>
                <input type="text" pInputText formControlName="title" placeholder="مثال: تصميم 10 فيديو ريلز للحملة..." />
              </div>

              <div class="fg">
                <label>الصفقة المرتبطة</label>
                <app-prime-picker-select
                  formControlName="deal_id"
                  [items]="deals"
                  optionLabel="title"
                  optionValue="id"
                  placeholder="اختر الصفقة..."
                ></app-prime-picker-select>
              </div>

              <div class="fg">
                <label>القسم</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="اختر القسم..."
                ></app-prime-picker-select>
              </div>

              <div class="fg">
                <label>سعر العميل (ج.م)</label>
                <input type="number" pInputText formControlName="client_price" (input)="computeMargin()" placeholder="0" />
              </div>

              <div class="fg">
                <label>تكلفة الموظف (ج.م)</label>
                <input type="number" pInputText formControlName="employee_price" (input)="computeMargin()" placeholder="0" />
              </div>

              <div class="fg full margin-preview" *ngIf="computedMarginVal > 0">
                <i class="fa-solid fa-chart-line"></i>
                هامش أرباح الشركة: <strong>+{{ computedMarginVal | number:'1.2-2' }} ج.م</strong>
              </div>

              <div class="fg">
                <label>الحالة</label>
                <p-dropdown
                  formControlName="status"
                  [appendTo]="'body'"
                  [options]="columns"
                  optionLabel="title"
                  optionValue="key"
                  placeholder="اختر الحالة..."
                ></p-dropdown>
              </div>

              <div class="fg">
                <label>الأولوية</label>
                <p-dropdown
                  formControlName="priority"
                  [appendTo]="'body'"
                  [options]="[
                    { label: 'منخفضة', value: 'low' },
                    { label: 'متوسطة', value: 'medium' },
                    { label: 'عالية', value: 'high' },
                    { label: 'عاجلة جداً', value: 'urgent' }
                  ]"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="اختر الأولوية..."
                ></p-dropdown>
              </div>

              <div class="fg full">
                <label>الوصف والمواصفات (Scope)</label>
                <textarea pTextarea formControlName="scope" rows="3" placeholder="اكتب تفاصيل ومطلوبات المهمة..."></textarea>
              </div>

            </div>
          </div>

          <ng-template pTemplate="footer">
            <button type="button" class="btn-cancel" (click)="showCreateModal = false">إلغاء</button>
            <button type="submit" class="btn-save" [disabled]="taskForm.invalid || loading">
              <i class="fa-solid fa-floppy-disk"></i>
              {{ loading ? 'جاري الحفظ...' : 'إنشاء المهمة' }}
            </button>
          </ng-template>
        </form>
      </p-dialog>

      <!-- ── LIGHTBOX ────────────────────────────────────────────── -->
      <div class="lightbox" *ngIf="expandedImageUrl" (click)="expandedImageUrl = null">
        <img [src]="expandedImageUrl" />
        <button class="lb-close"><i class="fa-solid fa-xmark"></i></button>
      </div>

    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }

    /* ── SHELL ──────────────────────────────────────────────────── */
    .tb-shell {
      padding: 0;
      height: calc(100vh - var(--nav-h) - 64px);
      display: flex;
      flex-direction: column;
      background: var(--bg);
      background-image: var(--bg-gradient);
      background-attachment: fixed;
      overflow: hidden;
    }

    /* ── HEADER ─────────────────────────────────────────────────── */
    .tb-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 20px; gap: 16px; flex-wrap: wrap; flex-shrink: 0;
    }
    .tb-header-left { display: flex; align-items: center; gap: 14px; }
    .tb-icon-badge {
      width: 46px; height: 46px; border-radius: 13px;
      background: linear-gradient(135deg, var(--violet), var(--teal));
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; color: #fff;
      box-shadow: 0 0 24px var(--violet-glow);
      flex-shrink: 0;
    }
    .tb-header-left h2 {
      font-size: 1.3rem; font-weight: 800; color: #fff;
      letter-spacing: -0.3px; margin: 0;
    }
    .tb-header-left p { color: var(--text-2); font-size: 0.8rem; margin: 0; }
    .tb-header-right { display: flex; align-items: center; gap: 12px; }
    .tb-stats { display: flex; gap: 8px; }
    .stat-pill {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px; border-radius: 100px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      font-size: 0.76rem; font-weight: 600; color: var(--text-2);
    }
    .stat-pill.emerald { color: var(--emerald-light); border-color: rgba(16,185,129,0.2); }
    .btn-new-task {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 20px; border-radius: 12px; border: none;
      background: linear-gradient(135deg, var(--violet), var(--violet-2));
      color: #fff; font-weight: 700; font-size: 0.86rem;
      cursor: pointer; transition: all 0.25s;
      box-shadow: 0 4px 20px var(--violet-glow);
      font-family: inherit;
    }
    .btn-new-task:hover { box-shadow: 0 8px 28px var(--violet-glow); }

    /* ── KANBAN BOARD ───────────────────────────────────────────── */
    .kanban-board {
      display: flex; gap: 14px;
      overflow-x: auto;
      overflow-y: hidden;
      flex: 1;
      min-height: 0;
      align-items: stretch;
      padding-bottom: 4px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE/Edge */
    }
    .kanban-board::-webkit-scrollbar { display: none; } /* Hide bottom scrollbar */

    /* ── COLUMN ─────────────────────────────────────────────────── */
    /* ── COLUMN ─────────────────────────────────────────────────── */
    .kanban-col {
      flex: 0 0 280px; min-width: 280px;
      background: linear-gradient(90deg, rgba(9, 9, 24, 0.85) 0%, rgba(9, 9, 24, 0.4) 60%, rgba(9, 9, 24, 0.7) 100%);
      border: 1px solid var(--border-v);
      border-radius: 18px;
      display: flex; flex-direction: column;
      height: 100%;
      max-height: 100%;
      overflow: hidden;
      transition: border-color 0.2s, box-shadow 0.2s;
      backdrop-filter: blur(12px);
    }
    .kanban-col.drag-over {
      border-color: rgba(99,102,241,0.6);
      box-shadow: 0 0 0 2px rgba(99,102,241,0.25), 0 8px 32px rgba(99,102,241,0.15);
    }

    /* Column Header */
    .col-hd {
      padding: 14px 16px;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid var(--border);
      background: rgba(99, 102, 241, 0.08);
      border-radius: 18px 18px 0 0;
      border-top: 3px solid var(--col-accent, var(--violet));
    }
    .col-hd-left { display: flex; align-items: center; gap: 9px; }
    .col-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 8px currentColor; }
    .col-title { font-size: 0.82rem; font-weight: 700; color: var(--text); }
    .col-count {
      font-size: 0.72rem; font-weight: 800;
      padding: 3px 9px; border-radius: 100px;
      background: var(--violet-soft);
      border: 1px solid var(--border-v);
      color: var(--violet-light);
    }

    /* Column Body */
    .col-body {
      padding: 10px; overflow-y: auto; flex: 1;
      display: flex; flex-direction: column; gap: 8px;
    }
    .col-body::-webkit-scrollbar { width: 3px; }
    .col-body::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.25); border-radius: 4px; }

    .col-empty {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 6px; padding: 28px 12px;
      color: var(--text-2); font-size: 0.78rem;
      border: 2px dashed var(--border-v);
      border-radius: 12px; min-height: 80px;
      background: rgba(99, 102, 241, 0.03);
    }
    .col-empty i { font-size: 1.2rem; color: var(--violet-light); opacity: 0.85; }

    /* ── TASK CARD ──────────────────────────────────────────────── */
    .tk-card {
      background: linear-gradient(90deg, rgba(15, 15, 35, 0.9) 0%, rgba(12, 12, 28, 0.6) 60%, rgba(15, 15, 35, 0.8) 100%);
      border: 1px solid var(--border);
      border-radius: 14px; padding: 12px 13px;
      cursor: grab; transition: border-color 0.2s, box-shadow 0.2s;
      position: relative; overflow: hidden;
      user-select: none;
    }
    .tk-card:hover {
      background: linear-gradient(90deg, rgba(20, 20, 45, 0.95) 0%, rgba(15, 15, 35, 0.75) 60%, rgba(20, 20, 45, 0.88) 100%);
      border-color: var(--border-v);
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }
    .tk-card:active { cursor: grabbing; }
    .tk-card.dragging {
      opacity: 0.4; transform: scale(0.97);
    }

    /* Priority ribbon */
    .priority-ribbon {
      position: absolute; top: 0; left: 0; right: 0;
      height: 2px; border-radius: 14px 14px 0 0;
    }
    .priority-ribbon.p-low    { background: var(--emerald); }
    .priority-ribbon.p-medium { background: var(--amber); }
    .priority-ribbon.p-high   { background: var(--rose); }
    .priority-ribbon.p-urgent { background: linear-gradient(90deg, var(--rose), #ff0050); }

    /* Tags */
    .tk-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 8px; margin-top: 6px; }
    .tag {
      font-size: 0.65rem; padding: 2px 7px; border-radius: 100px;
      font-weight: 600; display: inline-flex; align-items: center; gap: 4px;
    }
    .tag-deal { background: var(--violet-soft); color: var(--violet-light); border: 1px solid rgba(99,102,241,0.2); }
    .tag-cat  { background: var(--teal-soft);   color: var(--teal-light);   border: 1px solid rgba(6,182,212,0.2); }

    /* Card content */
    .tk-title {
      font-size: 0.85rem; font-weight: 700; color: var(--text);
      line-height: 1.3; margin-bottom: 5px;
    }
    .tk-scope {
      font-size: 0.76rem; color: var(--text-2); line-height: 1.4;
      margin-bottom: 8px;
      display: -webkit-box; -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
    }

    /* Light Mode Overrides for Kanban Board */
    body.light-theme .kanban-col,
    :host-context(body.light-theme) .kanban-col {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      box-shadow: 0 4px 20px -2px rgba(99, 102, 241, 0.08) !important;
    }
    body.light-theme .col-hd,
    :host-context(body.light-theme) .col-hd {
      background: rgba(99, 102, 241, 0.05) !important;
      border-bottom-color: rgba(99, 102, 241, 0.12) !important;
    }
    body.light-theme .col-title,
    :host-context(body.light-theme) .col-title {
      color: #0f172a !important;
    }
    body.light-theme .col-count,
    :host-context(body.light-theme) .col-count {
      color: #4f46e5 !important;
      background: rgba(99, 102, 241, 0.1) !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
    }
    body.light-theme .col-empty,
    :host-context(body.light-theme) .col-empty {
      background: rgba(248, 250, 252, 0.8) !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      color: #64748b !important;
    }
    body.light-theme .col-empty i,
    :host-context(body.light-theme) .col-empty i {
      color: #4f46e5 !important;
    }
    body.light-theme .tk-card,
    :host-context(body.light-theme) .tk-card {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.18) !important;
      box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04) !important;
    }
    body.light-theme .tk-card:hover,
    :host-context(body.light-theme) .tk-card:hover {
      background: #f8fafc !important;
      border-color: rgba(99, 102, 241, 0.35) !important;
    }
    body.light-theme .tk-title,
    :host-context(body.light-theme) .tk-title {
      color: #0f172a !important;
    }
    body.light-theme .tk-scope,
    :host-context(body.light-theme) .tk-scope {
      color: #475569 !important;
    }

    /* Margin chip */
    .tk-margin {
      display: inline-flex; align-items: center; gap: 5px;
      background: rgba(16,185,129,0.08);
      border: 1px solid rgba(16,185,129,0.15);
      padding: 3px 8px; border-radius: 100px;
      margin-bottom: 8px; font-size: 0.68rem;
    }
    .m-item { color: var(--teal-light); font-weight: 600; }
    .m-sep  { color: rgba(255,255,255,0.2); }
    .m-profit { color: var(--emerald-light); font-weight: 700; }

    /* Thumbnails */
    .tk-thumbs { display: flex; gap: 4px; margin-bottom: 8px; align-items: center; }
    .thumb {
      width: 38px; height: 38px; object-fit: cover;
      border-radius: 8px; border: 1px solid var(--border);
      cursor: pointer; transition: transform 0.2s;
    }
    .thumb:hover { transform: scale(1.1); }
    .thumb-more {
      width: 38px; height: 38px; border-radius: 8px;
      background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.68rem; font-weight: 700; color: var(--violet-light);
    }

    .drawer-backdrop {
      position: fixed; inset: 0; z-index: 1200;
      background: rgba(4, 5, 15, 0.75);
      backdrop-filter: blur(10px);
      display: flex; justify-content: flex-start;
      direction: rtl;
    }
    .detail-drawer {
      width: 520px; max-width: 95vw;
      height: 100vh;
      background: linear-gradient(165deg, rgba(15, 16, 38, 0.98) 0%, rgba(8, 9, 24, 0.99) 100%);
      border-left: 1px solid rgba(99, 102, 241, 0.25);
      display: flex; flex-direction: column;
      animation: drawerFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 25px 0 70px rgba(0, 0, 0, 0.7);
    }
    @keyframes drawerFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    /* Drawer Header */
    .drawer-hd {
      display: flex; align-items: flex-start; justify-content: space-between;
      padding: 22px 26px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.04) 100%);
      flex-shrink: 0;
    }
    .drawer-hd-left { display: flex; align-items: flex-start; gap: 14px; flex: 1; min-width: 0; }
    .drawer-task-av {
      width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
      background: linear-gradient(135deg, var(--violet), var(--teal));
      display: flex; align-items: center; justify-content: center;
      font-size: 1.15rem; color: #fff;
      box-shadow: 0 0 20px var(--violet-glow);
    }
    .drawer-hd-text { flex: 1; min-width: 0; }
    .drawer-title {
      font-size: 1.1rem; font-weight: 800; color: var(--text);
      line-height: 1.35; margin-bottom: 8px;
      word-break: break-word;
    }
    .drawer-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .deal-tag {
      font-size: 0.72rem; font-weight: 700;
      padding: 3px 10px; border-radius: 100px;
      background: var(--violet-soft); color: var(--violet-light);
      border: 1px solid rgba(99, 102, 241, 0.25);
    }

    /* Pipeline Progress Switcher */
    .pipeline-switcher {
      padding: 16px 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      background: rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
    }
    .ps-label {
      font-size: 0.74rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.8px; color: var(--text-2); margin-bottom: 10px;
      display: flex; align-items: center; gap: 6px;
    }
    .ps-grid {
      display: flex; gap: 6px; flex-wrap: wrap;
    }
    .ps-step {
      padding: 6px 12px; border-radius: 100px;
      border: 1px solid var(--border);
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-2); font-size: 0.75rem; font-weight: 700;
      cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
      transition: all 0.2s; font-family: inherit;
    }
    .ps-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .ps-check { font-size: 0.7rem; color: #fff; }
    .ps-step.active {
      background: var(--violet); border-color: var(--violet);
      color: #ffffff; box-shadow: 0 4px 16px var(--violet-glow);
    }
    .ps-step:not(.active):hover {
      background: rgba(255, 255, 255, 0.08); color: var(--text);
    }

    /* Drawer body */
    .drawer-body {
      flex: 1; overflow-y: auto; padding: 22px 26px;
      display: flex; flex-direction: column; gap: 18px;
    }
    .drawer-body::-webkit-scrollbar { width: 3px; }
    .drawer-body::-webkit-scrollbar-thumb { background: rgba(99, 102, 241, 0.3); border-radius: 4px; }

    /* Pricing Hero Card */
    .pricing-hero-card {
      display: grid; grid-template-columns: 1fr auto 1fr auto 1fr;
      align-items: center;
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 16px; padding: 16px 18px; gap: 10px;
    }
    .ph-stat { display: flex; flex-direction: column; gap: 4px; }
    .ph-lbl { font-size: 0.68rem; font-weight: 700; color: var(--text-2); display: flex; align-items: center; gap: 5px; }
    .ph-val { font-size: 1.05rem; font-weight: 900; }
    .ph-val small { font-size: 0.7rem; font-weight: 700; }
    .ph-divider { width: 1px; height: 28px; background: rgba(255, 255, 255, 0.1); }
    .ph-margin {
      background: rgba(16, 185, 129, 0.1);
      padding: 8px 12px; border-radius: 12px;
      border: 1px solid rgba(16, 185, 129, 0.25);
    }

    /* Drawer Card Section */
    .drawer-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      border-radius: 16px; padding: 18px;
      display: flex; flex-direction: column; gap: 12px;
    }
    .dc-head {
      font-size: 0.78rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.8px; color: var(--violet-light);
      display: flex; align-items: center; gap: 8px;
    }
    .dc-body { font-size: 0.88rem; color: var(--text); line-height: 1.6; }

    /* Team Chips & Assign */
    .team-chips-grid { display: flex; flex-wrap: wrap; gap: 10px; }
    .team-chip-card {
      display: flex; align-items: center; gap: 10px;
      background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2);
      padding: 6px 12px; border-radius: 12px;
    }
    .tc-av {
      width: 28px; height: 28px; border-radius: 50%;
      background: linear-gradient(135deg, var(--violet), var(--teal));
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem; font-weight: 800; color: #fff;
    }
    .tc-info { display: flex; flex-direction: column; }
    .tc-name { font-size: 0.82rem; font-weight: 700; color: var(--text); }
    .tc-role { font-size: 0.65rem; color: var(--text-2); }
    .tc-remove-btn {
      background: none; border: none; color: var(--text-2);
      cursor: pointer; font-size: 0.85rem; margin-right: 4px;
      padding: 2px 4px; transition: color 0.2s;
    }
    .tc-remove-btn:hover { color: #f43f5e; }
    .team-assign-container { display: flex; flex-direction: column; gap: 12px; }
    .assign-user-picker { width: 100%; }
    .user-select-input {
      width: 100%; padding: 10px 14px;
      background: var(--surface-1, rgba(255, 255, 255, 0.04));
      border: 1px solid var(--border); border-radius: 12px;
      color: var(--text); font-size: 0.82rem; outline: none;
      cursor: pointer; font-family: inherit;
    }
    body.light-theme .user-select-input {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      color: #0f172a !important;
    }

    /* Attachments Grid & Overlay Delete */
    .att-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 6px;
    }
    .att-item {
      width: 76px;
      height: 76px;
      flex-shrink: 0;
      border-radius: 14px;
      overflow: hidden;
      position: relative;
    }
    .att-img-wrap { position: relative; width: 76px; height: 76px; flex-shrink: 0; }
    .att-img {
      width: 76px;
      height: 76px;
      object-fit: cover;
      border-radius: 14px;
      border: 1px solid var(--border);
      cursor: pointer;
      transition: border-color 0.2s;
      background: rgba(99, 102, 241, 0.05);
    }
    .att-img:hover {
      border-color: var(--violet);
    }
    .att-del-btn {
      position: absolute; top: 4px; left: 4px;
      width: 22px; height: 22px; border-radius: 6px;
      background: rgba(225, 29, 72, 0.85); color: #fff;
      border: none; cursor: pointer; display: flex;
      align-items: center; justify-content: center;
      font-size: 0.65rem; transition: all 0.2s; z-index: 5;
    }
    .att-del-btn:hover { background: #e11d48; transform: scale(1.1); }
    .att-doc {
      width: 76px;
      height: 76px;
      border-radius: 14px;
      background: rgba(99, 102, 241, 0.06);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 6px;
      font-size: 0.65rem;
      color: var(--text-2);
      text-align: center;
      position: relative;
    }
    .att-doc i {
      font-size: 1.3rem;
      color: var(--violet-light);
    }

    /* Activity History Timeline */
    .activity-timeline { display: flex; flex-direction: column; gap: 10px; max-height: 240px; overflow-y: auto; }
    .act-bubble {
      display: flex; gap: 10px; align-items: flex-start;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border);
      border-radius: 12px; padding: 10px 14px;
    }
    body.light-theme .act-bubble {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.15) !important;
    }
    .act-icon { color: var(--violet-light); font-size: 0.8rem; margin-top: 2px; }
    .act-body { display: flex; flex-direction: column; gap: 4px; flex: 1; }
    .act-desc { font-size: 0.82rem; font-weight: 600; color: var(--text); line-height: 1.4; }
    body.light-theme .act-desc { color: #0f172a !important; }
    .act-meta { display: flex; justify-content: space-between; align-items: center; font-size: 0.68rem; color: var(--text-2); }
    .act-user { font-weight: 700; color: var(--violet-light); }

    /* Modern Upload Zone */
    .upload-zone-modern {
      display: flex; align-items: center; gap: 14px;
      padding: 16px; border-radius: 14px;
      border: 2px dashed rgba(99, 102, 241, 0.3);
      background: rgba(99, 102, 241, 0.03);
      cursor: pointer; transition: all 0.2s;
    }
    .upload-zone-modern:hover {
      border-color: var(--violet); background: rgba(99, 102, 241, 0.08);
    }
    .uz-icon {
      width: 42px; height: 42px; border-radius: 12px;
      background: var(--violet-soft); color: var(--violet-light);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem; flex-shrink: 0;
    }
    .uz-text { display: flex; flex-direction: column; gap: 2px; }
    .uz-text strong { font-size: 0.82rem; font-weight: 700; color: var(--text); }
    .uz-text small { font-size: 0.7rem; color: var(--text-2); }

    /* Notes & Activity Timeline */
    .notes-timeline { display: flex; flex-direction: column; gap: 14px; max-height: 260px; overflow-y: auto; }
    .note-bubble { display: flex; gap: 12px; align-items: flex-start; }
    .note-av {
      width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg, var(--violet-2), var(--teal-2));
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem; font-weight: 800; color: #fff;
    }
    .note-content {
      flex: 1; background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border); border-radius: 12px;
      padding: 10px 14px;
    }
    .note-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
    .note-author { font-size: 0.8rem; font-weight: 800; color: var(--violet-light); }
    .note-time { font-size: 0.65rem; color: var(--text-3); }
    .note-text { font-size: 0.84rem; color: var(--text); line-height: 1.5; }
    .notes-empty { font-size: 0.8rem; color: var(--text-2); text-align: center; padding: 18px; }

    .add-note-box { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
    .add-note-box textarea {
      width: 100%; padding: 12px 15px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border); border-radius: 12px;
      color: var(--text); font-family: inherit; font-size: 0.85rem;
      outline: none; resize: none; transition: all 0.2s;
    }
    .add-note-box textarea:focus { border-color: var(--violet); background: rgba(99, 102, 241, 0.06); box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12); }
    .btn-send-note-modern {
      align-self: flex-end; display: inline-flex; align-items: center; gap: 8px;
      padding: 9px 20px; border-radius: 12px; border: none;
      background: linear-gradient(135deg, var(--violet), var(--violet-2));
      color: #fff; font-weight: 700; font-size: 0.82rem; cursor: pointer;
      box-shadow: 0 4px 16px var(--violet-glow); transition: all 0.2s;
    }

    /* ── LIGHT THEME OVERRIDES FOR DETAIL DRAWER ─────────────────────── */
    body.light-theme .detail-drawer,
    :host-context(body.light-theme) .detail-drawer {
      background: #ffffff !important;
      border-left-color: rgba(99, 102, 241, 0.2) !important;
      box-shadow: 25px 0 70px rgba(15, 23, 42, 0.18) !important;
    }
    body.light-theme .drawer-hd,
    :host-context(body.light-theme) .drawer-hd {
      background: rgba(99, 102, 241, 0.05) !important;
      border-bottom-color: rgba(99, 102, 241, 0.12) !important;
    }
    body.light-theme .drawer-title,
    :host-context(body.light-theme) .drawer-title {
      color: #0f172a !important;
    }
    body.light-theme .pipeline-switcher,
    :host-context(body.light-theme) .pipeline-switcher {
      background: rgba(248, 250, 252, 0.8) !important;
      border-bottom-color: rgba(99, 102, 241, 0.12) !important;
    }
    body.light-theme .ps-step,
    :host-context(body.light-theme) .ps-step {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      color: #475569 !important;
    }
    body.light-theme .ps-step.active,
    :host-context(body.light-theme) .ps-step.active {
      background: #4f46e5 !important;
      border-color: #4f46e5 !important;
      color: #ffffff !important;
      box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3) !important;
    }
    body.light-theme .pricing-hero-card,
    :host-context(body.light-theme) .pricing-hero-card {
      background: rgba(99, 102, 241, 0.05) !important;
      border-color: rgba(99, 102, 241, 0.18) !important;
    }
    body.light-theme .ph-lbl,
    :host-context(body.light-theme) .ph-lbl {
      color: #64748b !important;
    }
    body.light-theme .ph-val,
    :host-context(body.light-theme) .ph-val {
      color: #0f172a !important;
    }
    body.light-theme .drawer-card,
    :host-context(body.light-theme) .drawer-card {
      background: #f8fafc !important;
      border-color: rgba(99, 102, 241, 0.15) !important;
    }
    body.light-theme .dc-head,
    :host-context(body.light-theme) .dc-head {
      color: #4f46e5 !important;
    }
    body.light-theme .dc-body,
    :host-context(body.light-theme) .dc-body {
      color: #0f172a !important;
    }
    body.light-theme .tc-name,
    :host-context(body.light-theme) .tc-name {
      color: #0f172a !important;
    }
    body.light-theme .upload-zone-modern,
    :host-context(body.light-theme) .upload-zone-modern {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.25) !important;
    }
    body.light-theme .uz-text strong,
    :host-context(body.light-theme) .uz-text strong {
      color: #0f172a !important;
    }
    body.light-theme .note-content,
    :host-context(body.light-theme) .note-content {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.15) !important;
    }
    body.light-theme .note-author,
    :host-context(body.light-theme) .note-author {
      color: #4f46e5 !important;
    }
    body.light-theme .note-text,
    :host-context(body.light-theme) .note-text {
      color: #0f172a !important;
    }
    body.light-theme .add-note-box textarea,
    :host-context(body.light-theme) .add-note-box textarea {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      color: #0f172a !important;
    }
    .btn-send-note:disabled { opacity: 0.4; cursor: not-allowed; }

    /* ── CREATE MODAL ───────────────────────────────────────────── */
    .crm-modal-backdrop {
      position: fixed; inset: 0; z-index: 1200;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(10px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
    }
    .create-modal {
      width: 100%; max-width: 640px;
      background: linear-gradient(90deg, rgba(9, 9, 24, 0.95) 0%, rgba(9, 9, 24, 0.7) 60%, rgba(9, 9, 24, 0.9) 100%);
      border: 1px solid rgba(99,102,241,0.2);
      border-radius: 22px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.7);
      animation: modalIn 0.25s cubic-bezier(0.16,1,0.3,1);
      max-height: 90vh; overflow-y: auto;
    }
    @keyframes modalIn {
      from { opacity: 0; transform: translateY(20px) scale(0.96); }
      to   { opacity: 1; transform: none; }
    }
    .modal-hd {
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.07);
    }
    .modal-hd h3 { font-size: 1.05rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 9px; margin: 0; }
    .close-btn {
      width: 32px; height: 32px; border-radius: 8px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.04); color: var(--text-2);
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem; transition: all 0.2s; font-family: inherit;
    }
    .close-btn:hover { background: var(--rose-soft); color: var(--rose-light); border-color: rgba(225,29,72,0.2); }
    .modal-body { padding: 20px 24px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .fg { display: flex; flex-direction: column; gap: 6px; }
    .fg.full { grid-column: span 2; }
    .fg label { font-size: 0.65rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .fg input, .fg select, .fg textarea {
      width: 100%; padding: 10px 13px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border); border-radius: 10px;
      color: var(--text); outline: none; font-family: inherit;
      font-size: 0.86rem; transition: all 0.2s;
    }
    .fg input:focus, .fg select:focus, .fg textarea:focus {
      border-color: var(--violet); background: rgba(99,102,241,0.06);
      box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
    }
    .fg select option { background: #12121e; color: var(--text); }
    .fg textarea { resize: vertical; }
    .req { color: var(--rose-light); }
    .margin-preview {
      display: flex; align-items: center; gap: 8px;
      background: var(--emerald-soft); border: 1px solid rgba(16,185,129,0.2);
      padding: 10px 14px; border-radius: 10px;
      font-size: 0.82rem; color: var(--emerald-light); font-weight: 600;
    }
    .margin-preview strong { font-size: 1rem; }
    .modal-ft {
      display: flex; justify-content: flex-end; gap: 10px;
      padding: 16px 24px; border-top: 1px solid rgba(255,255,255,0.07);
    }
    .btn-cancel {
      padding: 9px 18px; border-radius: 10px;
      border: 1px solid var(--border); background: rgba(255,255,255,0.04);
      color: var(--text-2); font-size: 0.84rem; font-weight: 600;
      cursor: pointer; transition: all 0.2s; font-family: inherit;
    }
    .btn-cancel:hover { background: rgba(255,255,255,0.08); color: #fff; }
    .btn-save {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 9px 20px; border-radius: 10px; border: none;
      background: linear-gradient(135deg, var(--violet), var(--violet-2));
      color: #fff; font-weight: 700; font-size: 0.84rem;
      cursor: pointer; transition: all 0.25s; font-family: inherit;
      box-shadow: 0 4px 16px var(--violet-glow);
    }
    .btn-save:hover:not(:disabled) { box-shadow: 0 8px 24px var(--violet-glow); }
    .btn-save:disabled { opacity: 0.4; cursor: not-allowed; }

    /* ── LIGHTBOX ────────────────────────────────────────────────── */
    .lightbox {
      position: fixed; inset: 0; z-index: 1500;
      background: rgba(0,0,0,0.92);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
    }
    .lightbox img {
      max-width: 92vw; max-height: 90vh;
      border-radius: 14px;
      box-shadow: 0 0 80px rgba(0,0,0,0.8);
    }
    .lb-close {
      position: absolute; top: 20px; right: 20px;
      width: 40px; height: 40px; border-radius: 10px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
      color: #fff; font-size: 1rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center; transition: background 0.2s;
    }
    .lb-close:hover { background: rgba(255,255,255,0.2); }

    /* ── RESPONSIVE ─────────────────────────────────────────────── */
    @media (max-width: 768px) {
      .tb-shell { padding: 16px; }
      .detail-drawer { width: 100%; }
      .form-grid { grid-template-columns: 1fr; }
      .fg.full { grid-column: span 1; }
    }
  `]
})
export class TasksBoardComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  tasks: any[] = [];
  deals: any[] = [];
  departments: any[] = [];

  columns = [
    { key: 'new',             title: 'جديد',             color: '#a5b4fc' },
    { key: 'in_progress',     title: 'قيد التنفيذ',     color: '#fbbf24' },
    { key: 'content_creator', title: 'صناعة المحتوى', color: '#f472b6' },
    { key: 'in_review',       title: 'قيد المراجعة',     color: '#67e8f9' },
    { key: 'client_feedback', title: 'ملاحظات العميل', color: '#93c5fd' },
    { key: 'done',            title: 'مكتمل',            color: '#6ee7b7' },
  ];

  showCreateModal = false;
  selectedTask: any = null;
  expandedImageUrl: string | null = null;
  newNoteText = '';
  computedMarginVal = 0;
  loading = false;
  taskForm!: FormGroup;

  // Drag & Drop state
  draggingTask: any = null;
  dragOverCol: string | null = null;

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  initForm(): void {
    this.taskForm = this.fb.group({
      title:          ['', Validators.required],
      deal_id:        [null],
      department_id:  [null],
      client_price:   [0],
      employee_price: [0],
      status:         ['new', Validators.required],
      priority:       ['medium', Validators.required],
      scope:          ['']
    });
  }

  allUsers: any[] = [];
  taskActivities: any[] = [];

  loadData(): void {
    this.apiService.getTasks({ parents_only: 'true' }).subscribe(res => this.tasks = res || []);
    this.apiService.getDeals().subscribe(res => this.deals = res || []);
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
    this.apiService.getUsers().subscribe(res => this.allUsers = (res && res.data ? res.data : res) || []);
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
      next: () => { this.loading = false; this.showCreateModal = false; this.loadData(); },
      error: () => this.loading = false
    });
  }

  openTaskDetail(task: any): void {
    if (this.draggingTask) return; // don't open during drag
    this.selectedTask = task;
    this.loadTaskActivities(task.id);
  }

  loadTaskActivities(taskId: number): void {
    this.apiService.getTaskActivity(taskId).subscribe(res => {
      if (res && res.data) {
        this.taskActivities = res.data;
      }
    });
  }

  assignUserFromSelect(selectElem: HTMLSelectElement): void {
    if (!this.selectedTask || !selectElem.value) return;
    const userId = Number(selectElem.value);
    if (!userId) return;

    if (!this.selectedTask.users) this.selectedTask.users = [];
    const exists = this.selectedTask.users.some((u: any) => u.id === userId);
    if (!exists) {
      const userObj = this.allUsers.find((u: any) => u.id === userId);
      const userIds = [...this.selectedTask.users.map((u: any) => u.id), userId];
      this.apiService.assignTaskMembers(this.selectedTask.id, userIds).subscribe(res => {
        if (userObj) {
          this.selectedTask.users.push(userObj);
        }
        this.loadTaskActivities(this.selectedTask.id);
      });
    }
    selectElem.value = '';
  }

  removeUserFromTask(userId: number): void {
    if (!this.selectedTask || !this.selectedTask.users) return;
    const userIds = this.selectedTask.users.filter((u: any) => u.id !== userId).map((u: any) => u.id);
    this.apiService.assignTaskMembers(this.selectedTask.id, userIds).subscribe(() => {
      this.selectedTask.users = this.selectedTask.users.filter((u: any) => u.id !== userId);
      this.loadTaskActivities(this.selectedTask.id);
    });
  }

  deleteAttachment(task: any, att: any, event: Event): void {
    event.stopPropagation();
    if (!confirm('هل أنت تأكد من حذف هذا المرفق؟')) return;
    this.apiService.deleteTaskAttachment(task.id, att.id).subscribe(() => {
      if (task.attachments) {
        task.attachments = task.attachments.filter((a: any) => a.id !== att.id);
      }
      this.loadTaskActivities(task.id);
    });
  }

  closeDetail(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('drawer-backdrop')) {
      this.selectedTask = null;
    }
  }

  persistStatusUpdate(task: any, newStatus: string, rollbackCallback?: () => void): void {
    const payload = {
      title: task.title,
      priority: task.priority || 'medium',
      status: newStatus,
      client_price: task.client_price || 0,
      employee_price: task.employee_price || 0,
      scope: task.scope || '',
      deal_id: task.deal_id || task.deal?.id || null,
      department_id: task.department_id || task.department?.id || null
    };

    this.apiService.updateTask(task.id, payload).subscribe({
      next: () => {},
      error: () => {
        this.apiService.updateTaskStatus(task.id, newStatus).subscribe({
          error: () => {
            if (rollbackCallback) rollbackCallback();
          }
        });
      }
    });
  }

  updateTaskStatus(task: any, newStatus: string): void {
    const oldStatus = task.status;
    task.status = newStatus;
    this.persistStatusUpdate(task, newStatus, () => task.status = oldStatus);
  }

  isImage(att: any): boolean {
    if (!att) return false;
    if (att.is_image === true || att.is_image === 1 || att.is_image === '1') return true;
    const path = (att.file_url || att.file_path || att.url || att.path || att.file_name || '').toLowerCase();
    if (path.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp)($|\?)/i)) return true;
    if ((att.file_type && att.file_type.includes('image')) || (att.mime_type && att.mime_type.includes('image'))) return true;
    return false;
  }

  getFileUrl(att: any): string {
    if (!att) return '';
    let url = typeof att === 'string' ? att : (att.file_url || att.url || att.file_path || att.path || '');
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    const apiHost = 'http://localhost:8000';
    url = url.replace(/^\/+/, '');
    if (!url.startsWith('storage/')) {
      url = 'storage/' + url;
    }
    return `${apiHost}/${url}`;
  }

  handleImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.onerror = null;
      target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none"><rect width="76" height="76" rx="14" fill="%23f1f5f9"/><rect x="1" y="1" width="74" height="74" rx="13" stroke="%23cbd5e1" stroke-width="2"/><path d="M23 48L33 36L43 44L53 30L63 48H23Z" fill="%236366f1" opacity="0.6"/><circle cx="30" cy="28" r="5" fill="%236366f1" opacity="0.7"/></svg>';
    }
  }

  getImageAttachments(task: any) {
    if (!task || !task.attachments) return [];
    return task.attachments.filter((a: any) => this.isImage(a));
  }

  expandImage(url: string, event: Event): void {
    event.stopPropagation();
    this.expandedImageUrl = this.getFileUrl(url);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && this.selectedTask) {
      const fd = new FormData();
      fd.append('file', file);
      this.apiService.addTaskAttachment(this.selectedTask.id, fd).subscribe(res => {
        if (res.data) {
          if (!this.selectedTask.attachments) this.selectedTask.attachments = [];
          this.selectedTask.attachments.push(res.data);
          this.loadTaskActivities(this.selectedTask.id);
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
        this.loadTaskActivities(this.selectedTask.id);
      }
    });
  }

  /* ── DRAG & DROP ──────────────────────────────────────────── */
  onDragStart(event: DragEvent, task: any): void {
    this.draggingTask = task;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', task.id.toString());
    }
    setTimeout(() => {}, 0);
  }

  onDragEnd(): void {
    this.draggingTask = null;
    this.dragOverCol = null;
  }

  onDragOver(event: DragEvent, colKey: string): void {
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
    this.dragOverCol = colKey;
  }

  onDragLeave(event: DragEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget || !(event.currentTarget as HTMLElement).contains(relatedTarget)) {
      this.dragOverCol = null;
    }
  }

  onDrop(event: DragEvent, targetColKey: string): void {
    event.preventDefault();
    this.dragOverCol = null;

    if (!this.draggingTask) return;
    const task = this.draggingTask;
    this.draggingTask = null;

    if (task.status === targetColKey) return;

    const oldStatus = task.status;
    task.status = targetColKey;
    this.persistStatusUpdate(task, targetColKey, () => task.status = oldStatus);
  }
}
