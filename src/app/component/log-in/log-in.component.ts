import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  // login form
  // loginForm: FormGroup;

  constructor(
    private AuthService: AuthService,   //injects the AuthService
    // private fb: FormBuilder       //injects formbuilder      
    ) { }

  ngOnInit(): void {
    //initialize form
    // this.loginForm = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  // login functionality
  // login() {
  //   this.AuthService.SignIn(this.loginForm.value.email, this.loginForm.value.password)
  // }

  //sign in with google auth
  continueWithGoogle() {
    this.AuthService.GoogleAuth()
  }

}
