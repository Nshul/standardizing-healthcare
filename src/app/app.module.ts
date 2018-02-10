import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


import { AuthService } from './auth/auth.service';
import { HospitalListItemComponent } from './hospital-list-item/hospital-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    SigninComponent,
    SignupComponent,
    HospitalListItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
