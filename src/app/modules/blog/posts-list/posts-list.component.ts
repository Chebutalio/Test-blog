import { Component, OnInit } from '@angular/core';
import { Post } from "../../../interfaces/post.interface";
import { BlogService } from "../../../services/blog.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {Comment} from "../../../interfaces/comment.interface";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: Array<Post> = [];
  newComment: FormGroup;
  postIdentity: number;
  comments: Array<Comment> = [];

  getList() {
    this.blogService.getPosts()
      .subscribe(
        (posts: Array<Post>) => {
          this.posts = posts;
        }
      );
  }

  getId(id) {
    return this.postIdentity = id;
  }

  loadComments(id) {
    this.blogService.getComments(id)
      .subscribe(
        (comments: Array<Comment>) => {
          this.comments = comments;
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

  onSubmit() {
    const formData = {...this.newComment.value};
    formData.postId = this.postIdentity;
    this.blogService.addComment(formData)
      .subscribe(
        (response) => {
          this.newComment.reset();
        },
        (errors) => console.error(errors)
      );
  }
}
