import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../_models/user.model";
import {UsersService} from "../_services/users.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../_services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidator} from "../_validators/password.validator";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('image') image!: ElementRef;

  signupForm = this.fb.group({
    name: ['', [Validators.required]],
    surname:['',[Validators.required]],
    username:['',[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8), PasswordValidator.strong]],
  },);

  profile!: User
  url!:string

  default:boolean = false
  initials:string = "";
  circleColor:string = "";
  private color = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2'
  ]

  constructor(private userService: UsersService,
              private snackBar: MatSnackBar,
              private as: AuthService,
              private fb: FormBuilder) {}

  ngOnInit() {
    let user = this.as.getAccountWithGivenEmail(<string>localStorage.getItem('email'))
    if(user) {
     this.setUser(user)
    }

    this.as.hasPhotoOb().subscribe(
      res => {
        if(res == null || res == "") {
          this.default = true;
          const  randomIndex = Math.floor(Math.random() * Math.floor(this.color.length))
          this.circleColor = this.color[randomIndex]
        }
        else {
          this.default = false
          this.url = 'assets/user/' + res
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


  setUser(user: User) {
    this.signupForm.setValue({
      name: user.name,
      surname: user.surname,
      password: user.password,
      username:user.username,
    });
    this.url = user.imgUrl
    if (this.url != "") {
      this.url =  'assets/user/' + user.imgUrl
      this.default = false;
    }
    else {
      this.createInitials()
      const  randomIndex = Math.floor(Math.random() * Math.floor(this.color.length))
      this.circleColor = this.color[randomIndex]
      this.default = true;
    }
  }

  editUser(signupForm: FormGroup):any {
    let img = (<HTMLInputElement>this.image.nativeElement).files?.[0];
    if(<string>img?.name) {
      this.as.setPicture(<string>img?.name)
    }
    this.as.setUsername(signupForm.controls['username'].value)
    localStorage.setItem('name',signupForm.controls['name'].value)
    localStorage.setItem('surname',signupForm.controls['surname'].value)

    this.snackBar.open('You have edited you profile settings.', 'OK', {
      duration: 2000,
      panelClass: ['blue-snackbar', 'edit-snackbar'],
    })
  }

}
