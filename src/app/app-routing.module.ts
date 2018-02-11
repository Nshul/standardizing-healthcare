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
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HospitalListItemComponent } from './hospital-list-item/hospital-list-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HospitalLandingpageComponent } from './hospital-landingpage/hospital-landingpage.component';
import { CommonissueComponent } from './commonissue/commonissue.component';

const routercons : Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home',component : HomeComponent},
  {path : 'signin',component : SigninComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'doctorsignup', component : DoctorsignupComponent},
  {path : 'hospitalsignup', component : HospitalsignupComponent},
  {path : 'doctorlanding', component : DoctorLandingpageComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'hospital-list/:service', component : HospitalListComponent},
  {path : ':service/:pincode/:hospitalid', component: HospitalListItemComponent},
  {path : ':service/:pincode/:hospitalid', component: HospitalListItemComponent},
  {path : 'userprofile', component: UserProfileComponent},
  {path : 'logout', redirectTo: '/home'},
  {path : 'hospitallanding', component: HospitalLandingpageComponent },
  {path : 'commonissue', component: CommonissueComponent },
  
];


@NgModule({
 imports : [RouterModule.forRoot(routercons)],
 exports : [RouterModule] 
 
})

export class AppRoutingModule{

}