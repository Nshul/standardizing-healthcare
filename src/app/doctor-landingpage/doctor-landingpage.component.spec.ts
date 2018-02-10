import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLandingpageComponent } from './doctor-landingpage.component';

describe('DoctorLandingpageComponent', () => {
  let component: DoctorLandingpageComponent;
  let fixture: ComponentFixture<DoctorLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
