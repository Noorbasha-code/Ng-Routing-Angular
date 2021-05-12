import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string;
  // password: string;

  // loginuser() {
  //   if (this.email == "noor@gmail.com" && this.password == "noor") {
  //     alert("Welcome to Dash-Board")
  //   }
  //   else {
  //     alert("Please cheque Details ")
  //   }
  // }


  // loginForm = new FormGroup({
  //   email: new FormControl('', Validators.required),
  //   password:new FormControl('')
  // });
  // get email() {
  //   return this.loginForm.get('email')
  // }
  // get password() {
  //   return this.loginForm.get('password')
  // }






  constructor() { }

  ngOnInit(): void {
  }

}
