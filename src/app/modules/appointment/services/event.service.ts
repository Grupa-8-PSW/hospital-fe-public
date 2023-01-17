import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../../shared/model/date-range.model';
import { DoctorSpecialization } from '../../shared/model/doctor-specialization.model';
import { Doctor } from '../../shared/model/doctor.model';
import { AppointmentEvent } from '../model/appointment-event.model';
import { DateEvent } from '../model/date-event.model';
import { DoctorEvent } from '../model/doctor-event.model';
import { SessionEndEvent } from '../model/session-end-event.model';
import { SpecializationEvent } from '../model/specialization-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventUrl = `${environment.apiUrL}/AppointmentSchedulingEvents`;

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  sessionStarted() : Observable<number> {
    const url = `${this.eventUrl}/sessionStarted`;

    return this.http
      .post<number>(url, this.httpOptions)
      .pipe(catchError(this.handleError<number>('sessionStarted')));
  }

  dateSelected(event: DateEvent) : Observable<any> {
    const url = `${this.eventUrl}/dateTime`;

    return this.http
      .post(url, event, this.httpOptions)
      .pipe(catchError(this.handleError('dateTime')));
  }

  specializationSelected(event: SpecializationEvent) : Observable<any> {
    const url = `${this.eventUrl}/doctorSpecialization`;

    return this.http
      .post(url, event, this.httpOptions)
      .pipe(catchError(this.handleError('doctorSpecialization')));
  }

  doctorSelected(event: DoctorEvent) : Observable<any> {
    const url = `${this.eventUrl}/doctor`;

    return this.http
      .post(url, event, this.httpOptions)
      .pipe(catchError(this.handleError('doctor')));
  }

  appointmentSelected(event: AppointmentEvent) : Observable<any> {
    const url = `${this.eventUrl}/appointment`;

    return this.http
      .post(url, event, this.httpOptions)
      .pipe(catchError(this.handleError('appointment')));
  }

  sessionFinished(event: SessionEndEvent) : Observable<any> {
    const url = `${this.eventUrl}/sessionEnded`;

    return this.http
      .post(url, event, this.httpOptions)
      .pipe(catchError(this.handleError('sessionEnded')));
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
}
