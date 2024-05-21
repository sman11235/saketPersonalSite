import { Component } from '@angular/core';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogPostComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

}
