import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostCommentsComponent } from "./post-comments.component";

const routes: Routes = [
  { path: '', component: PostCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostCommentsRoutingModule {

}
