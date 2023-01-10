import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { LayoutModule } from './modules/layout/layout.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { PatientModule } from './modules/patient/patient.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { JwtInterceptor } from "./modules/authentication/helpers/jwt.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { AppointmentModule } from './modules/appointment/appointment.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FeedbackModule,
    PatientModule,
    AuthenticationModule,
    AppointmentModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
