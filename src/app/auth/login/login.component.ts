import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  correctCredentials: boolean = true; //on click checks then if in database these credential exist.

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private rt: Router,
  ) {

  }

  ngOnInit(): void {

  }

  onClick(email: string, password: string) {
    this.correctCredentials = true;
    this.as.getAccountInfo(email, password).then(() => {
      if (true) {
        this.correctCredentials = false;
      }
      else
      {
        this.as.login();

      }
    });

  }
}
