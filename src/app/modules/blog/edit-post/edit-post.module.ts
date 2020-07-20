import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditPostComponent } from "./edit-post.component";
import { EditPostRoutingModule } from "./edit-post-routing.module";

@NgModule({
  declarations: [EditPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditPostRoutingModule
  ]
})
export class EditPostModule {

}
