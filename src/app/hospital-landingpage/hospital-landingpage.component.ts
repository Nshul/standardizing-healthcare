import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-landingpage',
  templateUrl: './hospital-landingpage.component.html',
  styleUrls: ['./hospital-landingpage.component.css']
})
export class HospitalLandingpageComponent implements OnInit {
pendingAppointments: AppointmentList[] = [
    {
      appointment_id: '1',
type: 'service',
docid:'abc'
    },
    {
      appointment_id: '2',
type: 'service',
docid:'ac'
    },
    {
      appointment_id: '3',
type: 'service',
docid:'bc'
    },
    {
      appointment_id: '4',
type: 'service',
docid:'abdc'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
class AppointmentList {
appointment_id: string;
type: string;
docid:string;
}

