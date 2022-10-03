import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user.model';
import { RegexpValidator } from 'src/app/_validators/regexpValidator.validator';
import {ActivatedRoute, Router} from '@angular/router';
import {PasswordValidator} from "src/app/_validators/password.validator";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})


export class SignupComponent implements OnInit {

  emailUnique: boolean = true;
  @ViewChild('image') image!: ElementRef;

  signupForm = this.fb.group({
    name: ['', [Validators.required]],
    surname:['',[Validators.required]],
    email: ['', [Validators.required, RegexpValidator.emailPatternValidator]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  },);


  constructor(
    private fb: FormBuilder,
    private rt: Router,
    private as: AuthService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {

  }

  onClick(email: string) {
    this.emailUnique = true;
    let user = this.as.getAccountWithGivenEmail(email)
      if(user) {
        this.emailUnique = false;
      }
     else {
        this.signUp();
      }
  }

  signUp() {
    let img = (<HTMLInputElement>this.image.nativeElement).files?.[0];
    this.sendUserInfoTodatabase(this.signupForm)
    this.as.setUsername(<string>(this.signupForm.controls['name'].value))
    this.as.setPicture(<string>img?.name)
    localStorage.setItem('name',<string>(<string>(this.signupForm.controls['name'].value)))
    localStorage.setItem('surname',<string>(<string>(this.signupForm.controls['surname'].value)))
    this.as.login()
    this.rt.navigate(['/dashboard'])
  }

  sendUserInfoTodatabase(user: any) {
    console.log('User Registered', user)
  }
}
