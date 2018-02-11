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
      .ref(`wallet/${UID}`)
      .on('value', snapshot => {
        this.hospitalUser.walletbalance = snapshot.val().amount;
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
            let timeslot;
            let appointmentKey;
            let k;
            for (k in temp1[i][j].requested) {
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
    let userWalletReqKey;

    firebase
      .database()
      .ref(`appointments/${UID}/${serviceType}/${date}/requested/${key}`)
      .once('value', Snapshot => {
        userWalletReqKey = Snapshot.val().userid;
      });

    firebase
      .database()
      .ref(`appointments/${UID}/${serviceType}/${date}/requested/${key}`)
      .update({
        status: '1'
      });

    let amountHospital, amountUser, priceService;

    firebase
      .database()
      .ref(`wallet/${UID}`)
      .once('value', snapshot => {
        amountHospital = snapshot.val().amount;

        // console.log('LOLOLOL:', key);

        firebase
          .database()
          .ref(`wallet/${userWalletReqKey}`)
          .once('value', Snapshot => {
            amountUser = Snapshot.val().amount;
          });
        firebase
          .database()
          .ref(`hospitals/${UID}`)
          .once('value', Snapshot => {
            if (Snapshot.val().tier == 'gold') {
              priceService = 1000;
            } else if (Snapshot.val().tier == 'platinum') {
              priceService = 1500;
            } else {
              priceService = 500;
            }

            firebase
              .database()
              .ref(`wallet/${UID}`)
              .update({
                amount: parseInt(amountHospital) + parseInt(priceService)
              })
              .then(() => {
                console.log('Updating key now');
                firebase
                  .database()
                  .ref(`wallet/${userWalletReqKey}`)
                  .update({
                    amount: parseInt(amountUser) - parseInt(priceService)
                  });
              });

            firebase
              .database()
              .ref(`wallet/${UID}/transations`)
              .push({
                serviceType,
                date,
                key,
                otherparty: userWalletReqKey
              });
            firebase
              .database()
              .ref(`wallet/${userWalletReqKey}/transations`)
              .push({
                serviceType,
                date,
                key,
                otherparty: UID
              });
          });
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
