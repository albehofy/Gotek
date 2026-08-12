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
                  [src]="img.file_url"
                  class="thumb"
                  (click)="expandImage(img.file_url, $event)"
                  alt=""
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
              <div class="drawer-task-av">{{ selectedTask.title?.charAt(0) }}</div>
              <div>
                <div class="drawer-title">{{ selectedTask.title }}</div>
                <div class="drawer-meta">
                  <span class="badge" [ngClass]="selectedTask.status">{{ selectedTask.status?.replace('_', ' ') }}</span>
                  <span class="priority-badge" [class]="'pb-' + (selectedTask.priority || 'medium')">{{ selectedTask.priority }}</span>
                </div>
              </div>
            </div>
            <button class="close-btn" (click)="selectedTask = null">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Status quick-change -->
          <div class="status-switcher">
            <button
              *ngFor="let col of columns"
              class="status-btn"
              [class.active]="selectedTask.status === col.key"
              [style.--col-c]="col.color"
              (click)="updateTaskStatus(selectedTask, col.key)"
            >{{ col.title }}</button>
          </div>

          <!-- Drawer Body -->
          <div class="drawer-body">

            <!-- Pricing banner -->
            <div class="pricing-banner" *ngIf="selectedTask.client_price > 0">
              <div class="pricing-item">
                <small>Client Price</small>
                <strong class="teal">{{ selectedTask.client_price | number:'1.2-2' }} EGP</strong>
              </div>
              <div class="pricing-sep"><i class="fa-solid fa-arrow-right"></i></div>
              <div class="pricing-item">
                <small>Employee Cost</small>
                <strong class="amber">{{ selectedTask.employee_price | number:'1.2-2' }} EGP</strong>
              </div>
              <div class="pricing-sep"><i class="fa-solid fa-equals"></i></div>
              <div class="pricing-item highlight">
                <small>Company Margin</small>
                <strong class="emerald">+{{ (selectedTask.client_price - selectedTask.employee_price) | number:'1.2-2' }} EGP</strong>
              </div>
            </div>

            <!-- Scope -->
            <div class="drawer-section" *ngIf="selectedTask.scope">
              <div class="ds-label"><i class="fa-solid fa-file-lines"></i> Scope</div>
              <div class="ds-text">{{ selectedTask.scope }}</div>
            </div>

            <!-- Team -->
            <div class="drawer-section" *ngIf="(selectedTask.users || []).length > 0">
              <div class="ds-label"><i class="fa-solid fa-users"></i> Assigned Team</div>
              <div class="team-chips">
                <div class="team-chip" *ngFor="let u of selectedTask.users">
                  <div class="tc-av">{{ u.name?.charAt(0) }}</div>
                  <span>{{ u.name }}</span>
                </div>
              </div>
            </div>

            <!-- Deal info -->
            <div class="drawer-section" *ngIf="selectedTask.deal">
              <div class="ds-label"><i class="fa-solid fa-handshake"></i> Linked Deal</div>
              <div class="deal-chip">
                <i class="fa-solid fa-link"></i> {{ selectedTask.deal.title }}
              </div>
            </div>

            <!-- Attachments -->
            <div class="drawer-section">
              <div class="ds-label"><i class="fa-solid fa-images"></i> Attachments</div>
              <div class="att-grid">
                <div
                  *ngFor="let att of (selectedTask.attachments || [])"
                  class="att-item"
                >
                  <img *ngIf="att.is_image" [src]="att.file_url" class="att-img" (click)="expandImage(att.file_url, $event)" />
                  <div *ngIf="!att.is_image" class="att-doc">
                    <i class="fa-solid fa-file-lines"></i>
                    <span>{{ att.file_name || 'File' }}</span>
                  </div>
                </div>
              </div>
              <div class="upload-zone" (click)="fileInput.click()">
                <input type="file" #fileInput (change)="onFileSelected($event)" style="display:none" />
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <span>Click to upload attachment</span>
              </div>
            </div>

            <!-- Comments -->
            <div class="drawer-section">
              <div class="ds-label"><i class="fa-solid fa-comments"></i> التعليقات والملاحظات</div>
              <div class="notes-list">
                <div class="note-item" *ngFor="let note of (selectedTask.notes || [])">
                  <div class="note-av">{{ note.user?.name?.charAt(0) || 'U' }}</div>
                  <div class="note-body">
                    <div class="note-author">{{ note.user?.name || 'مستخدم' }}</div>
                    <div class="note-text">{{ note.note }}</div>
                    <small class="note-time">{{ note.created_at | date:'short' }}</small>
                  </div>
                </div>
                <div class="notes-empty" *ngIf="!(selectedTask.notes || []).length">
                  <i class="fa-regular fa-comment"></i> لا توجد تعليقات بعد
                </div>
              </div>
              <div class="add-note">
                <textarea
                  [(ngModel)]="newNoteText"
                  placeholder="اكتب تعليقاً... يمكنك استخدام @ لإشارة أي عضو"
                  rows="2"
                  dir="rtl"
                ></textarea>
                <button class="btn-send-note" (click)="submitNote()" [disabled]="!newNoteText.trim()">
                  <i class="fa-solid fa-paper-plane"></i> إرسال
                </button>
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
    .btn-new-task:hover { transform: translateY(-2px); box-shadow: 0 8px 28px var(--violet-glow); }

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
    .kanban-col {
      flex: 0 0 280px; min-width: 280px;
      background: rgba(12,12,26,0.7);
      border: 1px solid var(--border);
      border-radius: 18px;
      display: flex; flex-direction: column;
      height: 100%;
      max-height: 100%;
      overflow: hidden;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
      backdrop-filter: blur(12px);
    }
    .kanban-col.drag-over {
      border-color: rgba(99,102,241,0.6);
      box-shadow: 0 0 0 2px rgba(99,102,241,0.25), 0 8px 32px rgba(99,102,241,0.15);
      transform: scale(1.01);
    }

    /* Column Header */
    .col-hd {
      padding: 14px 16px;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid var(--border);
      background: rgba(0,0,0,0.2);
      border-radius: 18px 18px 0 0;
      border-top: 3px solid var(--col-accent, var(--violet));
    }
    .col-hd-left { display: flex; align-items: center; gap: 9px; }
    .col-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 8px currentColor; }
    .col-title { font-size: 0.82rem; font-weight: 700; color: #fff; }
    .col-count {
      font-size: 0.72rem; font-weight: 800;
      padding: 3px 9px; border-radius: 100px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
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
      color: rgba(255,255,255,0.15); font-size: 0.78rem;
      border: 2px dashed rgba(255,255,255,0.07);
      border-radius: 12px; min-height: 80px;
    }
    .col-empty i { font-size: 1.2rem; }

    /* ── TASK CARD ──────────────────────────────────────────────── */
    .tk-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; padding: 12px 13px;
      cursor: grab; transition: all 0.2s var(--ease);
      position: relative; overflow: hidden;
      user-select: none;
    }
    .tk-card:hover {
      background: rgba(99,102,241,0.07);
      border-color: rgba(99,102,241,0.3);
      transform: translateY(-2px);
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
      font-size: 0.85rem; font-weight: 700; color: #eee;
      line-height: 1.3; margin-bottom: 5px;
    }
    .tk-scope {
      font-size: 0.76rem; color: var(--text-2); line-height: 1.4;
      margin-bottom: 8px;
      display: -webkit-box; -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
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

    /* Card footer */
    .tk-foot {
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; margin-top: 4px;
    }
    .tk-avatars { display: flex; }
    .av-sm {
      width: 22px; height: 22px; border-radius: 50%;
      background: linear-gradient(135deg, var(--violet), var(--teal));
      color: #fff; font-size: 0.6rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      border: 2px solid var(--bg-sidebar); margin-right: -5px;
      position: relative;
    }
    .av-more { background: rgba(255,255,255,0.1); color: var(--text-2); font-size: 0.55rem; }
    .tk-foot-right { display: flex; align-items: center; gap: 6px; }
    .tk-attach { font-size: 0.68rem; color: var(--text-3); display: flex; align-items: center; gap: 3px; }

    /* Priority badge */
    .priority-badge {
      font-size: 0.6rem; font-weight: 700; padding: 2px 6px;
      border-radius: 100px; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .pb-low    { background: var(--emerald-soft); color: var(--emerald-light); }
    .pb-medium { background: var(--amber-soft);   color: var(--amber-light); }
    .pb-high   { background: var(--rose-soft);    color: var(--rose-light); }
    .pb-urgent { background: rgba(255,0,80,0.15); color: #ff4488; border: 1px solid rgba(255,0,80,0.25); }

    /* ── DETAIL DRAWER ──────────────────────────────────────────── */
    .drawer-backdrop {
      position: fixed; inset: 0; z-index: 1200;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(6px);
      display: flex; justify-content: flex-end;
    }
    .detail-drawer {
      width: 480px; max-width: 95vw;
      height: 100vh;
      background: #0e0e22;
      border-left: 1px solid rgba(99,102,241,0.2);
      display: flex; flex-direction: column;
      animation: drawerSlideIn 0.28s cubic-bezier(0.16,1,0.3,1);
      box-shadow: -20px 0 60px rgba(0,0,0,0.6);
    }
    @keyframes drawerSlideIn {
      from { transform: translateX(100%); opacity: 0; }
      to   { transform: translateX(0);   opacity: 1; }
    }

    /* Drawer Header */
    .drawer-hd {
      display: flex; align-items: flex-start; justify-content: space-between;
      padding: 20px 22px; border-bottom: 1px solid rgba(255,255,255,0.07);
      background: rgba(99,102,241,0.06); flex-shrink: 0;
    }
    .drawer-hd-left { display: flex; align-items: flex-start; gap: 12px; flex: 1; min-width: 0; }
    .drawer-task-av {
      width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
      background: linear-gradient(135deg, var(--violet), var(--teal));
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; font-weight: 800; color: #fff;
      box-shadow: 0 0 16px var(--violet-glow);
    }
    .drawer-title {
      font-size: 0.95rem; font-weight: 700; color: #fff;
      line-height: 1.3; margin-bottom: 6px;
      word-break: break-word;
    }
    .drawer-meta { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

    /* Status switcher */
    .status-switcher {
      display: flex; gap: 5px; overflow-x: auto; padding: 12px 14px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      flex-shrink: 0;
    }
    .status-switcher::-webkit-scrollbar { height: 0; }
    .status-btn {
      padding: 5px 11px; border-radius: 100px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04);
      color: var(--text-2); font-size: 0.72rem; font-weight: 600;
      cursor: pointer; white-space: nowrap; transition: all 0.2s;
      font-family: inherit;
    }
    .status-btn.active {
      background: var(--col-c, var(--violet));
      border-color: var(--col-c, var(--violet));
      color: #fff; opacity: 1;
      box-shadow: 0 2px 12px var(--col-c, var(--violet-glow));
    }
    .status-btn:not(.active):hover {
      background: rgba(255,255,255,0.08); color: #fff;
    }

    /* Drawer body */
    .drawer-body {
      flex: 1; overflow-y: auto; padding: 18px 22px;
      display: flex; flex-direction: column; gap: 20px;
    }
    .drawer-body::-webkit-scrollbar { width: 3px; }
    .drawer-body::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 4px; }

    /* Pricing banner */
    .pricing-banner {
      display: flex; align-items: center;
      background: rgba(6,182,212,0.06);
      border: 1px solid rgba(6,182,212,0.15);
      border-radius: 12px; padding: 14px 16px; gap: 12px;
      flex-wrap: wrap;
    }
    .pricing-item { display: flex; flex-direction: column; gap: 3px; }
    .pricing-item small { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-2); }
    .pricing-item strong { font-size: 0.95rem; font-weight: 800; }
    .pricing-item.highlight {
      margin-left: auto;
      background: rgba(16,185,129,0.1); padding: 8px 14px;
      border-radius: 10px; border: 1px solid rgba(16,185,129,0.2);
    }
    .pricing-sep { color: rgba(255,255,255,0.2); font-size: 0.9rem; }
    .teal   { color: var(--teal-light) !important; }
    .amber  { color: var(--amber-light) !important; }
    .emerald { color: var(--emerald-light) !important; }

    /* Drawer sections */
    .drawer-section { display: flex; flex-direction: column; gap: 10px; }
    .ds-label {
      font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 1px; color: var(--text-2);
      display: flex; align-items: center; gap: 7px;
    }
    .ds-text { font-size: 0.84rem; color: var(--text); line-height: 1.55; }

    /* Team chips */
    .team-chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .team-chip {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(99,102,241,0.08);
      border: 1px solid rgba(99,102,241,0.2);
      padding: 5px 10px; border-radius: 100px;
      font-size: 0.78rem; font-weight: 600; color: var(--violet-light);
    }
    .tc-av {
      width: 22px; height: 22px; border-radius: 50%;
      background: linear-gradient(135deg, var(--violet), var(--teal));
      display: flex; align-items: center; justify-content: center;
      font-size: 0.65rem; font-weight: 800; color: #fff; flex-shrink: 0;
    }

    /* Deal chip */
    .deal-chip {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--violet-soft); border: 1px solid var(--border-v);
      padding: 6px 12px; border-radius: 10px;
      font-size: 0.82rem; color: var(--violet-light); font-weight: 600;
    }

    /* Attachments */
    .att-grid { display: flex; flex-wrap: wrap; gap: 8px; }
    .att-img {
      width: 70px; height: 70px; object-fit: cover;
      border-radius: 10px; border: 1px solid var(--border);
      cursor: pointer; transition: transform 0.2s;
    }
    .att-img:hover { transform: scale(1.05); }
    .att-doc {
      width: 70px; height: 70px; border-radius: 10px;
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--border);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 4px; font-size: 0.62rem; color: var(--text-2);
    }
    .att-doc i { font-size: 1.2rem; }
    .upload-zone {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 14px; border-radius: 10px;
      border: 2px dashed rgba(99,102,241,0.25);
      color: var(--text-2); font-size: 0.78rem; font-weight: 500;
      cursor: pointer; transition: all 0.2s;
    }
    .upload-zone:hover { border-color: rgba(99,102,241,0.5); color: var(--violet-light); background: var(--violet-soft); }
    .upload-zone i { font-size: 1rem; }

    /* Notes */
    .notes-list { display: flex; flex-direction: column; gap: 12px; max-height: 240px; overflow-y: auto; }
    .notes-list::-webkit-scrollbar { width: 3px; }
    .notes-list::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.25); border-radius: 4px; }
    .note-item { display: flex; gap: 10px; }
    .note-av {
      width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg, var(--violet-2), var(--teal-2));
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; font-weight: 700; color: #fff;
    }
    .note-body { flex: 1; }
    .note-author { font-size: 0.78rem; font-weight: 700; color: var(--violet-light); margin-bottom: 2px; }
    .note-text { font-size: 0.82rem; color: var(--text); line-height: 1.45; }
    .note-time { font-size: 0.65rem; color: var(--text-3); margin-top: 3px; display: block; }
    .notes-empty { font-size: 0.78rem; color: var(--text-3); text-align: center; padding: 12px; }

    /* Add note */
    .add-note { display: flex; flex-direction: column; gap: 8px; }
    .add-note textarea {
      width: 100%; padding: 10px 13px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border); border-radius: 10px;
      color: var(--text); font-family: inherit; font-size: 0.84rem;
      outline: none; resize: none; transition: all 0.2s;
    }
    .add-note textarea:focus { border-color: var(--violet); background: rgba(99,102,241,0.05); box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
    .btn-send-note {
      align-self: flex-end; display: inline-flex; align-items: center; gap: 7px;
      padding: 8px 16px; border-radius: 10px; border: none;
      background: linear-gradient(135deg, var(--violet), var(--violet-2));
      color: #fff; font-weight: 700; font-size: 0.8rem;
      cursor: pointer; transition: all 0.2s; font-family: inherit;
      box-shadow: 0 4px 14px var(--violet-glow);
    }
    .btn-send-note:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px var(--violet-glow); }
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
      background: #0e0e22;
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
    .btn-save:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 24px var(--violet-glow); }
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
      next: () => { this.loading = false; this.showCreateModal = false; this.loadData(); },
      error: () => this.loading = false
    });
  }

  openTaskDetail(task: any): void {
    if (this.draggingTask) return; // don't open during drag
    this.selectedTask = task;
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
      const fd = new FormData();
      fd.append('file', file);
      this.apiService.addTaskAttachment(this.selectedTask.id, fd).subscribe(res => {
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
