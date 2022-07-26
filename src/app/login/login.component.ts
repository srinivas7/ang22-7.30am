import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
   }

  ngOnInit(): void {
    
  }
  submitData() {
    const uname = document.getElementById('uname');  'asdfasd'
    const pwd = document.getElementById('pwd');  null

  }

}
