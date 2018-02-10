import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  appointments: Appointment[] = [
    {
      date: '19-20-1998',
      time: '12:00',
      hospital: 'Goofy'
    },
    {
      date: '19-21-1998',
      time: '13:00',
      hospital: 'Toofy'
    },
    {
      date: '19-22-1998',
      time: '14:00',
      hospital: 'Loofy'
    }
  ];
  constructor() {}

  ngOnInit() {}
}

class Appointment {
  date: string;
  time: string;
  hospital: string;
}
