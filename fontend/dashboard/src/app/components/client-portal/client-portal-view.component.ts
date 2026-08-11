import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client-portal-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="client-portal-container" *ngIf="portalData">
      <div class="portal-header">
        <div>
          <h2><i class="fa-solid fa-building text-orange"></i> بوابة العميل المخصصة (Client Portal)</h2>
          <p class="subtitle">أهلاً بك {{ portalData.client_name }} — متابعة العقود، الحسابات، واعتماد المهام</p>
        </div>
      </div>

      <!-- Financial Account Summary -->
      <div class="metrics-grid">
        <div class="metric-card glass-panel">
          <span class="label">إجمالي قيمة العقود والخدمات</span>
          <h3 class="value text-white">{{ portalData.financial_summary.total_billed | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">إجمالي المبالغ المسددة</span>
          <h3 class="value text-success">{{ portalData.financial_summary.total_paid | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">المتبقي المستحق للسداد</span>
          <h3 class="value text-danger">{{ portalData.financial_summary.remaining_balance | number:'1.2-2' }} EGP</h3>
        </div>
      </div>

      <!-- Contracts & Deals Section -->
      <div class="section-card glass-panel margin-top">
        <h3><i class="fa-solid fa-file-contract text-orange"></i> عقودك والصفقات النشطة</h3>
        <table class="crm-table margin-top">
          <thead>
            <tr>
              <th>عنوان العقد / الصفقة</th>
              <th>إجمالي العقد</th>
              <th>المدفوع حتى الآن</th>
              <th>المتبقي</th>
              <th>نسبة الإنجاز</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let deal of portalData.deals">
              <td class="font-bold text-white">{{ deal.title }}</td>
              <td>{{ deal.calculated_total | number:'1.2-2' }} EGP</td>
              <td class="text-success">{{ deal.calculated_paid | number:'1.2-2' }} EGP</td>
              <td class="text-danger">{{ deal.remaining_balance | number:'1.2-2' }} EGP</td>
              <td>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" [style.width.%]="deal.progress"></div>
                </div>
                <small class="text-muted">{{ deal.progress }}%</small>
              </td>
              <td><span class="badge" [ngClass]="deal.status">{{ deal.status }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Client Tasks List (Completed & In-Progress) -->
      <div class="section-card glass-panel margin-top">
        <h3><i class="fa-solid fa-list-check text-orange"></i> متابعة وإعتماد المهام المطلوبة</h3>
        <div class="tasks-portal-list margin-top">
          <div class="task-portal-card glass-panel" *ngFor="let task of portalData.tasks">
            <div class="card-header">
              <h4>{{ task.title }}</h4>
              <span class="badge" [ngClass]="task.status">{{ task.status }}</span>
            </div>
            <p class="task-scope" *ngIf="task.scope">{{ task.scope }}</p>

            <!-- Attachments / Deliverables -->
            <div class="deliverables-preview" *ngIf="task.attachments && task.attachments.length > 0">
              <small class="text-muted">المرفقات والنتائج المسلمة:</small>
              <div class="attachments-grid">
                <img *ngFor="let att of task.attachments" [src]="att.file_url" class="thumb-img" />
              </div>
            </div>

            <!-- Notes & Feedback Thread -->
            <div class="notes-section">
              <div class="note-bubble" *ngFor="let note of task.notes">
                <span class="author font-bold">{{ note.user?.name }}:</span> {{ note.note }}
              </div>
            </div>

            <!-- Client Action Buttons (Approve / Leave Note) -->
            <div class="card-actions">
              <button class="btn btn-primary btn-sm" (click)="approveTask(task)" *ngIf="task.status !== 'approved' && task.status !== 'done'">
                <i class="fa-solid fa-check-double"></i> اعتماد هذه المهمة (Approve Task)
              </button>

              <button class="btn btn-glass btn-sm" (click)="openNoteInput(task)">
                <i class="fa-solid fa-comment"></i> إضافة ملاحظات / ملاحظة تعديل
              </button>
            </div>

            <div class="note-input-box" *ngIf="task.showNoteInput">
              <textarea [(ngModel)]="task.tempNoteText" placeholder="اكتب ملاحظاتك وفيدباك التعديل..." rows="2"></textarea>
              <button class="btn btn-primary btn-sm" (click)="submitNote(task)">إرسال الملاحظة</button>
            </div>
          </div>

          <div *ngIf="!portalData.tasks || portalData.tasks.length === 0" class="text-center text-muted py-4">
            لا توجد مهام حالية متصلة بحسابك
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .client-portal-container { padding: 24px; }
    .portal-header { margin-bottom: 24px; }
    .subtitle { color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
    .metric-card { padding: 20px; text-align: right; }
    .metric-card .label { color: var(--text-secondary); font-size: 0.85rem; display: block; margin-bottom: 8px; }
    .metric-card .value { font-size: 1.6rem; font-weight: 800; }
    .section-card { padding: 24px; border-radius: 16px; }
    .margin-top { margin-top: 24px; }
    .crm-table { width: 100%; border-collapse: collapse; text-align: right; }
    .crm-table th, .crm-table td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.88rem; }
    .crm-table th { background: rgba(255,255,255,0.03); color: #fff; }
    .progress-bar-bg { background: rgba(255,255,255,0.1); height: 6px; border-radius: 4px; overflow: hidden; width: 100px; display: inline-block; }
    .progress-bar-fill { background: var(--orange); height: 100%; border-radius: 4px; }
    .tasks-portal-list { display: flex; flex-direction: column; gap: 16px; }
    .task-portal-card { padding: 20px; border-radius: 16px; }
    .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .card-header h4 { color: #fff; font-size: 1.05rem; }
    .task-scope { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px; }
    .attachments-grid { display: flex; gap: 8px; margin-top: 6px; }
    .thumb-img { width: 64px; height: 64px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); }
    .notes-section { margin: 12px 0; display: flex; flex-direction: column; gap: 6px; }
    .note-bubble { background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: 8px; font-size: 0.84rem; color: #fff; }
    .card-actions { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
    .note-input-box { margin-top: 12px; }
    .note-input-box textarea { width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; margin-bottom: 8px; }
    .text-orange { color: var(--orange); }
    .text-success { color: #10b981; }
    .text-danger { color: #ef4444; }
  `]
})
export class ClientPortalViewComponent implements OnInit {
  private apiService = inject(ApiService);

  portalData: any = null;

  ngOnInit(): void {
    this.loadPortalData();
  }

  loadPortalData(): void {
    this.apiService.getClientPortalDashboard().subscribe(res => {
      this.portalData = res.data || res;
    });
  }

  approveTask(task: any): void {
    this.apiService.approveClientTask(task.id).subscribe(() => {
      task.status = 'approved';
    });
  }

  openNoteInput(task: any): void {
    task.showNoteInput = !task.showNoteInput;
  }

  submitNote(task: any): void {
    if (!task.tempNoteText || !task.tempNoteText.trim()) return;
    this.apiService.addClientTaskNote(task.id, task.tempNoteText).subscribe(res => {
      if (res.data) {
        if (!task.notes) task.notes = [];
        task.notes.push(res.data);
        task.status = 'client_feedback';
        task.tempNoteText = '';
        task.showNoteInput = false;
      }
    });
  }
}
