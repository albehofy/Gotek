import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, CLIENTS } from './Interfaces/Clients.interface';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
  allClients: Client[] = [];
  filteredClients: Client[] = [];
  searchQuery = signal('');
  filterStatus = signal('all');
  
  showAddModal = signal(false);
  showEditModal = signal(false);
  showDeleteModal = signal(false);

  selectedClient: Client | null = null;
  editingClient: Partial<Client> = {};
  deleteClientId: number | null = null;

  currentPage = signal(1);
  itemsPerPage = 10;

  newClient = {
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    country: '',
    status: 'active' as 'active' | 'inactive' | 'suspended',
    totalBudget: 0,
    paymentStatus: 'pending' as 'paid' | 'pending' | 'overdue',
    contactPerson: '',
    website: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.allClients = [...CLIENTS];
    this.filterClients();
  }

  filterClients() {
    let filtered = this.allClients;

    // Search filter
    const search = this.searchQuery().toLowerCase();
    if (search) {
      filtered = filtered.filter(
        client =>
          client.name.toLowerCase().includes(search) ||
          client.email.toLowerCase().includes(search) ||
          client.company.toLowerCase().includes(search) ||
          client.phone.includes(search)
      );
    }

    // Status filter
    if (this.filterStatus() !== 'all') {
      filtered = filtered.filter(
        client => client.status === this.filterStatus()
      );
    }

    this.filteredClients = filtered;
    this.currentPage.set(1);
  }

  getPaginatedClients() {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredClients.slice(start, start + this.itemsPerPage);
  }

  getTotalPages() {
    return Math.ceil(this.filteredClients.length / this.itemsPerPage);
  }

  onAddClient() {
    this.showAddModal.set(true);
  }

  closeModals() {
    this.showAddModal.set(false);
    this.showEditModal.set(false);
    this.showDeleteModal.set(false);
    this.selectedClient = null;
    this.editingClient = {};
    this.deleteClientId = null;
  }

  onSaveNewClient() {
    const newId = Math.max(...this.allClients.map(c => c.id), 0) + 1;
    const client: Client = {
      id: newId,
      ...this.newClient,
      address: '',
      postalCode: '',
      joinDate: new Date(),
      totalSpent: 0,
      totalRemaining: this.newClient.totalBudget,
      projects: [],
      history: []
    };

    this.allClients.push(client);
    this.filterClients();
    this.closeModals();
    this.resetNewClientForm();
  }

  resetNewClientForm() {
    this.newClient = {
      name: '',
      email: '',
      phone: '',
      company: '',
      city: '',
      country: '',
      status: 'active',
      totalBudget: 0,
      paymentStatus: 'pending',
      contactPerson: '',
      website: ''
    };
  }

  onEditClient(client: Client) {
    this.selectedClient = client;
    this.editingClient = { ...client };
    this.showEditModal.set(true);
  }

  onSaveEditClient() {
    if (this.selectedClient) {
      const index = this.allClients.findIndex(c => c.id === this.selectedClient!.id);
      if (index !== -1) {
        this.allClients[index] = { ...this.allClients[index], ...this.editingClient };
        this.filterClients();
        this.closeModals();
      }
    }
  }

  onDeleteClient(client: Client) {
    this.selectedClient = client;
    this.deleteClientId = client.id;
    this.showDeleteModal.set(true);
  }

  onConfirmDelete() {
    if (this.deleteClientId) {
      this.allClients = this.allClients.filter(c => c.id !== this.deleteClientId);
      this.filterClients();
      this.closeModals();
    }
  }

  onShowClient(client: Client) {
    this.router.navigate(['/client-detail', client.id]);
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      active: '#16A34A',
      inactive: '#8A8078',
      suspended: '#DC2626'
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
}
