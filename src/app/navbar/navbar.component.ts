import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = ""
  signinOR : string = "Sign In"
  isLoggedIn: boolean = false;
  image: string = ""

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
    this.authS.existUserOb().subscribe(
      res => {
        this.username = res
      }
    )

    this.authS.hasPhotoOb().subscribe(
      res => {
        let url = 'assets/user/'
        this.image = 'assets/user/' + res
        console.log(res)
        console.log(this.image)
      }
    )

  }


  signIn() {
    if(!this.isLoggedIn)
    { this.router.navigate(['/login'])}
    else
    {
      this.authS.logout();
      this.authS.unsetUser();
      this.authS.unsetPicture();
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
