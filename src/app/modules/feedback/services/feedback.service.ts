import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Feedback } from 'src/app/modules/feedback/model/feedback.model'
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseURL: string = "http://localhost:5174/api/Feedback";
  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http
      .post<Feedback>(this.baseURL, feedback, this.httpOptions)
      .pipe(catchError(this.handleError('addFeedback', feedback)));
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
