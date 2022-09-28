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
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedInOb() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  /**
   *  Login the user then tell all the subscribers about the new status
   */
  login(username: string | undefined) : void {
    localStorage.setItem('token', 'JWT');
    if (typeof username === "string") {
      localStorage.setItem('username', username)
    }
    this.isLoginSubject.next(true);
  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    this.isLoginSubject.next(false);
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */

  private hasToken() : boolean {
    return !!localStorage.getItem('token');
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

}
