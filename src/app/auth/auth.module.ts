import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthService} from "../_services/auth.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";




@NgModule({
  declarations: [
    LoginComponent, SignupComponent
  ],
  exports: [
    LoginComponent, SignupComponent
  ],
  providers:[AuthService],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule

  ]
})
export class AuthModule { }
