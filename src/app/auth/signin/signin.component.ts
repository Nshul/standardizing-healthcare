import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

// import * as abc from '../../../assets/js/main';

declare var $: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm;
  errormessage: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.errormessage.subscribe(response => {
      this.errormessage = response;
    });
  }

  ngAfterViewInit() {
    // console.log(abc);
    // abc.re_render();
    $.getScript('../../../assets/js/main.js');
  }

  onSubmit(f: NgForm) {
    const email = f.value.email;
    const pass = f.value.pass;
    this.authService.signin(email, pass);
  }
}
