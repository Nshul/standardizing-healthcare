import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HospitalsignupService } from '../hospitalsignup.service';

declare var $: any;

@Component({
  selector: 'app-hospitalsignup',
  templateUrl: './hospitalsignup.component.html',
  styleUrls: ['./hospitalsignup.component.css']
})
export class HospitalsignupComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm;
  @ViewChild('f1') form1: NgForm;

  onLoginSubmit(f1: NgForm) {
    const email = f1.value.email;
    const pass = f1.value.pass;
    this.authService.signin(email, pass);
  }

  errormessage: string;

  services: string[] = [
    'x_ray',
    'Magnetic Resonance Imaging (MRI)',
    'CT Scan',
    'PET Scan',
    'PTT Scan',
    'Arthroscopy',
    'Doppler Ultrasound',
    'Angiography',
    'Biopsy',
    'CAT Scan',
    'Sonography',
    'Echography'
  ];

  constructor(private authService: HospitalsignupService) {}

  ngOnInit() {
    this.authService.errormessage.subscribe(response => {
      this.errormessage = response;
    });
  }

  onSubmit(f: NgForm) {
    const {
      email,
      pass,
      name,
      contact,
      address,
      pincode,
      services,
      latitude,
      longitude,
      tier
    } = f.value;
    console.log(f.value);
    const geolocation = { latitude, longitude };
    this.authService.signup(
      email,
      pass,
      name,
      contact,
      address,
      pincode,
      services,
      tier,
      geolocation
    );
  }

  ngAfterViewInit() {
    $.getScript('../../../assets/js/main.js');
  }
}
