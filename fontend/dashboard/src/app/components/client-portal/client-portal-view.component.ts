import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-client-portal-view',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, TextareaModule],
  template: `
    <!-- Loading Spinner -->
    <div class="loading-shell" *ngIf="loading">
      <div class="spinner"></div>
      <p>جاري تحميل بوابة العملاء ومؤشرات الأداء...</p>
    </div>

    <div class="client-portal-container" *ngIf="!loading && portalData">
      
      <!-- HERO HEADER -->
      <div class="portal-hero-banner glass-panel">
        <div class="hero-main-info">
          <div class="client-avatar-badge">
            <i class="fa-solid fa-building"></i>
          </div>
          <div>
            <div class="eyebrow-pill">
              <span class="pulse-dot"></span> حساب عميل VIP
            </div>
            <h1 class="portal-title">أهلاً بك، {{ portalData.client_name }} 👋</h1>
            <p class="portal-sub">متابعة دقيقة للصفقات والعقود المالية، حركات الدفع والتحصيل، وسجل المهام والخطوات الفرعية.</p>
          </div>
        </div>
        <div class="hero-quick-stats">
          <div class="h-stat-pill">
            <span class="h-stat-label">الصفقات النشطة</span>
            <span class="h-stat-num cyan">{{ (portalData.deals || []).length }} صفقات</span>
          </div>
          <div class="h-stat-pill">
            <span class="h-stat-label">مخرجات بانتظار موافقتك</span>
            <span class="h-stat-num amber">{{ getPendingApprovalCount() }} مخرجات</span>
          </div>
        </div>
      </div>

      <!-- ── 1. FINANCIAL & PROJECTS KPI METRICS GRID ── -->
      <div class="metrics-grid margin-top">
        
        <!-- Total Billed Card -->
        <div class="metric-card glass-panel violet">
          <div class="mc-top">
            <div class="mc-icon violet"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <span class="mc-badge">إجمالي التعاقدات</span>
          </div>
          <div class="mc-body">
            <span class="mc-label">إجمالي قيم الصفقات</span>
            <h2 class="mc-value">{{ getFinancialTotal() | number:'1.2-2' }} <small>ج.م</small></h2>
          </div>
          <div class="mc-footer">
            <span>عدد العقود النشطة: {{ (portalData.deals || []).length }}</span>
          </div>
        </div>

        <!-- Total Paid Card -->
        <div class="metric-card glass-panel emerald">
          <div class="mc-top">
            <div class="mc-icon emerald"><i class="fa-solid fa-circle-check"></i></div>
            <span class="mc-badge emerald">تم السداد</span>
          </div>
          <div class="mc-body">
            <span class="mc-label">إجمالي المبلغ المدفوع</span>
            <h2 class="mc-value emerald-text">{{ getFinancialPaid() | number:'1.2-2' }} <small>ج.م</small></h2>
          </div>
          <div class="mc-footer">
            <span>نسبة السداد: <strong>{{ getPaidPercentage() }}%</strong></span>
          </div>
        </div>

        <!-- Remaining Balance Card -->
        <div class="metric-card glass-panel rose">
          <div class="mc-top">
            <div class="mc-icon rose"><i class="fa-solid fa-clock-rotate-left"></i></div>
            <span class="mc-badge rose">متبقي مستحق</span>
          </div>
          <div class="mc-body">
            <span class="mc-label">الرصيد المتبقي للأقساط</span>
            <h2 class="mc-value rose-text">{{ getFinancialRemaining() | number:'1.2-2' }} <small>ج.م</small></h2>
          </div>
        </div>

        <!-- Overall Task Progress Card -->
        <div class="metric-card glass-panel cyan">
          <div class="mc-top">
            <div class="mc-icon cyan"><i class="fa-solid fa-chart-pie"></i></div>
            <span class="mc-badge cyan">معدل الإنجاز</span>
          </div>
          <div class="mc-body">
            <span class="mc-label">نسبة إنجاز المهام الكلية</span>
            <h2 class="mc-value cyan-text">{{ getOverallProgress() }}%</h2>
          </div>
          <div class="mc-footer">
            <span>{{ getCompletedTaskCount() }} من {{ (portalData.tasks || []).length }} مهمة مكتملة</span>
          </div>
        </div>

      </div>

      <!-- ── 2. VISUAL CHARTS & METRIC PROGRESS BARS ── -->
      <div class="charts-section-grid margin-top">
        
        <!-- Financial Payment Progress Visual Bar Chart -->
        <div class="chart-card glass-panel">
          <div class="card-title-head">
            <i class="fa-solid fa-chart-column text-violet"></i>
            <div>
              <h3>مؤشر التسديد المالي ونسب الدفعات</h3>
              <p>نظرة عامة على نسبة الدفعات المالية المسددة مقابل المبالغ المتبقية</p>
            </div>
          </div>

          <div class="visual-progress-box">
            <div class="pb-header">
              <span>نسبة السداد الكلية ({{ getPaidPercentage() }}%)</span>
              <span>المتبقي: {{ getFinancialRemaining() | number:'1.0-0' }} ج.م</span>
            </div>
            <div class="pb-track-lg">
              <div class="pb-fill-lg emerald" [style.width.%]="getPaidPercentage()"></div>
            </div>
            <div class="pb-legend">
              <div class="legend-item"><span class="dot-legend emerald"></span> المدفوع: {{ getFinancialPaid() | number:'1.0-0' }} ج.م</div>
              <div class="legend-item"><span class="dot-legend rose"></span> المتبقي: {{ getFinancialRemaining() | number:'1.0-0' }} ج.م</div>
            </div>
          </div>
        </div>

        <!-- Task Completion Execution Chart -->
        <div class="chart-card glass-panel">
          <div class="card-title-head">
            <i class="fa-solid fa-list-check text-cyan"></i>
            <div>
              <h3>مؤشر تقدم تنفيذ المهام والمخرجات</h3>
              <p>توزيع حالات المهام بين المكتملة، قيد المراجعة، والمراحل التنفيذية</p>
            </div>
          </div>

          <div class="visual-progress-box">
            <div class="pb-header">
              <span>نسبة إنجاز المشروعات ({{ getOverallProgress() }}%)</span>
              <span>{{ getCompletedTaskCount() }} / {{ (portalData.tasks || []).length }} مكتملة</span>
            </div>
            <div class="pb-track-lg">
              <div class="pb-fill-lg cyan" [style.width.%]="getOverallProgress()"></div>
            </div>
            <div class="pb-legend">
              <div class="legend-item"><span class="dot-legend emerald"></span> مكتملة ({{ getCompletedTaskCount() }})</div>
              <div class="legend-item"><span class="dot-legend cyan"></span> بانتظار الاعتماد ({{ getPendingApprovalCount() }})</div>
              <div class="legend-item"><span class="dot-legend amber"></span> قيد التنفيذ ({{ getInProgressTaskCount() }})</div>
            </div>
          </div>
        </div>

      </div>

      <!-- ── 3. CLIENT DEALS & CONTRACTS CARDS GRID ── -->
      <div class="section-container margin-top">
        <div class="section-head">
          <div>
            <h2><i class="fa-solid fa-handshake text-violet"></i> العقود والصفقات النشطة</h2>
            <p>تفاصيل مبالغ العقود، تاريخ الدفعات، ونطاق العمل المتفق عليه</p>
          </div>
        </div>

        <div class="deals-cards-grid">
          <div class="deal-card glass-panel" *ngFor="let deal of portalData.deals">
            <div class="dc-header">
              <div>
                <h4 class="dc-title">{{ deal.title }}</h4>
                <span class="dc-status-pill">{{ deal.status || 'نشط' }}</span>
              </div>
              <div class="dc-amount-badge">
                <small>إجمالي العقد</small>
                <strong>{{ (deal.calculated_total || deal.total_price || 0) | number:'1.0-0' }} ج.م</strong>
              </div>
            </div>

            <!-- Financial Split Bar -->
            <div class="dc-financial-bar margin-top">
              <div class="df-stat">
                <span class="df-lbl">المدفوع</span>
                <span class="df-val emerald-text">{{ (deal.calculated_paid || 0) | number:'1.0-0' }} ج.م</span>
              </div>
              <div class="df-stat">
                <span class="df-lbl">المتبقي</span>
                <span class="df-val rose-text">{{ (deal.remaining_balance || 0) | number:'1.0-0' }} ج.م</span>
              </div>
            </div>

            <div class="deal-progress-box">
              <div class="dp-header">
                <span>تقدم تنفيذ الصفقة</span>
                <span>{{ getDealProgress(deal) }}%</span>
              </div>
              <div class="dp-track">
                <div class="dp-fill" [style.width.%]="getDealProgress(deal)"></div>
              </div>
            </div>

            <div class="dc-scope" *ngIf="deal.agreed_scope">
              <small><i class="fa-solid fa-file-contract"></i> نطاق العمل المتفق عليه:</small>
              <p>{{ deal.agreed_scope }}</p>
            </div>
          </div>

          <div class="empty-glass-card" *ngIf="!portalData.deals || portalData.deals.length === 0">
            <i class="fa-solid fa-handshake-slash"></i>
            <p>لا توجد عقود أو صفقات مسجلة حالياً في حسابك.</p>
          </div>
        </div>
      </div>

      <!-- ── 4. PAYMENTS LEDGER HISTORY SECTION ── -->
      <div class="section-container margin-top" *ngIf="getAllPayments().length > 0">
        <div class="section-head">
          <div>
            <h2><i class="fa-solid fa-receipt text-emerald"></i> سجل التحصيلات وإيصالات الدفع الحقيقية (Payments Ledger)</h2>
            <p>سجل شفاف بالتواريخ، المبالغ، وطرق التحصيل لجميع الأقساط المسددة</p>
          </div>
        </div>

        <div class="ledger-card glass-panel">
          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>تاريخ السداد</th>
                  <th>المبلغ المدفوع</th>
                  <th>طريقة التحصيل</th>
                  <th>رقم المرجع / الإيصال</th>
                  <th>العقد / الصفقة</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of getAllPayments()">
                  <td style="font-weight:700; color:var(--text);">
                    <i class="fa-regular fa-calendar-check" style="color:#34d399; margin-left:6px;"></i>
                    {{ (p.payment_date | date:'yyyy/MM/dd') || (p.created_at | date:'yyyy/MM/dd') }}
                  </td>
                  <td style="font-weight:800; color:#34d399; font-size:0.95rem;">
                    {{ p.amount | number:'1.2-2' }} ج.م
                  </td>
                  <td>
                    <span class="payment-method-badge">
                      {{ getPaymentMethodLabel(p.payment_method) }}
                    </span>
                  </td>
                  <td style="font-family:monospace; color:var(--text-2);">
                    {{ p.receipt_ref || p.reference_number || 'بدون مرجع' }}
                  </td>
                  <td style="color:var(--text-2); font-weight:600;">
                    {{ p.deal_title || 'صفقة عامة' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>



      <!-- PrimeNG Dialog for Client Revision Notes -->
      <p-dialog [(visible)]="showRevisionDialog" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="طلب تعديل وملاحظات العميل" [style]="{ width: '92vw', maxWidth: '520px' }">
        <div style="padding: 10px 0;" dir="rtl">
          <p style="font-size:0.88rem; color:var(--text-2); margin-bottom:14px; line-height:1.6;">
            يرجى كتابة التعديلات والملاحظات المطلوبة على المهمة ({{ activeTaskForRevision?.title }}) ليتم إرسالها فوراً لفريق العمل:
          </p>
          <div class="form-group" style="margin-bottom:16px;">
            <label style="font-weight:700; font-size:0.85rem; margin-bottom:6px; display:block; color:var(--text);">
              <i class="fa-solid fa-pen-to-square" style="color:var(--amber-light);"></i> تفاصيل التعديل المطلوب <span style="color:var(--rose-light);">*</span>
            </label>
            <textarea [(ngModel)]="revisionText" pInputTextarea rows="4" placeholder="اكتب ملاحظاتك وتعديلاتك بالتفصيل..." style="width:100%; border-radius:12px; padding:12px; background:var(--bg-input); border:1px solid var(--border); color:var(--text); font-family:inherit; outline:none;" dir="rtl"></textarea>
          </div>
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showRevisionDialog = false">إلغاء</button>
            <button type="button" class="btn-dialog-submit" [disabled]="!revisionText.trim()" (click)="submitRevisionNote()">
              <i class="fa-solid fa-paper-plane"></i> إرسال طلب التعديل
            </button>
          </div>
        </div>
      </p-dialog>

    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Cairo','Inter',sans-serif; direction: rtl; text-align: right; }
    
    .loading-shell { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; gap: 16px; color: var(--text-2); }
    .spinner { width: 44px; height: 44px; border: 3px solid var(--violet-soft, rgba(99,102,241,0.2)); border-top-color: var(--violet, #6366f1); border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    .client-portal-container { padding: 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; direction: rtl; text-align: right; }

    /* HERO BANNER */
    .portal-hero-banner {
      background: linear-gradient(135deg, rgba(99,102,241,0.14) 0%, rgba(6,182,212,0.1) 100%);
      border: 1px solid rgba(99,102,241,0.25);
      border-radius: var(--r-xl, 20px);
      padding: 28px 34px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 28px;
    }
    .hero-main-info { display: flex; align-items: center; gap: 18px; }
    .client-avatar-badge { width: 56px; height: 56px; border-radius: 16px; background: rgba(99,102,241,0.2); border: 1px solid var(--violet-light, #818cf8); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #fff; box-shadow: 0 4px 20px rgba(99,102,241,0.3); }
    .eyebrow-pill { display: inline-flex; align-items: center; gap: 8px; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); padding: 4px 12px; border-radius: 100px; font-size: 0.76rem; font-weight: 700; color: var(--violet-light, #a5b4fc); margin-bottom: 6px; }
    .pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 8px #34d399; }
    .portal-title { font-size: 1.6rem; font-weight: 900; color: #fff; margin-bottom: 4px; }
    .portal-sub { font-size: 0.86rem; color: var(--text-2, #94a3b8); }
    
    .hero-quick-stats { display: flex; gap: 12px; }
    .h-stat-pill { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 10px 16px; border-radius: 14px; display: flex; flex-direction: column; }
    .h-stat-label { font-size: 0.72rem; color: var(--text-3, #64748b); }
    .h-stat-num { font-size: 1rem; font-weight: 800; color: #fff; margin-top: 2px; }
    .h-stat-num.cyan { color: #67e8f9; }
    .h-stat-num.amber { color: #fbbf24; }

    /* METRICS GRID */
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 28px; margin-bottom: 36px; }
    .metric-card { padding: 22px; background: var(--bg-card, #12121e); border: 1px solid var(--border, rgba(255,255,255,0.1)); border-radius: var(--r-lg, 16px); position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
    .mc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .mc-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
    .mc-icon.violet { background: rgba(99,102,241,0.15); color: #a5b4fc; }
    .mc-icon.emerald { background: rgba(16,185,129,0.15); color: #34d399; }
    .mc-icon.rose { background: rgba(239,68,68,0.15); color: #f87171; }
    .mc-icon.cyan { background: rgba(6,182,212,0.15); color: #67e8f9; }

    .mc-badge { font-size: 0.72rem; font-weight: 800; padding: 4px 10px; border-radius: 100px; background: rgba(255,255,255,0.06); color: var(--text-2); }
    .mc-badge.emerald { background: rgba(16,185,129,0.12); color: #34d399; }
    .mc-badge.rose { background: rgba(239,68,68,0.12); color: #f87171; }
    .mc-badge.cyan { background: rgba(6,182,212,0.12); color: #67e8f9; }

    .mc-label { font-size: 0.78rem; color: var(--text-2, #94a3b8); font-weight: 600; }
    .mc-value { font-size: 1.75rem; font-weight: 900; color: #fff; margin-top: 4px; line-height: 1.1; }
    .mc-value small { font-size: 0.85rem; font-weight: 600; opacity: 0.8; }
    .emerald-text { color: #34d399 !important; }
    .rose-text { color: #f87171 !important; }
    .cyan-text { color: #67e8f9 !important; }

    .mc-footer { font-size: 0.75rem; color: var(--text-3, #64748b); margin-top: 14px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.05); }

    /* CHARTS SECTION */
    .charts-section-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; margin-bottom: 32px; }
    .chart-card { padding: 22px; background: var(--bg-card, #12121e); border: 1px solid var(--border, rgba(255,255,255,0.1)); border-radius: var(--r-lg, 16px); }
    .card-title-head { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 18px; }
    .card-title-head i { font-size: 1.2rem; margin-top: 2px; }
    .card-title-head h3 { font-size: 1rem; font-weight: 800; color: #fff; }
    .card-title-head p { font-size: 0.78rem; color: var(--text-2); margin-top: 2px; }

    .visual-progress-box { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); padding: 18px; border-radius: 14px; }
    .pb-header { display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
    .pb-track-lg { height: 12px; background: rgba(255,255,255,0.08); border-radius: 100px; overflow: hidden; }
    .pb-fill-lg { height: 100%; border-radius: 100px; transition: width 0.6s ease; }
    .pb-fill-lg.emerald { background: linear-gradient(90deg, #10b981, #34d399); box-shadow: 0 0 12px rgba(16,185,129,0.4); }
    .pb-fill-lg.cyan { background: linear-gradient(90deg, #06b6d4, #67e8f9); box-shadow: 0 0 12px rgba(6,182,212,0.4); }
    .pb-legend { display: flex; gap: 16px; margin-top: 14px; font-size: 0.78rem; color: var(--text-2); flex-wrap: wrap; }
    .legend-item { display: flex; align-items: center; gap: 6px; }
    .dot-legend { width: 8px; height: 8px; border-radius: 50%; }
    .dot-legend.emerald { background: #34d399; }
    .dot-legend.rose { background: #f87171; }
    .dot-legend.cyan { background: #67e8f9; }
    .dot-legend.amber { background: #fbbf24; }

    /* DEALS & LEDGER */
    .section-container { margin-top: 36px; margin-bottom: 32px; }
    .section-head { margin-bottom: 18px; }
    .section-head h2 { font-size: 1.25rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 10px; }
    .section-head p { font-size: 0.82rem; color: var(--text-2); margin-top: 2px; }

    .deals-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
    .deal-card { padding: 22px; background: var(--bg-card, #12121e); border: 1px solid var(--border, rgba(255,255,255,0.1)); border-radius: var(--r-lg, 16px); display: flex; flex-direction: column; justify-content: space-between; }
    .dc-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .dc-title { font-size: 1.05rem; font-weight: 800; color: #fff; line-height: 1.3; }
    .dc-status-pill { font-size: 0.72rem; font-weight: 800; background: rgba(99,102,241,0.15); color: #a5b4fc; padding: 3px 10px; border-radius: 100px; display: inline-block; margin-top: 6px; }
    
    .dc-amount-badge { text-align: left; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 8px 12px; border-radius: 12px; }
    .dc-amount-badge small { display: block; font-size: 0.68rem; color: var(--text-3); }
    .dc-amount-badge strong { font-size: 1.05rem; color: #fff; font-weight: 900; }

    .dc-financial-bar { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: rgba(255,255,255,0.025); padding: 10px 14px; border-radius: 12px; }
    .df-stat { display: flex; flex-direction: column; }
    .df-lbl { font-size: 0.7rem; color: var(--text-3); }
    .df-val { font-size: 0.95rem; font-weight: 800; margin-top: 2px; }

    .deal-progress-box { margin-top: 14px; }
    .dp-header { display: flex; justify-content: space-between; font-size: 0.76rem; color: var(--text-2); font-weight: 700; margin-bottom: 6px; }
    .dp-track { height: 7px; background: rgba(255,255,255,0.08); border-radius: 100px; overflow: hidden; }
    .dp-fill { height: 100%; background: linear-gradient(90deg, #6366f1, #06b6d4); border-radius: 100px; }

    .dc-scope { margin-top: 14px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.8rem; color: var(--text-2); }
    .dc-scope small { font-weight: 700; color: #cbd5e1; display: block; margin-bottom: 4px; }

    /* Ledger Card */
    .ledger-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px; padding: 20px; overflow: hidden; }
    .crm-table { width: 100%; min-width: 700px; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { padding: 12px 16px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.74rem; font-weight: 800; text-transform: uppercase; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; color: var(--text); vertical-align: middle; white-space: nowrap; }
    .payment-method-badge { font-size: 0.76rem; font-weight: 700; color: var(--text-2); background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 8px; }

    /* CLIENT TASKS CARDS GRID & SUBTASKS */
    .client-tasks-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 20px; }
    .client-task-card { padding: 24px; background: var(--bg-card, #12121e); border: 1px solid var(--border, rgba(255,255,255,0.1)); border-radius: 20px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.25s ease; box-shadow: var(--shadow-sm); }
    .client-task-card.need-review { border-color: rgba(6,182,212,0.4); box-shadow: 0 8px 28px rgba(6,182,212,0.15); }
    
    .ct-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 12px; }
    .ct-title { font-size: 1.1rem; font-weight: 800; color: #fff; line-height: 1.35; margin: 0; }
    .ct-deal-name { display: inline-flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--violet-light); margin-top: 5px; font-weight: 700; background: rgba(99, 102, 241, 0.1); padding: 3px 10px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.2); }
    
    .ct-status-badge { font-size: 0.74rem; font-weight: 800; padding: 4px 12px; border-radius: 100px; background: rgba(255,255,255,0.06); color: var(--text-2); flex-shrink: 0; white-space: nowrap; }
    .ct-status-badge.review { background: rgba(6,182,212,0.18); color: #67e8f9; border: 1px solid rgba(6,182,212,0.3); }
    .ct-status-badge.done { background: rgba(16,185,129,0.18); color: #34d399; }
    .ct-status-badge.feedback { background: rgba(245,158,11,0.18); color: #fbbf24; }

    .ct-scope { font-size: 0.88rem; color: var(--text-2); margin-bottom: 14px; line-height: 1.6; background: rgba(255,255,255,0.025); padding: 12px 14px; border-radius: 12px; border: 1px solid var(--border); }

    /* Subtasks Checklist Box */
    .ct-subtasks-box { background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border); border-radius: 14px; padding: 14px; margin-bottom: 14px; display: flex; flex-direction: column; gap: 10px; }
    .subtasks-head { display: flex; justify-content: space-between; align-items: center; }
    .subtasks-title { font-size: 0.78rem; font-weight: 800; color: var(--text); display: flex; align-items: center; gap: 6px; }
    .subtasks-count { font-size: 0.72rem; font-weight: 700; background: rgba(99, 102, 241, 0.12); color: var(--violet-light); padding: 2px 8px; border-radius: 100px; border: 1px solid rgba(99, 102, 241, 0.25); }
    
    .subtasks-list { display: flex; flex-direction: column; gap: 8px; }
    .subtask-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 10px; font-size: 0.84rem; color: var(--text-2); transition: all 0.2s; }
    .subtask-item.completed { background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.2); color: var(--text); }
    .subtask-title { flex: 1; font-weight: 600; }
    .subtask-badge { font-size: 0.68rem; font-weight: 700; color: #34d399; background: rgba(16, 185, 129, 0.12); padding: 2px 8px; border-radius: 100px; }
    
    .text-emerald { color: #34d399 !important; }
    .text-muted { color: var(--text-3) !important; }

    .ct-attachments { margin-bottom: 14px; }
    .att-head { font-size: 0.76rem; font-weight: 700; color: var(--text-2); display: block; margin-bottom: 8px; }
    .att-grid { display: flex; gap: 8px; flex-wrap: wrap; }
    .att-thumb { width: 58px; height: 58px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; }
    .att-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .file-icon-box { color: var(--violet-light); font-size: 1.25rem; }

    .ct-notes-thread { margin-bottom: 14px; display: flex; flex-direction: column; gap: 8px; }
    .thread-head { font-size: 0.76rem; font-weight: 700; color: var(--text-2); display: block; margin-bottom: 4px; }
    .note-bubble { background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 10px 14px; border-radius: 12px; display: flex; flex-direction: column; gap: 4px; }
    .note-author-row { display: flex; justify-content: space-between; align-items: center; }
    .author-name { font-size: 0.78rem; font-weight: 800; color: var(--violet-light); display: flex; align-items: center; gap: 6px; }
    .note-time { font-size: 0.7rem; color: var(--text-3); }
    .note-text { font-size: 0.85rem; color: var(--text); line-height: 1.5; }

    .ct-actions { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
    .btn-client-approve { flex: 1; min-width: 150px; padding: 11px 14px; border: none; border-radius: 12px; background: linear-gradient(135deg, #10b981, #059669); color: #fff; font-size: 0.84rem; font-weight: 800; font-family: inherit; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 7px; box-shadow: 0 4px 14px rgba(16,185,129,0.3); transition: all 0.2s ease; }
    .btn-client-approve:hover { transform: translateY(-1.5px); box-shadow: 0 6px 20px rgba(16,185,129,0.45); }

    .btn-client-revision { flex: 1; min-width: 150px; padding: 11px 14px; border: none; border-radius: 12px; background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; font-size: 0.84rem; font-weight: 800; font-family: inherit; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 7px; box-shadow: 0 4px 14px rgba(245,158,11,0.3); transition: all 0.2s ease; }
    .btn-client-revision:hover { transform: translateY(-1.5px); box-shadow: 0 6px 20px rgba(245,158,11,0.45); }

    .empty-glass-card { text-align: center; padding: 36px 20px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); color: var(--text-2); grid-column: 1 / -1; }
    .empty-glass-card i { font-size: 2.2rem; color: var(--text-3); margin-bottom: 10px; }
    .empty-glass-card p { font-size: 0.9rem; }

    /* Light Theme Overrides */
    :host-context(body.light-theme) .client-portal-container { background: #f8fafc !important; }
    :host-context(body.light-theme) .portal-hero-banner { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .portal-title { color: #0f172a !important; }
    :host-context(body.light-theme) .h-stat-pill { background: #f8fafc !important; border-color: #cbd5e1 !important; }
    
    :host-context(body.light-theme) .metric-card { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .mc-value { color: #0f172a !important; }

    :host-context(body.light-theme) .chart-card { background: #ffffff !important; border-color: #cbd5e1 !important; }
    :host-context(body.light-theme) .card-title-head h3 { color: #0f172a !important; }
    :host-context(body.light-theme) .visual-progress-box { background: #f8fafc !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .pb-header { color: #0f172a !important; }

    :host-context(body.light-theme) .section-head h2 { color: #0f172a !important; }
    :host-context(body.light-theme) .deal-card { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .dc-title { color: #0f172a !important; }
    :host-context(body.light-theme) .dc-amount-badge strong { color: #0f172a !important; }
    :host-context(body.light-theme) .dc-financial-bar { background: #f8fafc !important; border-color: #e2e8f0 !important; }

    :host-context(body.light-theme) .ledger-card { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .crm-table th { background: #f8fafc !important; color: #475569 !important; border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .crm-table td { border-bottom-color: #f1f5f9 !important; color: #1e293b !important; }
    :host-context(body.light-theme) .payment-method-badge { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; }

    :host-context(body.light-theme) .client-task-card { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05) !important; }
    :host-context(body.light-theme) .ct-title { color: #0f172a !important; }
    :host-context(body.light-theme) .ct-scope { background: #f8fafc !important; border-color: #e2e8f0 !important; color: #1e293b !important; }
    
    :host-context(body.light-theme) .ct-subtasks-box { background: #f8fafc !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .subtask-item { background: #ffffff !important; border-color: #cbd5e1 !important; color: #1e293b !important; }
    :host-context(body.light-theme) .subtask-item.completed { background: #ecfdf5 !important; border-color: #a7f3d0 !important; color: #065f46 !important; }
    :host-context(body.light-theme) .subtasks-title { color: #0f172a !important; }

    :host-context(body.light-theme) .note-bubble { background: #f8fafc !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .note-text { color: #1e293b !important; }
    :host-context(body.light-theme) .author-name { color: #4338ca !important; }
  `]
})
export class ClientPortalViewComponent implements OnInit {
  private apiService = inject(ApiService);

