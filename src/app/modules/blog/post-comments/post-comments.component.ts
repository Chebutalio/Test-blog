import { Component, OnInit } from '@angular/core';
import { Comment } from "../../../interfaces/comment.interface";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../../services/blog.service";
import {Post} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  comments: Comment[] = [];
  post: Post;

  constructor( private blogService: BlogService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {

    const postId: string = this.route.snapshot.paramMap.get('id');

    this.blogService.getPost(postId)
      .subscribe(
        (post: Post) => {
        this.post= post;
      }
    );

    this.blogService.getComments(postId)
      .subscribe(
        (comments: Comment[]) => {
          this.comments = comments;
        }
      );
  }

}
