import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routercons : Routes = [
  
];


@NgModule({
 imports : [RouterModule.forRoot(routercons)],
 exports : [RouterModule] 
 
})

export class AppRoutingModule{

}