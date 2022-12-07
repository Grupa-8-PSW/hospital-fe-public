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
  appointmentId: number;

  constructor(private appointmentService: AppointmentService) { 
    this.appointments = [];
    this.appointmentId = 0;
  }

  ngOnInit(): void {
    this.getAppointmentsForPatient();
  }

  getAppointmentsForPatient(){
    this.appointmentService.getAppointmentsForPatient().subscribe((res: Appointment[]) => {
      this.appointments = res;
    });
  }

  cancelAppointment(index: number){
    this.appointmentId = this.appointments[index].id;
    this.appointmentService.cancelAppointment(this.appointmentId).subscribe((res: boolean) => {
      if(res){
        alert('Appointment succesfully cancelled.');
      } else {
        alert('Cannot cancel appointment as it is scheduled in the next 24 hours.');
      }
    })
  }

}
