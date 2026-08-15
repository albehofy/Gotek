import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastService } from '../../services/toast.service';
import { ConfirmService } from '../../services/confirm.service';

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
    DropdownModule,
    MultiSelectModule
  ],
  template: `
    <div class="tb-shell">

      <!-- ── PAGE HEADER ────────────────────────────────────────── -->
      <div class="tb-header" [class.is-client-header]="isClient()">
        <div class="tb-header-left">
          <div class="tb-icon-badge" [class.client-badge-icon]="isClient()">
            <i class="fa-solid" [ngClass]="isClient() ? 'fa-clipboard-check' : 'fa-list-check'"></i>
          </div>
          <div>
            <h2>{{ isClient() ? 'لوحة مخرجات ومهام المشروع' : 'لوحة المهام والتنفيذ' }}</h2>
            <p>{{ isClient() ? 'متابعة مخرجات مشروعك والمهام واعتماد التكتيكات والمخرجات بسهولة' : 'سحب وإسقاط البطاقات بين الأعمدة لتحديث الحالة فوراً' }}</p>
          </div>
        </div>
        <div class="tb-header-right">
          <div class="tb-stats" *ngIf="!isClient()">
            <span class="stat-pill">
              <i class="fa-solid fa-circle-dot" style="color:var(--violet-light)"></i>
              {{ tasks.length }} الإجمالي
            </span>
            <span class="stat-pill emerald">
              <i class="fa-solid fa-check-circle"></i>
              {{ getTasksForColumn('done').length }} مكتمل
            </span>
          </div>

          <div class="tb-stats client-stats" *ngIf="isClient()">
            <span class="stat-pill client-stat-pill" (click)="clientStatusFilter = 'all'" [class.active]="clientStatusFilter === 'all'">
              <i class="fa-solid fa-layer-group"></i>
              <span>{{ tasks.length }}</span> الإجمالي
            </span>
            <span class="stat-pill client-stat-pill amber-glow" (click)="clientStatusFilter = 'pending'" [class.active]="clientStatusFilter === 'pending'" *ngIf="getClientPendingCount() > 0">
              <i class="fa-solid fa-clock-rotate-left fa-spin-pulse"></i>
              <span>{{ getClientPendingCount() }}</span> بانتظار موافقتك
            </span>
            <span class="stat-pill client-stat-pill emerald" (click)="clientStatusFilter = 'done'" [class.active]="clientStatusFilter === 'done'">
              <i class="fa-solid fa-circle-check"></i>
              <span>{{ getClientApprovedCount() }}</span> مكتمل ومعتمد
            </span>
            <span class="stat-pill client-stat-pill violet" (click)="clientStatusFilter = 'in_progress'" [class.active]="clientStatusFilter === 'in_progress'">
              <i class="fa-solid fa-spinner"></i>
              <span>{{ getClientInProgressCount() }}</span> قيد التنفيذ
            </span>
          </div>

          <button class="btn-new-task" *ngIf="isAdminOrManager()" (click)="openCreateModal()">
            <i class="fa-solid fa-plus"></i> مهمة جديدة
          </button>
        </div>
      </div>

      <!-- ── TOP TOOLBAR WITH SEARCH & STYLISH SIDE FILTER MODAL TRIGGER ── -->
      <div class="prime-board-toolbar glass-panel">
        
        <!-- Live Search Input -->
        <div class="toolbar-search-box">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input 
            type="text" 
            [(ngModel)]="searchQuery" 
            placeholder="ابحث في المهام، الصفقات، أو المسؤولين..."
            class="toolbar-search-input"
          />
          <button type="button" class="btn-clear-search" *ngIf="searchQuery" (click)="searchQuery = ''">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Filter Modal Trigger & Active Filters Bar -->
        <div class="toolbar-actions-group">
          <button 
            type="button" 
            class="btn-trigger-filters" 
            [class.has-active]="getActiveFiltersCount() > 0"
            (click)="showFilterDrawer = true"
          >
            <i class="fa-solid fa-sliders"></i>
            <span>الفلاتر والتصفية</span>
            <span class="active-badge" *ngIf="getActiveFiltersCount() > 0">{{ getActiveFiltersCount() }}</span>
          </button>

          <!-- Reset Button -->
          <button 
            type="button" 
            class="btn-reset-filters" 
            *ngIf="getActiveFiltersCount() > 0"
            (click)="resetBoardFilters()"
            title="إعادة ضبط جميع الفلاتر"
          >
            <i class="fa-solid fa-rotate-left"></i> إعادة ضبط
          </button>
        </div>
      </div>

      <!-- ── SIDE FILTER MODAL (نافذة الفلاتر الجانبية الشيك) ── -->
      <div class="filter-drawer-overlay" *ngIf="showFilterDrawer" (click)="showFilterDrawer = false">
        <div class="filter-drawer-content glass-panel" (click)="$event.stopPropagation()">
          
          <!-- Drawer Header -->
          <div class="drawer-header">
            <div class="dh-title">
              <i class="fa-solid fa-sliders icon-violet"></i>
              <span>تصفية وفلترة المهام والمخرجات</span>
            </div>
            <button type="button" class="btn-close-drawer" (click)="showFilterDrawer = false">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Drawer Body Filters -->
          <div class="drawer-filters-body">
            
            <!-- Deal Filter -->
            <div class="filter-group-item" *ngIf="dealOptions.length > 1">
              <label class="filter-label"><i class="fa-solid fa-handshake"></i> الصفقة والمشروع</label>
              <p-dropdown
                [options]="dealOptions"
                [(ngModel)]="selectedDealFilter"
                placeholder="اختر الصفقة"
                [filter]="true"
                filterBy="label"
                styleClass="prime-luxury-dropdown"
                appendTo="body"
                [baseZIndex]="999999"
              ></p-dropdown>
            </div>

            <!-- Department Filter -->
            <div class="filter-group-item" *ngIf="departmentOptions.length > 1">
              <label class="filter-label"><i class="fa-solid fa-sitemap"></i> القسم / المركز</label>
              <p-dropdown
                [options]="departmentOptions"
                [(ngModel)]="selectedDepartmentFilter"
                placeholder="اختر القسم"
                [filter]="true"
                filterBy="label"
                styleClass="prime-luxury-dropdown"
                appendTo="body"
                [baseZIndex]="999999"
              ></p-dropdown>
            </div>

            <!-- Assignee Filter (Admin & Managers) -->
            <div class="filter-group-item" *ngIf="isAdminOrManager() && userOptions.length > 1">
              <label class="filter-label"><i class="fa-solid fa-user-gear"></i> عضو الفريق / المسؤول</label>
              <p-dropdown
                [options]="userOptions"
                [(ngModel)]="selectedUserFilter"
                placeholder="اختر المسؤول"
                [filter]="true"
                filterBy="label"
                styleClass="prime-luxury-dropdown"
                appendTo="body"
                [baseZIndex]="999999"
              ></p-dropdown>
            </div>

            <!-- Priority Filter -->
            <div class="filter-group-item">
              <label class="filter-label"><i class="fa-solid fa-fire"></i> درجة الأولوية</label>
              <p-dropdown
                [options]="priorityOptions"
                [(ngModel)]="selectedPriorityFilter"
                placeholder="الأولوية"
                styleClass="prime-luxury-dropdown"
                appendTo="body"
                [baseZIndex]="999999"
              ></p-dropdown>
            </div>

          </div>

          <!-- Drawer Footer Actions -->
          <div class="drawer-footer-actions">
            <button type="button" class="btn-apply-filters" (click)="showFilterDrawer = false">
              <i class="fa-solid fa-check"></i> عرض النتائج ({{ getTotalFilteredCount() }})
            </button>
            <button type="button" class="btn-clear-drawer" (click)="resetBoardFilters()">
              <i class="fa-solid fa-rotate-left"></i> إعادة ضبط
            </button>
          </div>

        </div>
      </div>

      <!-- ── CLIENT DEDICATED CARDS GRID VIEW (للعميل فقط) ──────────────── -->
      <div class="client-cards-grid-shell" *ngIf="isClient()">
        <div 
          class="client-card-item" 
          *ngFor="let task of getFilteredClientTasks()"
          [class.card-status-pending]="task.status === 'client_review' || task.status === 'in_review'"
          [class.card-status-done]="task.status === 'done' || task.status === 'approved'"
          [class.card-status-feedback]="task.status === 'client_feedback'"
          (click)="openTaskDetail(task)"
        >
          <!-- Card Top Info & Badges -->
          <div class="client-card-head">
            <div class="client-card-head-top">
              <span class="client-badge badge-approved" *ngIf="task.status === 'done' || task.status === 'approved'">
                <i class="fa-solid fa-circle-check"></i> مكتمل ومعتمد
              </span>
              <span class="client-badge badge-pending-approval" *ngIf="task.status === 'client_review' || task.status === 'in_review'">
                <i class="fa-solid fa-clock-rotate-left fa-spin-pulse"></i> بانتظار موافقتك واعتمادك
              </span>
              <span class="client-badge badge-feedback" *ngIf="task.status === 'client_feedback'">
                <i class="fa-solid fa-comments"></i> تم طلب تعديلات
              </span>
              <span class="client-badge badge-in-progress" *ngIf="task.status !== 'done' && task.status !== 'approved' && task.status !== 'client_review' && task.status !== 'in_review' && task.status !== 'client_feedback'">
                <i class="fa-solid fa-rotate fa-spin"></i> قيد التنفيذ
              </span>

              <span class="client-deal-chip" *ngIf="task.deal">
                <i class="fa-solid fa-handshake"></i> {{ task.deal.title }}
              </span>
            </div>

            <h3 class="client-card-title">{{ task.title }}</h3>
          </div>

          <!-- Card Description / Scope -->
          <div class="client-card-body">
            <div class="client-scope-box" *ngIf="task.scope">
              <i class="fa-solid fa-quote-right scope-icon"></i>
              <p>{{ task.scope }}</p>
            </div>

            <!-- Subtasks Checklist Section (الخطوات والمهام الفرعية) -->
            <div class="client-subtasks-box" *ngIf="task.subtasks && task.subtasks.length > 0" style="margin-top:10px; background:rgba(99,102,241,0.06); border:1px dashed rgba(99,102,241,0.25); border-radius:12px; padding:10px 14px;">
              <div style="font-size:0.78rem; font-weight:800; color:var(--violet-light, #818cf8); margin-bottom:6px; display:flex; align-items:center; justify-content:space-between;">
                <span><i class="fa-solid fa-list-check"></i> الخطوات الفرعية ({{ getCompletedSubtasksCount(task) }}/{{ task.subtasks.length }})</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:4px;">
                <div *ngFor="let st of task.subtasks" style="font-size:0.8rem; color:var(--text); display:flex; align-items:center; gap:6px;">
                  <i class="fa-solid" [class.fa-circle-check]="st.status === 'done' || st.status === 'approved'" [class.fa-circle]="st.status !== 'done' && st.status !== 'approved'" [style.color]="(st.status === 'done' || st.status === 'approved') ? '#10b981' : '#94a3b8'"></i>
                  <span [style.text-decoration]="(st.status === 'done' || st.status === 'approved') ? 'line-through' : 'none'" [style.opacity]="(st.status === 'done' || st.status === 'approved') ? '0.7' : '1'">{{ st.title }}</span>
                </div>
              </div>
            </div>

            <!-- Attachments & Deliverables Section -->
            <div class="client-attachments-sec" *ngIf="getTaskAttachmentsForUser(task).length > 0">
              <div class="att-sec-header">
                <i class="fa-solid fa-folder-open"></i>
                <span>المرفقات والمخرجات للاعتماد:</span>
                <span class="att-count-badge">{{ getTaskAttachmentsForUser(task).length }}</span>
              </div>

              <div class="att-thumbs-grid">
                <div 
                  *ngFor="let att of getTaskAttachmentsForUser(task)" 
                  class="att-thumb-card"
                  (click)="isImage(att) ? openLightbox(getFileUrl(att), $event) : openFileUrl(getFileUrl(att), $event)"
                  [title]="att.file_name || 'عرض المرفق'"
                >
                  <ng-container *ngIf="isImage(att)">
                    <img [src]="getFileUrl(att)" alt="المرفق" class="att-img" />
                    <div class="att-zoom-overlay">
                      <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                  </ng-container>
                  <ng-container *ngIf="!isImage(att)">
                    <div class="att-file-icon">
                      <i class="fa-solid fa-file-lines"></i>
                    </div>
                    <span class="att-file-name">{{ att.file_name || 'ملف مرفق' }}</span>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Footer Actions -->
          <div class="client-card-footer" (click)="$event.stopPropagation()">
            <!-- If task is pending approval or in progress -->
            <div class="client-actions-grid" *ngIf="task.status !== 'done' && task.status !== 'approved'">
              <button 
                type="button" 
                class="btn-client-approve" 
                (click)="approveTaskByClient(task, $event)" 
              >
                <i class="fa-solid fa-circle-check"></i> اعتماد المهمة
              </button>
              <button 
                type="button" 
                class="btn-client-revision" 
                (click)="openRevisionModal(task, $event)"
              >
                <i class="fa-solid fa-pen-to-square"></i> طلب تعديلات
              </button>
            </div>

            <!-- If task is already done/approved -->
            <div class="client-approved-bar" *ngIf="task.status === 'done' || task.status === 'approved'">
              <div class="approved-status-text">
                <i class="fa-solid fa-shield-check"></i>
                <span>تم اعتماد هذه المهمة والموافقة عليها</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div *ngIf="!tasks || getFilteredClientTasks().length === 0" class="client-empty-state">
          <div class="empty-icon-wrap">
            <i class="fa-solid fa-clipboard-check"></i>
          </div>
          <h3>لا توجد مهام أو مخرجات مطابقة</h3>
          <p>لم يتم العثور على أي مهام حسب البحث أو الفلتر المعتمد حالياً.</p>
        </div>
      </div>

      <!-- ── KANBAN BOARD FOR STAFF / ADMIN ───────────────────────── -->
      <div class="kanban-board" *ngIf="!isClient()">
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
              <div class="tk-tags" *ngIf="task.parent_id || task.parent || task.deal || task.sub_category">
                <span class="tag tag-subtask" *ngIf="task.parent_id || task.parent">
                  <i class="fa-solid fa-code-branch"></i> مهمة فرعية{{ task.parent ? ': ' + (task.parent.title | slice:0:15) : '' }}
                </span>
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

              <!-- Subtasks Checklist Box inside Board Card -->
              <div class="tk-subtasks-preview" *ngIf="(task.subtasks || []).length > 0">
                <div class="tsp-head">
                  <span><i class="fa-solid fa-list-check"></i> الخطوات الفرعية ({{ getCompletedSubtasksCount(task) }}/{{ task.subtasks.length }})</span>
                </div>
                <div class="tsp-bar">
                  <div class="tsp-fill" [style.width.%]="getSubtasksProgressPercent(task)"></div>
                </div>
                <div class="tsp-list">
                  <div class="tsp-item" *ngFor="let st of (task.subtasks || []).slice(0, 3)" [class.done]="st.status === 'done' || st.is_completed">
                    <i class="fa-solid" [ngClass]="(st.status === 'done' || st.is_completed) ? 'fa-square-check text-emerald' : 'fa-square text-muted'"></i>
                    <span>{{ st.title }}</span>
                  </div>
                  <div class="tsp-more" *ngIf="task.subtasks.length > 3">
                    + {{ task.subtasks.length - 3 }} خطوات فرعية إضافية...
                  </div>
                </div>
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
                  <!-- Subtasks Progress Tag -->
                  <span class="tk-subtasks-tag" *ngIf="(task.subtasks || []).length > 0" title="المهام الفرعية الإجمالية والمكتملة">
                    <i class="fa-solid fa-list-check"></i> {{ getCompletedSubtasksCount(task) }}/{{ task.subtasks.length }}
                  </span>
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
        <div class="detail-drawer" [class.is-wide]="isWideDrawer" (click)="$event.stopPropagation()">

          <!-- Drawer Header -->
          <div class="drawer-hd">
            <div class="drawer-hd-left">
              <div class="drawer-task-av">
                <i class="fa-solid fa-list-check"></i>
              </div>
              <div class="drawer-hd-text">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                  <button class="btn-parent-crumb" *ngIf="selectedTask.parent_id || selectedTask.parent" (click)="openTaskDetail(selectedTask.parent || findParentTask(selectedTask.parent_id))" title="العودة للمهمة الرئيسية">
                    <i class="fa-solid fa-arrow-right"></i> المهمة الرئيسية: {{ (selectedTask.parent?.title || getTaskTitle(selectedTask.parent_id)) | slice:0:22 }}
                  </button>
                  <h3 class="drawer-title">{{ selectedTask.title }}</h3>
                </div>
                <div class="drawer-meta">
                  <span class="priority-badge" [class]="'pb-' + (selectedTask.priority || 'medium')">
                    <i class="fa-solid fa-bolt"></i> {{ selectedTask.priority | uppercase }}
                  </span>
                  <span class="tag tag-subtask" *ngIf="selectedTask.parent_id || selectedTask.parent">
                    <i class="fa-solid fa-code-branch"></i> مهمة فرعية
                  </span>
                  <span class="deal-tag" *ngIf="selectedTask.deal">
                    <i class="fa-solid fa-handshake"></i> {{ selectedTask.deal.title }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Header Action Buttons -->
            <div class="drawer-hd-actions">
              <!-- Width Expand/Compress Toggle Button -->
              <button class="icon-action-btn" (click)="isWideDrawer = !isWideDrawer" [title]="isWideDrawer ? 'تصغير العرض' : 'توسيع العرض (90%)'">
                <i class="fa-solid" [class.fa-expand]="!isWideDrawer" [class.fa-compress]="isWideDrawer"></i>
              </button>

              <!-- Close Drawer Button -->
              <button class="close-btn" (click)="closeTaskDrawer()" title="إغلاق">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          <!-- Drawer Navigation Tabs Bar (للإدارة والموظفين فقط) -->
          <div class="drawer-nav-tabs" *ngIf="!isClient()">
            <button
              class="dnav-tab"
              [class.active]="activeDrawerTab === 'details'"
              (click)="activeDrawerTab = 'details'"
            >
              <i class="fa-solid fa-rectangle-list"></i> تفاصيل المهمة والملفات
            </button>
            <button
              class="dnav-tab"
              [class.active]="activeDrawerTab === 'subtasks'"
              (click)="activeDrawerTab = 'subtasks'"
              *ngIf="!isClient()"
            >
              <i class="fa-solid fa-list-check"></i> المهام الفرعية
              <span class="dnav-badge" *ngIf="(selectedTask.subtasks || []).length">{{ selectedTask.subtasks.length }}</span>
            </button>
            <button
              class="dnav-tab"
              [class.active]="activeDrawerTab === 'history'"
              (click)="activeDrawerTab = 'history'"
              *ngIf="!isClient()"
            >
              <i class="fa-solid fa-clock-rotate-left"></i> سجل التغييرات والتاريخ
              <span class="dnav-badge" *ngIf="taskActivities.length">{{ taskActivities.length }}</span>
            </button>
          </div>

          <!-- Drawer Body -->
          <div class="drawer-body">

            <!-- TAB 1: TASK DETAILS -->
            <div class="drawer-tab-content" *ngIf="activeDrawerTab === 'details'">

              <!-- Parent Task Info Card (When viewing a subtask) -->
              <div class="drawer-card parent-task-link-card" *ngIf="selectedTask.parent_id || selectedTask.parent" (click)="openTaskDetail(selectedTask.parent || findParentTask(selectedTask.parent_id))" style="cursor:pointer; background:rgba(99,102,241,0.06); border:1px solid rgba(99,102,241,0.25); transition:all 0.2s;" title="انقر لعرض المهمة الرئيسية المرتبطة">
                <div class="dc-head flex align-items-center justify-content-between" style="margin-bottom:6px;">
                  <span style="color:var(--violet-light, #818cf8); font-weight:800; font-size:0.88rem;">
                    <i class="fa-solid fa-code-branch"></i> المهمة الرئيسية المرتبطة
                  </span>
                  <span style="font-size:0.75rem; color:var(--text-2); display:flex; align-items:center; gap:4px;">
                    انقر للفتح <i class="fa-solid fa-chevron-left"></i>
                  </span>
                </div>
                <div style="font-size:0.95rem; font-weight:800; color:var(--text);">
                  {{ selectedTask.parent?.title || getTaskTitle(selectedTask.parent_id) }}
                </div>
              </div>

              <!-- Client Review Interactive Actions (للعميل فقط) -->
              <div class="drawer-card client-review-actions-card" *ngIf="isClient()" style="background:linear-gradient(135deg, rgba(6,182,212,0.12), rgba(99,102,241,0.12)); border:1px solid rgba(6,182,212,0.3); border-radius:14px; padding:16px;">
                <div class="dc-head" style="color:#67e8f9; font-weight:800; font-size:0.95rem; margin-bottom:8px;">
                  <i class="fa-solid fa-stamp"></i> حالة اعتماد وتفاعل العميل
                </div>

                <!-- If task is already approved/done -->
                <div *ngIf="['done', 'approved', 'completed'].includes(selectedTask.status)" style="display:flex; align-items:center; gap:10px; background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.3); padding:12px 16px; border-radius:12px; color:#34d399; font-weight:800; font-size:0.9rem;">
                  <i class="fa-solid fa-shield-check" style="font-size:1.2rem;"></i>
                  <span>تم اعتماد وموافقة العميل على هذه المهمة بنجاح ✅</span>
                </div>

                <!-- If task needs client action / review -->
                <ng-container *ngIf="!['done', 'approved', 'completed'].includes(selectedTask.status)">
                  <p style="font-size:0.82rem; color:var(--text-2); margin-bottom:12px;">يمكنك كعميل اعتماد المهمة للبدء في تنفيذ الخطوات التالية أو طلب تعديلات ملحوظة:</p>
                  <div class="client-actions-row" style="display:flex; gap:10px;">
                    <button type="button" class="btn btn-emerald" (click)="approveTaskByClient(selectedTask)" style="flex:1; padding:12px; font-size:0.86rem; font-weight:800; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:8px; cursor:pointer; background:linear-gradient(135deg, #10b981, #059669); color:#fff; border:none; box-shadow:0 4px 14px rgba(16,185,129,0.35);">
                      <i class="fa-solid fa-circle-check"></i> اعتماد وموافقة على المهمة
                    </button>
                    <button type="button" class="btn btn-amber" (click)="openRevisionModal()" style="flex:1; padding:12px; font-size:0.86rem; font-weight:800; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:8px; cursor:pointer; background:linear-gradient(135deg, #f59e0b, #d97706); color:#fff; border:none; box-shadow:0 4px 14px rgba(245,158,11,0.35);">
                      <i class="fa-solid fa-pen-to-square"></i> طلب تعديلات
                    </button>
                  </div>
                </ng-container>
              </div>

              <!-- Pipeline Progress Switcher (الحالة / مرحلة التنفيذ - بالقمة) -->
              <div class="drawer-card pipeline-card" *ngIf="!isClient()">
                <div class="dc-head"><i class="fa-solid fa-bars-progress"></i> مرحلة التنفيذ (تعديل الحالة)</div>
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

              <!-- Full Pricing Margin Hero Card (للإدارة والأدمن فقط) -->
              <div class="pricing-hero-card" *ngIf="isAdminOrManager() && (selectedTask.client_price > 0 || selectedTask.employee_price > 0)">
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

              <!-- Employee-Only Pricing Card (للموظف فقط) -->
              <div class="drawer-card" *ngIf="isEmployee() && selectedTask.employee_price > 0">
                <div class="dc-head"><i class="fa-solid fa-laptop-code" style="color:var(--amber)"></i> المستحق المالي للمهمة</div>
                <div style="font-size:1.25rem; font-weight:800; color:var(--amber); margin-top:4px;">
                  {{ selectedTask.employee_price | number:'1.2-2' }} <small style="font-size:0.75rem;">EGP</small>
                </div>
              </div>

              <!-- Client-Only Pricing Card (للعميل فقط) -->
              <div class="drawer-card" *ngIf="isClient() && selectedTask.client_price > 0">
                <div class="dc-head"><i class="fa-solid fa-user-tie" style="color:var(--teal)"></i> سعر المهمة</div>
                <div style="font-size:1.25rem; font-weight:800; color:var(--teal); margin-top:4px;">
                  {{ selectedTask.client_price | number:'1.2-2' }} <small style="font-size:0.75rem;">EGP</small>
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
                <div class="team-assign-container" style="display:flex; flex-direction:column; gap:12px; margin-top:6px;">

                  <!-- PrimeNG Grouped MultiSelect Dropdown -->
                  <div class="assign-user-picker">
                    <p-multiSelect
                      [options]="groupedUsers"
                      [group]="true"
                      [filter]="true"
                      filterBy="label"
                      [(ngModel)]="selectedTaskUserIds"
                      (onChange)="onMultiSelectUserChange($event)"
                      placeholder="+ اختر الموظفين المكلفين بالمهمة (متعدد)..."
                      styleClass="w-full prime-luxury-multiselect"
                      panelStyleClass="prime-luxury-multiselect-panel"
                      [display]="'chip'"
                      [showClear]="true"
                    >
                      <ng-template let-group pTemplate="group">
                        <div class="p-group-header">
                          <i class="fa-solid fa-layer-group" style="color:var(--violet-light);"></i>
                          <span>{{ group.label }}</span>
                        </div>
                      </ng-template>
                      <ng-template let-item pTemplate="item">
                        <div class="p-item-row" style="display:flex; align-items:center; gap:9px; padding:3px 0;">
                          <div class="tc-av-mini" style="width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg, var(--violet), var(--teal)); color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:800;">
                            {{ item.label.charAt(0) }}
                          </div>
                          <div style="display:flex; flex-direction:column;">
                            <span class="p-item-name" style="font-weight:700; color:var(--text); font-size:0.84rem;">{{ item.label }}</span>
                            <small class="p-item-email" *ngIf="item.email" style="color:var(--text-2); font-size:0.72rem;">{{ item.email }}</small>
                          </div>
                        </div>
                      </ng-template>
                    </p-multiSelect>
                  </div>

                  <!-- Assigned Team Members Chips (Placed ON BOTTOM) -->
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

                </div>
              </div>

              <!-- Attachments with Client Visibility Controls -->
              <div class="drawer-card">
                <div class="dc-head"><i class="fa-solid fa-paperclip"></i> المرفقات والملفات</div>
                <div class="att-grid" *ngIf="getTaskAttachmentsForUser(selectedTask).length > 0">
                  <div *ngFor="let att of getTaskAttachmentsForUser(selectedTask)" class="att-item">
                    <div class="att-img-wrap" *ngIf="isImage(att)">
                      <img
                        [src]="getFileUrl(att)"
                        class="att-img"
                        (click)="expandImage(getFileUrl(att), $event)"
                        (error)="handleImageError($event)"
                        alt="مرفق"
                      />
                      <!-- Delete Button on Top Left -->
                      <button class="att-del-btn" *ngIf="!isClient()" (click)="deleteAttachment(selectedTask, att, $event)" title="حذف المرفق">
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                      <!-- Client Visibility Pill Badge at Bottom Center -->
                      <button 
                        type="button" 
                        class="att-vis-btn" 
                        *ngIf="!isClient()"
                        [class.is-vis]="att.visible_to_client !== false" 
                        (click)="toggleAttachmentVisibility(selectedTask, att, $event)" 
                        [title]="att.visible_to_client !== false ? 'المرفق مرئي للعميل (انقر للتغيير إلى داخلي)' : 'المرفق داخلي فقط (انقر للتغيير إلى مرئي للعميل)'"
                      >
                        <i class="fa-solid" [ngClass]="att.visible_to_client !== false ? 'fa-eye' : 'fa-eye-slash'"></i>
                        <span>{{ att.visible_to_client !== false ? 'مرئي للعميل' : 'داخلي فقط' }}</span>
                      </button>
                    </div>
                    <div *ngIf="!isImage(att)" class="att-doc" style="position:relative;">
                      <i class="fa-solid fa-file-pdf"></i>
                      <span>{{ att.file_name || att.name || 'مستند' }}</span>
                      <button 
                        type="button" 
                        class="att-vis-btn-doc" 
                        *ngIf="!isClient()"
                        [class.is-vis]="att.visible_to_client !== false" 
                        (click)="toggleAttachmentVisibility(selectedTask, att, $event)"
                        style="padding:2px 7px; border-radius:6px; font-size:0.65rem; font-weight:700; border:none; cursor:pointer; margin-right:6px;"
                        [style.background]="att.visible_to_client !== false ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'"
                        [style.color]="att.visible_to_client !== false ? '#34d399' : '#fbbf24'"
                      >
                        <i class="fa-solid" [ngClass]="att.visible_to_client !== false ? 'fa-eye' : 'fa-eye-slash'"></i>
                        <span>{{ att.visible_to_client !== false ? 'مرئي للعميل' : 'داخلي' }}</span>
                      </button>
                      <button class="att-del-btn" *ngIf="!isClient()" (click)="deleteAttachment(selectedTask, att, $event)" title="حذف المرفق">
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="upload-zone-modern" *ngIf="!isClient()" (click)="fileInput.click()">
                  <input type="file" #fileInput (change)="onFileSelected($event)" style="display:none" />
                  <div class="uz-icon"><i class="fa-solid fa-cloud-arrow-up"></i></div>
                  <div class="uz-text">
                    <strong>اضغط لرفع ملف أو سحب وإسقاط المستند هنا</strong>
                    <small>يدعم الصور والملفات المرفقة (PNG, JPG, PDF)</small>
                  </div>
                </div>
                
                <!-- Client Visibility Checkbox for Upload -->
                <div style="margin-top:10px; display:flex; align-items:center; justify-content:flex-end;" *ngIf="!isClient()">
                  <label style="display:inline-flex; align-items:center; gap:6px; font-size:0.8rem; color:var(--text-2); cursor:pointer; background:rgba(255,255,255,0.03); padding:6px 12px; border-radius:8px; border:1px solid var(--border);">
                    <input type="checkbox" [(ngModel)]="newFileVisibleToClient" style="accent-color:var(--teal); cursor:pointer;" />
                    <span>إظهار الملف المرفوع للعميل 👁️</span>
                  </label>
                </div>
              </div>

              <!-- Embedded Subtasks Checklist Box -->
              <div class="drawer-card subtasks-embedded-card" *ngIf="(selectedTask.subtasks || []).length > 0">
                <div class="dc-head flex-between" style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-weight:800; color:var(--teal-light, #38bdf8);"><i class="fa-solid fa-list-check"></i> المهام والخطوات الفرعية التابعة للمهمة</span>
                  <span class="badge-sub-progress" style="background:rgba(99,102,241,0.12); color:var(--violet-light); font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:100px; border:1px solid rgba(99,102,241,0.25);">
                    {{ getCompletedSubtasksCount(selectedTask) }} من {{ selectedTask.subtasks.length }} مكتملة ({{ getSubtasksProgressPercent(selectedTask) }}%)
                  </span>
                </div>
                <div class="subtask-progress-bar" style="height:8px; background:rgba(255,255,255,0.08); border-radius:100px; overflow:hidden; margin:10px 0;">
                  <div class="subtask-progress-fill" [style.width.%]="getSubtasksProgressPercent(selectedTask)" style="height:100%; background:linear-gradient(90deg, var(--teal, #06b6d4), var(--emerald, #10b981)); border-radius:100px;"></div>
                </div>
                <div class="subtask-list" style="display:flex; flex-direction:column; gap:8px;">
                  <div class="subtask-item-row" *ngFor="let st of selectedTask.subtasks" [class.completed]="st.status === 'done' || st.is_completed" style="display:flex; align-items:center; gap:10px; padding:10px 12px; background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius:10px;">
                    <input type="checkbox" [checked]="st.status === 'done' || st.is_completed" (change)="toggleSubtaskStatus(selectedTask, st)" style="width:16px; height:16px; cursor:pointer;" />
                    <span class="st-title" style="flex:1; font-size:0.86rem; font-weight:700; color:var(--text);" [style.text-decoration]="(st.status === 'done' || st.is_completed) ? 'line-through' : 'none'">{{ st.title }}</span>
                    <span class="st-status" [class.done]="st.status === 'done' || st.is_completed" style="font-size:0.72rem; font-weight:800; padding:3px 8px; border-radius:100px;" [style.background]="(st.status === 'done' || st.is_completed) ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)'" [style.color]="(st.status === 'done' || st.is_completed) ? '#34d399' : '#fbbf24'">
                      {{ (st.status === 'done' || st.is_completed) ? 'مكتملة' : 'قيد التنفيذ' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Comments & Discussion with Client Visibility Controls -->
              <div class="drawer-card">
                <div class="dc-head"><i class="fa-solid fa-comments"></i> التعليقات والملاحظات</div>
                <div class="notes-timeline">
                  <div class="note-bubble" *ngFor="let note of getTaskNotesForUser(selectedTask)">
                    <div class="note-av">{{ note.user?.name?.charAt(0) || 'U' }}</div>
                    <div class="note-content">
                      <div class="note-meta" style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                        <div>
                          <strong class="note-author">{{ note.user?.name || 'مستخدم' }}</strong>
                          <span class="note-time" style="margin-right:8px;">{{ note.created_at | date:'short' }}</span>
                        </div>
                        <!-- Note Visibility Toggle Badge -->
                        <span 
                          class="note-vis-chip" 
                          *ngIf="!isClient()" 
                          (click)="toggleNoteVisibility(selectedTask, note)"
                          style="font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:100px; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.2s;"
                          [style.background]="note.visible_to_client !== false ? 'rgba(6,182,212,0.18)' : 'rgba(245,158,11,0.18)'"
                          [style.color]="note.visible_to_client !== false ? '#67e8f9' : '#fbbf24'"
                          [style.border]="note.visible_to_client !== false ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(245,158,11,0.3)'"
                          [title]="note.visible_to_client !== false ? 'تعليق مرئي للعميل (انقر لتغييره لتعليق داخلي)' : 'تعليق داخلي فقط (انقر لتغييره لمرئي للعميل)'"
                        >
                          <i class="fa-solid" [ngClass]="note.visible_to_client !== false ? 'fa-eye' : 'fa-eye-slash'"></i>
                          <span>{{ note.visible_to_client !== false ? 'مرئي للعميل' : 'داخلي للفريق' }}</span>
                        </span>
                      </div>
                      <div class="note-text" style="margin-top:4px;">{{ note.note }}</div>
                    </div>
                  </div>
                  <div class="notes-empty" *ngIf="!getTaskNotesForUser(selectedTask).length">
                    <i class="fa-regular fa-comments"></i> لا توجد تعليقات بعد... كن أول من يضيف تعليقاً!
                  </div>
                </div>
                
                <div class="add-note-box" style="display:flex; flex-direction:column; gap:10px;">
                  <textarea
                    [(ngModel)]="newNoteText"
                    placeholder="اكتب تعليقاً أو ملاحظة..."
                    rows="2"
                    dir="rtl"
                  ></textarea>
                  <div style="display:flex; align-items:center; justify-content:space-between;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:0.8rem; color:var(--text-2); cursor:pointer;" *ngIf="!isClient()">
                      <input type="checkbox" [(ngModel)]="newNoteVisibleToClient" style="accent-color:var(--violet); cursor:pointer;" />
                      <span>إظهار التعليق للعميل 👁️</span>
                    </label>
                    <button class="btn-send-note-modern" (click)="submitNote()" [disabled]="!newNoteText.trim()">
                      <i class="fa-solid fa-paper-plane"></i> إرسال التعليق
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- TAB 2: SUBTASKS MANAGEMENT IN DRAWER -->
            <div class="drawer-tab-content" *ngIf="activeDrawerTab === 'subtasks'">
              <div class="subtasks-drawer-view" dir="rtl" style="display:flex; flex-direction:column; gap:16px;">

                <!-- Progress & Stats Header -->
                <div class="subtask-progress-card" style="background:rgba(99,102,241,0.06); padding:16px 18px; border-radius:16px; border:1px solid rgba(99,102,241,0.2);">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <strong style="font-size:0.92rem; color:var(--text);"><i class="fa-solid fa-list-check" style="color:var(--violet-light)"></i> إنجاز المهام الفرعية</strong>
                    <span class="subtask-progress-pill" *ngIf="(selectedTask.subtasks || []).length">
                      {{ getCompletedSubtasksCount(selectedTask) }} من {{ selectedTask.subtasks.length }} مكتملة ({{ getSubtasksProgressPercent(selectedTask) }}%)
                    </span>
                  </div>
                  <div class="subtask-progress-bar" style="height:8px; margin:0;" *ngIf="(selectedTask.subtasks || []).length">
                    <div class="subtask-progress-fill" [style.width.%]="getSubtasksProgressPercent(selectedTask)"></div>
                  </div>
                </div>

                <!-- Subtasks List (Clickable items to view details right inside drawer) -->
                <div class="drawer-card">
                  <div class="dc-head flex align-items-center justify-content-between">
                    <span>قائمة المهام الفرعية</span>
                    <button class="btn-open-st-modal" (click)="showNewSubtaskForm = !showNewSubtaskForm" title="إضافة مهمة فرعية جديدة">
                      <i class="fa-solid fa-plus"></i> مهمة فرعية جديدة
                    </button>
                  </div>

                  <div class="subtask-list" *ngIf="(selectedTask.subtasks || []).length">
                    <div
                      class="subtask-item-clean"
                      *ngFor="let st of selectedTask.subtasks"
                      [class.active-st]="selectedSubtask?.id === st.id"
                      [class.completed]="st.status === 'done'"
                    >
                      <label class="st-checkbox-label">
                        <input
                          type="checkbox"
                          [checked]="st.status === 'done'"
                          (change)="toggleSubtaskStatus(selectedTask, st)"
                        />
                        <span class="st-checkmark"><i class="fa-solid fa-check"></i></span>
                      </label>
                      <span class="st-title-clean" (click)="selectSubtaskInDrawer(st)">
                        {{ st.title }}
                      </span>
                      <span class="priority-badge pb-mini" [class]="'pb-' + (st.priority || 'medium')">
                        {{ st.priority | uppercase }}
                      </span>
                      <button class="st-open-btn" (click)="selectSubtaskInDrawer(st)" title="عرض التفاصيل في نفس اللوحة">
                        <i class="fa-solid fa-chevron-left"></i>
                      </button>
                      <button class="st-del-btn" (click)="deleteSubtask(selectedTask, st)" title="حذف المهمة الفرعية">
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Add Step / Action Input Box -->
                  <div class="add-subtask-box">
                    <input
                      type="text"
                      class="st-input"
                      [(ngModel)]="newSubtaskTitle"
                      (keyup.enter)="addSubtask()"
                      placeholder="+ إضافة خطوة تنفيذ / بند جديد (Steps & Actions)..."
                    />
                    <button class="btn-add-st" (click)="addSubtask()" [disabled]="!newSubtaskTitle.trim()">
                      <i class="fa-solid fa-plus"></i> إضافة خطوة
                    </button>
                  </div>
                </div>

                <!-- Selected Subtask Full Details (Displayed right inside the same drawer) -->
                <div class="drawer-card" *ngIf="selectedSubtask" style="border:1px solid rgba(99,102,241,0.3); background:rgba(99,102,241,0.03);">
                  <div class="dc-head flex align-items-center justify-content-between">
                    <span><i class="fa-solid fa-circle-info" style="color:var(--violet-light)"></i> تفاصيل المهمة الفرعية: {{ selectedSubtask.title }}</span>
                    <span class="priority-badge" [class]="'pb-' + (selectedSubtask.priority || 'medium')">
                      <i class="fa-solid fa-bolt"></i> {{ (selectedSubtask.priority || 'medium') | uppercase }}
                    </span>
                  </div>

                  <!-- Subtask Description -->
                  <div class="scope-text" *ngIf="selectedSubtask.description || selectedSubtask.scope" style="font-size:0.86rem; line-height:1.5;">
                    {{ selectedSubtask.description || selectedSubtask.scope }}
                  </div>

                  <!-- Subtask Team Members -->
                  <div style="margin-top:8px;">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-2); margin-bottom:6px;"><i class="fa-solid fa-user"></i> الموظفون المكلفون:</div>
                    <div class="st-users-chips" *ngIf="(selectedSubtask.users || []).length">
                      <span class="st-user-tag" *ngFor="let u of selectedSubtask.users" style="padding:4px 8px; font-size:0.75rem;">
                        <i class="fa-solid fa-user"></i> {{ u.name }}
                      </span>
                    </div>
                    <div class="notes-empty" *ngIf="!(selectedSubtask.users || []).length" style="padding:2px 0;">
                      لا يوجد موظفين مكلفين حالياً
                    </div>
                  </div>

                  <!-- Subtask Attachments Grid -->
                  <div style="margin-top:8px;">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-2); margin-bottom:6px;"><i class="fa-solid fa-paperclip"></i> المرفقات والصور:</div>
                    <div class="att-grid" *ngIf="(selectedSubtask.attachments || []).length > 0">
                      <div *ngFor="let att of selectedSubtask.attachments" class="att-item">
                        <div class="att-img-wrap" *ngIf="isImage(att)">
                          <img [src]="getFileUrl(att)" class="att-img" (click)="expandImage(getFileUrl(att), $event)" (error)="handleImageError($event)" alt="مرفق" />
                          <button class="att-del-btn" (click)="deleteSubtaskAttachment(selectedSubtask, att, $event)" title="حذف المرفق"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                        <div *ngIf="!isImage(att)" class="att-doc" style="position:relative;">
                          <i class="fa-solid fa-file-pdf"></i>
                          <span>{{ att.file_name || att.name || 'مستند' }}</span>
                          <button class="att-del-btn" (click)="deleteSubtaskAttachment(selectedSubtask, att, $event)" title="حذف المرفق"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    </div>

                    <!-- Upload attachment to subtask -->
                    <div class="upload-zone-modern" (click)="drawerSubtaskFileInput.click()" style="margin-top:8px; padding:10px;">
                      <input type="file" #drawerSubtaskFileInput (change)="onSubtaskDetailFileSelected($event)" style="display:none" />
                      <div class="uz-icon"><i class="fa-solid fa-cloud-arrow-up"></i></div>
                      <div class="uz-text">
                        <strong>اضغط لرفع صورة أو مستند لهذه المهمة الفرعية</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Add New Detailed Subtask Section (In Drawer) -->
                <div class="drawer-card" *ngIf="showNewSubtaskForm">
                  <div class="dc-head"><i class="fa-solid fa-plus-circle"></i> إضافة مهمة فرعية تفصيلية جديدة</div>
                  <div style="display:flex; flex-direction:column; gap:12px;">
                    <div class="fg full">
                      <label class="fg-lbl">عنوان المهمة الفرعية <span class="req">*</span></label>
                      <input type="text" [(ngModel)]="subtaskForm.title" placeholder="أدخل العنوان..." class="w-full st-dialog-input">
                    </div>
                    <div class="fg full">
                      <label class="fg-lbl">الوصف والتفاصيل</label>
                      <textarea [(ngModel)]="subtaskForm.description" placeholder="اكتب المواصفات والتفاصيل..." rows="2" class="w-full st-dialog-textarea"></textarea>
                    </div>
                    <div class="form-grid">
                      <div class="fg">
                        <label class="fg-lbl">الأولوية</label>
                        <app-prime-picker-select
                          [(ngModel)]="subtaskForm.priority"
                          [items]="priorityList"
                          optionLabel="label"
                          optionValue="id"
                          placeholder="اختر الأولوية..."
                        ></app-prime-picker-select>
                      </div>
                      <div class="fg">
                        <label class="fg-lbl">إسناد لموظف</label>
                        <p-dropdown [options]="groupedUsers" [group]="true" [filter]="true" filterBy="label" placeholder="+ اختر موظف..." styleClass="w-full prime-grouped-dropdown" (onChange)="onSubtaskUserSelect($event)"></p-dropdown>
                      </div>
                    </div>
                    <div class="modal-ft" style="padding:10px 0 0 0; display:flex; justify-content:flex-end; gap:8px;">
                      <button class="btn-cancel" (click)="showNewSubtaskForm = false">إلغاء</button>
                      <button class="btn-save" (click)="saveFullSubtask()" [disabled]="!subtaskForm.title.trim()"><i class="fa-solid fa-check"></i> حفظ المهمة الفرعية</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- TAB 2: TASK ACTIVITY HISTORY -->
            <div class="drawer-tab-content" *ngIf="activeDrawerTab === 'history'">
              <div class="history-dialog-container" dir="rtl">

                <div class="history-subhd">
                  <span class="hist-count-pill"><i class="fa-solid fa-list-check"></i> {{ taskActivities.length }} أحداث مسجلة</span>
                  <span class="hist-tip"><i class="fa-solid fa-circle-info"></i> سجل التاريخ الشامل للمهمة الحالية</span>
                </div>

                <div class="activity-timeline-enhanced" *ngIf="taskActivities.length > 0">
                  <div class="act-enhanced-card" *ngFor="let act of taskActivities">
                    <div class="act-icon-box" [style.background]="act.color || '#6366f1'">
                      <i class="fa-solid" [class]="act.icon || 'fa-clock-rotate-left'"></i>
                    </div>
                    <div class="act-enhanced-content">
                      <div class="act-enhanced-head">
                        <span class="act-title-tag" [style.color]="act.color || '#818cf8'">{{ act.action_title || 'نشاط' }}</span>
                        <span class="act-time-pill"><i class="fa-regular fa-clock"></i> {{ act.created_at | date:'yyyy-MM-dd | hh:mm a' }}</span>
                      </div>
                      <div class="act-enhanced-desc">{{ act.description }}</div>
                      <div class="act-enhanced-footer">
                        <span class="act-author-chip"><i class="fa-solid fa-user"></i> {{ act.user_name || 'النظام' }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="notes-empty" *ngIf="taskActivities.length === 0" style="padding: 40px 0;">
                  <i class="fa-solid fa-history" style="font-size: 2rem; color: var(--violet-light); margin-bottom: 10px;"></i>
                  <p>لا توجد سجلات تغييرات حتى الآن للمهمة الحالية</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- History Audit Log Modal Dialog -->
      <p-dialog
        header="سجل النشاط والتاريخ المفصل للمهمة - {{ selectedTask?.title }}"
        [(visible)]="showHistoryModal"
        [modal]="true"
        [appendTo]="'body'"
        [dismissableMask]="true"
        [style]="{ width: '680px', 'max-width': '95vw' }"
        styleClass="crm-modal"
      >
        <div class="history-dialog-container" dir="rtl">

          <div class="history-subhd">
            <span class="hist-count-pill"><i class="fa-solid fa-list-check"></i> {{ taskActivities.length }} أحداث مسجلة</span>
            <span class="hist-tip"><i class="fa-solid fa-circle-info"></i> يعرض جميع الأنشطة والتعليقات والمرفقات بترتيب زمني</span>
          </div>

          <div class="activity-timeline-enhanced" *ngIf="taskActivities.length > 0">
            <div class="act-enhanced-card" *ngFor="let act of taskActivities">
              <div class="act-icon-box" [style.background]="act.color || '#6366f1'">
                <i class="fa-solid" [class]="act.icon || 'fa-clock-rotate-left'"></i>
              </div>
              <div class="act-enhanced-content">
                <div class="act-enhanced-head">
                  <span class="act-title-tag" [style.color]="act.color || '#818cf8'">{{ act.action_title || 'نشاط' }}</span>
                  <span class="act-time-pill"><i class="fa-regular fa-clock"></i> {{ act.created_at | date:'yyyy-MM-dd | hh:mm a' }}</span>
                </div>
                <div class="act-enhanced-desc">{{ act.description }}</div>
                <div class="act-enhanced-footer">
                  <span class="act-author-chip"><i class="fa-solid fa-user"></i> {{ act.user_name || 'النظام' }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="notes-empty" *ngIf="taskActivities.length === 0" style="padding: 40px 0;">
            <i class="fa-solid fa-history" style="font-size: 2rem; color: var(--violet-light); margin-bottom: 10px;"></i>
            <p>لا توجد سجلات تغييرات حتى الآن للمهمة الحالية</p>
          </div>
        </div>
      </p-dialog>

      <!-- Subtask View & Edit Detail Modal Dialog -->
      <p-dialog
        [header]="'تفاصيل المهمة الفرعية - ' + (selectedSubtask?.title || '')"
        [(visible)]="showSubtaskDetailModal"
        [modal]="true"
        [appendTo]="'body'"
        [dismissableMask]="true"
        [style]="{ width: '600px', maxWidth: '95vw' }"
        styleClass="custom-dark-dialog"
      >
        <div class="subtask-detail-modal-body" *ngIf="selectedSubtask" dir="rtl" style="display:flex; flex-direction:column; gap:16px; padding-top:8px;">

          <!-- Title & Priority Header Card -->
          <div class="st-hd-card" style="background:rgba(99,102,241,0.06); padding:16px 18px; border-radius:14px; border:1px solid rgba(99,102,241,0.2); display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h4 style="margin:0 0 6px 0; font-size:1.05rem; font-weight:800; color:var(--text);">{{ selectedSubtask.title }}</h4>
              <span class="priority-badge" [class]="'pb-' + (selectedSubtask.priority || 'medium')">
                <i class="fa-solid fa-bolt"></i> {{ (selectedSubtask.priority || 'medium') | uppercase }}
              </span>
            </div>
            <button
              class="ps-step"
              [class.active]="selectedSubtask.status === 'done'"
              (click)="toggleSubtaskStatus(selectedTask, selectedSubtask)"
              style="padding:8px 16px; border-radius:10px; border:none; cursor:pointer; font-weight:700; display:inline-flex; align-items:center; gap:6px;"
            >
              <i class="fa-solid" [class.fa-check-double]="selectedSubtask.status === 'done'" [class.fa-circle]="selectedSubtask.status !== 'done'"></i>
              {{ selectedSubtask.status === 'done' ? 'مكتملة' : 'قيد التنفيذ' }}
            </button>
          </div>

          <!-- Description Section -->
          <div class="drawer-card" *ngIf="selectedSubtask.description || selectedSubtask.scope">
            <div class="dc-head"><i class="fa-solid fa-file-lines"></i> الوصف والمواصفات التفصيلية</div>
            <div class="dc-body scope-text" style="font-size:0.88rem; line-height:1.6; white-space:pre-wrap;">{{ selectedSubtask.description || selectedSubtask.scope }}</div>
          </div>

          <!-- Assigned Team Section -->
          <div class="drawer-card">
            <div class="dc-head"><i class="fa-solid fa-user-plus"></i> الموظفون المكلفون بالمهمة الفرعية</div>
            <div class="team-chips-grid" style="display:flex; flex-wrap:wrap; gap:8px;">
              <div class="team-chip-card" *ngFor="let u of (selectedSubtask.users || [])">
                <div class="tc-av">{{ u.name?.charAt(0) }}</div>
                <div class="tc-info">
                  <span class="tc-name">{{ u.name }}</span>
                  <small class="tc-role">{{ u.email || 'عضو الفريق' }}</small>
                </div>
              </div>
              <div class="notes-empty" *ngIf="!(selectedSubtask.users || []).length" style="padding:4px 0;">
                لا يوجد موظف مكلف حالياً بهذه المهمة الفرعية
              </div>
            </div>
          </div>

          <!-- Subtask Attachments Grid & Upload -->
          <div class="drawer-card">
            <div class="dc-head"><i class="fa-solid fa-paperclip"></i> المرفقات والصور للمهمة الفرعية</div>
            <div class="att-grid" *ngIf="(selectedSubtask.attachments || []).length > 0">
              <div *ngFor="let att of selectedSubtask.attachments" class="att-item">
                <div class="att-img-wrap" *ngIf="isImage(att)">
                  <img
                    [src]="getFileUrl(att)"
                    class="att-img"
                    (click)="expandImage(getFileUrl(att), $event)"
                    (error)="handleImageError($event)"
                    alt="مرفق"
                  />
                  <button class="att-del-btn" (click)="deleteSubtaskAttachment(selectedSubtask, att, $event)" title="حذف المرفق">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
                <div *ngIf="!isImage(att)" class="att-doc" style="position:relative;">
                  <i class="fa-solid fa-file-pdf"></i>
                  <span>{{ att.file_name || att.name || 'مستند' }}</span>
                  <button class="att-del-btn" (click)="deleteSubtaskAttachment(selectedSubtask, att, $event)" title="حذف المرفق">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Subtask File Upload Zone -->
            <div class="upload-zone-modern" (click)="subtaskDetailFileInput.click()">
              <input type="file" #subtaskDetailFileInput (change)="onSubtaskDetailFileSelected($event)" style="display:none" />
              <div class="uz-icon"><i class="fa-solid fa-cloud-arrow-up"></i></div>
              <div class="uz-text">
                <strong>اضغط لرفع صورة أو مستند للمهمة الفرعية الحالية</strong>
                <small>يدعم جميع أنواع الصور والملفات</small>
              </div>
            </div>
          </div>

        </div>
      </p-dialog>

      <!-- ── SUBTASK CREATION SIDE DRAWER (إضافة مهمة فرعية جديدة من الجانب) ── -->
      <div class="drawer-backdrop" *ngIf="showSubtaskModal" (click)="showSubtaskModal = false">
        <div class="detail-drawer glass-panel" (click)="$event.stopPropagation()" style="width: 580px;">
          <!-- Drawer Header -->
          <div class="drawer-hd">
            <div class="drawer-hd-left">
              <div class="drawer-task-av">
                <i class="fa-solid fa-code-branch"></i>
              </div>
              <div class="drawer-hd-text">
                <div class="drawer-title">إضافة مهمة فرعية جديدة</div>
                <div class="drawer-meta">مرتبطة بالمهمة الرئيسية: {{ selectedTask?.title }}</div>
              </div>
            </div>
            <button type="button" class="icon-action-btn" (click)="showSubtaskModal = false">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Drawer Body -->
          <div class="drawer-body">
            <!-- Title -->
            <div class="fg full">
              <label class="fg-lbl" style="font-weight:700; font-size:0.85rem; margin-bottom:4px; display:block;"><i class="fa-solid fa-heading" style="color:var(--violet-light)"></i> عنوان المهمة الفرعية <span class="req" style="color:#f43f5e">*</span></label>
              <input type="text" [(ngModel)]="subtaskForm.title" placeholder="أدخل اسم وعنوان المهمة الفرعية..." class="w-full st-dialog-input">
            </div>

            <!-- Description -->
            <div class="fg full">
              <label class="fg-lbl" style="font-weight:700; font-size:0.85rem; margin-bottom:4px; display:block;"><i class="fa-solid fa-file-lines" style="color:var(--violet-light)"></i> الوصف والتفاصيل</label>
              <textarea [(ngModel)]="subtaskForm.description" placeholder="أدخل تفاصيل ومواصفات هذه المهمة الفرعية..." rows="3" class="w-full st-dialog-textarea"></textarea>
            </div>

            <!-- Priority & Assign Grid -->
            <div class="form-grid">
              <!-- Priority Selector -->
              <div class="fg">
                <label class="fg-lbl" style="font-weight:700; font-size:0.85rem; margin-bottom:4px; display:block;"><i class="fa-solid fa-bolt" style="color:var(--amber)"></i> الأولوية</label>
                <app-prime-picker-select
                  [(ngModel)]="subtaskForm.priority"
                  [items]="priorityList"
                  optionLabel="label"
                  optionValue="id"
                  placeholder="اختر الأولوية..."
                ></app-prime-picker-select>
              </div>

              <!-- Employee Assign Dropdown -->
              <div class="fg">
                <label class="fg-lbl" style="font-weight:700; font-size:0.85rem; margin-bottom:4px; display:block;"><i class="fa-solid fa-user-plus" style="color:var(--teal)"></i> إسناد لموظف</label>
                <p-dropdown
                  [options]="groupedUsers"
                  [group]="true"
                  [filter]="true"
                  filterBy="label"
                  placeholder="+ اختر موظف..."
                  styleClass="w-full prime-grouped-dropdown"
                  (onChange)="onSubtaskUserSelect($event)"
                  appendTo="body"
                >
                  <ng-template let-group pTemplate="group">
                    <div class="p-group-header">
                      <i class="fa-solid fa-layer-group"></i>
                      <span>{{ group.label }}</span>
                    </div>
                  </ng-template>
                  <ng-template let-item pTemplate="item">
                    <div class="p-item-row">
                      <span class="p-item-name">{{ item.label }}</span>
                      <small class="p-item-email" *ngIf="item.email">{{ item.email }}</small>
                    </div>
                  </ng-template>
                </p-dropdown>
              </div>
            </div>

            <!-- Selected Assignees Chips -->
            <div class="subtask-assigned-chips" *ngIf="subtaskForm.user_ids.length" style="display:flex; flex-wrap:wrap; gap:6px;">
              <span class="tc-chip" *ngFor="let uid of subtaskForm.user_ids" style="background:rgba(99,102,241,0.15); color:#818cf8; padding:4px 10px; border-radius:8px; font-size:0.75rem; display:inline-flex; align-items:center; gap:6px;">
                <i class="fa-solid fa-user"></i> {{ getUserName(uid) }}
                <i class="fa-solid fa-xmark remove-chip" (click)="removeSubtaskUser(uid)" style="cursor:pointer; color:#f43f5e"></i>
              </span>
            </div>

            <!-- File Upload -->
            <div class="fg full">
              <label class="fg-lbl" style="font-weight:700; font-size:0.82rem; margin-bottom:4px; display:block;"><i class="fa-solid fa-image" style="color:var(--cyan)"></i> صورة أو مرفق المهمة الفرعية</label>
              <div class="upload-zone-modern" (click)="stFileInput.click()">
                <input type="file" #stFileInput (change)="onSubtaskFileSelected($event)" style="display:none" />
                <div class="uz-icon"><i class="fa-solid fa-cloud-arrow-up"></i></div>
                <div class="uz-text">
                  <strong *ngIf="!subtaskForm.file">اضغط لرفع صورة أو مرفق للمهمة الفرعية</strong>
                  <strong *ngIf="subtaskForm.file" class="teal" style="color:#2dd4bf">{{ subtaskForm.file.name }}</strong>
                  <small>يدعم جميع أنواع الصور والملفات</small>
                </div>
              </div>
              <div class="st-img-preview" *ngIf="subtaskFilePreview" style="margin-top:10px; text-align:center;">
                <img [src]="subtaskFilePreview" style="max-height:120px; border-radius:10px; border:1px solid rgba(99,102,241,0.3);" alt="Preview">
              </div>
            </div>

            <!-- Footer Actions -->
            <div style="display:flex; justify-content:flex-end; gap:10px; border-top:1px solid rgba(255,255,255,0.08); padding-top:16px; margin-top:10px;">
              <button type="button" class="btn-cancel" (click)="showSubtaskModal = false">إلغاء</button>
              <button type="button" class="btn-save" (click)="saveFullSubtask()" [disabled]="!subtaskForm.title.trim()">
                <i class="fa-solid fa-check"></i> حفظ المهمة الفرعية
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ── CREATE TASK SIDE DRAWER (إنشاء مهمة جديدة من الجانب) ── -->
      <div class="drawer-backdrop" *ngIf="showCreateModal" (click)="showCreateModal = false">
        <div class="detail-drawer glass-panel" (click)="$event.stopPropagation()" style="width: 620px;">
          <!-- Drawer Header -->
          <div class="drawer-hd">
            <div class="drawer-hd-left">
              <div class="drawer-task-av">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div class="drawer-hd-text">
                <div class="drawer-title">إنشاء مهمة جديدة</div>
                <div class="drawer-meta">إضافة وتسعير وتكليف مهمة في النظام</div>
              </div>
            </div>
            <button type="button" class="icon-action-btn" (click)="showCreateModal = false">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Drawer Body Form -->
          <div class="drawer-body">
            <form [formGroup]="taskForm" (ngSubmit)="saveTask()">
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

              <div style="display:flex; justify-content:flex-end; gap:10px; border-top:1px solid rgba(255,255,255,0.08); padding-top:16px; margin-top:20px;">
                <button type="button" class="btn-cancel" (click)="showCreateModal = false">إلغاء</button>
                <button type="submit" class="btn-save" [disabled]="taskForm.invalid || loading">
                  <i class="fa-solid fa-floppy-disk"></i>
                  {{ loading ? 'جاري الحفظ...' : 'إنشاء المهمة' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- ── CLIENT REVISION SIDE DRAWER (طلب تعديلات العميل من الجانب) ── -->
      <div class="drawer-backdrop" *ngIf="showRevisionModal" (click)="showRevisionModal = false">
        <div class="detail-drawer glass-panel" (click)="$event.stopPropagation()" style="width: 520px;">
          <!-- Drawer Header -->
          <div class="drawer-hd">
            <div class="drawer-hd-left">
              <div class="drawer-task-av" style="background:linear-gradient(135deg, var(--amber), #d97706)">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <div class="drawer-hd-text">
                <div class="drawer-title">طلب تعديلات من العميل</div>
                <div class="drawer-meta">كتابة الملاحظات المطلوب تنفيذها</div>
              </div>
            </div>
            <button type="button" class="icon-action-btn" (click)="showRevisionModal = false">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Drawer Body -->
          <div class="drawer-body">
            <p style="font-size:0.88rem; color:var(--text-2); margin-bottom:14px; line-height:1.6;">يرجى كتابة التعديلات والملاحظات المطلوبة على المهمة ليقوم فريق العمل بتنفيذها فوراً:</p>
            <div class="fg full" style="margin-bottom:16px;">
              <label class="fg-lbl" style="font-weight:700; font-size:0.85rem; margin-bottom:6px; display:block;"><i class="fa-solid fa-pen-to-square" style="color:var(--amber)"></i> تفاصيل التعديل المطلوب <span style="color:var(--rose)">*</span></label>
              <textarea [(ngModel)]="revisionNotes" pInputTextarea rows="4" placeholder="مثال: يرجى تعديل الألوان في التصميم وتغيير الشعار في الصورة الثانية..." style="width:100%; border-radius:12px; padding:12px; background:var(--bg-input); border:1px solid var(--border); color:var(--text); font-family:inherit; outline:none;"></textarea>
            </div>
            <div style="display:flex; justify-content:flex-end; gap:10px; border-top:1px solid rgba(255,255,255,0.08); padding-top:16px;">
              <button type="button" class="btn-cancel" (click)="showRevisionModal = false">إلغاء</button>
              <button type="button" class="btn-save" style="background:linear-gradient(135deg, var(--amber), #d97706); box-shadow:0 4px 16px rgba(245,158,11,0.35);" [disabled]="!revisionNotes.trim()" (click)="submitRevisionByClient()">
                <i class="fa-solid fa-paper-plane"></i> إرسال طلب التعديل
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ── LIGHTBOX ────────────────────────────────────────────── -->
      <div class="lightbox" *ngIf="expandedImageUrl" (click)="expandedImageUrl = null">
        <img [src]="expandedImageUrl" />
        <button class="lb-close"><i class="fa-solid fa-xmark"></i></button>
      </div>

    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }

    /* PRIMENG UNIVERSAL TOOLBAR */
    .prime-board-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 16px 20px;
      margin-bottom: 24px;
      border-radius: var(--r-xl, 20px);
      background: var(--bg-card, rgba(18,18,30,0.7));
      border: 1px solid var(--border, rgba(255,255,255,0.1));
      backdrop-filter: blur(16px);
      box-shadow: var(--shadow-sm);
    }
    .toolbar-search-box {
      position: relative;
      flex: 1;
      min-width: 260px;
    }
    .toolbar-search-box .search-icon {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--violet, #818cf8);
      font-size: 0.95rem;
      pointer-events: none;
    }
    .toolbar-search-input {
      width: 100%;
      padding: 11px 42px 11px 38px;
      border-radius: 14px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border, rgba(255,255,255,0.1));
      color: #fff;
      font-size: 0.88rem;
      font-weight: 600;
      font-family: inherit;
      outline: none;
      transition: all 0.2s ease;
    }
    .toolbar-search-input:focus {
      border-color: var(--violet, #6366f1);
      box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
    }
    .btn-clear-search {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-3);
      cursor: pointer;
      padding: 4px;
      font-size: 0.85rem;
    }
    .toolbar-actions-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .btn-trigger-filters {
      padding: 11px 22px;
      border-radius: 14px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff !important;
      font-size: 0.9rem;
      font-weight: 800;
      font-family: inherit;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.25s ease;
      box-shadow: 0 4px 18px rgba(99, 102, 241, 0.4);
    }
    .btn-trigger-filters:hover {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
    }
    .btn-trigger-filters.has-active {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 6px 22px rgba(124, 58, 237, 0.5);
    }
    .btn-trigger-filters .icon-sliders {
      color: #ffffff;
      font-size: 1rem;
    }
    .btn-trigger-filters .active-badge {
      background: #ffffff;
      color: #4f46e5;
      font-size: 0.78rem;
      font-weight: 900;
      padding: 2px 9px;
      border-radius: 100px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }

    /* SIDE FILTER MODAL DRAWER (EXACT SAME APPEARANCE AND ANIMATION AS TASK DETAIL DRAWER) */
    .filter-drawer-overlay {
      position: fixed;
      inset: 0;
      z-index: 100000;
      background: rgba(9, 9, 24, 0.45);
      backdrop-filter: none !important;
      display: flex;
      justify-content: flex-start;
      direction: rtl;
    }
    .filter-drawer-content {
      width: 440px;
      max-width: 95vw;
      height: 100vh;
      background: linear-gradient(165deg, rgba(15, 16, 38, 0.98) 0%, rgba(8, 9, 24, 0.99) 100%);
      border-left: 1px solid rgba(99, 102, 241, 0.25);
      display: flex;
      flex-direction: column;
      animation: drawerFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: -15px 0 50px rgba(0, 0, 0, 0.35);
    }
    body.light-theme .filter-drawer-content {
      background: #ffffff !important;
      border-left: 1px solid rgba(99, 102, 241, 0.2) !important;
      box-shadow: -15px 0 50px rgba(15, 23, 42, 0.15) !important;
    }
    .drawer-header {
      padding: 20px 24px;
      border-bottom: 1px solid var(--border, rgba(255, 255, 255, 0.1));
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .dh-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.05rem;
      font-weight: 800;
      color: #fff;
    }
    .dh-title .icon-violet {
      color: var(--violet, #818cf8);
    }
    .btn-close-drawer {
      background: rgba(255,255,255,0.06);
      border: 1px solid var(--border, rgba(255,255,255,0.1));
      color: var(--text-2, #94a3b8);
      width: 36px;
      height: 36px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .btn-close-drawer:hover {
      background: rgba(239,68,68,0.2);
      color: #f87171;
    }
    .drawer-filters-body {
      padding: 24px;
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .filter-group-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .filter-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--violet-light, #a5b4fc);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .drawer-footer-actions {
      padding: 16px 24px;
      border-top: 1px solid var(--border, rgba(255, 255, 255, 0.1));
      display: flex;
      gap: 12px;
    }
    .btn-apply-filters {
      flex: 1;
      padding: 12px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6366f1, #4f46e5);
      color: #fff;
      font-size: 0.88rem;
      font-weight: 800;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 4px 16px rgba(99,102,241,0.35);
      transition: all 0.2s ease;
    }
    .btn-apply-filters:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(99,102,241,0.5);
    }
    .btn-clear-drawer {
      padding: 12px 18px;
      border-radius: 12px;
      background: rgba(255,255,255,0.06);
      border: 1px solid var(--border, rgba(255,255,255,0.1));
      color: var(--text-2, #cbd5e1);
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-clear-drawer:hover {
      background: rgba(239,68,68,0.15);
      color: #f87171;
    }
    ::ng-deep .prime-luxury-dropdown {
      width: 100% !important;
      background: rgba(255,255,255,0.04) !important;
      border: 1px solid var(--border, rgba(255,255,255,0.1)) !important;
      border-radius: 14px !important;
      transition: all 0.2s ease !important;
    }
    ::ng-deep .prime-luxury-dropdown:hover,
    ::ng-deep .prime-luxury-dropdown.p-inputwrapper-focus {
      border-color: var(--violet, #6366f1) !important;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.2) !important;
    }
    ::ng-deep .prime-luxury-dropdown .p-dropdown-label {
      padding: 9px 14px !important;
      font-size: 0.84rem !important;
      font-weight: 700 !important;
      color: #fff !important;
      font-family: inherit !important;
    }
    ::ng-deep .prime-luxury-dropdown .p-dropdown-trigger {
      width: 2.5rem !important;
      color: var(--violet-light, #a5b4fc) !important;
    }
    ::ng-deep .p-dropdown-panel,
    ::ng-deep .p-connected-overlay,
    ::ng-deep body > .p-dropdown-panel {
      background: #0f0f1e !important;
      border: 1px solid var(--border, rgba(255,255,255,0.12)) !important;
      border-radius: 16px !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.8) !important;
      backdrop-filter: none !important;
      z-index: 999999 !important;
    }
    ::ng-deep .p-dropdown-panel .p-dropdown-header {
      background: rgba(15,15,30,0.95) !important;
      border-bottom: 1px solid var(--border, rgba(255,255,255,0.1)) !important;
      padding: 10px 12px !important;
    }
    ::ng-deep .p-dropdown-panel .p-dropdown-filter-container {
      position: relative !important;
      width: 100% !important;
      margin: 0 !important;
      display: block !important;
    }
    ::ng-deep .p-dropdown-panel .p-dropdown-filter {
      width: 100% !important;
      background: rgba(255,255,255,0.06) !important;
      border: 1px solid var(--border, rgba(255,255,255,0.15)) !important;
      color: #ffffff !important;
      border-radius: 10px !important;
      padding: 8px 36px 8px 14px !important;
      font-size: 0.84rem !important;
      font-family: inherit !important;
      box-shadow: none !important;
    }
    body.light-theme ::ng-deep .p-dropdown-panel .p-dropdown-filter {
      background: #f8fafc !important;
      border-color: #cbd5e1 !important;
      color: #0f172a !important;
    }
    ::ng-deep .p-dropdown-panel .p-dropdown-filter-icon {
      position: absolute !important;
      right: 12px !important;
      left: auto !important;
      top: 50% !important;
      margin-top: 0 !important;
      transform: translateY(-50%) !important;
      color: #818cf8 !important;
      font-size: 0.9rem !important;
      pointer-events: none !important;
      z-index: 5 !important;
    }
    ::ng-deep .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
      padding: 10px 14px !important;
      color: #cbd5e1 !important;
      font-size: 0.84rem !important;
      font-weight: 600 !important;
      border-radius: 10px !important;
      margin: 2px 6px !important;
      transition: all 0.15s ease !important;
    }
    ::ng-deep .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,
    ::ng-deep .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
      background: rgba(99,102,241,0.2) !important;
      color: #ffffff !important;
    }
    .btn-reset-filters {
      padding: 9px 16px;
      border-radius: 12px;
      background: rgba(239,68,68,0.12);
      border: 1px solid rgba(239,68,68,0.3);
      color: #f87171;
      font-size: 0.82rem;
      font-weight: 800;
      font-family: inherit;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }
    .btn-reset-filters:hover {
      background: rgba(239,68,68,0.22);
      transform: translateY(-1px);
    }

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
      font-size: 1.35rem; font-weight: 800; color: var(--text, #fff);
      letter-spacing: -0.3px; margin: 0;
    }
    .tb-header-left p { color: var(--text-2); font-size: 0.82rem; margin: 0; }
    .tb-header-right { display: flex; align-items: center; gap: 12px; }
    .tb-stats { display: flex; gap: 8px; }
    .stat-pill {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px; border-radius: 100px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      font-size: 0.76rem; font-weight: 600; color: var(--text-2);
    }
    .stat-pill.emerald { color: var(--emerald-light, #10b981); border-color: rgba(16,185,129,0.2); }
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

    .tb-icon-badge.client-badge-icon {
      background: linear-gradient(135deg, #6366f1, #06b6d4);
      box-shadow: 0 4px 20px rgba(99,102,241,0.35);
    }

    /* ── CLIENT STATS & TOOLBAR ── */
    .client-stats { display: flex; gap: 8px; flex-wrap: wrap; }
    .client-stat-pill {
      cursor: pointer;
      transition: all 0.2s ease;
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-2);
      padding: 6px 14px;
      font-size: 0.8rem;
      border-radius: 100px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .client-stat-pill span { font-weight: 800; color: var(--text); }
    .client-stat-pill:hover, .client-stat-pill.active {
      border-color: var(--violet, #6366f1);
      box-shadow: 0 4px 12px rgba(99,102,241,0.15);
      color: var(--text);
    }
    .client-stat-pill.amber-glow {
      background: rgba(245,158,11,0.1);
      border-color: rgba(245,158,11,0.3);
      color: #f59e0b;
    }
    .client-stat-pill.amber-glow span { color: #f59e0b; }
    .client-stat-pill.emerald {
      color: #10b981;
      border-color: rgba(16,185,129,0.3);
    }
    .client-stat-pill.emerald span { color: #10b981; }
    .client-stat-pill.violet {
      color: #8b5cf6;
      border-color: rgba(139,92,246,0.3);
    }
    .client-stat-pill.violet span { color: #8b5cf6; }

    .client-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .client-search-box {
      position: relative;
      flex: 1;
      min-width: 260px;
      max-width: 420px;
    }
    .client-search-box .search-icon {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-3);
      font-size: 0.9rem;
      pointer-events: none;
    }
    .client-search-input {
      width: 100%;
      padding: 10px 42px 10px 36px;
      border-radius: 12px;
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 0.88rem;
      font-family: inherit;
      outline: none;
      transition: all 0.2s ease;
      box-shadow: var(--shadow-sm, 0 2px 8px rgba(0,0,0,0.04));
    }
    .client-search-input:focus {
      border-color: var(--violet);
      box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
    }
    .btn-clear-search {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-3);
      cursor: pointer;
      padding: 4px;
      font-size: 0.85rem;
    }

    /* Client Deal Filter Box */
    .client-deal-filter-box {
      position: relative;
      min-width: 240px;
      max-width: 380px;
      flex: 1;
    }
    .client-deal-filter-box .deal-filter-icon {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--violet);
      font-size: 0.9rem;
      pointer-events: none;
    }
    .client-deal-select {
      width: 100%;
      padding: 10px 42px 10px 14px;
      border-radius: 12px;
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 0.88rem;
      font-weight: 700;
      font-family: inherit;
      outline: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: var(--shadow-sm, 0 2px 8px rgba(0,0,0,0.04));
      appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23818cf8' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: left 12px center;
      background-size: 20px;
    }
    .client-deal-select:focus {
      border-color: var(--violet);
      box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
    }

    .client-filter-tabs {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 2px;
    }
    .c-tab {
      padding: 8px 16px;
      border-radius: 100px;
      border: 1px solid var(--border);
      background: var(--bg-card);
      color: var(--text-2);
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
    }
    .c-tab:hover {
      border-color: var(--violet);
      color: var(--text);
    }
    .c-tab.active {
      background: linear-gradient(135deg, var(--violet), #4f46e5);
      color: #ffffff !important;
      border-color: transparent;
      box-shadow: 0 4px 14px rgba(99,102,241,0.35);
    }
    .c-tab-amber.active {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      box-shadow: 0 4px 14px rgba(245,158,11,0.35);
    }
    .c-tab-emerald.active {
      background: linear-gradient(135deg, #10b981, #059669);
      box-shadow: 0 4px 14px rgba(16,185,129,0.35);
    }
    .c-tab-violet.active {
      background: linear-gradient(135deg, #8b5cf6, #6d28d9);
      box-shadow: 0 4px 14px rgba(139,92,246,0.35);
    }

    /* ── CLIENT CARDS GRID ── */
    .client-cards-grid-shell {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 22px;
      overflow-y: auto;
      flex: 1;
      padding-bottom: 20px;
    }

    /* Client Card Item */
    .client-card-item {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 24px 24px 28px 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
      cursor: pointer;
    }

    /* Top Status Border Accent */
    .client-card-item::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(90deg, #6366f1, #06b6d4);
      border-radius: 20px 20px 0 0;
    }
    .client-card-item.card-status-pending::before {
      background: linear-gradient(90deg, #f59e0b, #fbbf24);
    }
    .client-card-item.card-status-done::before {
      background: linear-gradient(90deg, #10b981, #34d399);
    }
    .client-card-item.card-status-feedback::before {
      background: linear-gradient(90deg, #ec4899, #f43f5e);
    }

    /* Card Head */
    .client-card-head { margin-bottom: 16px; }
    .client-card-head-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    /* Badges */
    .client-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.76rem;
      font-weight: 800;
      padding: 5px 14px;
      border-radius: 100px;
      line-height: 1;
    }
    .badge-pending-approval {
      background: rgba(245,158,11,0.12);
      color: #d97706;
      border: 1px solid rgba(245,158,11,0.3);
      box-shadow: 0 0 12px rgba(245,158,11,0.15);
    }
    .badge-approved {
      background: rgba(16,185,129,0.12);
      color: #059669;
      border: 1px solid rgba(16,185,129,0.3);
    }
    .badge-in-progress {
      background: rgba(99,102,241,0.12);
      color: #4f46e5;
      border: 1px solid rgba(99,102,241,0.3);
    }
    .badge-feedback {
      background: rgba(236,72,153,0.12);
      color: #db2777;
      border: 1px solid rgba(236,72,153,0.3);
    }

    .client-deal-chip {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-2);
      background: rgba(99,102,241,0.06);
      padding: 4px 10px;
      border-radius: 8px;
      border: 1px solid var(--border);
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .client-deal-chip i { color: var(--violet); }

    .client-card-title {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--text);
      line-height: 1.4;
      margin: 0;
    }

    /* Scope Box */
    .client-scope-box {
      position: relative;
      background: rgba(99,102,241,0.03);
      border: 1px solid var(--border);
      border-right: 3px solid var(--violet);
      border-radius: 12px;
      padding: 12px 14px 12px 34px;
      margin-bottom: 16px;
    }
    .client-scope-box .scope-icon {
      position: absolute;
      left: 12px;
      top: 12px;
      font-size: 0.85rem;
      color: var(--text-3);
      opacity: 0.6;
    }
    .client-scope-box p {
      margin: 0;
      font-size: 0.84rem;
      color: var(--text-2);
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Attachments Section */
    .client-attachments-sec {
      margin-bottom: 18px;
    }
    .att-sec-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--text-2);
      margin-bottom: 10px;
    }
    .att-sec-header i { color: var(--violet); }
    .att-count-badge {
      background: rgba(99,102,241,0.12);
      color: var(--violet);
      font-size: 0.7rem;
      padding: 2px 8px;
      border-radius: 100px;
      font-weight: 800;
    }

    .att-thumbs-grid {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .att-thumb-card {
      position: relative;
      width: 64px;
      height: 64px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
      background: rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .att-thumb-card:hover {
      transform: scale(1.06);
      border-color: var(--violet);
      box-shadow: 0 4px 14px rgba(0,0,0,0.15);
    }
    .att-thumb-card .att-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .att-zoom-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.1rem;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .att-thumb-card:hover .att-zoom-overlay { opacity: 1; }

    .att-file-icon {
      font-size: 1.3rem;
      color: var(--violet);
      margin-bottom: 2px;
    }
    .att-file-name {
      font-size: 0.65rem;
      color: var(--text-2);
      width: 100%;
      text-align: center;
      padding: 0 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Footer Action Buttons */
    .client-card-footer {
      margin-top: 8px;
      padding-top: 14px;
      border-top: 1px solid var(--border);
    }
    .client-actions-grid {
      display: flex;
      gap: 10px;
    }
    .btn-client-approve {
      flex: 1;
      padding: 12px;
      font-size: 0.84rem;
      font-weight: 800;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      background: linear-gradient(135deg, #10b981, #059669);
      color: #ffffff;
      border: none;
      box-shadow: 0 4px 16px rgba(16,185,129,0.3);
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .btn-client-approve:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(16,185,129,0.45);
    }

    .btn-client-revision {
      flex: 1;
      padding: 12px;
      font-size: 0.84rem;
      font-weight: 800;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #ffffff;
      border: none;
      box-shadow: 0 4px 16px rgba(245,158,11,0.3);
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .btn-client-revision:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(245,158,11,0.45);
    }

    .client-approved-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      background: rgba(16,185,129,0.08);
      border: 1px solid rgba(16,185,129,0.25);
      border-radius: 12px;
      padding: 10px 14px;
    }
    .approved-status-text {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.82rem;
      font-weight: 800;
      color: #059669;
    }
    .btn-client-revision-subtle {
      padding: 6px 12px;
      font-size: 0.78rem;
      font-weight: 700;
      border-radius: 8px;
      border: 1px solid rgba(245,158,11,0.4);
      background: rgba(245,158,11,0.1);
      color: #d97706;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .btn-client-revision-subtle:hover {
      background: rgba(245,158,11,0.2);
    }

    /* Empty State */
    .client-empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 60px 20px;
      background: var(--bg-card);
      border: 1px dashed var(--border);
      border-radius: 20px;
      color: var(--text-2);
    }
    .empty-icon-wrap {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: rgba(99,102,241,0.1);
      color: var(--violet);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      margin: 0 auto 16px;
    }
    .client-empty-state h3 {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--text);
      margin: 0 0 6px;
    }
    .client-empty-state p {
      font-size: 0.86rem;
      color: var(--text-2);
      margin: 0;
    }

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
      padding: 12px 10px 32px 10px;
      overflow-y: auto;
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .col-body::-webkit-scrollbar { width: 5px; }
    .col-body::-webkit-scrollbar-track { background: transparent; }
    .col-body::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.35); border-radius: 10px; }
    .col-body::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.6); }

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
      border-radius: 16px; padding: 14px 14px 20px 14px !important;
      flex-shrink: 0 !important;
      cursor: grab; transition: border-color 0.2s, box-shadow 0.2s;
      position: relative; overflow: hidden;
      user-select: none;
      margin-bottom: 2px;
    }
    .tk-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-top: 10px;
      padding-top: 8px;
      padding-bottom: 6px;
      border-top: 1px solid var(--border, rgba(255, 255, 255, 0.08));
    }
    .tk-foot-right {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .tk-avatars {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .av-sm {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--violet, #6366f1), var(--teal, #06b6d4));
      color: #fff;
      font-size: 0.7rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border, rgba(255, 255, 255, 0.15));
    }
    .priority-badge {
      font-size: 0.68rem;
      font-weight: 800;
      padding: 3px 9px;
      border-radius: 100px;
      text-transform: capitalize;
      line-height: 1.2;
      display: inline-block;
    }
    .pb-low { background: rgba(16, 185, 129, 0.14); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); }
    .pb-medium { background: rgba(245, 158, 11, 0.14); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .pb-high { background: rgba(244, 63, 94, 0.14); color: #f43f5e; border: 1px solid rgba(244, 63, 94, 0.3); }
    .pb-urgent { background: linear-gradient(135deg, #f43f5e, #e11d48); color: #ffffff; }
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
    .tag-subtask {
      background: rgba(168, 85, 247, 0.18);
      color: #d8b4fe;
      border: 1px solid rgba(168, 85, 247, 0.35);
    }
    body.light-theme .tag-subtask {
      background: rgba(147, 51, 234, 0.1) !important;
      color: #7e22ce !important;
      border-color: rgba(147, 51, 234, 0.25) !important;
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

    /* Subtasks preview box inside board card */
    .tk-subtasks-preview {
      background: rgba(0, 0, 0, 0.15);
      border: 1px solid var(--border, rgba(255, 255, 255, 0.08));
      border-radius: 10px;
      padding: 8px 10px;
      margin-bottom: 8px;
      display: flex; flex-direction: column; gap: 6px;
    }
    .tsp-head {
      font-size: 0.7rem; font-weight: 800; color: var(--text-2);
      display: flex; justify-content: space-between; align-items: center;
    }
    .tsp-bar {
      height: 4px; background: rgba(255, 255, 255, 0.08);
      border-radius: 100px; overflow: hidden;
    }
    .tsp-fill {
      height: 100%; background: linear-gradient(90deg, #06b6d4, #10b981);
      border-radius: 100px;
    }
    .tsp-list { display: flex; flex-direction: column; gap: 4px; }
    .tsp-item {
      font-size: 0.72rem; color: var(--text-2); display: flex; align-items: center; gap: 6px;
    }
    .tsp-item.done { color: var(--text); }
    .tsp-more { font-size: 0.65rem; color: var(--text-3); font-weight: 700; }
    
    body.light-theme .tk-subtasks-preview {
      background: #f8fafc !important;
      border-color: #cbd5e1 !important;
    }
    body.light-theme .tsp-head { color: #0f172a !important; }
    body.light-theme .tsp-item { color: #334155 !important; }

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
    .tk-subtasks-tag {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: 0.68rem; font-weight: 800;
      color: var(--violet-light, #818cf8);
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.25);
      padding: 2px 7px; border-radius: 6px;
    }
    body.light-theme .tk-subtasks-tag {
      background: rgba(99, 102, 241, 0.1) !important;
      color: #4f46e5 !important;
      border-color: rgba(99, 102, 241, 0.3) !important;
    }

    .drawer-backdrop {
      position: fixed; inset: 0; z-index: 1200;
      background: rgba(9, 9, 24, 0.45);
      backdrop-filter: none !important;
      display: flex; justify-content: flex-start;
      direction: rtl;
    }
    .detail-drawer {
      width: 680px; max-width: 95vw;
      height: 100vh;
      background: linear-gradient(165deg, rgba(15, 16, 38, 0.98) 0%, rgba(8, 9, 24, 0.99) 100%);
      border-left: 1px solid rgba(99, 102, 241, 0.25);
      display: flex; flex-direction: column;
      animation: drawerFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: -15px 0 50px rgba(0, 0, 0, 0.35);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    body.light-theme .detail-drawer {
      background: #ffffff !important;
      border-left: 1px solid rgba(99, 102, 241, 0.2) !important;
      box-shadow: -15px 0 50px rgba(15, 23, 42, 0.15) !important;
    }
    .detail-drawer.is-wide {
      width: 90vw !important;
      max-width: 90vw !important;
    }

    /* Drawer Header Actions */
    .drawer-hd-actions {
      display: flex; align-items: center; gap: 8px;
    }
    .icon-action-btn {
      width: 36px; height: 36px; border-radius: 10px;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.25);
      color: var(--violet-light); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.95rem; position: relative;
      transition: all 0.2s;
    }
    .icon-action-btn:hover {
      background: var(--violet); color: #ffffff;
      transform: translateY(-2px);
    }
    .icon-action-btn.active-btn {
      background: var(--violet, #6366f1) !important;
      color: #ffffff !important;
      box-shadow: 0 0 12px var(--violet-glow);
    }
    .btn-badge {
      position: absolute; top: -5px; right: -5px;
      background: #f43f5e; color: #ffffff;
      font-size: 0.62rem; font-weight: 800;
      padding: 2px 5px; border-radius: 10px;
      line-height: 1; min-width: 16px; text-align: center;
    }
    .btn-parent-crumb {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 4px 10px; border-radius: 8px;
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.28);
      color: var(--violet-light, #818cf8);
      font-size: 0.74rem; font-weight: 700;
      cursor: pointer; transition: all 0.2s; font-family: inherit;
    }
    .btn-parent-crumb:hover {
      background: var(--violet, #6366f1);
      color: #ffffff;
    }
    body.light-theme .btn-parent-crumb {
      background: rgba(99, 102, 241, 0.1) !important;
      color: #4f46e5 !important;
      border-color: rgba(99, 102, 241, 0.3) !important;
    }
    .parent-task-link-card:hover {
      border-color: var(--violet, #6366f1) !important;
      background: rgba(99, 102, 241, 0.14) !important;
      transform: translateY(-2px);
    }
    body.light-theme .parent-task-link-card {
      background: rgba(99, 102, 241, 0.05) !important;
      border-color: rgba(99, 102, 241, 0.25) !important;
    }
    body.light-theme .parent-task-link-card:hover {
      background: rgba(99, 102, 241, 0.12) !important;
      border-color: #6366f1 !important;
    }

    /* Drawer Navigation Tabs */
    .drawer-nav-tabs {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 24px;
      background: rgba(0, 0, 0, 0.15);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      flex-shrink: 0;
      overflow-x: auto;
    }
    body.light-theme .drawer-nav-tabs {
      background: #f8fafc !important;
      border-bottom-color: rgba(99, 102, 241, 0.15) !important;
    }
    .dnav-tab {
      padding: 8px 16px; border-radius: 10px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--text-2, #94a3b8);
      font-size: 0.82rem; font-weight: 700;
      cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
      transition: all 0.2s; font-family: inherit;
      white-space: nowrap; flex-shrink: 0;
    }
    .dnav-tab:hover {
      color: var(--text, #ffffff);
      background: rgba(99, 102, 241, 0.08);
    }
    .dnav-tab.active {
      background: var(--violet, #6366f1) !important;
      color: #ffffff !important;
      box-shadow: 0 4px 14px var(--violet-glow, rgba(99, 102, 241, 0.4));
    }
    body.light-theme .dnav-tab.active {
      background: #6366f1 !important;
      color: #ffffff !important;
    }
    .dnav-badge {
      background: rgba(255, 255, 255, 0.25);
      color: #ffffff; font-size: 0.65rem; font-weight: 800;
      padding: 2px 6px; border-radius: 10px; line-height: 1;
    }

    /* PrimeNG Grouped Dropdown Custom Overrides */
    ::ng-deep .prime-grouped-dropdown {
      width: 100% !important;
    }
    ::ng-deep .prime-grouped-dropdown .p-dropdown {
      width: 100% !important;
      background: rgba(99, 102, 241, 0.04) !important;
      border: 1px solid var(--border, rgba(99, 102, 241, 0.2)) !important;
      border-radius: 12px !important;
    }
    body.light-theme ::ng-deep .prime-grouped-dropdown .p-dropdown {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      color: #0f172a !important;
    }
    ::ng-deep .p-group-header {
      display: flex; align-items: center; gap: 8px;
      font-weight: 800; font-size: 0.8rem;
      color: var(--violet-light, #6366f1); padding: 8px 12px;
      background: rgba(99, 102, 241, 0.08); border-radius: 6px;
    }
    ::ng-deep .p-item-row {
      display: flex; justify-content: space-between; align-items: center;
      width: 100%; font-size: 0.84rem; padding: 4px 0;
    }
    ::ng-deep .p-item-email {
      color: var(--text-2, #64748b); font-size: 0.72rem;
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
      margin-bottom: 16px;
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

    .subtask-item-clean {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 14px; border-radius: 12px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border, rgba(255, 255, 255, 0.08));
      transition: all 0.2s; margin-bottom: 8px;
    }
    body.light-theme .subtask-item-clean {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.15) !important;
    }
    .subtask-item-clean.completed {
      opacity: 0.65; background: rgba(16, 185, 129, 0.04);
    }
    .subtask-item-clean.completed .st-title-clean {
      text-decoration: line-through; color: var(--text-2);
    }
    .st-title-clean {
      flex: 1; font-size: 0.86rem; font-weight: 700; color: var(--text);
      cursor: pointer; transition: color 0.2s;
    }
    .st-title-clean:hover {
      color: var(--violet-light, #818cf8);
    }
    body.light-theme .st-title-clean { color: #0f172a !important; }
    .st-open-btn {
      background: none; border: none; color: var(--text-2);
      cursor: pointer; font-size: 0.8rem; padding: 4px 6px; border-radius: 6px;
      transition: all 0.2s;
    }
    .st-open-btn:hover {
      color: var(--violet-light); background: rgba(99, 102, 241, 0.1);
    }

    .btn-open-st-modal {
      padding: 4px 12px; border-radius: 8px;
      background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3);
      color: var(--violet-light, #818cf8); font-size: 0.72rem; font-weight: 700;
      cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
      transition: all 0.2s; font-family: inherit;
    }
    .btn-open-st-modal:hover {
      background: var(--violet); color: #ffffff;
    }
    .subtask-item-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border, rgba(255, 255, 255, 0.08));
      border-radius: 12px; padding: 10px 14px;
      transition: all 0.2s; margin-bottom: 8px;
    }
    .st-item-main { display: flex; align-items: flex-start; gap: 10px; }
    .st-info-body { flex: 1; display: flex; flex-direction: column; gap: 4px; }
    .st-title-row { display: flex; align-items: center; gap: 8px; }
    .pb-mini { font-size: 0.6rem !important; padding: 1px 6px !important; }
    .st-desc { font-size: 0.78rem; color: var(--text-2); margin: 0; line-height: 1.4; }
    .st-meta-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
    .st-users-chips, .st-atts-chips { display: flex; flex-wrap: wrap; gap: 4px; }
    .st-user-tag, .st-att-tag {
      font-size: 0.68rem; font-weight: 700; padding: 2px 6px; border-radius: 6px;
      display: inline-flex; align-items: center; gap: 4px;
    }
    .st-user-tag { background: rgba(99, 102, 241, 0.12); color: #a5b4fc; }
    .st-att-tag { background: rgba(6, 182, 212, 0.12); color: #67e8f9; cursor: pointer; }
    .st-att-tag:hover { text-decoration: underline; }
    .st-dialog-input, .st-dialog-textarea, .st-dialog-select {
      background: rgba(99, 102, 241, 0.05) !important;
      border: 1px solid var(--border, rgba(99, 102, 241, 0.2)) !important;
      border-radius: 10px !important; padding: 10px 14px !important;
      color: var(--text) !important; font-size: 0.85rem !important; font-family: inherit;
    }
    body.light-theme .st-dialog-input,
    body.light-theme .st-dialog-textarea,
    body.light-theme .st-dialog-select {
      background: #ffffff !important; border-color: rgba(99, 102, 241, 0.2) !important; color: #0f172a !important;
    }
    .subtask-progress-pill {
      font-size: 0.72rem; font-weight: 800;
      color: var(--violet-light); background: rgba(99, 102, 241, 0.1);
      padding: 3px 10px; border-radius: 100px; border: 1px solid rgba(99, 102, 241, 0.2);
    }
    .subtask-progress-bar {
      width: 100%; height: 6px; border-radius: 10px;
      background: rgba(255, 255, 255, 0.08); overflow: hidden;
      margin-bottom: 6px;
    }
    .subtask-progress-fill {
      height: 100%; border-radius: 10px;
      background: linear-gradient(90deg, var(--violet), var(--teal));
      transition: width 0.3s ease;
    }
    .subtask-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px; }
    .subtask-item {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 14px; border-radius: 12px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border, rgba(255, 255, 255, 0.08));
      transition: all 0.2s;
    }
    body.light-theme .subtask-item {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.15) !important;
    }
    .subtask-item.completed {
      opacity: 0.7; background: rgba(16, 185, 129, 0.04);
    }
    .subtask-item.completed .st-title {
      text-decoration: line-through; color: var(--text-2);
    }
    .st-checkbox-label { position: relative; cursor: pointer; display: flex; align-items: center; }
    .st-checkbox-label input { display: none; }
    .st-checkmark {
      width: 20px; height: 20px; border-radius: 6px;
      border: 2px solid var(--violet-light);
      display: flex; align-items: center; justify-content: center;
      color: transparent; font-size: 0.75rem; transition: all 0.2s;
    }
    .st-checkbox-label input:checked + .st-checkmark {
      background: #10b981; border-color: #10b981; color: #ffffff;
    }
    .st-title { flex: 1; font-size: 0.85rem; font-weight: 600; color: var(--text); }
    body.light-theme .st-title { color: #0f172a !important; }
    .st-del-btn {
      background: none; border: none; color: var(--text-2);
      cursor: pointer; font-size: 0.8rem; padding: 4px; transition: color 0.2s;
    }
    .st-del-btn:hover { color: #f43f5e; }
    .add-subtask-box { display: flex; gap: 8px; }
    .st-input {
      flex: 1; padding: 10px 14px; border-radius: 12px;
      background: rgba(99, 102, 241, 0.04); border: 1px solid var(--border);
      color: var(--text); font-size: 0.82rem; outline: none; font-family: inherit;
    }
    body.light-theme .st-input {
      background: #ffffff !important; border-color: rgba(99, 102, 241, 0.2) !important; color: #0f172a !important;
    }
    .btn-add-st {
      padding: 10px 16px; border-radius: 12px; border: none;
      background: var(--violet); color: #ffffff; font-size: 0.82rem;
      font-weight: 700; cursor: pointer; display: inline-flex; align-items: center;
      gap: 6px; transition: all 0.2s; font-family: inherit;
    }
    .btn-add-st:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
    .btn-add-st:disabled { opacity: 0.4; cursor: not-allowed; }

    /* Drawer Card Section */
    .drawer-tab-content {
      padding-top: 6px;
      padding-bottom: 24px;
    }
    .drawer-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      border-radius: 16px; padding: 18px 20px 24px 20px;
      display: flex; flex-direction: column; gap: 12px;
      margin-bottom: 16px;
      transition: all 0.2s;
    }
    .drawer-card:last-child {
      margin-bottom: 0;
    }
    body.light-theme .drawer-card {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.15) !important;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important;
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

    /* Attachments Grid & Luxury Card Styling */
    .att-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 10px;
    }
    .att-item {
      width: 124px;
      height: 118px;
      flex-shrink: 0;
      border-radius: 14px;
      overflow: hidden;
      position: relative;
      border: 1px solid var(--border);
      background: var(--bg-card);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .att-item:hover {
      border-color: var(--violet-light);
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.25);
    }
    .att-img-wrap { position: relative; width: 100%; height: 100%; overflow: hidden; }
    .att-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    .att-item:hover .att-img {
      transform: scale(1.05);
    }
    .att-del-btn {
      position: absolute; top: 6px; left: 6px;
      width: 24px; height: 24px; border-radius: 6px;
      background: rgba(225, 29, 72, 0.9); color: #fff;
      border: none; cursor: pointer; display: flex;
      align-items: center; justify-content: center;
      font-size: 0.7rem; transition: all 0.2s ease; z-index: 10;
      backdrop-filter: blur(6px);
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }
    .att-del-btn:hover { background: #e11d48; transform: scale(1.08); }

    .att-vis-btn {
      position: absolute; bottom: 6px; left: 6px; right: 6px;
      padding: 4px 6px; border-radius: 8px;
      font-size: 0.65rem; font-weight: 700; font-family: inherit;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 4px;
      white-space: nowrap; z-index: 10;
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      transition: all 0.2s ease;
      background: rgba(245, 158, 11, 0.92); color: #ffffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    }
    .att-vis-btn.is-vis {
      background: rgba(16, 185, 129, 0.92); color: #ffffff;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
    }
    .att-vis-btn:hover {
      opacity: 0.95;
    }
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

    /* Enhanced History Timeline & Dialog */
    .history-dialog-container { display: flex; flex-direction: column; gap: 16px; }
    .history-subhd {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 14px; background: rgba(99, 102, 241, 0.06);
      border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.18);
    }
    .hist-count-pill { font-size: 0.82rem; font-weight: 800; color: var(--violet-light); display: flex; align-items: center; gap: 6px; }
    .hist-tip { font-size: 0.72rem; color: var(--text-2); display: flex; align-items: center; gap: 4px; }
    .activity-timeline-enhanced {
      display: flex; flex-direction: column; gap: 12px;
      max-height: 480px; overflow-y: auto; padding-left: 4px;
    }
    .act-enhanced-card {
      display: flex; gap: 14px; align-items: flex-start;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border, rgba(255, 255, 255, 0.08));
      border-radius: 14px; padding: 14px 16px;
      transition: all 0.2s;
    }
    body.light-theme .act-enhanced-card {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.15) !important;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04) !important;
    }
    .act-icon-box {
      width: 36px; height: 36px; border-radius: 12px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      color: #ffffff; font-size: 0.95rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .act-enhanced-content { flex: 1; display: flex; flex-direction: column; gap: 6px; }
    .act-enhanced-head { display: flex; justify-content: space-between; align-items: center; }
    .act-title-tag { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
    .act-time-pill { font-size: 0.7rem; color: var(--text-2); display: flex; align-items: center; gap: 4px; }
    .act-enhanced-desc { font-size: 0.88rem; font-weight: 600; color: var(--text); line-height: 1.5; }
    body.light-theme .act-enhanced-desc { color: #0f172a !important; }
    .act-enhanced-footer { display: flex; align-items: center; }
    .act-author-chip {
      font-size: 0.72rem; font-weight: 700; color: var(--violet-light);
      background: rgba(99, 102, 241, 0.08); padding: 3px 10px; border-radius: 100px;
    }

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
    /* PrimeNG Luxury MultiSelect Styling */
    ::ng-deep .prime-luxury-multiselect {
      width: 100% !important;
      background: rgba(99, 102, 241, 0.05) !important;
      border: 1px solid var(--border, rgba(99, 102, 241, 0.2)) !important;
      border-radius: 14px !important;
      padding: 4px 8px !important;
      transition: all 0.2s ease !important;
    }
    ::ng-deep .prime-luxury-multiselect:hover,
    ::ng-deep .prime-luxury-multiselect.p-multiselect-focus {
      border-color: var(--violet-light) !important;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18) !important;
      background: rgba(99, 102, 241, 0.08) !important;
    }
    ::ng-deep .prime-luxury-multiselect .p-multiselect-label {
      padding: 6px 10px !important;
      font-family: inherit !important;
      font-size: 0.85rem !important;
      color: var(--text) !important;
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 6px !important;
    }
    ::ng-deep .prime-luxury-multiselect .p-multiselect-token {
      background: linear-gradient(135deg, rgba(99,102,241,0.25), rgba(6,182,212,0.25)) !important;
      border: 1px solid rgba(99,102,241,0.35) !important;
      color: #ffffff !important;
      border-radius: 100px !important;
      padding: 3px 10px !important;
      font-size: 0.76rem !important;
      font-weight: 700 !important;
    }
    ::ng-deep .prime-luxury-multiselect .p-multiselect-token-icon {
      margin-left: 4px !important;
      color: rgba(255,255,255,0.7) !important;
    }
    ::ng-deep .prime-luxury-multiselect .p-multiselect-token-icon:hover {
      color: #f43f5e !important;
    }
    ::ng-deep .prime-luxury-multiselect-panel {
      background: #10101e !important;
      border: 1px solid var(--border) !important;
      border-radius: 16px !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.6) !important;
      backdrop-filter: blur(16px) !important;
    }
    ::ng-deep .prime-luxury-multiselect-panel .p-multiselect-header {
      background: rgba(255,255,255,0.03) !important;
      border-bottom: 1px solid var(--border) !important;
      padding: 10px 14px !important;
      border-radius: 16px 16px 0 0 !important;
    }
    ::ng-deep .prime-luxury-multiselect-panel .p-multiselect-filter {
      background: var(--bg-input) !important;
      border: 1px solid var(--border) !important;
      color: #fff !important;
      border-radius: 10px !important;
      padding: 8px 12px !important;
      font-size: 0.82rem !important;
    }
    ::ng-deep .prime-luxury-multiselect-panel .p-multiselect-item {
      padding: 10px 14px !important;
      color: var(--text) !important;
      border-radius: 10px !important;
      margin: 2px 6px !important;
      transition: all 0.15s ease !important;
    }
    ::ng-deep .prime-luxury-multiselect-panel .p-multiselect-item:hover,
    ::ng-deep .prime-luxury-multiselect-panel .p-multiselect-item.p-highlight {
      background: rgba(99,102,241,0.18) !important;
      color: #ffffff !important;
    }

    body.light-theme ::ng-deep .prime-luxury-multiselect,
    :host-context(body.light-theme) ::ng-deep .prime-luxury-multiselect {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
    }
    body.light-theme ::ng-deep .prime-luxury-multiselect-panel,
    :host-context(body.light-theme) ::ng-deep .prime-luxury-multiselect-panel {
      background: #ffffff !important;
      border-color: rgba(99, 102, 241, 0.2) !important;
      box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12) !important;
    }
    body.light-theme ::ng-deep .prime-luxury-multiselect-panel .p-multiselect-item,
    :host-context(body.light-theme) ::ng-deep .prime-luxury-multiselect-panel .p-multiselect-item {
      color: #0f172a !important;
    }
    body.light-theme ::ng-deep .prime-luxury-multiselect .p-multiselect-token {
      background: rgba(99, 102, 241, 0.12) !important;
      color: #4f46e5 !important;
      border-color: rgba(99, 102, 241, 0.25) !important;
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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);
  private pendingTaskIdFromUrl: number | null = null;

  tasks: any[] = [];
  deals: any[] = [];
  departments: any[] = [];

  priorityList = [
    { id: 'low', label: 'منخفض (Low)' },
    { id: 'medium', label: 'متوسط (Medium)' },
    { id: 'high', label: 'مرتفع (High)' },
    { id: 'urgent', label: 'عاجل (Urgent)' }
  ];

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

  draggingTask: any = null;
  dragOverCol: string | null = null;

  currentUser: any = null;

  ngOnInit(): void {
    try {
      const uStr = localStorage.getItem('mediaglow_user');
      if (uStr) this.currentUser = JSON.parse(uStr);
    } catch(e){}

    this.route.queryParams.subscribe(params => {
      const tid = params['taskId'] ? Number(params['taskId']) : null;
      if (tid) {
        this.pendingTaskIdFromUrl = tid;
        this.checkAndOpenTaskFromUrl();
      }
    });

    this.initForm();
    this.loadData();
  }

  isEmployee(): boolean { return this.currentUser?.role === 'employee'; }
  isClient(): boolean { return this.currentUser?.role === 'client'; }
  isDepartmentManager(): boolean { return this.currentUser?.role === 'department_manager'; }
  isSuperAdmin(): boolean { return this.currentUser?.role === 'super_admin'; }
  isAdmin(): boolean { return ['super_admin', 'admin'].includes(this.currentUser?.role); }
  isAdminOrManager(): boolean {
    if (!this.currentUser) return true;
    const role = this.currentUser.role || '';
    return ['super_admin', 'admin', 'department_manager'].includes(role);
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

  showHistoryModal = false;
  isWideDrawer = false;
  activeDrawerTab: 'details' | 'subtasks' | 'history' = 'details';
  newSubtaskTitle = '';
  showNewSubtaskForm = false;
  selectedSubtask: any = null;
  showSubtaskDetailModal = false;

  selectSubtaskInDrawer(st: any): void { this.openTaskDetail(st); }
  openSubtaskDetail(subtask: any): void { this.openTaskDetail(subtask); }

  findParentTask(parentId: number): any {
    return (this.tasks || []).find(t => t.id === parentId) || { id: parentId, title: 'المهمة الرئيسية' };
  }

  getTaskTitle(parentId: number): string {
    const p = (this.tasks || []).find(t => t.id === parentId);
    return p ? p.title : 'المهمة الرئيسية';
  }

  deleteSubtaskAttachment(subtask: any, att: any, event: Event): void {
    event.stopPropagation();
    this.confirmService.confirm({
      title: 'حذف مرفق المهمة الفرعية',
      message: 'هل أنت تأكد من رغبتك في حذف هذا المرفق للمهمة الفرعية؟',
      confirmText: 'نعم، حذف المرفق',
      cancelText: 'إلغاء وتراجع',
      type: 'danger',
      icon: 'fa-solid fa-paperclip',
      accept: () => {
        this.apiService.deleteTaskAttachment(subtask.id, att.id).subscribe(() => {
          subtask.attachments = (subtask.attachments || []).filter((a: any) => a.id !== att.id);
          this.toastService.success('تم حذف المرفق بنجاح');
        });
      }
    });
  }

  onSubtaskDetailFileSelected(event: any): void {
    const file = event.target.files && event.target.files[0];
    if (file && this.selectedSubtask) {
      this.apiService.addTaskAttachment(this.selectedSubtask.id, file).subscribe(res => {
        if (res && res.data) {
          if (!this.selectedSubtask.attachments) this.selectedSubtask.attachments = [];
          this.selectedSubtask.attachments.push(res.data);
        }
      });
    }
  }

  showSubtaskModal = false;
  subtaskForm = { title: '', description: '', priority: 'medium', user_ids: [] as number[], file: null as File | null };
  subtaskFilePreview: string | null = null;

  openSubtaskModal(): void {
    this.subtaskForm = { title: '', description: '', priority: 'medium', user_ids: [], file: null };
    this.subtaskFilePreview = null;
    this.showSubtaskModal = true;
  }
  onSubtaskUserSelect(event: any): void {
    if (!event || !event.value) return;
    const uid = Number(event.value);
    if (uid && !this.subtaskForm.user_ids.includes(uid)) {
      this.subtaskForm.user_ids.push(uid);
    }
  }

  removeSubtaskUser(uid: number): void {
    this.subtaskForm.user_ids = this.subtaskForm.user_ids.filter(id => id !== uid);
  }

  getUserName(uid: number): string {
    const u = this.allUsers.find(x => x.id === uid);
    return u ? u.name : 'موظف';
  }

  onSubtaskFileSelected(event: any): void {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.subtaskForm.file = file;
      if (file.type.includes('image')) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.subtaskFilePreview = e.target.result;
        reader.readAsDataURL(file);
      } else {
        this.subtaskFilePreview = null;
      }
    }
  }

  saveFullSubtask(): void {
    if (!this.subtaskForm.title.trim() || !this.selectedTask) return;
    const formData = new FormData();
    formData.append('title', this.subtaskForm.title.trim());
    if (this.subtaskForm.description.trim()) {
      formData.append('description', this.subtaskForm.description.trim());
    }
    formData.append('priority', this.subtaskForm.priority);
    if (this.subtaskForm.user_ids.length) {
      formData.append('user_ids', JSON.stringify(this.subtaskForm.user_ids));
    }
    if (this.subtaskForm.file) {
      formData.append('file', this.subtaskForm.file);
    }

    this.apiService.createSubtask(this.selectedTask.id, formData).subscribe(res => {
      if (res && res.data) {
        const newSt = res.data;
        newSt.parent = { id: this.selectedTask.id, title: this.selectedTask.title };
        if (!this.selectedTask.subtasks) this.selectedTask.subtasks = [];
        this.selectedTask.subtasks.push(newSt);
        if (!this.tasks.some(t => t.id === newSt.id)) {
          this.tasks.push(newSt);
        }
        this.showSubtaskModal = false;
        this.showNewSubtaskForm = false;
        this.loadTaskActivities(this.selectedTask.id);
      }
    });
  }

  allUsers: any[] = [];
  groupedUsers: any[] = [];
  taskActivities: any[] = [];

  addSubtask(): void {
    if (!this.newSubtaskTitle.trim() || !this.selectedTask) return;
    const title = this.newSubtaskTitle.trim();
    this.apiService.createSubtask(this.selectedTask.id, title).subscribe(res => {
      if (res && res.data) {
        const newSt = res.data;
        newSt.parent = { id: this.selectedTask.id, title: this.selectedTask.title };
        if (!this.selectedTask.subtasks) this.selectedTask.subtasks = [];
        this.selectedTask.subtasks.push(newSt);
        if (!this.tasks.some(t => t.id === newSt.id)) {
          this.tasks.push(newSt);
        }
        this.newSubtaskTitle = '';
        this.loadTaskActivities(this.selectedTask.id);
      }
    });
  }

  toggleSubtaskStatus(task: any, subtask: any): void {
    subtask.status = subtask.status === 'done' ? 'new' : 'done';
    this.apiService.toggleSubtask(subtask.id).subscribe(() => {
      this.loadTaskActivities(task.id);
    });
  }

  deleteSubtask(task: any, subtask: any): void {
    this.apiService.deleteSubtask(subtask.id).subscribe(() => {
      if (task.subtasks) {
        task.subtasks = task.subtasks.filter((s: any) => s.id !== subtask.id);
      }
      this.tasks = (this.tasks || []).filter(t => t.id !== subtask.id);
      this.loadTaskActivities(task.id);
    });
  }

  getCompletedSubtasksCount(task: any): number {
    if (!task || !task.subtasks) return 0;
    return task.subtasks.filter((s: any) => s.status === 'done').length;
  }

  getSubtasksProgressPercent(task: any): number {
    if (!task || !task.subtasks || !task.subtasks.length) return 0;
    const doneCount = this.getCompletedSubtasksCount(task);
    return Math.round((doneCount / task.subtasks.length) * 100);
  }

  loadData(): void {
    this.apiService.getTasks().subscribe(res => {
      this.tasks = res || [];
      this.checkAndOpenTaskFromUrl();
    });
    this.apiService.getDeals().subscribe(res => this.deals = res || []);
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
    this.apiService.getUsers().subscribe(res => {
      const arr = (res && res.data ? res.data : res) || [];
      this.allUsers = arr.filter((u: any) => u.role !== 'client' && u.role !== 'Client');
      this.buildGroupedUsers();
    });
  }

  buildGroupedUsers(): void {
    if (!this.allUsers || !this.allUsers.length) {
      this.groupedUsers = [];
      return;
    }

    const deptMap: { [key: string]: any[] } = {};

    this.allUsers.forEach(u => {
      const deptName = u.department?.name || u.department_name || 'عام / بدون قسم';
      if (!deptMap[deptName]) {
        deptMap[deptName] = [];
      }
      deptMap[deptName].push({
        label: u.name,
        value: u.id,
        email: u.email || '',
        user: u
      });
    });

    this.groupedUsers = Object.keys(deptMap).map(deptName => ({
      label: deptName,
      value: deptName,
      items: deptMap[deptName]
    }));
  }

  getTasksForColumn(colKey: string) {
    let list = (this.tasks || []).filter(t => {
      if (colKey === 'done') {
        return t.status === 'done' || t.status === 'approved' || t.status === 'completed';
      }
      if (colKey === 'in_review') {
        return t.status === 'in_review' || t.status === 'client_review' || t.status === 'review' || t.status === 'awaiting_approval';
      }
      if (colKey === 'client_feedback') {
        return t.status === 'client_feedback' || t.status === 'needs_revision' || t.status === 'revision_requested';
      }
      return t.status === colKey;
    });

    if (!this.currentUser) return list;

    const u = this.currentUser;

    // Super Admin & Admin see ALL tasks across all departments
    if (['super_admin', 'admin'].includes(u.role)) {
      // Do not return early; allow toolbar filters and search to apply below
    } else if (u.role === 'employee') {
      // Employee sees ONLY tasks assigned to him
      list = list.filter(t =>
        t.assigned_to === u.id ||
        t.assigned_to_user_id === u.id ||
        t.user_id === u.id ||
        t.assigned_to_name === u.name ||
        (t.users || []).some((x: any) => x.id === u.id || x.email === u.email || x.name === u.name)
      );
    } else if (u.role === 'client') {
      // Client sees ONLY tasks belonging to his deals/projects
      list = list.filter(t =>
        t.client_id === u.id ||
        t.client_name === u.name ||
        t.deal?.client_id === u.id ||
        t.deal?.client_name === u.name ||
        (typeof t.deal?.client === 'string' && t.deal.client.toLowerCase().includes('client')) ||
        (t.status === 'client_review' || t.status === 'in_review' || t.status === 'client_feedback')
      );
    } else if (['department_manager', 'Department Manager'].includes(u.role)) {
      // Department manager sees ALL tasks in his department regardless of assigned employee
      const managerDeptId = u.department_id || u.department?.id;
      list = list.filter(t => {
        const taskDeptId = t.department_id || t.department?.id;
        const subCatDeptId = t.subCategory?.department_id;
        const isAssigned = (t.users || []).some((x: any) => x.id === u.id) || t.assigned_to === u.id;

        if (managerDeptId) {
          return Number(taskDeptId) === Number(managerDeptId) ||
                 Number(subCatDeptId) === Number(managerDeptId) ||
                 isAssigned;
        }
        return isAssigned;
      });
    }

    // Apply Universal PrimeNG Toolbar Filters (Deal, Department, User, Priority, Search) FOR ALL ROLES!
    if (this.selectedDealFilter && this.selectedDealFilter !== 'all') {
      const dealId = Number(this.selectedDealFilter);
      list = list.filter((t: any) => Number(t.deal_id) === dealId || Number(t.deal?.id) === dealId);
    }

    if (this.selectedDepartmentFilter && this.selectedDepartmentFilter !== 'all') {
      const deptId = Number(this.selectedDepartmentFilter);
      list = list.filter((t: any) =>
        Number(t.department_id) === deptId ||
        Number(t.department?.id) === deptId ||
        Number(t.subCategory?.department_id) === deptId
      );
    }

    if (this.selectedUserFilter && this.selectedUserFilter !== 'all') {
      const userId = Number(this.selectedUserFilter);
      list = list.filter((t: any) =>
        Number(t.assigned_to) === userId ||
        Number(t.assigned_to_user_id) === userId ||
        Number(t.user_id) === userId ||
        (t.users || []).some((x: any) => Number(x.id) === userId)
      );
    }

    if (this.selectedPriorityFilter && this.selectedPriorityFilter !== 'all') {
      list = list.filter((t: any) => t.priority === this.selectedPriorityFilter);
    }

    const q = (this.searchQuery || this.clientSearchQuery || '').trim().toLowerCase();
    if (q) {
      list = list.filter((t: any) => {
        const titleMatch = t.title && t.title.toLowerCase().includes(q);
        const scopeMatch = t.scope && t.scope.toLowerCase().includes(q);
        const descMatch = t.description && t.description.toLowerCase().includes(q);
        const dealMatch = t.deal && t.deal.title && t.deal.title.toLowerCase().includes(q);
        const assigneeMatch = (t.assignee_name && t.assignee_name.toLowerCase().includes(q)) ||
                              (t.assigned_to_name && t.assigned_to_name.toLowerCase().includes(q));
        const userMatch = (t.users || []).some((u: any) =>
          (u.name && u.name.toLowerCase().includes(q)) ||
          (u.email && u.email.toLowerCase().includes(q))
        );

        return titleMatch || scopeMatch || descMatch || dealMatch || assigneeMatch || userMatch;
      });
    }

    return list;
  }

  searchQuery = '';
  clientSearchQuery = '';
  clientStatusFilter: 'all' | 'pending' | 'in_progress' | 'done' = 'all';
  selectedDealFilter: string = 'all';
  selectedDepartmentFilter: string = 'all';
  selectedUserFilter: string = 'all';
  selectedPriorityFilter: string = 'all';

  get dealOptions() {
    const list = [{ label: 'كل الصفقات والمشاريع', value: 'all' }];
    const dealsMap = new Map<number, string>();
    (this.tasks || []).forEach((t: any) => {
      const id = t.deal_id || t.deal?.id;
      const title = t.deal?.title || t.deal_title;
      if (id && title) dealsMap.set(Number(id), title);
    });
    dealsMap.forEach((title, id) => list.push({ label: title, value: String(id) }));
    return list;
  }

  get departmentOptions() {
    const list = [{ label: 'كل الأقسام والمراكز', value: 'all' }];
    const deptMap = new Map<number, string>();
    (this.tasks || []).forEach((t: any) => {
      const id = t.department_id || t.department?.id;
      const name = t.department?.name || t.department_name;
      if (id && name) deptMap.set(Number(id), name);
    });
    deptMap.forEach((name, id) => list.push({ label: name, value: String(id) }));
    return list;
  }

  get userOptions() {
    const list = [{ label: 'جميع أعضاء الفريق والمسؤولين', value: 'all' }];
    (this.allUsers || []).forEach((u: any) => {
      if (u.role !== 'client') {
        list.push({ label: u.name || u.email, value: String(u.id) });
      }
    });
    return list;
  }

  priorityOptions = [
    { label: 'جميع الأولويات', value: 'all' },
    { label: 'أولوية عالية 🔥', value: 'high' },
    { label: 'أولوية متوسطة ⚡', value: 'medium' },
    { label: 'أولوية منخفضة 🟢', value: 'low' }
  ];

  showFilterDrawer = false;

  getActiveFiltersCount(): number {
    let count = 0;
    if (this.selectedDealFilter && this.selectedDealFilter !== 'all') count++;
    if (this.selectedDepartmentFilter && this.selectedDepartmentFilter !== 'all') count++;
    if (this.selectedUserFilter && this.selectedUserFilter !== 'all') count++;
    if (this.selectedPriorityFilter && this.selectedPriorityFilter !== 'all') count++;
    if (this.searchQuery && this.searchQuery.trim()) count++;
    return count;
  }

  getTotalFilteredCount(): number {
    if (this.isClient()) {
      return this.getFilteredClientTasks().length;
    }
    return (
      this.getTasksForColumn('new').length +
      this.getTasksForColumn('content_creator').length +
      this.getTasksForColumn('in_progress').length +
      this.getTasksForColumn('in_review').length +
      this.getTasksForColumn('client_feedback').length +
      this.getTasksForColumn('done').length
    );
  }

  resetBoardFilters() {
    this.selectedDealFilter = 'all';
    this.selectedDepartmentFilter = 'all';
    this.selectedUserFilter = 'all';
    this.selectedPriorityFilter = 'all';
    this.searchQuery = '';
    this.clientSearchQuery = '';
  }

  getClientDeals(): { id: number; title: string }[] {
    if (!this.tasks) return [];
    const map = new Map<number, string>();
    for (const t of this.tasks) {
      if (t.deal_id && (t.deal?.title || t.deal_title)) {
        map.set(Number(t.deal_id), t.deal?.title || t.deal_title);
      }
    }
    const list: { id: number; title: string }[] = [];
    map.forEach((title, id) => list.push({ id, title }));
    return list;
  }

  getClientDepartments(): { id: number; name: string }[] {
    if (!this.tasks) return [];
    const map = new Map<number, string>();
    for (const t of this.tasks) {
      if (t.department_id && (t.department?.name || t.department_name)) {
        map.set(Number(t.department_id), t.department?.name || t.department_name);
      }
    }
    const list: { id: number; name: string }[] = [];
    map.forEach((name, id) => list.push({ id, name }));
    return list;
  }

  getFilteredClientTasks(): any[] {
    if (!this.tasks) return [];
    let list = this.tasks;

    if (this.selectedDealFilter !== 'all') {
      const dealId = Number(this.selectedDealFilter);
      list = list.filter((t: any) => Number(t.deal_id) === dealId);
    }

    if (this.selectedDepartmentFilter !== 'all') {
      const deptId = Number(this.selectedDepartmentFilter);
      list = list.filter((t: any) => Number(t.department_id) === deptId || Number(t.department?.id) === deptId);
    }

    if (this.clientStatusFilter === 'pending') {
      list = list.filter((t: any) => t.status === 'client_review' || t.status === 'in_review' || t.status === 'review' || t.status === 'awaiting_approval');
    } else if (this.clientStatusFilter === 'in_progress') {
      list = list.filter((t: any) => t.status !== 'done' && t.status !== 'approved' && t.status !== 'completed' && t.status !== 'client_review' && t.status !== 'in_review' && t.status !== 'review');
    } else if (this.clientStatusFilter === 'done') {
      list = list.filter((t: any) => t.status === 'done' || t.status === 'approved' || t.status === 'completed');
    }

    const q = (this.searchQuery || this.clientSearchQuery || '').trim().toLowerCase();
    if (q) {
      list = list.filter((t: any) =>
        (t.title && t.title.toLowerCase().includes(q)) ||
        (t.scope && t.scope.toLowerCase().includes(q)) ||
        (t.description && t.description.toLowerCase().includes(q)) ||
        (t.deal && t.deal.title && t.deal.title.toLowerCase().includes(q)) ||
        (t.assignee_name && t.assignee_name.toLowerCase().includes(q)) ||
        (t.users || []).some((u: any) => (u.name && u.name.toLowerCase().includes(q)) || (u.email && u.email.toLowerCase().includes(q)))
      );
    }
    return list;
  }

  getClientPendingCount(): number {
    return (this.tasks || []).filter((t: any) => t.status === 'client_review' || t.status === 'in_review' || t.status === 'review' || t.status === 'awaiting_approval').length;
  }

  getClientApprovedCount(): number {
    return (this.tasks || []).filter((t: any) => t.status === 'done' || t.status === 'approved' || t.status === 'completed').length;
  }

  getClientInProgressCount(): number {
    return (this.tasks || []).filter((t: any) => t.status !== 'done' && t.status !== 'approved' && t.status !== 'completed' && t.status !== 'client_review' && t.status !== 'in_review' && t.status !== 'review').length;
  }

  openFileUrl(url: string, event: Event): void {
    event.stopPropagation();
    if (url) window.open(url, '_blank');
  }

  openLightbox(url: string, event: Event): void {
    event.stopPropagation();
    if (url) this.expandedImageUrl = url;
  }

  showRevisionModal = false;
  revisionNotes = '';

  approveTaskByClient(task: any, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (!task) return;
    const oldStatus = task.status;
    task.status = 'approved';
    this.apiService.approveClientTask(task.id).subscribe({
      next: () => {
        this.apiService.addTaskNote(task.id, 'تمت موافقة واعتماد المهمة بنجاح من قِبل العميل VIP').subscribe(() => {
          this.loadTaskActivities(task.id);
        });
      },
      error: () => {
        this.persistStatusUpdate(task, 'approved', () => task.status = oldStatus);
      }
    });
  }

  openRevisionModal(task?: any, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (task) {
      this.selectedTask = task;
    }
    this.revisionNotes = '';
    this.showRevisionModal = true;
  }

  submitRevisionByClient(): void {
    if (!this.revisionNotes.trim() || !this.selectedTask) return;
    const task = this.selectedTask;
    const oldStatus = task.status;
    task.status = 'client_feedback';
    const noteText = this.revisionNotes.trim();

    this.apiService.addTaskNote(task.id, 'طلب تعديل من العميل: ' + noteText).subscribe({
      next: () => {
        this.persistStatusUpdate(task, 'client_feedback', () => {});
        this.revisionNotes = '';
        this.showRevisionModal = false;
        this.loadTaskActivities(task.id);
      },
      error: () => {
        this.persistStatusUpdate(task, 'client_feedback', () => task.status = oldStatus);
        this.revisionNotes = '';
        this.showRevisionModal = false;
      }
    });
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
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      this.toastService.warning('يرجى كتابة عنوان المهمة والحقول المطلوبة بشكل صحيح قبل الحفظ');
      return;
    }
    this.loading = true;
    const taskVal = { ...this.taskForm.value };

    // Rule 4: If task is created for a department without specifying an employee, auto-assign to Department Head!
    if (taskVal.department_id && !taskVal.assigned_to && (!taskVal.user_ids || !taskVal.user_ids.length)) {
      const deptHead = this.allUsers.find((u: any) =>
        u.role === 'department_manager' &&
        (u.department_id === taskVal.department_id || u.department?.id === taskVal.department_id)
      );
      if (deptHead) {
        taskVal.assigned_to = deptHead.id;
        taskVal.user_ids = [deptHead.id];
      }
    }

    this.apiService.createTask(taskVal).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('تم إنشاء المهمة الجديدة بنجاح', 'تمت العملية');
        this.showCreateModal = false;
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || 'تعذر حفظ المهمة الجديدة');
      }
    });
  }

  checkAndOpenTaskFromUrl(): void {
    if (!this.pendingTaskIdFromUrl || !this.tasks || !this.tasks.length) return;
    const targetTask = this.tasks.find(t => t.id === Number(this.pendingTaskIdFromUrl));
    if (targetTask) {
      this.selectedTask = targetTask;
      this.activeDrawerTab = 'details';
      this.loadTaskActivities(targetTask.id);
    }
  }

  selectedTaskUserIds: number[] = [];

  openTaskDetail(task: any): void {
    if (this.draggingTask || !task) return;
    this.selectedTask = task;
    this.selectedTaskUserIds = (task.users || []).map((u: any) => u.id);
    this.activeDrawerTab = 'details';
    this.selectedSubtask = null;
    this.loadTaskActivities(task.id);

    if (task.id) {
      this.pendingTaskIdFromUrl = task.id;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { taskId: task.id },
        queryParamsHandling: 'merge'
      });
    }
  }

  closeTaskDrawer(): void {
    this.selectedTask = null;
    this.pendingTaskIdFromUrl = null;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { taskId: null },
      queryParamsHandling: 'merge'
    });
  }

  closeDetail(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('drawer-backdrop')) {
      this.closeTaskDrawer();
    }
  }

  loadTaskActivities(taskId: number): void {
    this.apiService.getTaskActivity(taskId).subscribe(res => {
      if (res && res.data) {
        this.taskActivities = res.data;
      }
    });
  }

  onMultiSelectUserChange(event: any): void {
    if (!this.selectedTask) return;
    const userIds: number[] = (event.value || []).map((v: any) => Number(v));
    this.apiService.assignTaskMembers(this.selectedTask.id, userIds).subscribe(() => {
      this.selectedTask.users = this.allUsers.filter((u: any) => userIds.includes(u.id));
      this.loadTaskActivities(this.selectedTask.id);
    });
  }

  onPrimeUserSelect(event: any): void {
    if (!event || !event.value) return;
    const userId = Number(event.value);
    if (userId) {
      this.assignUserById(userId);
    }
  }

  assignUserById(userId: number): void {
    if (!this.selectedTask) return;
    if (!this.selectedTask.users) this.selectedTask.users = [];
    const exists = this.selectedTask.users.some((u: any) => u.id === userId);
    if (!exists) {
      const userObj = this.allUsers.find((u: any) => u.id === userId);
      const userIds = [...this.selectedTask.users.map((u: any) => u.id), userId];
      this.apiService.assignTaskMembers(this.selectedTask.id, userIds).subscribe(() => {
        if (userObj) {
          this.selectedTask.users.push(userObj);
        }
        this.loadTaskActivities(this.selectedTask.id);
      });
    }
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
    this.confirmService.confirm({
      title: 'حذف مرفق المهمة',
      message: 'هل أنت تأكد من رغبتك في حذف هذا المرفق؟',
      confirmText: 'نعم، حذف المرفق',
      cancelText: 'إلغاء وتراجع',
      type: 'danger',
      icon: 'fa-solid fa-file-circle-xmark',
      accept: () => {
        this.apiService.deleteTaskAttachment(task.id, att.id).subscribe(() => {
          if (task.attachments) {
            task.attachments = task.attachments.filter((a: any) => a.id !== att.id);
          }
          this.toastService.success('تم حذف المرفق بنجاح');
          this.loadTaskActivities(task.id);
        });
      }
    });
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

  newFileVisibleToClient = true;
  newNoteVisibleToClient = true;

  getTaskAttachmentsForUser(task: any): any[] {
    if (!task || !task.attachments) return [];
    if (this.isClient()) {
      return task.attachments.filter((a: any) => a.visible_to_client !== false);
    }
    return task.attachments;
  }

  toggleAttachmentVisibility(task: any, att: any, event: Event): void {
    event.stopPropagation();
    att.visible_to_client = !(att.visible_to_client !== false);
  }

  getTaskNotesForUser(task: any): any[] {
    if (!task || !task.notes) return [];
    if (this.isClient()) {
      return task.notes.filter((n: any) => n.visible_to_client !== false);
    }
    return task.notes;
  }

  toggleNoteVisibility(task: any, note: any): void {
    note.visible_to_client = !(note.visible_to_client !== false);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && this.selectedTask) {
      const isVis = this.newFileVisibleToClient;
      const fd = new FormData();
      fd.append('file', file);
      fd.append('visible_to_client', isVis ? '1' : '0');
      this.apiService.addTaskAttachment(this.selectedTask.id, fd).subscribe(res => {
        const attData = res?.data || { id: Date.now(), file_name: file.name, file_url: URL.createObjectURL(file), is_image: file.type.includes('image') };
        attData.visible_to_client = isVis;
        if (!this.selectedTask.attachments) this.selectedTask.attachments = [];
        this.selectedTask.attachments.push(attData);
        this.loadTaskActivities(this.selectedTask.id);
      });
    }
  }

  submitNote(): void {
    if (!this.newNoteText.trim() || !this.selectedTask) return;
    const isVis = this.newNoteVisibleToClient;
    const noteText = this.newNoteText.trim();
    this.apiService.addTaskNote(this.selectedTask.id, noteText).subscribe(res => {
      const noteData = res?.data || { id: Date.now(), note: noteText, user: this.currentUser, created_at: new Date().toISOString() };
      noteData.visible_to_client = isVis;
      if (!this.selectedTask.notes) this.selectedTask.notes = [];
      this.selectedTask.notes.push(noteData);
      this.newNoteText = '';
      this.newNoteVisibleToClient = true;
      this.loadTaskActivities(this.selectedTask.id);
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
