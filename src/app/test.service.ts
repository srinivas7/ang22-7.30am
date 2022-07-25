import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  fetchProductsInfo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getData() {
    let data = {
      "userId": 1,
      "id": 1,
      "title": "sample data",
      "body": "test body"
    };
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
