import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from 'rxjs';
import { Todo } from "../models/todo";
import { User } from "../models/user";
import { Post } from "../models/post";
import { Comment } from "../models/comment";
import { Photo } from "../models/photo";

// json placeholder url
const url= 'https://jsonplaceholder.typicode.com/'

// http headers
const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private _http : HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${url}todos?_limit=5`); 
  }

  getFullTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${url}todos?_limit=25`); 
  }
  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${url}users?_limit=3`); 
  }
  getUserId(userId): Observable<User[]> {
    return this._http.get<User[]>(`${url}users/${userId}`); 
  }
  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(`${url}posts?_limit=4`); 
  }
  getComments(): Observable<Comment[]> {
    return this._http.get<Comment[]>(`${url}comments?_limit=4`); 
  }
  getPhotos(): Observable<Photo[]> {
    return this._http.get<Photo[]>(`${url}photos?_limit=12`); 
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    const todoUrlId = `${url}${todo}/${todo.id}`;
    return this._http.delete<Todo>(todoUrlId, httpOptions)
  }
  addTodo(todo: Todo): Observable<Todo>{
    const todoPostUrl = `${url}${todo}`
    return this._http.post<Todo>(todoPostUrl, httpOptions)
  }
}
