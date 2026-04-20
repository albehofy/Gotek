import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  currentDate = signal('');

  kpis = [
    {
      id: 'k1',
      icon: '📣',
      value: 38400,
      label: 'Ad Spend (SAR)',
      subLabel: 'vs 28,400 last month',
      badge: '↑ +34%',
      badgeType: 'up',
      class: 'k1'
    },
    {
      id: 'k2',
      icon: '💰',
      value: 133200,
      label: 'Revenue Attributed (SAR)',
      subLabel: 'ROAS: 3.47× this month',
      badge: '↑ +247%',
      badgeType: 'up',
      class: 'k2'
    },
    {
      id: 'k3',
      icon: '👥',
      value: 1240000,
      label: 'Total Reach',
      subLabel: 'Across all platforms',
      badge: '↑ +18%',
      badgeType: 'up',
      class: 'k3'
    },
    {
      id: 'k4',
      icon: '🎯',
      value: 37,
      label: 'Cost Per Lead',
      subLabel: 'Down from 42 SAR',
      badge: '↓ -12%',
      badgeType: 'down',
      class: 'k4'
    }
  ];

  campaigns = [
    {
      name: 'TechMart FB/IG',
      platform: 'Facebook + Instagram',
      status: 'Live',
      statusType: 'live',
      roas: '3.47×'
    },
    {
      name: 'Bloom Google',
      platform: 'Google Shopping',
      status: 'Live',
      statusType: 'live',
      roas: '4.2×'
    },
    {
      name: 'Snap Fashion',
      platform: 'TikTok Ads',
      status: 'Review',
      statusType: 'review',
      roas: '2.8×'
    },
    {
      name: 'GreenLife Meta',
      platform: 'Facebook',
      status: 'Paused',
      statusType: 'paused',
      roas: '—'
    }
  ];

  projects = [
    {
      emoji: '🌐',
      name: 'Medico Health Portal',
      type: 'Web Development',
      progress: 78
    },
    {
      emoji: '🎨',
      name: 'Sawa Brand Identity',
      type: 'Branding',
      progress: 92
    },
    {
      emoji: '🎬',
      name: 'Luxe Reels — Batch 3',
      type: 'Video Production',
      progress: 45
    }
  ];

  activities = [
    {
      icon: '📈',
      iconClass: 'fi-o',
      title: 'ROAS hit 347%',
      description: 'on Facebook — best quarter to date.',
      time: '2 min ago'
    },
    {
      icon: '✅',
      iconClass: 'fi-g',
      title: 'Brand design approved',
      description: '— moving to print production.',
      time: '1 hr ago'
    },
    {
      icon: '🌐',
      iconClass: 'fi-b',
      title: 'PageSpeed improved to 96/100',
      description: 'after optimisation.',
      time: '3 hrs ago'
    },
    {
      icon: '🎬',
      iconClass: 'fi-gold',
      title: '3 reels delivered',
      description: 'for review — Luxe Brand batch 2.',
      time: 'Yesterday'
    },
    {
      icon: '📋',
      iconClass: 'fi-o',
      title: 'October report ready',
      description: '— full KPI summary available.',
      time: '2 days ago'
    }
  ];

  quickActions = [
    { icon: '📞', label: 'Contact Manager', subLabel: 'Get support from your team' },
    { icon: '📊', label: 'Download Report', subLabel: 'October 2025 summary' },
    { icon: '💳', label: 'View Invoices', subLabel: '1 pending payment' },
    { icon: '💬', label: 'Open Messages', subLabel: 'New message from Sarah' },
    { icon: '🖼️', label: 'View Portfolio', subLabel: 'All completed projects' },
    { icon: '⚙️', label: 'Settings', subLabel: 'Update your preferences' }
  ];

  ngOnInit() {
    const d = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    this.currentDate.set(d.toLocaleDateString('en-US', options));
  }

  formatNumber(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(2) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }
}
