import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: () => import('./posts-list/posts-list.module').then(m => m.PostsListModule)},
  { path: 'add', loadChildren: () => import('./add-post/add-post.module').then(m => m.AddPostModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {

}
