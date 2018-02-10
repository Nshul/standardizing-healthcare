import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const routercons : Routes = [
  {path : '',component : HomeComponent },
  {path : 'signin',component : SigninComponent},
  {path : 'signup', component : SignupComponent},
];


@NgModule({
 imports : [RouterModule.forRoot(routercons)],
 exports : [RouterModule] 
 
})

export class AppRoutingModule{

}