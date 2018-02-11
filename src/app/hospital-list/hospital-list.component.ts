import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  service: string = '';
  pincode = '110078';
  hospitals: {
    geolocation: { latitude: string; longitude: string };
    name: string;
    price: number;
    rating: number;
    schedule: any;
  }[] = [];

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    $.getScript(
      'http://maps.google.com/maps/api/js?sensor=true&libraries=geometry&key=AIzaSyDLSKfIhswQh6FzPy1-vXvIO4O8pFrAbFo'
    );

    this.service = this.activatedRoute.snapshot.paramMap.get('service');
    console.log('Service is now : ' + this.service);
    firebase
      .database()
      .ref(`services/${this.service}/${this.pincode}`)
      .on('value', snapshot => {
        let temp: any = snapshot.val();
        console.log(temp);
        for (let i in temp) {
          temp[i].key = i;
          this.hospitals.push(temp[i]);
        }
        // console.log(this.hospitals);
      });
  }

  dist(lat: number, lon: number): string {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        this.geolocationPosition = position;
        console.log(position);

        const x: number = Math.abs(lat - position.coords.latitude);
        const y: number = Math.abs(lon - position.coords.longitude);
        return Math.sqrt(x * x + y * y).toFixed(3);
      });
    }
    return "xx";
  }
  // dist(lat: number,lon:number) : Observable<string> {
  //   if (window.navigator && window.navigator.geolocation) {
  //     window.navigator.geolocation.getCurrentPosition(
  //       position => {
  //         this.geolocationPosition = position;
  //         console.log(position);
  //         let from = new google.maps.LatLng(
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );
  //         // var promise=[];
  //         let to = new google.maps.LatLng(
  //           lat,lon
  //         );
  //         return of(
  //           google.maps.geometry.spherical.computeDistanceBetween(
  //             from,
  //             to
  //           ).toFixed(3))
  //         // Promise.all(promise).then((val)=>{
  //           // console.log("Yo baby yo")
  //           // console.log(val);
  //           // return (val[0]/1000).toFixed(3);
  //         },
  //         // console.log('dist:', (this.distanceBetween / 1000).toFixed(3));
  //         // this.distanceBetween = (this.distanceBetween / 1000).toFixed(3);

  //       error => {
  //         switch (error.code) {
  //           case 1:
  //             console.log('Permission Denied');
  //             break;
  //           case 2:
  //             console.log('Position Unavailable');
  //             break;
  //           case 3:
  //             console.log('Timeout');
  //             break;
  //         }
  //       }
  //     );
  //   }

  // }

  showDetails(key: string): void {
    this.router.navigate(['../../', this.service, this.pincode, key], {
      relativeTo: this.activatedRoute
    });
  }
}

class Location {
  latitude: number;
  longitude: number;
}
