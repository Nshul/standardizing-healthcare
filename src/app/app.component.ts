import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { DoctorsignupService } from './auth/doctorsignup.service';
import { HospitalsignupService } from './auth/hospitalsignup.service';

import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  isAnyUserLoggedIn() {
    if (firebase.auth().currentUser == null) {
      // console.log(firebase.auth().currentUser.uid);
      return false;
    }
    return true;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private doctorService: DoctorsignupService,
    private hospitalService: HospitalsignupService
  ) {}

  validated: boolean = false;

  logout() {
    this.authService.logout();
    this.doctorService.logout();
    this.hospitalService.logout();
    this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
  }

  ngAfterViewInit() {
    $.getScript('../assets/js/main.js');
    $.getScript('../../../assets/js/bootstrap.min.js');
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBgAXE7zgOj_lq_vRQoPbLJlZqR3aR18uM',
      authDomain: 'swasthya-68c5a.firebaseapp.com',
      databaseURL: 'https://swasthya-68c5a.firebaseio.com',
      projectId: 'swasthya-68c5a',
      storageBucket: 'swasthya-68c5a.appspot.com',
      messagingSenderId: '168199144749'
    });
  }
}
