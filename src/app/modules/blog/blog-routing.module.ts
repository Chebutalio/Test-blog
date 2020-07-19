import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: () => import('./posts-list/posts-list.module').then(m => m.PostsListModule)},
  { path: 'new_post', loadChildren: () => import('./add-post/add-post.module').then(m => m.AddPostModule)},
  { path: ':id/comments/new_comment', loadChildren: () => import('./post-comments/add-comment/add-comment.module').then(m => m.AddCommentModule)},
  { path: ':id/comments', loadChildren: () => import('./post-comments/post-comments.module').then(m => m.PostCommentsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {

}
