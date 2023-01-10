import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodBankNews } from '../model/blood-bank-news';

@Injectable({
  providedIn: 'root'
})
export class BloodBankNewsService {

  baseURL: string = `${environment.intagrationApiUrl}/BloodBankNews`;

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  getPublished(): Observable<BloodBankNews[]> {
    return this.http.get<BloodBankNews[]>(this.baseURL + '/published', this.httpOptions);
  }

}
