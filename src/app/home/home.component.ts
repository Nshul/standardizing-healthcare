import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  service : string;

  ngOnInit(){}

  ngAfterViewInit(){
    // console.log(abc);
    // abc.re_render();
    $.getScript('../../../assets/js/main.js');
    $.getScript('../../../assets/js/bootstrap.min.js');
  }

}
