import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Client, CLIENTS, Project, ClientHistory } from '../Interfaces/Clients.interface';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent implements OnInit {
  client: Client | null = null;
  activeTab: 'overview' | 'projects' | 'history' | 'financial' = 'overview';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const clientId = parseInt(params['id'], 10);
      this.client = CLIENTS.find(c => c.id === clientId) || null;
      
      if (!this.client) {
        this.router.navigate(['/clients']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/clients']);
  }

  setActiveTab(tab: 'overview' | 'projects' | 'history' | 'financial') {
    this.activeTab = tab;
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      active: '#16A34A',
      inactive: '#8A8078',
      suspended: '#DC2626',
      completed: '#16A34A',
      pending: '#D97706',
      draft: '#8A8078'
    };
    return colors[status] || '#8A8078';
  }

  getPaymentStatusBg(status: string): string {
    const colors: { [key: string]: string } = {
      paid: 'var(--green-p)',
      pending: 'var(--gold-p)',
      overdue: 'var(--red-p)'
    };
    return colors[status] || 'var(--bg)';
  }

  getPaymentStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      paid: 'var(--green)',
      pending: 'var(--gold)',
      overdue: 'var(--red)'
    };
    return colors[status] || 'var(--body)';
  }

  getProjectCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      design: '🎨',
      development: '💻',
      marketing: '📢',
      branding: '🏷️',
      other: '📌'
    };
    return icons[category] || '📌';
  }

  getHistoryIcon(type: string): string {
    const icons: { [key: string]: string } = {
      project: '📋',
      payment: '💳',
      invoice: '📄',
      note: '📝',
      contact: '📞'
    };
    return icons[type] || '📌';
  }

  getTotalProjectBudget(): number {
    return this.client?.projects.reduce((sum, p) => sum + p.budget, 0) || 0;
  }

  getTotalProjectSpent(): number {
    return this.client?.projects.reduce((sum, p) => sum + p.spent, 0) || 0;
  }

  getCompletedProjectsCount(): number {
    return this.client?.projects.filter(p => p.status === 'completed').length || 0;
  }

  getActiveProjectsCount(): number {
    return this.client?.projects.filter(p => p.status === 'active').length || 0;
  }
}
