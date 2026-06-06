import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-contact-hub',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-hub.component.html',
  styleUrl: './contact-hub.component.css'
})
export class ContactHubComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  contactForm!: FormGroup;
  inquiries: any[] = [];
  
  loadingInfo = false;
  infoMessage = '';

  ngOnInit() {
    this.contactForm = this.fb.group({
      id: [''],
      whatsapp_phone: [''],
      whatsapp_desc: [''],
      official_email: [''],
      company_address: [''],
      google_maps_url: [''],
      emergency_support_info: ['']
    });

    this.loadContactInfo();
    this.loadInquiries();
  }

  loadContactInfo() {
    this.apiService.getContactInfo().subscribe(res => {
      if (res?.data) {
        this.contactForm.patchValue(res.data);
      }
    });
  }

  saveContactInfo() {
    this.loadingInfo = true;
    this.infoMessage = '';
    this.apiService.updateContactInfo(this.contactForm.value).subscribe({
      next: (res) => {
        this.loadingInfo = false;
        this.infoMessage = 'Saved successfully!';
        setTimeout(() => this.infoMessage = '', 3000);
      },
      error: () => {
        this.loadingInfo = false;
        this.infoMessage = 'Failed to save.';
      }
    });
  }

  loadInquiries() {
    this.apiService.getInquiries().subscribe(res => {
      this.inquiries = res || [];
    });
  }

  deleteInquiry(id: string) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      this.apiService.deleteInquiry(id).subscribe(() => {
        this.loadInquiries();
      });
    }
  }
}
