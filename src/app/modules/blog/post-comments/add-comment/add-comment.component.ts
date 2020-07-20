import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BlogService } from "../../../../services/blog.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  newComment: FormGroup;
  postId: string;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
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
    formData.postId = this.route.snapshot.paramMap.get('id');
    this.blogService.addComment(formData)
      .subscribe(
        () => {
          this.router.navigate([`blog/${formData.postId}/comments`]).then();
        },
        (errors) => console.error(errors)
      );
  }

}
