import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../../shared/model/date-range.model';
import { Appointment } from '../model/appointment.model';
import { AppointmentPriority } from '../enum/appointment-priority';
import { AvailableAppointments } from '../model/available-appointments.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  examinationUrl = `${environment.apiUrL}/Appointment`;

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  getAppointmentsForPatient() : Observable<Appointment[]> {
    return this.http
      .get<Appointment[]>(this.examinationUrl + '/patient', this.httpOptions)
      .pipe(catchError(this.handleError<Appointment[]>('getAppointmentsForPatient', [])))
  }

  cancelAppointment(id: number) : Observable<boolean> {
    const url = `${this.examinationUrl}/${id}`;

    return this.http
      .delete<boolean>(url, this.httpOptions)
      .pipe(catchError(this.handleError<boolean>('cancelAppointment')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRecommended(dateRange: DateRange, doctorId: number, priority: AppointmentPriority): Observable<Array<AvailableAppointments>> {
    const startDateIso = `${dateRange.start.getFullYear()}-${dateRange.start.getMonth()+1}-${dateRange.start.getDate()}`;
    const endDateIso = `${dateRange.end.getFullYear()}-${dateRange.end.getMonth()+1}-${dateRange.end.getDate()}`;
    const url = `${environment.apiUrL}/Appointment/recommend?start=${startDateIso}&end=${endDateIso}&doctorId=${doctorId}&priority=${priority}`;
    return this.http.get<Array<AvailableAppointments>>(url, this.httpOptions);
  }

  getAppointmentsForDoctorDate(date: Date, doctorId: number): Observable<AvailableAppointments>{
    const dateIso = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    const url = `${environment.apiUrL}/Appointment/available/doctor-date?date=${dateIso}&doctorId=${doctorId}`;    
    return this.http.get<AvailableAppointments>(url, this.httpOptions);
  }

}
