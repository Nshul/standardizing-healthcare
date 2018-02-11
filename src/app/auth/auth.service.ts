import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;
  errormessage = new Subject<string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  signup(email: string, pass: string, fname, lname, dob, contact, insurance) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(patient => {
        const h_ins = insurance;
        const wallet_bl = 200;
        const name = fname + ' ' + lname;
        console.log(patient);
        firebase
          .database()
          .ref(`/patients/${patient.uid}`)
          .set({ name, dob, contact, h_ins, email, wallet_bl });
        // .then(() => { console.log("done"); }).catch( err => { console.log(err); });
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
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

  signin(email: string, pass: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(response => {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
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
