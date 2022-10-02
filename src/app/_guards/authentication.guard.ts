import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../_services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ChangeRootComponent} from "../_shared/change-root/change-root.component";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  loggedIn: boolean = false
  constructor(private authS: AuthService, private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar){

    this.authS.isLoggedInOb().pipe(take(1)).subscribe(
      res => {
        this.loggedIn = res
      }
    )
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loggedIn) return true;
    this.openDialog()
    return false;
  }
  openDialog() {
    const dialogRef = this.dialog.open(ChangeRootComponent, {
      data: {
        message: "You have to log in to navigate to this page.",
        buttonText: {
          ok: 'Continue',
          cancel: 'Cancel',
        },
      },
    });
  }

}
