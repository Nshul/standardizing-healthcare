import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitalName: string = 'Goofed Up Hospital';
  hospitalGeoLocation: Location = {
    latitude: 28.57,
    longitude: 77.05
  };
  hospitalAddress: string = 'DLF Phase-5, Meerut';
  hospitalRating: number = 4.5;
  distanceBetween: string;
  serviceCost: number = 260;
  geolocationPosition: any;

  constructor() {}

  ngOnInit() {
    $.getScript(
      'http://maps.google.com/maps/api/js?sensor=true&libraries=geometry&key=AIzaSyDLSKfIhswQh6FzPy1-vXvIO4O8pFrAbFo'
    );

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position;
          console.log(position);
          let from = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          let to = new google.maps.LatLng(
            this.hospitalGeoLocation.latitude,
            this.hospitalGeoLocation.longitude
          );
          let dist = google.maps.geometry.spherical.computeDistanceBetween(
            from,
            to
          );
          console.log('dist:', (dist / 1000).toFixed(3));
          this.distanceBetween = (dist / 1000).toFixed(3);
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    }
  }
}

class Location {
  latitude: number;
  longitude: number;
}
