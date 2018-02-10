import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HospitalsignupService } from '../hospitalsignup.service';

@Component({
  selector: 'app-hospitalsignup',
  templateUrl: './hospitalsignup.component.html',
  styleUrls: ['./hospitalsignup.component.css']
})
export class HospitalsignupComponent implements OnInit, AfterViewInit {

  @ViewChild('f') form : NgForm;
  errormessage : string ;

  services : string[] = [
      'X-Ray',
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
  ]

  constructor(private authService : HospitalsignupService) { }

  ngOnInit() {
    this.authService.errormessage.subscribe(
      response => {
        this.errormessage = response;
      });
  }

  onSubmit(f : NgForm){
    const { email,pass,name,contact,address,pincode,services,tier } = f.value;
    console.log(f.value);
    this.authService.signup(email,pass,name,contact,address,pincode,services,tier);
    
  }

  ngAfterViewInit(){
    $.getScript('../../../assets/js/main.js')
  }

}
