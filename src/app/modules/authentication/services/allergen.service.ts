import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Allergen } from '../registration/model/allergen.model';

@Injectable({
  providedIn: 'root'
})
export class AllergenService {

  baseURL: string = "http://localhost:5174/api/Allergen";

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }
  
  getAllergens(): Observable<Allergen[]> {
    return this.http
      .get<Allergen[]>(this.baseURL, this.httpOptions)
      .pipe(catchError(this.handleError<Allergen[]>('getAllergens', [])));
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
