import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class DoctorsignupService {

	token : string;
  errormessage = new Subject<string>();

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  signup(email,pass,fname,lname,dob,contact,hemail,qualificatios, specialities){
      firebase.auth().createUserWithEmailAndPassword(email,pass)
      .then((patient) =>{
        console.log(patient);
        firebase.database().ref(`/patients/${patient.uid}`)
        .set({ email,pass,fname,lname,dob,contact,hemail,qualificatios, specialities });
        // .then(() => { console.log("done"); }).catch( err => { console.log(err); });

      })
      .catch(
      	error => { console.log(error); this.errormessage.next(error.message); }
      	);

  }

   signin(email : string, pass: string){
      firebase.auth().signInWithEmailAndPassword(email,pass)
      .then(
      	(response) => {
      		this.router.navigate(['/recipes'],{relativeTo : this.activatedRoute});
      		console.log(response)
            firebase.auth().currentUser.getToken()
            .then(
              (token : string) => {
               this.token = token;
       }
       );
      	}
      	)
      .catch(
      	(error) => { console.log(error); this.errormessage.next(error.message); }
      	);
      
  }

  getToken(){
  	firebase.auth().currentUser.getToken()
            .then(
              (token : string) => {
               this.token = token;
       }
       );
     return this.token ;
  }

  isAuth(){
  	return this.token != null;
  }

  logout(){
  	firebase.auth().signOut();
  	this.token = null;
    this.router.navigate(['/recipes'],{relativeTo : this.activatedRoute});
  	
  }

}
