import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  age = 23;
  address = {
    city: 'hyd',
    state: 'TS'
  }

  @Output() custEvent = new EventEmitter();
  constructor() { 
    console.log('test change');
  }

  ngOnInit(): void {
  }
  method1() {
    this.custEvent.emit(this.address);
  }

}
