import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="client-detail-container" *ngIf="client">
      <div class="header-nav">
        <a routerLink="/clients" class="back-link"><i class="fa-solid fa-arrow-right"></i> العودة لقائمة العملاء</a>
        <h2><i class="fa-solid fa-user-tie text-orange"></i> سجل العميل: {{ client.name }}</h2>
      </div>

      <!-- Financial Metrics Summary -->
      <div class="metrics-grid">
        <div class="metric-card glass-panel">
          <span class="label">إجمالي القيمة المتعاقد عليها</span>
          <h3 class="value text-white">{{ totalBilled | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">إجمالي المدفوعات المسددة</span>
          <h3 class="value text-success">{{ totalPaid | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">المتبقي في ذمة العميل (المستحق)</span>
          <h3 class="value text-danger">{{ remainingBalance | number:'1.2-2' }} EGP</h3>
        </div>
      </div>

      <!-- Deals & Installments Section -->
      <div class="section-card glass-panel margin-top">
        <h3><i class="fa-solid fa-file-contract text-orange"></i> العقود والصفقات ودفعات الأقساط</h3>
        <table class="crm-table">
          <thead>
            <tr>
              <th>عنوان الصفقة</th>
              <th>القسم الرئيسي</th>
              <th>إجمالي الصفقة</th>
              <th>المدفوع</th>
              <th>المتبقي</th>
              <th>حالة الصفقة</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let deal of deals">
              <td class="font-bold text-white">{{ deal.title }}</td>
              <td>{{ deal.department?.name || 'General' }}</td>
              <td>{{ deal.calculated_total | number:'1.2-2' }} EGP</td>
              <td class="text-success">{{ deal.calculated_paid | number:'1.2-2' }} EGP</td>
              <td class="text-danger">{{ deal.remaining_balance | number:'1.2-2' }} EGP</td>
              <td><span class="badge" [ngClass]="deal.status">{{ deal.status }}</span></td>
            </tr>
            <tr *ngIf="deals.length === 0">
              <td colspan="6" class="text-center text-muted">لا توجد صفقات مسجلة لهذا العميل</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Tasks Executed for Client -->
      <div class="section-card glass-panel margin-top">
        <h3><i class="fa-solid fa-list-check text-orange"></i> المهام المرتبطة بعقود العميل</h3>
        <table class="crm-table">
          <thead>
            <tr>
              <th>عنوان المهمة</th>
              <th>القسم / الفئة الفرعية</th>
              <th>الموظفون المنفذون</th>
              <th>السعر للعميل</th>
              <th>الحالة الحالية</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let task of tasks">
              <td class="font-bold text-white">{{ task.title }}</td>
              <td>{{ task.subCategory?.name_ar || task.department?.name || '-' }}</td>
              <td>
                <span *ngFor="let u of task.users" class="user-chip">{{ u.name }}</span>
              </td>
              <td>{{ task.client_price | number:'1.2-2' }} EGP</td>
              <td><span class="badge" [ngClass]="task.status">{{ task.status }}</span></td>
            </tr>
            <tr *ngIf="tasks.length === 0">
              <td colspan="5" class="text-center text-muted">لا توجد مهام حالية لهذا العميل</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .client-detail-container { padding: 24px; }
    .header-nav { margin-bottom: 24px; }
    .back-link { color: var(--orange-light); text-decoration: none; font-size: 0.9rem; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; margin-bottom: 12px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
    .metric-card { padding: 20px; text-align: right; }
    .metric-card .label { color: var(--text-secondary); font-size: 0.85rem; display: block; margin-bottom: 8px; }
    .metric-card .value { font-size: 1.6rem; font-weight: 800; }
    .section-card { padding: 24px; border-radius: 16px; }
    .section-card h3 { margin-bottom: 16px; font-size: 1.1rem; }
    .margin-top { margin-top: 24px; }
    .crm-table { width: 100%; border-collapse: collapse; text-align: right; }
    .crm-table th, .crm-table td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; }
    .crm-table th { background: rgba(255,255,255,0.03); color: #fff; }
    .user-chip { background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 12px; font-size: 0.78rem; margin-left: 4px; display: inline-block; }
    .text-orange { color: var(--orange); }
    .text-success { color: #10b981; }
    .text-danger { color: #ef4444; }
  `]
})
export class ClientDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  clientId: number | null = null;
  client: any = null;
  deals: any[] = [];
  tasks: any[] = [];

  totalBilled = 0;
  totalPaid = 0;
  remainingBalance = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      if (this.clientId) {
        this.loadClientData();
      }
    });
  }

  loadClientData(): void {
    this.apiService.getUsers('client').subscribe(res => {
      const allClients = res.data || [];
      this.client = allClients.find((c: any) => c.id === this.clientId) || { id: this.clientId, name: 'العميل ' + this.clientId };
    });

    this.apiService.getDeals().subscribe(allDeals => {
      this.deals = (Array.isArray(allDeals) ? allDeals : []).filter((d: any) => d.client_id === this.clientId);
      this.totalBilled = this.deals.reduce((acc, d) => acc + (d.calculated_total || 0), 0);
      this.totalPaid = this.deals.reduce((acc, d) => acc + (d.calculated_paid || 0), 0);
      this.remainingBalance = max(0, this.totalBilled - this.totalPaid);
    });

    this.apiService.getTasks().subscribe(allTasks => {
      const dealIds = this.deals.map(d => d.id);
      this.tasks = (Array.isArray(allTasks) ? allTasks : []).filter((t: any) => dealIds.includes(t.deal_id));
    });
  }
}

function max(a: number, b: number) { return a > b ? a : b; }
