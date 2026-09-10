import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-posts.html',
  styleUrl: './list-posts.css'
})
export class ListPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef // 1. Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.http.get<Post[]>('https://localhost:7250/api/post').subscribe({
      next: (data) => {
        this.posts = data;
        console.log('Fetched posts:', data);
        this.cdr.detectChanges(); // 2. Force Angular to update the UI
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}