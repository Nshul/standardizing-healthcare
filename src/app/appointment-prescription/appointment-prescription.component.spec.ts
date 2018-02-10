import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPrescriptionComponent } from './appointment-prescription.component';

describe('AppointmentPrescriptionComponent', () => {
  let component: AppointmentPrescriptionComponent;
  let fixture: ComponentFixture<AppointmentPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
