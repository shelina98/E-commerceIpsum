import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string | null = ""
  signinOR : string = "Sign In"
  isLoggedIn: boolean = false;

  constructor(private router: Router,
              private authS: AuthService,) { }

  ngOnInit(): void {
    this.authS.isLoggedInOb().subscribe(
      res =>  {
        if(res) {
          this.isLoggedIn = true
          this.signinOR = "Log Out"
        } else {
          this.signinOR="Sign In"
          this.isLoggedIn = false;
        }
      }
    )
    this.username = localStorage.getItem('token')
  }


  signIn() {
    if(!this.isLoggedIn)
    { this.router.navigate(['/login'])}
    else
    {
      this.authS.logout();
      this.router.navigate(['']);
    }
  }
  goToProfile() {
    this.router.navigate(['/profile',])
  }
  goToHomePage() {
    this.router.navigate([''])
  }

  goToCart() {
    this.router.navigate(['/cart'])
  }

}
