import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }
  service : string;

  services : string[] = [
      'x_ray',           
      'Magnetic Resonance Imaging (mri)',      
      'CT Scan (ct_scan)',          
      'PET Scan (pet_scan)',
      'PTT Scan (ptt_scan)',
      'Arthroscopy (arthro)',
      'Doppler Ultrasound (ultrasound)',
      'Angiography (angio)',
      'Biopsy (biopsy)',
      'CAT Scan (cat_scan)',
      'Sonography (sono)',
      'Echography (echo)',
      'Ivf',          
      'Cataract',         
      'Vaccination',           
      'Cardiac tests',          
      'Respiratory Tests',
];

  ngOnInit(){}

  ngAfterViewInit(){
    // console.log(abc);
    // abc.re_render();
    $.getScript('../../../assets/js/main.js');
    $.getScript('../../../assets/js/bootstrap.min.js');
  }

  searchHospital(){
    this.router.navigate(['../hospital-list',this.service],{relativeTo : this.activatedRoute});
  }

}
