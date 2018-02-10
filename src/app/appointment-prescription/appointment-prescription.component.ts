import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-prescription',
  templateUrl: './appointment-prescription.component.html',
  styleUrls: ['./appointment-prescription.component.css']
})
export class AppointmentPrescriptionComponent implements OnInit {
  hospitalName: string = 'GoofedUp Hospital';
  hospitalAddress: string = ' DLF Phase-5, Meerut ';
  prescriptionDate: string = '21-04-2018';
  prescribedMedicine: MedicineList[] = [
    {
      medicine: 'Medicine1',
      dosage: '2 times a day',
      comment: 'take for 3 days'
    },
    {
      medicine: 'Medicine2',
      dosage: '3 times a day',
      comment: 'take for 2 days'
    },
    {
      medicine: 'Medicine3',
      dosage: '1 times a day',
      comment: 'take for 2 days'
    },
    {
      medicine: 'Medicine4',
      dosage: '2 times a day',
      comment: 'take for 6 days'
    }
  ];
  doctorName: string = 'Mr Goofy Patil';

  constructor() {}

  ngOnInit() {}
}

class MedicineList {
  medicine: string;
  dosage: string;
  comment: string;
}
