import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AsyncPipe } from '@angular/common';
declare var $ : any;

@Component({
  selector: 'app-hospital-list-item',
  templateUrl: './hospital-list-item.component.html',
  styleUrls: ['./hospital-list-item.component.css']
})
export class HospitalListItemComponent implements OnInit, AfterViewInit {
  service: string = "";
  hospitalkey: string = "";
  hospitalpincode: string = "";
  selectedHospital : any;
  selectedSchedule: string[];

  ngAfterViewInit(){
    $.getScript('../../../assets/js/main.js');
    $.getScript('../../../assets/js/bootstrap.min.js');
  }

  // setSchedule: any = {
  //   Mon: ['10:00', '10:15', '10:30', '10:45', '11:00'],
  //   Tue: ['10:30', '10:45', '11:00', '11:15', '11:30'],
  //   Wed: ['11:30', '11:45', '12:00', '12:15', '12:30'],
  //   Thurs: ['1:30', '1:45', '2:00', '2:15', '2:30'],
  //   Fri: ['7:30', '7:45', '8:00', '8:15', '8:30'],
  //   Sat: ['8:30', '8:45', '9:00', '9:15', '9:30']
  // };

  // hospitalName: string = 'Goofed Up Hospital';

  hospitalAddress: string = 'DLF Phase-5, Meerut';
  
  avg_user_rating: number = 3.5;
  ReviewList : ReviewItem[] = [
  { user:'Apar',
  date:'February 11, 2018',
  title:'Lol nice',
  review:'very nice hospital. affordable and efficient',
  rating:4
  
  },{ user:'Archit',
  date:'February 11, 2018',
  title:'Lol ',
  review:'very nice hospital. affordable and efficient',  
  rating:3
  
  },{ user:'Anshul',
  date:'February 10, 2018',
  title:' nice',
  review:'very nice hospital. affordable and efficient',
  rating:2
  
  },
  ]
  

  // hospitalAddress: string = 'DLF Phase-5, Meerut';

  // servicePrice: number = 800;

  onSelect(day): void {
    // console.log(this.selectedHospital[day]);
    this.selectedSchedule = [this.selectedHospital.schedule[day].time_start,this.selectedHospital.schedule[day].time_end];
  }

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.service = this.activatedRoute.snapshot.paramMap.get('service');
    console.log('Service is now : ' + this.service);

    this.hospitalkey = this.activatedRoute.snapshot.paramMap.get('hospitalid');
    console.log('Hospital ID is now : ' + this.hospitalkey);

    this.hospitalpincode = this.activatedRoute.snapshot.paramMap.get('pincode');
    console.log('Hospital Pin Code is now : ' + this.hospitalpincode);

    firebase.database().ref(`services/${this.service}/${this.hospitalpincode}/${this.hospitalkey}`)
    .on( "value", (snapshot) => {
      let temp: any = snapshot.val();
        console.log(temp);
        this.selectedHospital = temp;
        // console.log(this.hospitals);
    });
  }
}

class ReviewItem {
user:string;
date:string;
title:string;
review:string;
rating:number;
}
