import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  apiService = inject(ApiService);
  route = inject(ActivatedRoute);

  blog: any = null;
  loading = true;
  isLoved = false;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadBlog(id);
      } else {
        this.route.queryParamMap.subscribe(q => {
           const qId = q.get('id');
           if (qId) this.loadBlog(qId);
        });
      }
    });
  }

  loadBlog(id: string) {
    this.loading = true;
    this.apiService.getBlog(id).subscribe(res => {
      this.blog = res?.data ? res.data : res;
      this.loading = false;
    });
  }

  toggleLove() {
    this.isLoved = !this.isLoved;
    // In a real app, you would call an API here to update the like count
  }
}
