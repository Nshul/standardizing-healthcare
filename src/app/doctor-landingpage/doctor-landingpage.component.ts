import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsignupService } from '../auth/doctorsignup.service';

declare var $ : any;

@Component({
  selector: 'app-doctor-landingpage',
  templateUrl: './doctor-landingpage.component.html',
  styleUrls: ['./doctor-landingpage.component.css']
})
export class DoctorLandingpageComponent implements OnInit, AfterViewInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private authService : DoctorsignupService) { }

  no_of_medicines : number = 0;
  arr : number[] = [];
  appointmentId : string;

  appointments : { id: string, date: string, time: string}[] = 
  			[{ id:"FORTIS_TTL_1", date:"10/10/2010", time:"10:00" },
  			 { id:"MAX_TTL_1", date:"10/10/2010", time:"10:00" },
  			 { id:"MAX_TTR_2", date:"10/10/2010", time:"10:00" }];

  @ViewChild('f') form : NgForm;


	onSubmit(f : NgForm){
		console.log(f.value);
		firebase.database().ref(`/prescriptions/${this.appointmentId}`)
        .set(f.value);
  	}

	ngOnInit() {
	  	if(!this.authService.isAuth()){
	  		this.router.navigate(['../signin'],{relativeTo : this.activatedRoute});
	  	}
	}

	  ngAfterViewInit(){
	  	$.getScript('../../../assets/js/main.js');
	  }

	  setNum(){
	  	for(var i=0;i<this.no_of_medicines;i++){
	  		this.arr.push(i);
	  	}
	  }

	  prescribe(appointmentId){
	  	this.appointmentId = appointmentId;
	  }

}
