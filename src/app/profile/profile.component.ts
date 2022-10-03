import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../_models/user.model";
import {UsersService} from "../_services/users.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../_services/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {RegexpValidator} from "../_validators/regexpValidator.validator";

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
    password: ['', [Validators.required, Validators.minLength(8)]],
  },);

  profile!: User
  url!:string
  default:boolean = false

  constructor(private userService: UsersService,
              private snackBar: MatSnackBar,
              private as: AuthService,
              private fb: FormBuilder) {}

  ngOnInit() {
    let user = this.as.getAccountWithGivenEmail("Dritan@gmail.com")
    if(user) {
     this.setUser(user)
    }
  }

  setUser(user: User) {
    this.signupForm.setValue({
      name: user.name,
      surname: user.surname,
      password: user.password,
    });
    this.url = user.imgUrl
    if (this.url != "") {
      this.url = user.imgUrl
      this.default = false;
    }
    else {
      this.default = true;
    }
  }

  editUser():any {

  }

  // editUser(): any {
  //   let img = (<HTMLInputElement>this.image.nativeElement).files?.[0];
  //   if(img) {
  //     return new Promise((resolve, reject) => {
  //       let ref = this.storage.ref('jobs' + img?.name)
  //       ref.put(img).then(() => {
  //         ref.getDownloadURL().subscribe(imgUrl => {
  //           this.fs.collection('users').doc(this.profile.uid).update(
  //             {
  //               username: this.username,
  //               // skills: user.skills,
  //               imgUrl: imgUrl
  //             }
  //           )
  //         })
  //       })
  //     })
  //
  //   }
  //   else {
  //     this.fs.collection('users').doc(this.profile.uid).update(
  //       {
  //         username: this.username,
  //         // imgUrl: 'assets/seekerLogo.PNG'
  //         // skills: skills,
  //       }
  //     ).then(
  //       ref => {
  //         this.snackBar.open('Job have updated your profile.', 'OK', {
  //           duration: 2000,
  //           panelClass: ['blue-snackbar', 'login-snackbar'],
  //         })
  //
  //       }
  //
  //     )
  //   }
  // }
  onClick(value: any) {

  }
}
