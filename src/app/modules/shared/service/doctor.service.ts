import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Array<Doctor>> {
    const url = `${environment.apiUrL}/doctor`;
    return this.http.get<Array<Doctor>>(url, this.httpOptions);
  }

  getDoctorsForSpecialization(spec: number): Observable<Doctor[]> {
    const url = `${environment.apiUrL}/doctor/specialization`;
    return this.http.get<Doctor[]>(url, this.httpOptions);
  }

}
