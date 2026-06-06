import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent implements OnInit {
  fb = inject(FormBuilder);
  api = inject(ApiService);

  deals: any[] = [];
  clients: any[] = [];
  currentUser: any = null;

  isLoading = true;
  showDealModal = false;
  showPaymentModal = false;
  isEditMode = false;
  selectedDealId: any = null;

  dealForm!: FormGroup;
  paymentForm!: FormGroup;

  // Stats summaries
  totalBilling = 0;
  totalPaid = 0;
  totalRemaining = 0;

  ngOnInit() {
    const userStr = localStorage.getItem('gotek_user') || sessionStorage.getItem('gotek_user');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    }

    this.initForms();
    this.loadDeals();
    if (this.currentUser?.role === 'admin' || this.currentUser?.role === 'manager') {
      this.loadClients();
    }
  }

  initForms() {
    this.dealForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      client_id: ['', [Validators.required]],
      total_price: [0, [Validators.required, Validators.min(1)]],
      paid_amount: [0, [Validators.min(0)]]
    });

    this.paymentForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  loadDeals() {
    this.isLoading = true;
    this.api.getDeals().subscribe({
      next: (res) => {
        this.deals = res || [];
        this.calculateStats();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadClients() {
    this.api.getUsers().subscribe(users => {
      this.clients = (users || []).filter((u: any) => u.role === 'client');
    });
  }

  calculateStats() {
    this.totalBilling = this.deals.reduce((sum, deal) => sum + (Number(deal.total_price) || 0), 0);
    this.totalPaid = this.deals.reduce((sum, deal) => sum + (Number(deal.paid_amount) || 0), 0);
    this.totalRemaining = this.deals.reduce((sum, deal) => sum + (Number(deal.remaining_balance) || 0), 0);
  }

  openAddModal() {
    this.isEditMode = false;
    this.dealForm.reset({ total_price: 0, paid_amount: 0 });
    this.showDealModal = true;
  }

  openEditModal(deal: any) {
    this.isEditMode = true;
    this.selectedDealId = deal.id;
    this.dealForm.patchValue({
      title: deal.title,
      description: deal.description,
      client_id: deal.client_id,
      total_price: deal.total_price,
      paid_amount: deal.paid_amount
    });
    this.showDealModal = true;
  }

  openPaymentModal(deal: any) {
    this.selectedDealId = deal.id;
    this.paymentForm.reset({ amount: 0 });
    this.showPaymentModal = true;
  }

  submitDeal() {
    if (this.dealForm.invalid) return;

    const payload = this.dealForm.value;
    if (this.isEditMode) {
      // update
      this.api.updateDeal(this.selectedDealId, payload).subscribe({
        next: () => {
          this.showDealModal = false;
          this.loadDeals();
        }
      });
    } else {
      // create
      this.api.addDeal(payload).subscribe({
        next: () => {
          this.showDealModal = false;
          this.loadDeals();
        }
      });
    }
  }

  submitPayment() {
    if (this.paymentForm.invalid) return;
    const amount = this.paymentForm.value.amount;

    this.api.addPayment(this.selectedDealId, amount).subscribe({
      next: () => {
        this.showPaymentModal = false;
        this.loadDeals();
      }
    });
  }

  deleteDeal(id: any) {
    if (confirm('هل أنت متأكد من حذف هذه الصفقة نهائياً؟')) {
      this.api.deleteDeal(id).subscribe({
        next: () => {
          this.loadDeals();
        }
      });
    }
  }

  closeModal() {
    this.showDealModal = false;
    this.showPaymentModal = false;
  }
}
