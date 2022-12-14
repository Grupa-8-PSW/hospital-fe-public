import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewFeedback } from '../model/new-feedback.model'
import { catchError, Observable, of } from 'rxjs';
import { Feedback } from '../model/feedback.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  publicFeedbackUrl: string = `${environment.apiUrL}/Feedback/public`;
  baseURL: string = `${environment.apiUrL}/Feedback/`;

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  addFeedback(feedback: NewFeedback): Observable<NewFeedback> {
    return this.http
      .post<NewFeedback>(this.baseURL, feedback, this.httpOptions)
      .pipe(catchError(this.handleError('addFeedback', feedback)));
  }
  
  getPublicFeedbacks(): Observable<Feedback[]> {
    return this.http
      .get<Feedback[]>(this.publicFeedbackUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Feedback[]>('getPublicFeedback', [])));
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
