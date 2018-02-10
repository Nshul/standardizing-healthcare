import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  token : string;
  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  signup(email : string, pass: string, fname, lname, dob, contact, insurance){
      firebase.auth().createUserWithEmailAndPassword(email,pass)
      .then((user) =>{
        firebase.database().ref(`/user/${user.uid}`)
        .set({ fname, lname, dob, contact, insurance})
      })
      .catch(
      	error => console.log(error)
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
      	(error) => console.log(error)
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
