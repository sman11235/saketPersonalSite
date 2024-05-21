import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  @Input({ required: true }) date! : String;
  @Input({ required: true }) tags! : String[];
  @Input({ required: true }) title! : String;

}
