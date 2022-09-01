import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  //sign-up form
  signUpForm: FormGroup
  constructor(
    private AuthService: AuthService, //injects authservice
    private fb:FormBuilder,   //injects form builder
  ) {}

  ngOnInit(): void {
    // initialize form
    this.signUpForm = this.fb.group({
      userEmail: ['', Validators.required],
      userPwd: ['', Validators.required],
    })
  }

  signUp() {
    this.AuthService.SignUp(this.signUpForm.value.userEmail, this.signUpForm.value.userPwd);
    this.signUpForm.reset;
  }


  


}
