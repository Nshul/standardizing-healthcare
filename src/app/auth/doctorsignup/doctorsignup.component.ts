import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { DoctorsignupService } from '../doctorsignup.service';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit, AfterViewInit {

  @ViewChild('f') form : NgForm;
  errormessage : string ;
  specialities : string[] = [
        'Anatomic Pathology',
        'Anesthesiology',
        'Assistive Therapy',
        'Athletic Training',
        'Attendant Care',
        'Audiology',
        'Podiatry',
        'Preventive Medicine',
        'Proctology',
        'Prosthetics',
        'Prosthetics & Orthotics',
        'Prosthodontics',
        'Psychiatry',
        'Psychology',
        'Psychosomatic Medicine',
        'Psychotherapy',
        'Pulmonary Function Technology',
        'Pulmonology',
]

  constructor(private authService : DoctorsignupService) { }

  ngOnInit() {
    this.authService.errormessage.subscribe(
      response => {
        this.errormessage = response;
      });
  }

  onSubmit(f : NgForm){
    const { email,pass,fname,lname,dob,contact,hemail,qualificatios, specialities } = f.value;
    console.log(f.value);
    this.authService.signup(email, pass, fname, lname, dob, contact, hemail,qualificatios, specialities);
    
  }

  ngAfterViewInit(){
    $.getScript('../../../assets/js/main.js')
  }

}
