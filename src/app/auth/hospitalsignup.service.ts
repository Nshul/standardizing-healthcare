import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class HospitalsignupService {
  token: string;
  errormessage = new Subject<string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  signup(
    email,
    pass,
    name,
    contact,
    address,
    pincode,
    services,
    tier,
    geolocation
  ) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(hospital => {
        console.log(hospital);
        firebase
          .database()
          .ref(`/hospitals/${hospital.uid}`)
          .set({
            email,
            pass,
            name,
            contact,
            address,
            pincode,
            services,
            tier
          });
        // .then(() => { console.log("done"); }).catch( err => { console.log(err); });
        var price: number;
        if (tier == 'gold') {
          price = 1000;
        } else if (tier == 'platinum') {
          price = 1500;
        } else {
          price = 500;
        }
        var rating: number = 4;
        var schedule = {
          fri: {
            time_start: '12:00',
            time_end: '13:00'
          },
          mon: {
            time_start: '07:00',
            time_end: '13:00'
          },
          sat: {
            time_start: '09:00',
            time_end: '12:00'
          },
          thurs: {
            time_start: '11:00',
            time_end: '12:00'
          },
          tue: {
            time_start: '08:00',
            time_end: '16:00'
          },
          wed: {
            time_start: '06:00',
            time_end: '09:00'
          }
        };
        for (let service of services) {
          firebase
            .database()
            .ref(`/services/${service}/${pincode}/${hospital.uid}`)
            .set({ address, geolocation, name, price, rating, schedule });
        }
        this.router.navigate(['../hospitallanding'], {
          relativeTo: this.activatedRoute
        });
      })
      .catch(error => {
        console.log(error);
        this.errormessage.next(error.message);
      });
  }

  signin(email: string, pass: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(response => {
        this.router.navigate(['../hospitallanding'], {
          relativeTo: this.activatedRoute
        });
        console.log(response);
        firebase
          .auth()
          .currentUser.getToken()
          .then((token: string) => {
            this.token = token;
          });
      })
      .catch(error => {
        console.log(error);
        this.errormessage.next(error.message);
      });
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
