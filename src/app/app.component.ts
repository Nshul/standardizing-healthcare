import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  constructor(private authService: AuthService) {}

  validated: boolean = false;

  logout() {}

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
