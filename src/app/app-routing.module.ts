import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthModule} from "./auth/auth.module";

const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},

  { path: '', component: DashboardComponent},
  { path: '**', component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
