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

  constructor(private _formBuilder: FormBuilder, private doctorService: DoctorService, private appointmentService: AppointmentService, private examinationService: ExaminationService, private router: Router) {
    this.doctorSpecializations = [];
    this.selectedSpecialization = 0;
    this.doctors = [];
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
      alert("Appointment successfully scheduled!");
      this.router.navigate(['/appointments']);
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
}
