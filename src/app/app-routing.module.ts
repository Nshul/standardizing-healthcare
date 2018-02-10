import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HospitalsignupComponent } from './auth/hospitalsignup/hospitalsignup.component';
import { DoctorsignupComponent } from './auth/doctorsignup/doctorsignup.component';
import { DoctorLandingpageComponent } from './doctor-landingpage/doctor-landingpage.component';
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';


const routercons : Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home',component : HomeComponent},
  {path : 'signin',component : SigninComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'doctorsignup', component : DoctorsignupComponent},
  {path : 'hospitalsignup', component : HospitalsignupComponent},
  {path : 'doctorlanding', component : DoctorLandingpageComponent},
];


@NgModule({
 imports : [RouterModule.forRoot(routercons)],
 exports : [RouterModule] 
 
})

export class AppRoutingModule{

}