import { Component, OnInit } from '@angular/core';
import { Post } from "../../../interfaces/post.interface";
import { BlogService } from "../../../services/blog.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: Array<Post> = [];

  getList() {
    this.blogService.getPosts()
      .subscribe(
        (posts: Array<Post>) => {
          this.posts = posts;
        }
      );
  }

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getList();
  }
}
