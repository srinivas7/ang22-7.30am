import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, subscribeOn } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  sub = new Subject();
  subAsObs = this.sub.asObservable();
  constructor(private http: HttpClient) { }

  fetchProductsInfo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  setData(data: any) {
    console.log('from setData menthod, sending data to target component');
    this.sub.next(data);
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
