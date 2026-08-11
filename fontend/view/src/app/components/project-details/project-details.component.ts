import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  apiService = inject(ApiService);
  route = inject(ActivatedRoute);

  project: any = null;
  relatedProjects: any[] = [];
  activeImage: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProject(id);
      } else {
        // query param fallback or first project fallback
        this.route.queryParamMap.subscribe(q => {
           const qId = q.get('id');
           if (qId) this.loadProject(qId);
        });
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
      
      // Load related projects based on category_id
      if (this.project && this.project.category_id) {
         this.apiService.getProjects().subscribe((rel: any) => {
            const relArray = rel?.data ? rel.data : rel;
            const all = Array.isArray(relArray) ? relArray : [];
            this.relatedProjects = all
              .filter((p: any) => p.id !== id && p.category_id === this.project.category_id)
              .slice(0, 3);
         });
      }
    });
  }

  setActiveImage(img: string) {
    this.activeImage = img;
  }
}
