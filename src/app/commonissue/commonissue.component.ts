import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as firebase from 'firebase';

declare var $: any;

@Component({
  selector: 'app-commonissue',
  templateUrl: './commonissue.component.html',
  styleUrls: ['./commonissue.component.css']
})
export class CommonissueComponent implements OnInit, AfterViewInit {
  constructor() {}

  patientId;
  patientstatus;
  doctorId;
  speciality;

  specialities = ['prosthetics'];

  ngOnInit() {
    firebase
      .database()
      .ref(`specialities/prosthetics`)
      .on('value', snapshot => {
        let temp: any = snapshot.val();
        console.log(temp);
        let i: any;
        for (let i in temp) {
          this.doctorId = i;
          for (let j in this.doctorId) {
            this.patientId = this.doctorId.uid;
            this.patientstatus = this.doctorId.status;
          }
        }
        // console.log(this.hospitals);
      });
  }

  ngAfterViewInit() {
    $.getScript('../../../assets/js/main.js');
    $.getScript('../../../assets/js/bootstrap.min.js');
  }

  searchHospital() {}

  bookAppoinment(appoint): void {
    // const UID = firebase.auth().currentUser.uid;
    // const DATE =  '02-02-2018';
    // firebase
    //   .database()
    //   .ref(
    //     `appointmentsdoctor/${this.hospitalkey}/${this.service}/${
    //       DATE
    //     }/requested`
    //   )
    //   .push({
    //     timeslot: appoint,
    //     status: -1,
    //     userid: UID
    //   });
  }
}
