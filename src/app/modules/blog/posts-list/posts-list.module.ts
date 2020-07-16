import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsListComponent } from "./posts-list.component";
import { PostsListRoutingModule } from "./posts-list-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [PostsListComponent],
    imports: [
        CommonModule,
        PostsListRoutingModule,
        ReactiveFormsModule
    ]
})
export class PostsListModule {

}
