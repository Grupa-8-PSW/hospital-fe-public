import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointmentStepComponent } from './create-appointment-step.component';

describe('CreateAppointmentStepComponent', () => {
  let component: CreateAppointmentStepComponent;
  let fixture: ComponentFixture<CreateAppointmentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppointmentStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppointmentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
