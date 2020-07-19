import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCommentComponent } from "./add-comment.component";
import { AddCommentRoutingModule } from "./add-comment-routing.module";

@NgModule({
  declarations: [AddCommentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddCommentRoutingModule
  ]
})
export class AddCommentModule {

}
