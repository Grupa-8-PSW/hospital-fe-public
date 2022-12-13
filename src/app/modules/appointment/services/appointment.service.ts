import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../../shared/model/date-range.model';
import { AppointmentPriority } from '../enum/appointment-priority';
import { AvailableAppointments } from '../model/available-appointments.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  getRecommended(dateRange: DateRange, doctorId: number, priority: AppointmentPriority): Observable<Array<AvailableAppointments>> {
    const startDateIso = `${dateRange.start.getFullYear()}-${dateRange.start.getMonth()+1}-${dateRange.start.getDate()}`;
    const endDateIso = `${dateRange.end.getFullYear()}-${dateRange.end.getMonth()+1}-${dateRange.end.getDate()}`;
    const url = `${environment.apiUrL}/Appointment/recommend?start=${startDateIso}&end=${endDateIso}&doctorId=${doctorId}&priority=${priority}`;
    return this.http.get<Array<AvailableAppointments>>(url, this.httpOptions);
  }

}
