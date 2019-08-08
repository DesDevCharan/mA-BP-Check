import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
