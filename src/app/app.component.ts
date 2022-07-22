import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  name='test';
  data: any;
  constructor(private service: TestService) {}
  
  getData() {
    let info = '';
    this.service.fetchProductsInfo().subscribe((res) => {
      console.log('todo activities...', res);
      this.data = res;
    });
  }
  
}
