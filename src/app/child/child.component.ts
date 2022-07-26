import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';

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
  };

  hello = 'hello ....';

  @Output() custEvent = new EventEmitter();
  constructor(private service: TestService) { 
    console.log('test change');
  }

  ngOnInit(): void {
    this.service.subAsObs.subscribe(data => {
      console.log('data from...first comp to child component',data );
    })
  }
  method1() {
    this.custEvent.emit(this.address);
  }

}
