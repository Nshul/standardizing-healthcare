import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $.getScript('../../../assets/js/main.js')
  }


}
