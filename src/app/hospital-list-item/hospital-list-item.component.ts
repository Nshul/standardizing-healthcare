import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AsyncPipe } from '@angular/common';
// import { HttpClient, HttpParams } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-hospital-list-item',
  templateUrl: './hospital-list-item.component.html',
  styleUrls: ['./hospital-list-item.component.css']
})
export class HospitalListItemComponent implements OnInit, AfterViewInit {
  service: string = '';
  hospitalkey: string = '';
  hospitalpincode: string = '';
  selectedHospital: any;
  selectedSchedule: string[];
  selectedDate: string;
  doctors : any[] = [];
  specialityName = 'Prosthetics';
  doctorId : string;
  patientId : string;
  patientstatus : number;

  review1 : string = "Best center in South Delhi for hair services. I had some issues regarding my hair, like hair loss and receding hair line. Then one day one of my friend recommended me about Dr Suneet Soni and his center Medispa hair transplant clinic. I visited there and followed the Dr Suneet Soni's instructions. He suggested me for FUT technique for hair transplant, so I underwent for hair transplant by Dr Suneet Soni. It was really amazing experienced. I was really scared of the procedure but there was no pain and discomfort at all. Medispa staff was so supportive and always ready to help. It has been 6 months of my procedure, and I am so grateful to Dr Suneet Soni because when I see myself in the mirror I feel so good and confident. Thank you Dr Suneet Soni."; 
  review2 : string ="I am Riya singh, I am suffering from infertility problem and I had no baby, Dr. Archana Bajaj made my dream of having a baby come true by the best Surrogacy treatments. Thanks to Dr Archana Bajaj. "; 
  review3 : string = "Poor service, No medical facility available here. Avoid this hospital to save your patient. They killed my mother.";

  senti : string[] = [];

  ngAfterViewInit() {
    $.getScript('../../../assets/js/main.js');
    $.getScript('../../../assets/js/bootstrap.min.js');
  }

  // setSchedule: any = {
  //   Mon: ['10:00', '10:15', '10:30', '10:45', '11:00'],
  //   Tue: ['10:30', '10:45', '11:00', '11:15', '11:30'],
  //   Wed: ['11:30', '11:45', '12:00', '12:15', '12:30'],
  //   Thurs: ['1:30', '1:45', '2:00', '2:15', '2:30'],
  //   Fri: ['7:30', '7:45', '8:00', '8:15', '8:30'],
  //   Sat: ['8:30', '8:45', '9:00', '9:15', '9:30']
  // };

  // hospitalName: string = 'Goofed Up Hospital';

  hospitalAddress: string = 'DLF Phase-5, Meerut';

  avg_user_rating: number = 3.5;
  ReviewList: ReviewItem[] = [
    {
      user: 'Apar',
      date: 'February 11, 2018',
      title: 'Lol nice',
      review: 'very nice hospital. affordable and efficient',
      rating: 4
    },
    {
      user: 'Archit',
      date: 'February 11, 2018',
      title: 'Lol ',
      review: 'very nice hospital. affordable and efficient',
      rating: 3
    },
    {
      user: 'Anshul',
      date: 'February 10, 2018',
      title: ' nice',
      review: 'very nice hospital. affordable and efficient',
      rating: 2
    }
  ];

  // hospitalAddress: string = 'DLF Phase-5, Meerut';

  // servicePrice: number = 800;

  onSelect(day, date): void {
    // console.log(this.selectedHospital[day]);
    this.selectedSchedule = [
      this.selectedHospital.schedule[day].time_start,
      this.selectedHospital.schedule[day].time_end
    ];
    this.selectedDate = date;
  }

  bookAppoinment(appoint): void {
    const UID = firebase.auth().currentUser.uid;
    const DATE = this.selectedDate + '-02-2018';
    firebase
      .database()
      .ref(
        `appointments/${this.hospitalkey}/${this.service}/${
          DATE
        }/requested`
      )
      .push({
        timeslot: appoint,
        status: -1,
        userid: UID
      });
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.service = this.activatedRoute.snapshot.paramMap.get('service');
    console.log('Service is now : ' + this.service);

    this.hospitalkey = this.activatedRoute.snapshot.paramMap.get('hospitalid');
    console.log('Hospital ID is now : ' + this.hospitalkey);

    this.hospitalpincode = this.activatedRoute.snapshot.paramMap.get('pincode');
    console.log('Hospital Pin Code is now : ' + this.hospitalpincode);

    firebase
      .database()
      .ref(
        `services/${this.service}/${this.hospitalpincode}/${this.hospitalkey}`
      )
      .on('value', snapshot => {
        let temp: any = snapshot.val();
        console.log(temp);
        this.selectedHospital = temp;
        // console.log(this.hospitals);
      });

      // this.http.post('http://text-processing.com/api/sentiment/', {
      //   params: new HttpParams().set('text',this.review1)
      // })
      // .subscribe(
      //   response => {
      //     console.log(response);
        // });
$.post('http://text-processing.com/api/sentiment/',{text: this.review1},(data)=>{
          console.log(data);
          this.senti.push(data.probability.pos);
          $.post('http://text-processing.com/api/sentiment/',{text: this.review2},(data)=>{
          console.log(data);
          this.senti.push(data.probability.pos);
          $.post('http://text-processing.com/api/sentiment/',{text: this.review3},(data)=>{
          console.log(data);
          this.senti.push(data.probability.pos);
          // data.probability;
        })
          // data.probability;
        })
          // data.probability;
        });





        
  }

  // getvalueNLP(pgdata: string) {
  //   $.post('http://text-processing.com/api/sentiment/',{text: pgdata},(data)=>{
  //         console.log(data);
  //         data.probability;
  //       })
  // }

  // bookAppoinment(appoint): void {
  //   const UID = firebase.auth().currentUser.uid;
  //   const DATE = this.selectedDate + '-02-2018';
  //   firebase
  //     .database()
  //     .ref(
  //       `appointmentsdoctor/${this.hospitalkey}/${this.service}/${
  //         DATE
  //       }/requested`
  //     )
  //     .push({
  //       timeslot: appoint,
  //       status: -1,
  //       userid: UID
  //     });
  // }

}

class ReviewItem {
  user: string;
  date: string;
  title: string;
  review: string;
  rating: number;
}
