import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BuyerProductsComponent} from "./buyer-products/buyer-products.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {DataService} from "./data.services";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ChangeRootComponent} from "./_shared/change-root/change-root.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PageNotFoundComponent,
    BuyerProductsComponent,
    ProductDetailComponent,
    ChangeRootComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, {dataEncapsulation: false}
    ),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule

  ],
  entryComponents:[ProductDetailComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
