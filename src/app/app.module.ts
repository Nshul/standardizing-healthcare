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
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';
import { DoctorLandingpageComponent } from './doctor-landingpage/doctor-landingpage.component';
import { HospitalListItemComponent } from './hospital-list-item/hospital-list-item.component';
import { DoctorsignupComponent } from './auth/doctorsignup/doctorsignup.component';
import { HospitalsignupComponent } from './auth/hospitalsignup/hospitalsignup.component';

import { HospitalsignupService } from './auth/hospitalsignup.service';
import { DoctorsignupService } from './auth/doctorsignup.service';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentPrescriptionComponent } from './appointment-prescription/appointment-prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    SigninComponent,
    SignupComponent,
    DoctorPrescriptionComponent,
    DoctorLandingpageComponent,
    HospitalListItemComponent,
    DoctorsignupComponent,
    HospitalsignupComponent,
    HospitalListComponent,
    AboutComponent,
    ContactComponent,
    AppointmentPrescriptionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, AuthService, HospitalsignupService, DoctorsignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
