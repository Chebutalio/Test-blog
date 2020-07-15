import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsListComponent } from "./posts-list.component";
import { PostsListRoutingModule } from "./posts-list-routing.module";

@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    PostsListRoutingModule
  ]
})
export class PostsListModule {

}
