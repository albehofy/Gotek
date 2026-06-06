import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  apiService = inject(ApiService);
  team: any[] = [];
  founders: any[] = [];
  aboutContent: any = null;

  ngOnInit() {
    this.apiService.getAbout().subscribe((res: any) => {
      if (res && res.data) {
        this.aboutContent = res.data;
      }
    });

    this.apiService.getTeam().subscribe((res: any) => {
      const data = res?.data || res;
      if (data && data.founders) {
        this.founders = data.founders;
        this.team = data.team || [];
      } else if (Array.isArray(data)) {
        this.team = data;
      }
    });
  }
}
