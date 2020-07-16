import { Component, OnInit } from '@angular/core';
import { Blog } from "../../../interfaces/blog.interface";
import { BlogService } from "../../../services/blog.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: Blog[];
  newComment: FormGroup;

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

    this.newComment = new FormGroup({
      comment_author: new FormControl('', Validators.required),
      comment_body: new FormControl('', Validators.maxLength(255))
    });
  }
  get comment_author() {
    return this.newComment.get('comment_author')
  };

  get comment_body() {
    return this.newComment.get('comment_body')
  };
}
