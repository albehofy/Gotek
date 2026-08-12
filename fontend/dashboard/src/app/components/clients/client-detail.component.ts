import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Loading State -->
    <div class="loading-shell" *ngIf="loading">
      <div class="spinner"></div>
      <p>جاري تحميل ملف العميل...</p>
    </div>

    <!-- Error State -->
    <div class="error-shell" *ngIf="!loading && !client">
      <i class="fa-solid fa-circle-exclamation"></i>
      <h3>لم يتم العثور على العميل</h3>
      <p>تعذر تحميل بيانات هذا العميل.</p>
      <button class="btn btn-primary" routerLink="/clients">
        <i class="fa-solid fa-arrow-right"></i> الرجوع للعملاء
      </button>
    </div>

    <!-- Main Content -->
    <div class="client-detail-container" *ngIf="!loading && client">
      <!-- Back Navigation Bar -->
      <div class="top-nav-bar">
        <button class="back-btn" routerLink="/clients">
          <i class="fa-solid fa-arrow-right"></i> العودة لدليل العملاء
        </button>
      </div>

      <!-- Hero Client Profile Header Card -->
      <div class="detail-header glass-panel margin-top">
        <div class="header-main-info">
          <div class="client-av-lg">{{ getInitial() }}</div>
          <div class="client-titles">
            <h2>{{ client.name || client.client_name }}</h2>
            <span class="client-email"><i class="fa-solid fa-envelope" style="margin-left:4px; opacity:0.6;"></i> {{ client.email || client.client_email }}</span>
          </div>
        </div>
        <span class="client-badge">
          <span class="pulse-dot"></span> عميل نشط
        </span>
      </div>

      <!-- KPI Cards -->
      <div class="metrics-grid margin-top">
        <div class="metric-card kpi-card kpi-t">
          <div class="kpi-icon"><i class="fa-solid fa-file-invoice-dollar"></i></div>
          <div class="kpi-label">إجمالي الفواتير</div>
          <div class="kpi-value">{{ totalBilled | number:'1.2-2' }}</div>
          <div class="kpi-sub">ج.م متعاقد عليها</div>
        </div>
        <div class="metric-card kpi-card kpi-e">
          <div class="kpi-icon"><i class="fa-solid fa-circle-check"></i></div>
          <div class="kpi-label">إجمالي المدفوع</div>
          <div class="kpi-value">{{ totalPaid | number:'1.2-2' }}</div>
          <div class="kpi-sub">ج.م تم استلامها</div>
        </div>
        <div class="metric-card kpi-card kpi-r">
          <div class="kpi-icon"><i class="fa-solid fa-clock"></i></div>
          <div class="kpi-label">الرصيد المتبقي</div>
          <div class="kpi-value">{{ remainingBalance | number:'1.2-2' }}</div>
          <div class="kpi-sub">ج.م معلقة</div>
        </div>
        <div class="metric-card kpi-card kpi-v">
          <div class="kpi-icon"><i class="fa-solid fa-handshake"></i></div>
          <div class="kpi-label">إجمالي الصفقات</div>
          <div class="kpi-value">{{ deals.length }}</div>
          <div class="kpi-sub">عقود صفقات</div>
        </div>
      </div>

      <!-- Deals Table -->
      <div class="section-card glass-panel margin-top">
        <div class="section-head">
          <h3><i class="fa-solid fa-file-contract" style="color:var(--violet-light)"></i> الصفقات والعقود</h3>
          <span class="badge badge-v">{{ deals.length }} صفقات</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>عنوان الصفقة</th>
                <th>القسم</th>
                <th>القيمة الإجمالية</th>
                <th>المدفوع</th>
                <th>المتبقي</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of deals">
                <td style="font-weight:700; color:#fff">{{ deal.title }}</td>
                <td>{{ deal.department?.name || 'عام' }}</td>
                <td>{{ (deal.calculated_total || 0) | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--emerald-light); font-weight:600">{{ (deal.calculated_paid || 0) | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--rose-light); font-weight:600">{{ (deal.remaining_balance || 0) | number:'1.2-2' }} ج.م</td>
                <td><span class="badge" [ngClass]="deal.status">{{ deal.status }}</span></td>
              </tr>
              <tr *ngIf="deals.length === 0">
                <td colspan="6">
                  <div class="empty-state">
                    <i class="fa-solid fa-file-circle-xmark"></i>
                    <p>لا توجد صفقات مسجلة لهذا العميل.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tasks Table -->
      <div class="section-card glass-panel margin-top">
        <div class="section-head">
          <h3><i class="fa-solid fa-list-check" style="color:var(--teal-light)"></i> المهام المرتبطة</h3>
          <span class="badge badge-t">{{ tasks.length }} مهام</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>عنوان المهمة</th>
                <th>التصنيف / القسم</th>
                <th>المسؤولون</th>
                <th>سعر العميل</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let task of tasks">
                <td style="font-weight:700; color:#fff">{{ task.title }}</td>
                <td>{{ task.subCategory?.name_ar || task.department?.name || '-' }}</td>
                <td>
                  <span *ngFor="let u of task.users" class="user-chip">{{ u.name }}</span>
                </td>
                <td>{{ (task.client_price || 0) | number:'1.2-2' }} ج.م</td>
                <td><span class="badge" [ngClass]="task.status">{{ task.status }}</span></td>
              </tr>
              <tr *ngIf="tasks.length === 0">
                <td colspan="5">
                  <div class="empty-state">
                    <i class="fa-solid fa-clipboard-check"></i>
                    <p>لا توجد مهام مرتبطة بهذا العميل.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; direction: rtl; text-align: right; font-family: 'Cairo', 'Inter', sans-serif; }

    /* Loading */
    .loading-shell {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      min-height: 60vh; gap: 16px; color: var(--text-2);
    }
    .spinner {
      width: 40px; height: 40px;
      border: 3px solid var(--violet-soft);
      border-top-color: var(--violet);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Error */
    .error-shell {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      min-height: 60vh; gap: 12px; text-align: center; color: var(--text-2);
    }
    .error-shell i { font-size: 3rem; color: var(--rose-light); opacity: 0.6; }
    .error-shell h3 { color: #fff; font-size: 1.2rem; }

    /* Container */
    .client-detail-container { padding: 28px 32px; direction: rtl; text-align: right; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }

    .top-nav-bar { margin-bottom: 18px; }
    .margin-top { margin-top: 20px; }

    .back-btn {
      background: rgba(255,255,255,0.05); border: 1px solid var(--border);
      color: var(--text-2); padding: 8px 16px; border-radius: var(--r);
      font-size: 0.82rem; font-weight: 700; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px;
      transition: all 0.2s; font-family: inherit; text-decoration: none;
    }
    .back-btn:hover { background: var(--violet-soft); color: var(--violet-light); border-color: var(--border-v); transform: translateX(-2px); }

    /* Header */
    .detail-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 24px 28px; background: var(--bg-card); border: 1px solid var(--border);
      border-radius: var(--r-lg); gap: 16px; flex-wrap: wrap; direction: rtl; text-align: right;
    }
    .header-main-info { display: flex; align-items: center; gap: 18px; }
    .client-av-lg {
      width: 58px; height: 58px; border-radius: 16px;
      background: linear-gradient(135deg, var(--violet), var(--teal));
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem; font-weight: 900; color: #fff;
      box-shadow: 0 0 24px var(--violet-glow);
      flex-shrink: 0;
    }
    .client-titles h2 { font-size: 1.45rem; font-weight: 800; color: #fff; margin: 0 0 4px 0; letter-spacing: -0.3px; }
    .client-email { font-size: 0.85rem; color: var(--text-2); display: flex; align-items: center; }
    .client-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 7px 16px; border-radius: var(--r-full);
      background: var(--emerald-soft); color: var(--emerald-light);
      border: 1px solid rgba(16,185,129,0.3); font-size: 0.78rem; font-weight: 700;
    }
    .pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-light); box-shadow: 0 0 10px var(--emerald-light); animation: pulse 1.8s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.3); } }

    /* KPI Grid */
    .metrics-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px; direction: rtl;
    }

    /* Section Card */
    .section-card {
      padding: 0; overflow: hidden;
      border-radius: var(--r-lg); background: var(--bg-card); border: 1px solid var(--border);
      direction: rtl; text-align: right;
    }
    .section-head {
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 20px; border-bottom: 1px solid var(--border);
      background: rgba(99, 102, 241, 0.05);
    }
    .section-head h3 { font-size: 0.98rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 9px; margin: 0; }

    /* Table inside section */
    .table-wrap { overflow-x: auto; }
    table { width: 100%; border-collapse: separate; border-spacing: 0; direction: rtl; text-align: right; }
    th { padding: 13px 18px; border-bottom: 1px solid rgba(99,102,241,0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99,102,241,0.05); white-space: nowrap; text-align: right; }
    td { padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: #fff; vertical-align: middle; text-align: right; }
    tr:last-child td { border-bottom: none; }
    tr:hover td { background: rgba(255,255,255,0.015); }

    .user-chip { background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2); color: var(--violet-light); padding: 2px 8px; border-radius: 100px; font-size: 0.72rem; font-weight: 600; margin-left: 4px; display: inline-block; }

    .empty-state { text-align: center; padding: 32px 16px; color: var(--text-2); }
    .empty-state i { font-size: 2.2rem; margin-bottom: 8px; opacity: 0.4; display: block; }
    .empty-state p { font-size: 0.86rem; margin: 0; }

    @media (max-width: 768px) {
      .client-detail-container { padding: 16px; }
      .metrics-grid { grid-template-columns: repeat(2, 1fr); }
    }
  `]
})
export class ClientDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiService = inject(ApiService);

  clientId: number | null = null;
  client: any = null;
  deals: any[] = [];
  tasks: any[] = [];
  loading = true;

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

  getInitial(): string {
    const name = this.client?.name || this.client?.client_name || '';
    return name ? name[0].toUpperCase() : 'C';
  }

  loadClientData(): void {
    this.loading = true;

    // Try getClientBalances first — it has financial summary + name/email
    this.apiService.getClientBalances().subscribe({
      next: (res) => {
        const all = res.data || [];
        const found = all.find((c: any) =>
          c.id === this.clientId ||
          c.client_id === this.clientId ||
          c.user_id === this.clientId
        );

        if (found) {
          this.client = {
            ...found,
            name: found.client_name || found.name || 'Client #' + this.clientId,
            email: found.client_email || found.email || ''
          };
          this.totalPaid = found.total_paid || 0;
          this.remainingBalance = found.outstanding_balance || 0;
        } else {
          // Fallback: load from getUsers
          this.apiService.getUsers('client').subscribe(r => {
            const users = r.data || [];
            const u = users.find((x: any) => x.id === this.clientId);
            if (u) {
              this.client = { ...u, name: u.name || u.username, email: u.email };
            }
          });
        }
        this.loading = false;
      },
      error: () => {
        // Fallback on error
        this.apiService.getUsers('client').subscribe(r => {
          const users = r.data || [];
          const u = users.find((x: any) => x.id === this.clientId);
          this.client = u ? { ...u, name: u.name || u.username, email: u.email } : null;
          this.loading = false;
        });
      }
    });

    // Load deals
    this.apiService.getDeals().subscribe(allDeals => {
      this.deals = (Array.isArray(allDeals) ? allDeals : [])
        .filter((d: any) => d.client_id === this.clientId);
      this.totalBilled = this.deals.reduce((acc, d) => acc + (d.calculated_total || 0), 0);
      if (!this.totalPaid) {
        this.totalPaid = this.deals.reduce((acc, d) => acc + (d.calculated_paid || 0), 0);
      }
      this.remainingBalance = Math.max(0, this.totalBilled - this.totalPaid);
    });

    // Load tasks
    this.apiService.getTasks().subscribe(allTasks => {
      const dealIds = this.deals.map(d => d.id);
      this.tasks = (Array.isArray(allTasks) ? allTasks : [])
        .filter((t: any) => dealIds.includes(t.deal_id));
    });
  }
}
