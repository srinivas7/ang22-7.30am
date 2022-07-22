import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() name: any;
  @Input() title: any;
  city = 'hyd';
  constructor() {
    console.log('from constructor');
  }
  ngOnInit(): void {
    console.log('from ngoninit', this.title);
    // this.test();
  }

  test() {
    this.city = 'hyd';
  }

  method1(obj:any) {
    console.log('event triggered from child component', obj);
  }

}
