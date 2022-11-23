import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorUrl = `http://localhost:5174/api/Doctor/`;

  constructor(
    private http: HttpClient
  ) { }

 getAvailableDoctors() : Observable<Doctor[]>{
   return this.http.get<Doctor[]>(this.doctorUrl);
 }
}
