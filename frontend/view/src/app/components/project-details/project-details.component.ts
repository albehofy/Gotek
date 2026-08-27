import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  route = inject(ActivatedRoute);

  project: any = null;
  activeImage: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProject(id);
      }
    });
  }

  loadProject(id: string) {
    this.apiService.getProject(id).subscribe((res: any) => {
      this.project = res?.data ? res.data : res;
      this.activeImage = this.project?.image || this.project?.main_image || '';
      if (!this.activeImage && this.project?.gallery?.length) {
        this.activeImage = this.project.gallery[0];
      }
    });
  }

  setActiveImage(img: string) {
    this.activeImage = img;
  }
}
