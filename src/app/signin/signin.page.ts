import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  // public loginForm: FormGroup;

  constructor( ) { }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   email: [ 'nhlanhla@gmail.com',Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    //   password: ['nhlanhla', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
    // });
  }

}
