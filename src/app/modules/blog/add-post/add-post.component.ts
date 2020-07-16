import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogService} from "../../../services/blog.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit(): void {
      this.newPostForm = new FormGroup({
      author: new FormControl('', Validators.required),
      title: new FormControl(''),
      body: new FormControl('', Validators.required),
    });
  }

  isFieldInvalid(fieldName: string) {
    if(this.newPostForm.get(fieldName).invalid && (this.newPostForm.get(fieldName).touched || this.newPostForm.get(fieldName).dirty)) {
      return true;
    }
  }

  onSubmit() {
    if (this.newPostForm.valid) {
      const formData = {...this.newPostForm.value};
      this.blogService.addPost(formData)
        .subscribe(
          () => {
            this.router.navigate(['blog']).then(r => {} );
          },
          (errors) => console.error(errors)
        )
    }
  }
}
