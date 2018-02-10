import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-list-item',
  templateUrl: './hospital-list-item.component.html',
  styleUrls: ['./hospital-list-item.component.css']
})
export class HospitalListItemComponent implements OnInit {
  selectedSchedule: any;

  setSchedule: any = {
    Mon: ['10:00', '10:15', '10:30', '10:45', '11:00'],
    Tue: ['10:30', '10:45', '11:00', '11:15', '11:30'],
    Wed: ['11:30', '11:45', '12:00', '12:15', '12:30'],
    Thurs: ['1:30', '1:45', '2:00', '2:15', '2:30'],
    Fri: ['7:30', '7:45', '8:00', '8:15', '8:30'],
    Sat: ['8:30', '8:45', '9:00', '9:15', '9:30']
  };

  hospitalName: string = 'Goofed Up Hospital';

  hospitalAddress: string = 'DLF Phase-5, Meerut';
  
  avg_user_rating: number = 3.5;
  ReviewList : ReviewItem[] = [
  { user:'Apar',
  date:'February 11, 2018',
  title:'Lol nice',
  review:'very nice hospital. affordable and efficient'
  
  },{ user:'Archit',
  date:'February 11, 2018',
  title:'Lol ',
  review:'very nice hospital. affordable and efficient'
  
  },{ user:'Anshul',
  date:'February 10, 2018',
  title:' nice',
  review:'very nice hospital. affordable and efficient'
  
  },
  ]
  
  

  servicePrice: number = 800;

  onSelect(day: string): void {
    this.selectedSchedule = this.setSchedule[day];
  }

  constructor() {}

  ngOnInit() {}
}

class ReviewItem {
user:string;
date:string;
title:string;
review:string;
}
