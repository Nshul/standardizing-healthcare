import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-hospital-landingpage',
  templateUrl: './hospital-landingpage.component.html',
  styleUrls: ['./hospital-landingpage.component.css']
})
export class HospitalLandingpageComponent implements OnInit {
  hospitalUser: any;

  pendingAppointments: AppointmentList[] = [
    {
      service_type: 'Test1 Service',
      date: '78-78-1995',
      timeslot: '11:15',
      appointmentKey: 'aksjbdkasjdnkads'
    },
    {
      service_type: 'Test2 Service',
      date: '14-05-1245',
      timeslot: '12:45',
      appointmentKey: '324ioewj234sa'
    }
    // {
    //   appointment_id: '3',
    //   type: 'service',
    //   docid: 'bc'
    // },
    // {
    //   appointment_id: '4',
    //   type: 'service',
    //   docid: 'abdc'
    // }
  ];
  constructor() {}

  ngOnInit() {
    const UID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`hospitals/${UID}`)
      .on('value', snapshot => {
        this.hospitalUser = snapshot.val();
      });

    firebase
      .database()
      .ref(`appointments/${UID}`)
      .on('value', snapshot => {
        const temp1 = snapshot.val();
        console.log('temp1');
        console.log(temp1);
        for (let i in temp1) {
          for (let j in temp1[i]) {
            console.log('j:');
            console.log(j);
            const service_type = i;
            const date = j;
            const timeslot;
            const appointmentKey;
            for (let k in temp1[i][j].requested) {
              console.log('k:');
              console.log(k);
              timeslot = temp1[i][j].requested[k].timeslot;
              appointmentKey = k;
            }
            if (temp1[i][j].requested[k].status == '-1') {
              this.pendingAppointments.push({
                service_type,
                date,
                timeslot,
                appointmentKey
              });
            }
          }
        }
      });
  }

  approveAppointment(serviceType: string, date: string, key: string) {
    const UID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`appointments/${UID}/${serviceType}/${date}/requested/${key}`)
      .update({
        status: '1'
      });
  }

  rejectAppointment(serviceType: string, date: string, key: string) {
    const UID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`appointments/${UID}/${serviceType}/${date}/requested/${key}`)
      .update({
        status: '0'
      });
  }
}
class AppointmentList {
  service_type: string;
  date: string;
  timeslot: string;
  appointmentKey: string;
}
