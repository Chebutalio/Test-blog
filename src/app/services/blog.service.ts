import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Blog } from "../interfaces/blog.interface";
import { environment } from "../../environments/environment";


@Injectable({ providedIn: 'root' })
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.baseUrl}posts`);
  }

  addPost(formData: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${environment.baseUrl}posts`, formData);
  }
}
