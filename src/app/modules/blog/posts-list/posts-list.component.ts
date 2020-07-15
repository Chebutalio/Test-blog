import { Component, OnInit } from '@angular/core';
import { Blog } from "../../../interfaces/blog.interface";
import { BlogService } from "../../../services/blog.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: Blog[];

  getList() {
    this.blogService.getPosts()
      .subscribe(
        (posts: Blog[]) => {
          this.posts = posts;
        }
      );
  }

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getList();
  }

}
