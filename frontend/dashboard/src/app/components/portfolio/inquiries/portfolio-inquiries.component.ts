import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-portfolio-inquiries',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './portfolio-inquiries.component.html',
  styleUrls: ['./portfolio-inquiries.component.css']
})
export class PortfolioInquiriesComponent implements OnInit {
  private apiService = inject(ApiService);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);
  private fb = inject(FormBuilder);

  activeTab: 'messages' | 'contact-info' = 'messages';
  loading = false;
  savingContact = false;

  inquiries: any[] = [];
  filteredInquiries: any[] = [];
  searchQuery = '';
  serviceFilter = '';

  selectedInquiry: any = null;
  showDetailsModal = false;

  contactForm!: FormGroup;

  ngOnInit() {
    this.initForm();
    this.loadInquiries();
    this.loadContactInfo();
  }

  initForm() {
    this.contactForm = this.fb.group({
      whatsapp_phone: ['', Validators.required],
      whatsapp_description: [''],
      official_email: ['', [Validators.required, Validators.email]],
      official_email_description: [''],
      sales_phone: [''],
      sales_person: [''],
      general_manager_phone: [''],
      company_address: [''],
      google_map_location: [''],
      emergency_support: ['']
    });
  }

  setTab(tab: 'messages' | 'contact-info') {
    this.activeTab = tab;
  }

  loadInquiries() {
    this.loading = true;
    this.apiService.getInquiries().subscribe({
      next: (res: any) => {
        this.loading = false;
        const data = res?.data ?? res ?? [];
        this.inquiries = Array.isArray(data) ? data : [];
        this.filterInquiries();
      },
      error: () => {
        this.loading = false;
        this.toastService.error('حدث خطأ أثناء تحميل الرسائل والطلبات');
      }
    });
  }

  filterInquiries() {
    let result = [...this.inquiries];
    
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(item => 
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.full_name && item.full_name.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.phone && item.phone.toLowerCase().includes(q)) ||
        (item.company && item.company.toLowerCase().includes(q)) ||
        (item.company_name && item.company_name.toLowerCase().includes(q)) ||
        (item.details && item.details.toLowerCase().includes(q)) ||
        (item.project_details && item.project_details.toLowerCase().includes(q))
      );
    }

    if (this.serviceFilter) {
      result = result.filter(item => {
        const s = item.service || item.service_needed || '';
        return s.toLowerCase().includes(this.serviceFilter.toLowerCase());
      });
    }

    this.filteredInquiries = result;
  }

  openDetails(inq: any) {
    this.selectedInquiry = inq;
    this.showDetailsModal = true;
  }

  closeDetails() {
    this.showDetailsModal = false;
    this.selectedInquiry = null;
  }

  deleteInquiry(id: string, event?: MouseEvent) {
    if (event) event.stopPropagation();
    
    this.confirmService.confirm({
      title: 'حذف طلب الاستفسار',
      message: 'هل أنت متأكد من رغبتك في حذف هذا الطلب نهائياً من النظام؟',
      confirmText: 'نعم، احذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.apiService.deleteInquiry(id).subscribe({
          next: () => {
            this.toastService.success('تم حذف الطلب بنجاح');
            if (this.selectedInquiry?.id === id) {
              this.closeDetails();
            }
            this.loadInquiries();
          },
          error: () => {
            this.toastService.error('فشل حذف الطلب');
          }
        });
      }
    });
  }

  loadContactInfo() {
    this.apiService.getContactInfo().subscribe({
      next: (res: any) => {
        const data = res?.data ?? res ?? {};
        if (data) {
          this.contactForm.patchValue({
            whatsapp_phone: data.whatsapp_support?.phone || data.whatsapp_phone || '',
            whatsapp_description: data.whatsapp_support?.description || data.whatsapp_description || '',
            official_email: data.official_email?.email || data.official_email || '',
            official_email_description: data.official_email?.description || data.official_email_description || '',
            sales_phone: data.sales_marketing?.phone || data.sales_phone || '',
            sales_person: data.sales_marketing?.person || data.sales_person || '',
            general_manager_phone: data.general_manager?.phone || data.general_manager_phone || '',
            company_address: data.location?.address || data.company_address || '',
            google_map_location: data.location?.google_map_location || data.google_map_location || '',
            emergency_support: data.emergency_support || ''
          });
        }
      }
    });
  }

  saveContactInfo() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.toastService.warning('يرجى التأكد من صحة البيانات المدخلة');
      return;
    }

    this.savingContact = true;
    this.apiService.updateContactInfo(this.contactForm.value).subscribe({
      next: () => {
        this.savingContact = false;
        this.toastService.success('تم حفظ وتحديث بيانات التواصل بنجاح!');
      },
      error: () => {
        this.savingContact = false;
        this.toastService.error('حدث خطأ أثناء حفظ بيانات التواصل');
      }
    });
  }
}
