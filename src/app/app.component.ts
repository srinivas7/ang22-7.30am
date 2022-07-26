import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
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
  @ViewChild('childComp') childComp: any;
  constructor(private service: TestService) {}
  
  getData() {
    let info = '';
    this.childComp.method1();
    console.log('child comp is...', this.childComp.address, this.childComp.hello );
    // this.service.fetchProductsInfo().subscribe((res) => {
    //   console.log('todo activities...', res);
    //   this.data = res;
    // });
  }


  postData() {
    this.service.getData().subscribe((res) => {
      console.log(res);
    })
  }
  
}
