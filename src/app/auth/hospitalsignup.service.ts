import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class HospitalsignupService {

	token : string;
  errormessage = new Subject<string>();

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  signup(email,pass,name,contact,address,pincode,services,tier){
      firebase.auth().createUserWithEmailAndPassword(email,pass)
      .then((hospital) =>{
        console.log(hospital);
        firebase.database().ref(`/hospitals/${hospital.uid}`)
        .set({ email,pass,name,contact,address,pincode,services,tier});
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
      		this.router.navigate(['../hospitallanding'],{relativeTo : this.activatedRoute});
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
    
  	
  }

}
