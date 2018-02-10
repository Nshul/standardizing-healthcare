import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
    // console.log(abc);
    // abc.re_render();
    $.getScript('../../../assets/js/main.js')
  }

  ngOnInit(){}

}
