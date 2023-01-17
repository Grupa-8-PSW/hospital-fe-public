import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DateRange } from '../../shared/model/date-range.model';
import { DoctorSpecialization } from '../../shared/model/doctor-specialization.model';
import { Doctor } from '../../shared/model/doctor.model';
import { DoctorService } from '../../shared/service/doctor.service';
import { AvailableAppointments } from '../model/available-appointments.model';
import { Examination } from '../model/examination.model';
import { AppointmentService } from '../services/appointment.service';
import { ExaminationService } from '../services/examination.service';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { DateEvent } from '../model/date-event.model';
import { SpecializationEvent } from '../model/specialization-event.model';
import { DoctorEvent } from '../model/doctor-event.model';
import { AppointmentEvent } from '../model/appointment-event.model';
import { SessionEndEvent } from '../model/session-end-event.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-appointment-step',
  templateUrl: './create-appointment-step.component.html',
  styleUrls: ['./create-appointment-step.component.css']
})
export class CreateAppointmentStepComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  isLinear = false;

  doctorSpecialization = DoctorSpecialization;
  doctorSpecializations: DoctorSpecialization[];
  selectedSpecialization: DoctorSpecialization;
  doctors: Doctor[];
  selectedDoctor: Doctor;
  selectedDate: Date;
  availableAppointments: AvailableAppointments;
  availableSlots: DateRange[];
  selectedSlot: DateRange;
  aggregateId: number;

  constructor(private _formBuilder: FormBuilder, private doctorService: DoctorService, private eventService: EventService
    , private appointmentService: AppointmentService, private examinationService: ExaminationService, private router: Router,
    private snackBar: MatSnackBar) {
    this.doctorSpecializations = [];
    this.selectedSpecialization = -1;
    this.doctors = [];
    this.aggregateId = 0;
    this.selectedDoctor = {
      id: 0,
      firstName: '',
      lastName: '',
      fullName: ''
    };
    this.selectedDate = new Date();
    this.availableAppointments = {
      doctor: {
        id: 0,
        firstName: '',
        lastName: '',
        fullName: ''
      },
      slots: []
    };
    this.availableSlots = [];
    this.selectedSlot = {
      start: new Date(0),
      end: new Date(0)
    }
  }

  ngOnInit(): void {
    this.fillSpecializationSelect();
    this.sessionStarted();
  }


  scheduleAppointment() {
    let examination = new Examination({
      id: 0,
      doctorId: this.selectedDoctor.id,
      patientId: 1,
      patientFullName: "",
      dateRange: this.selectedSlot
    });
    this.examinationService.create(examination).subscribe((res) => {
      this.eventService.sessionFinished(new SessionEndEvent(this.aggregateId)).subscribe(() => {});
      this.snackBar.open("Appointment successfully scheduled!", "Ok", {
        duration: 2000,
        panelClass: ['snack-bar']
      });
      setTimeout(() => {
        this.router.navigate(['/appointments']);
      }, 2000);
      
    });
  }

  fillSpecializationSelect(){
    this.doctorSpecializations.push(DoctorSpecialization.GENERAL_PRACTICIONER)
    this.doctorSpecializations.push(DoctorSpecialization.GYNECOLOGIST)
    this.doctorSpecializations.push(DoctorSpecialization.NEUROLOGIST)
    this.doctorSpecializations.push(DoctorSpecialization.PEDIATRICIAN)
    this.doctorSpecializations.push(DoctorSpecialization.SURGEON)
  }

  getDoctorsForSpecialization(){
    this.doctorService.getDoctorsForSpecialization(this.selectedSpecialization).subscribe((res) => {
      this.doctors = res;
    });
  }

  getAppointmentsForDoctor(){
    if(this.selectedDoctor.id != 0 && this.selectedDate != new Date()){
      this.appointmentService.getAppointmentsForDoctorDate(this.selectedDate, this.selectedDoctor.id).subscribe((res: AvailableAppointments) => {
        this.availableAppointments = res;
        this.availableSlots = this.availableAppointments.slots;
      });
    }
  }

  sessionStarted(){
    this.eventService.sessionStarted().subscribe((res) => {
      this.aggregateId = res;
    })
  }

  dateSelected(){
    this.eventService.dateSelected(new DateEvent(this.aggregateId, this.selectedDate)).subscribe(() => {});
  }

  specializationSelected(){
    this.eventService.specializationSelected(new SpecializationEvent(this.aggregateId, this.selectedSpecialization)).subscribe(() => {});
  }
  
  doctorSelected(){
    this.eventService.doctorSelected(new DoctorEvent(this.aggregateId, this.selectedDoctor.id)).subscribe(() => {});
  }

  appointmentSelected(){
    this.eventService.appointmentSelected(new AppointmentEvent(this.aggregateId, this.selectedSlot)).subscribe(() => {});
  }

}