  portalData: any = null;
  loading = true;

  showRevisionDialog = false;
  activeTaskForRevision: any = null;
  revisionText = '';

  ngOnInit(): void {
    this.loadPortalData();
  }

  loadPortalData(): void {
    this.loading = true;
    this.apiService.getClientPortalDashboard().subscribe({
      next: (res) => {
        this.portalData = res?.data || res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getFinancialTotal(): number {
    if (this.portalData?.financial_summary?.total_billed) {
      return Number(this.portalData.financial_summary.total_billed);
    }
    const deals = this.portalData?.deals || [];
    return deals.reduce((acc: number, d: any) => acc + Number(d.calculated_total || d.total_price || 0), 0);
  }

  getFinancialPaid(): number {
    if (this.portalData?.financial_summary?.total_paid) {
      return Number(this.portalData.financial_summary.total_paid);
    }
    const deals = this.portalData?.deals || [];
    return deals.reduce((acc: number, d: any) => acc + Number(d.calculated_paid || 0), 0);
  }

  getFinancialRemaining(): number {
    const total = this.getFinancialTotal();
    const paid = this.getFinancialPaid();
    return Math.max(0, total - paid);
  }

  getPaidPercentage(): number {
    const total = this.getFinancialTotal();
    if (!total || total === 0) return 0;
    const paid = this.getFinancialPaid();
    return Math.min(100, Math.round((paid / total) * 100));
  }

  getCompletedTaskCount(): number {
    const tasks = this.portalData?.tasks || [];
    return tasks.filter((t: any) => t.status === 'completed' || t.status === 'done' || t.status === 'approved').length;
  }

  getPendingApprovalCount(): number {
    const tasks = this.portalData?.tasks || [];
    return tasks.filter((t: any) => t.status === 'client_review' || t.status === 'review' || t.status === 'awaiting_approval').length;
  }

  getInProgressTaskCount(): number {
    const tasks = this.portalData?.tasks || [];
    return tasks.filter((t: any) => t.status === 'in_progress' || t.status === 'doing').length;
  }

  getOverallProgress(): number {
    const tasks = this.portalData?.tasks || [];
    if (!tasks || tasks.length === 0) return 0;
    const completed = this.getCompletedTaskCount();
    return Math.min(100, Math.round((completed / tasks.length) * 100));
  }

  getDealProgress(deal: any): number {
    if (!deal) return 0;

    const dealId = Number(deal.id);
    const tasks = (this.portalData?.tasks || []).filter((t: any) =>
      Number(t.deal_id) === dealId || (t.deal && Number(t.deal.id) === dealId)
    );

    const dealTasks = tasks.length > 0 ? tasks : (deal.tasks || []);
    if (dealTasks && dealTasks.length > 0) {
      const completed = dealTasks.filter((t: any) =>
        t.status === 'done' || t.status === 'approved' || t.status === 'completed'
      ).length;
      return Math.min(100, Math.round((completed / dealTasks.length) * 100));
    }

    if (deal.progress !== undefined && deal.progress !== null && !isNaN(Number(deal.progress))) {
      return Math.min(100, Math.max(0, Math.round(Number(deal.progress))));
    }

    if (deal.status === 'won' || deal.status === 'closed' || deal.status === 'completed') return 100;
    return 0;
  }

  getCompletedSubtasksCount(task: any): number {
    if (!task || !task.subtasks) return 0;
    return task.subtasks.filter((s: any) => s.is_completed || s.status === 'completed' || s.status === 'done').length;
  }

  getAllPayments(): any[] {
    const deals = this.portalData?.deals || [];
    const pList: any[] = [];
    deals.forEach((d: any) => {
      if (d.payments && Array.isArray(d.payments)) {
        d.payments.forEach((p: any) => pList.push({ ...p, deal_title: d.title }));
      }
    });
    return pList.sort((a, b) => new Date(b.created_at || b.payment_date).getTime() - new Date(a.created_at || a.payment_date).getTime());
  }

  getPaymentMethodLabel(method: string): string {
    switch (method) {
      case 'instapay': return 'إنستا باي (InstaPay)';
      case 'bank_transfer': return 'تحويل بنكي';
      case 'cash_hand': return 'نقداً يد بيد';
      case 'cash':
      default: return 'كاش (الخزينة)';
    }
  }

  isTaskAwaitingReview(task: any): boolean {
    return ['client_review', 'review', 'awaiting_approval'].includes(task.status);
  }

  getTaskStatusBadgeClass(task: any): string {
    if (this.isTaskAwaitingReview(task)) return 'review';
    if (['completed', 'done', 'approved'].includes(task.status)) return 'done';
    return 'feedback';
  }

  getTaskStatusLabel(task: any): string {
    if (this.isTaskAwaitingReview(task)) return 'بانتظار موافقتك';
    if (['completed', 'done', 'approved'].includes(task.status)) return 'تم الإنجاز والاعتماد';
    return 'جاري العمل والتنفيذ';
  }

  isImage(att: any): boolean {
    const url = att?.file_url || att?.url || att?.file_name || '';
    return /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(url);
  }

  approveTask(task: any): void {
    this.apiService.approveClientTask(task.id).subscribe({
      next: () => {
        task.status = 'approved';
        this.loadPortalData();
      }
    });
  }

  openNoteModalForTask(task: any): void {
    this.activeTaskForRevision = task;
    this.revisionText = '';
    this.showRevisionDialog = true;
  }

  submitRevisionNote(): void {
    if (!this.activeTaskForRevision || !this.revisionText.trim()) return;
    
    this.apiService.addClientTaskNote(this.activeTaskForRevision.id, this.revisionText).subscribe({
      next: () => {
        this.showRevisionDialog = false;
        this.loadPortalData();
      }
    });
  }
}
