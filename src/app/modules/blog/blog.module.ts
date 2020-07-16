import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from "./blog-routing.module";
import { AddPostModule } from "./add-post/add-post.module";
import { PostsListModule } from "./posts-list/posts-list.module";

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AddPostModule,
    PostsListModule
  ]
})
export class BlogModule { }
