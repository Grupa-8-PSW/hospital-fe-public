import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  appointments: Appointment[];
  pastAppointments: Appointment[];
  upcomingAppointments: Appointment[];
  cancelledAppointments: Appointment[];
  appointmentId: number;

  constructor(private appointmentService: AppointmentService) { 
    this.appointments = [];
    this.pastAppointments = [];
    this.upcomingAppointments = [];
    this.cancelledAppointments = [];
    this.appointmentId = 0;
  }

  ngOnInit(): void {
    this.getAppointmentsForPatient();
  }

  getAppointmentsForPatient(){
    this.appointmentService.getAppointmentsForPatient().subscribe((res: Appointment[]) => {
      this.appointments = res;
      this.systematizeAppointments(this.appointments);
    });
  }

  systematizeAppointments(appointments: Appointment[]){
    appointments.forEach( (app: Appointment) => {
      if(app.status == 1){
        this.cancelledAppointments.push(app);
      } else {
        if(new Date(app.startTime) < new Date()){
          this.pastAppointments.push(app);
        } else {
          this.upcomingAppointments.push(app);
        }
      }
   });
  }
  
  cancelAppointment(index: number){
    this.appointmentId = this.upcomingAppointments[index].id;
    this.appointmentService.cancelAppointment(this.appointmentId).subscribe((res: boolean) => {
      if(res){
        alert('Appointment successfully cancelled.');
        window.location.reload();
      } else {
        alert('Cannot cancel appointment as it is scheduled in the next 24 hours.');
      }
    })
  }

}
