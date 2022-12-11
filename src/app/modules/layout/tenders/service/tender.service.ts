import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createOffer(off: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/TenderOffer/', off, {'headers': this.headers});
  } 

 getAllForOffers(): Observable<any> {
  return this.http.get<any>(this.apiHost + 'api/Tender/getAllForOffers/',  {'headers': this.headers});

 }
}
