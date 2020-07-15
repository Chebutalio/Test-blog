import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPostComponent } from "./add-post.component";
import {AddPostRoutingModule} from "./add-post-routing.module";


@NgModule({
  declarations: [AddPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddPostRoutingModule
  ]
})
export class AddPostModule {

}
