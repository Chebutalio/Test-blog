import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BlogService } from "../../../services/blog.service";
import { Router, ActivatedRoute } from "@angular/router";
import {Post} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  editPostForm: FormGroup;
  post: Post;
  postId: string = this.route.snapshot.paramMap.get('id');

  constructor(private blogService: BlogService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getPost(this.postId)
      .subscribe(
        (post: Post) => {
          this.post = post;
          this.editPostForm = new FormGroup({
            author: new FormControl(`${this.post.author}`, Validators.required),
            title: new FormControl(`${this.post.title}`),
            body: new FormControl(`${this.post.body}`, Validators.required),
          });
        }
      );
  }

  isFieldInvalid(fieldName: string) {
    if(this.editPostForm.get(fieldName).invalid && (this.editPostForm.get(fieldName).touched || this.editPostForm.get(fieldName).dirty)) {
      return true;
    }
  }

  onSubmit() {
    if (this.editPostForm.valid) {
      const formData = {...this.editPostForm.value};
      this.blogService.updatePost(formData, this.post.id)
        .subscribe(
          () => {
            this.router.navigate(['blog']).then();
          },
          (errors) => console.error(errors)
        )
    }
  }
}
