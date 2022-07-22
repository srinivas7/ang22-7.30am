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
}
