import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { DateRange } from '../../shared/model/date-range.model';
import { Doctor } from '../../shared/model/doctor.model';
import { DoctorService } from '../../shared/service/doctor.service';
import { AppointmentPriority } from '../enum/appointment-priority';
import { AvailableAppointments } from '../model/available-appointments.model';
import { Examination } from '../model/examination.model';
import { AppointmentService } from '../services/appointment.service';
import { ExaminationService } from '../services/examination.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recommendation-system',
  templateUrl: './recommendation-system.component.html',
  styleUrls: ['./recommendation-system.component.css']
})
export class RecommendationSystemComponent implements OnInit {

  public doctors: Array<Doctor> = [];
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public doctorId: number = 0;
  public priority: AppointmentPriority = 0;
  public availableAppointments: Array<AvailableAppointments> | null = null;

  public selectedAvailableDoctorId: number = 0;
  public availableSlots: Array<DateRange> | null = null;
  public selectedSlotIndex: number = 0;

  constructor(
    private appointmentService: AppointmentService, 
    private doctorService: DoctorService, 
    private examinationService: ExaminationService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  submit(): void {
    const dateRange: DateRange = new DateRange({start: this.startDate, end: this.endDate});
    this.appointmentService.getRecommended(dateRange, this.doctorId, this.priority).subscribe((res) => {
      this.availableAppointments = res;
    });
  }

  availableDoctorSelected(index: number): void {
    if (!this.availableAppointments)
      return;
    this.availableSlots = this.availableAppointments[index].slots;
  }

  availableSlotSelected(index:number): void {
    this.selectedSlotIndex = index;
  }

  scheduleAppointment() {
    if (!this.availableSlots)
      return;
    let examination = new Examination({
      id: 0,
      doctorId: this.selectedAvailableDoctorId,
      patientId: 1,
      patientFullName: "",
      dateRange: this.availableSlots[this.selectedSlotIndex]
    });
    this.examinationService.create(examination).subscribe((res) => {
      this.snackBar.open("Appointment successfully scheduled!", "Ok", {
        duration: 2000,
        panelClass: ['snack-bar']
      });
      setTimeout(() => {
        this.router.navigate(['/appointments']);
      }, 2000);
    });
  }

}
