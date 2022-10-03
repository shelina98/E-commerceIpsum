import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CartComponent} from "./cart/cart.component";
import {AuthenticationGuard} from "./_guards/authentication.guard";
import {SignupComponent} from "./auth/signup/signup.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path:'signup', component:SignupComponent},

  { path: 'dashboard', component: DashboardComponent},
  { path: 'cart', component: CartComponent,
    canActivate: [AuthenticationGuard]
  },
  { path:'profile', component:ProfileComponent,
    canActivate:[AuthenticationGuard]},

  { path: '', component: DashboardComponent},
  { path: '**', component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
