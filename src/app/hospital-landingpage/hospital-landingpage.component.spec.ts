import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalLandingpageComponent } from './hospital-landingpage.component';

describe('HospitalLandingpageComponent', () => {
  let component: HospitalLandingpageComponent;
  let fixture: ComponentFixture<HospitalLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
