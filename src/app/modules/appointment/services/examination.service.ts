import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Examination } from '../model/examination.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  create(examination: Examination): Observable<Examination> {
    const url = `${environment.apiUrL}/public/Examination`;
    return this.http.post<Examination>(url, examination, this.httpOptions);
  }

}
