import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() currentPage = 'Overview';
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleNotifications = new EventEmitter<void>();
  @Output() toggleUserMenu = new EventEmitter<void>();

  user = {
    avatar: 'DC',
    name: 'Demo Client'
  };

  searchQuery = signal('');

  onMenuToggle() {
    this.toggleSidebar.emit();
  }

  onNotificationToggle() {
    this.toggleNotifications.emit();
  }

  onUserToggle() {
    this.toggleUserMenu.emit();
  }

  onSearch(event: any) {
    this.searchQuery.set(event.target.value);
  }
}
