import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as firebase from 'firebase';

declare var $ : any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  selectedPatient: any;

  ngAfterViewInit(){
    $.getScript('../../../assets/js/main.js');
    $.getScript('../../../assets/js/bootstrap.min.js');
  }

  appointments: Appointment[] = [
    {
      date: '19-20-1998',
      time: '12:00',
      hospital: 'Goofy'
    },
    {
      date: '19-21-1998',
      time: '13:00',
      hospital: 'Toofy'
    },
    {
      date: '19-22-1998',
      time: '14:00',
      hospital: 'Loofy'
    }
  ];
  constructor() {}

  ngOnInit() {
    const UID = firebase.auth().currentUser.uid;
    firebase.database().ref(`patients/${UID}`)
    .on("value", snapshot => {
      const f = snapshot.val();
      this.selectedPatient = f;
    })
  }
}

class Appointment {
  date: string;
  time: string;
  hospital: string;
}
