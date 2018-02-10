import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HospitalsignupComponent } from './auth/hospitalsignup/hospitalsignup.component';
import { DoctorsignupComponent } from './auth/doctorsignup/doctorsignup.component';


const routercons : Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home',component : HomeComponent},
  {path : 'signin',component : SigninComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'doctorsignup', component : DoctorsignupComponent},
  {path : 'hospitalsignup', component : HospitalsignupComponent},
];


@NgModule({
 imports : [RouterModule.forRoot(routercons)],
 exports : [RouterModule] 
 
})

export class AppRoutingModule{

}