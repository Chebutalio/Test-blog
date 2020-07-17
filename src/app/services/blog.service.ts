import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post.interface";
import { environment } from "../../environments/environment";
import { Comment } from "../interfaces/comment.interface";


@Injectable({ providedIn: 'root' })
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${environment.baseUrl}posts`);
  }

  addPost(formData: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.baseUrl}posts`, formData);
  }

  addComment(formData: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${environment.baseUrl}comments`, formData)
  }

  getComments(id: number): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(`${environment.baseUrl}posts/${id}/comments`)
  }
}
