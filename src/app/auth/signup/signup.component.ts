import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

declare var $ : any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  @ViewChild('f') form : NgForm;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(f : NgForm){
    const { email, pass, fname, lname, contact, dob, insurance } = f.value;
    this.authService.signup(email,pass,fname, lname, dob, contact, insurance);
    
  }

  ngAfterViewInit(){
    $.getScript('../../../assets/js/main.js')
  }

}
