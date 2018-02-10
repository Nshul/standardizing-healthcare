import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') form : NgForm;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(f : NgForm){
  	const email = f.value.email;
  	const pass= f.value.pass;
    this.authService.signin(email,pass);
  }

}
