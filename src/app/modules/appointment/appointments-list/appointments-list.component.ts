import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import {MatDialog} from '@angular/material/dialog';
import { SelectSchedulingDialogComponent } from './dialogs/select-scheduling-dialog/select-scheduling-dialog.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CancelConfirmationDialogComponent } from './dialogs/cancel-confirmation-dialog/cancel-confirmation-dialog.component';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  upcomingTableColumns: String[] = ['scheduledFor', 'doctor', 'room', 'roomName', 'floor', 'cancel'];
  columns: String[] = ['scheduledFor', 'doctor', 'room', 'roomName', 'floor'];
  appointments: Appointment[];
  dataSource = new MatTableDataSource<Appointment>();
  pastAppointments: Appointment[];
  upcomingAppointments: Appointment[];
  cancelledAppointments: Appointment[];
  appointmentId: number;

  constructor(private appointmentService: AppointmentService, private dialog: MatDialog, private snackBar: MatSnackBar) { 
    this.appointments = [];
    this.pastAppointments = [];
    this.upcomingAppointments = [];
    this.cancelledAppointments = [];
    this.appointmentId = 0;
  }

  ngOnInit(): void {
    this.appointments = [];
    this.pastAppointments = [];
    this.upcomingAppointments = [];
    this.cancelledAppointments = [];
    this.getAppointmentsForPatient();
  }

  openSchedulingDialog() {
    this.dialog.open(SelectSchedulingDialogComponent);
  }

  getAppointmentsForPatient(){
    this.appointmentService.getAppointmentsForPatient().subscribe((res: Appointment[]) => {
      this.appointments = res;
      this.systematizeAppointments(this.appointments);
    });
  }

  systematizeAppointments(appointments: Appointment[]){
    appointments.forEach( (app: Appointment) => {
      if(app.status == 0){
        this.upcomingAppointments = [...this.upcomingAppointments, app];
      } else if(app.status == 1) {
        this.pastAppointments = [...this.pastAppointments, app];
      } else if(app.status == 2) {
        this.cancelledAppointments = [...this.cancelledAppointments, app];
      }
   });
  }
  
  cancelAppointment(index: number){
    const dialogRef = this.dialog.open(CancelConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (!res) return;
      this.appointmentId = this.upcomingAppointments[index].id;
      this.appointmentService.cancelAppointment(this.appointmentId).subscribe((res: boolean) => {
        if(res){
          this.snackBar.open('Appointment successfully cancelled', 'Ok');
          this.ngOnInit();
        } else {
          this.snackBar.open('Cannot cancel appointment as it is scheduled in the next 24 hours', 'Ok');
        }
      });
    })
  }

}
