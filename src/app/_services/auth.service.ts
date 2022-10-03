import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from "../_models/user.model";
import {UsersService} from "./users.service";


@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor( private userS: UsersService) {
  }
  LoggedInUser: User | undefined
  UserExist: User | undefined

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  usernameSubject = new BehaviorSubject<string>(this.hasUsername())
  profilephotoSubject = new  BehaviorSubject<string>(this.hasProfilePicture())
  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedInOb() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
  existUserOb():Observable<string> {
    return  this.usernameSubject.asObservable();
  }

  hasPhotoOb():Observable<string>{
    return  this.profilephotoSubject.asObservable();
  }
  /**
   *  Login the user then tell all the subscribers about the new status
   */
  login() : void {
    this.isLoginSubject.next(true);
    localStorage.setItem('token', 'JWT');
  }

  setUsername(username: string):void {
    this.usernameSubject.next(username)
    localStorage.setItem('username', username);
  }
  setPicture(photoUrl: string): void{
    this.profilephotoSubject.next(photoUrl)
    localStorage.setItem('photoName', photoUrl)

  }


  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
  unsetUser():void {
    localStorage.removeItem('username')
    this.usernameSubject.next("")
  }
  unsetPicture():void {
    localStorage.removeItem('photoName')
    this.profilephotoSubject.next("")
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */

  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }
  private hasUsername(): string {
    return <string>localStorage.getItem('username')
  }
  private hasProfilePicture(): string {
    return <string>localStorage.getItem('photoName')
  }




//login
  getAccountInfo(email: string, password: string){
       this.userS.getAllUsers().forEach(
       user => {
         if(user.email == email && user.password == password) {
           this.LoggedInUser = user
         }
       })
    return this.LoggedInUser
  }

//sign up
  getAccountWithGivenEmail(email: string): User {
    this.userS.getAllUsers().forEach(
      user => {
        if(user.email == email ) {
          this.UserExist = user
        }
      })
    return <User>this.UserExist
  }

}
