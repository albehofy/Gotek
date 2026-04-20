import { Component, Input, Output, EventEmitter, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() set isOpen(value: boolean) {
    this._isOpen.set(value);
  }
  get isOpen(): boolean {
    return this._isOpen();
  }

  private _isOpen = signal(false);
  isCollapsed = signal(false);

  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() navigate = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();
  @Output() toggleCollapse = new EventEmitter<void>();

  activeItem = signal('tasks');
  showUserMenu = signal(false);

  navItems = [
    { id: 'tasks', icon: '✓', label: 'Tasks', section: 'Main' },
    { id: 'clients', icon: '👥', label: 'Clients', section: 'Main' },
    { id: 'settings', icon: '⚙️', label: 'Settings', section: 'Main' }
  ];

  user = {
    avatar: 'DC',
    name: 'Demo Client',
    role: 'Client Account'
  };

  onNavigate(itemId: string) {
    this.activeItem.set(itemId);
    this.navigate.emit(itemId);
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onToggleCollapse() {
    this.isCollapsed.update(collapsed => !collapsed);
    this.toggleCollapse.emit();
  }

  onLogout() {
    this.logout.emit();
  }

  getSectionItems(section: string) {
    return this.navItems.filter(item => item.section === section);
  }
}
