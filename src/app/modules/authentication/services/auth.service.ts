import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { Credentials } from '../model/credentials.model';
import { RegisterRequest } from '../model/register-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: string = "http://localhost:5174/";

  userClaims: any = null;
  private loginSource = new BehaviorSubject<boolean>(false);
  public loginObserver = this.loginSource.asObservable();

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.userClaims = this.jwtHelper.decodeToken();
    if(this.userClaims)
      this.loginSource.next(true);
   }

  register(registerRequest: RegisterRequest): Observable<RegisterRequest> {
    return this.http
      .post<RegisterRequest>(this.baseURL + 'api/Auth/register', registerRequest, this.httpOptions)
      .pipe(catchError(this.handleError('register', registerRequest)));
  }
  
  login(loginRequest: Credentials): Observable<boolean> {
    return this.http.post<any>(this.baseURL + 'api/auth/public/login', loginRequest, this.httpOptions).pipe(
      map((res) => {
        localStorage.setItem('token', res.jwt);
        this.userClaims = this.jwtHelper.decodeToken();
        this.loginSource.next(true);
        return true;
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.loginSource.next(false);
  }

  getUserRole(): string {
    return this.userClaims.role;
  }

  getUserName(): any {
    return this.userClaims.Username;
  }


  isLogged(): boolean {
    if (!this.jwtHelper.tokenGetter())
      return false;
    return true;
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      alert("Email or username already registered");
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
