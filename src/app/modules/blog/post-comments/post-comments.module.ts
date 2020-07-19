import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostCommentsComponent } from "./post-comments.component";
import { PostCommentsRoutingModule } from "./post-comments-routing.module";
import {AddCommentModule} from "./add-comment/add-comment.module";

@NgModule({
  declarations: [PostCommentsComponent],
  imports: [
    CommonModule,
    PostCommentsRoutingModule,
    AddCommentModule
  ]
})
export class PostCommentsModule {

}
