import { Component, OnInit } from '@angular/core';
import { Comment } from "../../../interfaces/comment.interface";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../../services/blog.service";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor( private blogService: BlogService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {

    const postId: string = this.route.snapshot.paramMap.get('id');
    this.blogService.getComments(postId)
      .subscribe(
        (comments: Comment[]) => {
          this.comments = comments;
        }
      );
  }

}
