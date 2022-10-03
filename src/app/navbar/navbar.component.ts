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
  showInitial:boolean = false;
  initials:string = "";
  circleColor:string = "";
  private color = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2'
  ]

  constructor(private router: Router,
              private authS: AuthService,) { }

  ngOnInit(): void {
    this.authS.isLoggedInOb().subscribe(
      res =>  {
        if(res) {
          this.isLoggedIn = true
          this.signinOR = "Log Out"
          this.createInitials();
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
        if(res == null || res == "") {
          this.showInitial = true;
          const  randomIndex = Math.floor(Math.random() * Math.floor(this.color.length))
          this.circleColor = this.color[randomIndex]
        }
        else {
          this.showInitial = false
          let url = 'assets/user/'
          this.image = 'assets/user/' + res
        }
      }
    )
  }

  private  createInitials(): void {
     let initials = "";
     let name = localStorage.getItem('name')?.charAt(0)
     let surname = localStorage.getItem('surname')?.charAt(0)
     this.initials = <string>name + <string>surname
  }

  signIn() {
    if(!this.isLoggedIn)
    { this.router.navigate(['/login'])}
    else
    {
      this.authS.logout();
      this.authS.unsetUser();
      this.authS.unsetPicture();
      localStorage.removeItem('name')
      localStorage.removeItem('surname')
      localStorage.removeItem('email')
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
