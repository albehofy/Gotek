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
          <h2><i class="fa-solid fa-id-card" style="color:var(--violet-light);"></i> بوابة العملاء</h2>
          <p class="subtitle">أهلاً بك {{ portalData.client_name }} — متابعة العقود والصفقات، الأرصدة المالية، واعتماد مخرجات العمل</p>
        </div>
      </div>

      <!-- Financial Account Summary -->
      <div class="metrics-grid">
        <div class="metric-card glass-panel">
          <span class="label">إجمالي الفواتير والخدمات</span>
          <h3 class="value" style="color:#fff;">{{ portalData.financial_summary.total_billed | number:'1.2-2' }} ج.م</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">المبلغ المدفوع</span>
          <h3 class="value" style="color:var(--emerald-light);">{{ portalData.financial_summary.total_paid | number:'1.2-2' }} ج.م</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">الرصيد المتبقي</span>
          <h3 class="value" style="color:var(--rose-light);">{{ portalData.financial_summary.remaining_balance | number:'1.2-2' }} ج.م</h3>
        </div>
      </div>

      <!-- Contracts & Deals Section -->
      <div class="section-card glass-panel margin-top">
        <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-file-contract" style="color:var(--violet-light);"></i> العقود والصفقات النشطة</h3>
        <div class="table-responsive margin-top">
          <table class="crm-table">
            <thead>
              <tr>
                <th>عنوان الصفقة</th>
                <th>القيمة الإجمالية</th>
                <th>المبلغ المدفوع</th>
                <th>الرصيد المتبقي</th>
                <th>نسبة الإنجاز</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of portalData.deals">
                <td style="font-weight:700; color:#fff;">{{ deal.title }}</td>
                <td style="color:#fff;">{{ deal.calculated_total | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ deal.calculated_paid | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ deal.remaining_balance | number:'1.2-2' }} ج.م</td>
                <td>
                  <div class="progress-bar-bg" style="background:rgba(255,255,255,0.06); height:6px; border-radius:10px; overflow:hidden; width:100px; display:inline-block; vertical-align:middle; margin-left:6px;">
                    <div class="progress-bar-fill" [style.width.%]="deal.progress" style="height:100%; background:linear-gradient(90deg, var(--violet), var(--teal)); border-radius:10px;"></div>
                  </div>
                  <small style="color:var(--text-2); font-size:0.75rem;">{{ deal.progress }}%</small>
                </td>
                <td><span class="badge badge-v">{{ deal.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Client Tasks List (Completed & In-Progress) -->
      <div class="section-card glass-panel margin-top">
        <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-list-check" style="color:var(--teal-light);"></i> المخرجات واعتمادات المهام</h3>
        <div class="tasks-portal-list margin-top" style="display:flex; flex-direction:column; gap:14px;">
          <div class="task-portal-card glass-panel" *ngFor="let task of portalData.tasks" style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--r-lg); padding:20px;">
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="color:#fff; font-size:1rem; font-weight:700;">{{ task.title }}</h4>
              <span class="badge badge-v">{{ task.status }}</span>
            </div>
            <p class="task-scope" *ngIf="task.scope" style="font-size:0.86rem; color:var(--text-2); margin-bottom:12px;">{{ task.scope }}</p>

            <!-- Attachments / Deliverables -->
            <div class="deliverables-preview" *ngIf="task.attachments && task.attachments.length > 0" style="margin-bottom:12px;">
              <small style="color:var(--text-2); font-size:0.75rem;">المخرجات والمرفقات:</small>
              <div class="attachments-grid" style="display:flex; gap:8px; margin-top:6px;">
                <img *ngFor="let att of task.attachments" [src]="att.file_url" class="thumb-img" style="width:64px; height:64px; object-fit:cover; border-radius:8px; border:1px solid var(--border);" />
              </div>
            </div>

            <!-- Notes & Feedback Thread -->
            <div class="notes-section" style="margin:12px 0; display:flex; flex-direction:column; gap:6px;">
              <div class="note-bubble" *ngFor="let note of task.notes" style="background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:8px; font-size:0.84rem; color:var(--text-2); border:1px solid var(--border);">
                <span class="author font-bold" style="color:#fff; font-weight:700;">{{ note.user?.name }}:</span> {{ note.note }}
              </div>
            </div>

            <!-- Client Action Buttons (Approve / Leave Note) -->
            <div class="card-actions" style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
              <button class="btn btn-primary" (click)="approveTask(task)" *ngIf="task.status !== 'approved' && task.status !== 'done'">
                <i class="fa-solid fa-check-double"></i> اعتماد المخرج
              </button>
              <button class="btn btn-glass" (click)="openNoteInput(task)">
                <i class="fa-solid fa-comment"></i> إضافة ملاحظات وتعديلات
              </button>
            </div>

            <div class="note-input-box" *ngIf="task.showNoteInput" style="margin-top:12px;">
              <textarea [(ngModel)]="task.tempNoteText" placeholder="اكتب ملاحظاتك وتعديلتك هنا..." rows="2" style="width:100%; padding:10px; background:var(--bg-input); border:1px solid var(--border); border-radius:8px; color:#fff; font-family:inherit; outline:none; margin-bottom:8px;" dir="rtl"></textarea>
              <button class="btn btn-primary" (click)="submitNote(task)">إرسال الملاحظات</button>
            </div>
          </div>

          <div *ngIf="!portalData.tasks || portalData.tasks.length === 0" style="text-align:center; padding:32px; color:var(--text-2);">
            لا توجد مخرجات أو مهام نشطة محددة لحسابك حالياً.
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Cairo','Inter',sans-serif; direction: rtl; text-align: right; }
    .client-portal-container { padding: 28px 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; direction: rtl; text-align: right; }
    .portal-header { margin-bottom: 24px; }
    .portal-header h2 { font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .metric-card { padding: 22px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); position: relative; overflow: hidden; }
    .metric-card .label { color: var(--text-2); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px; }
    .metric-card .value { font-size: 1.8rem; font-weight: 900; letter-spacing: -1px; line-height: 1; }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: #fff; vertical-align: middle; text-align: right; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
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
