import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() name: any;
  @Input() title: any;
  city = 'hyd';
  obj = {
    name: 'abc',
    city: 'hyd'
  }
  constructor(private service: TestService) {
    console.log('from constructor');
  }
  ngOnInit(): void {
    console.log('from ngoninit', this.title);
    // this.test();
  }

  test() {
    this.city = 'hyd';
  }

  method1() {
    this.service.setData(this.obj);
  }

}
