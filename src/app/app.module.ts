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
<<<<<<< HEAD
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { JwtInterceptor } from "./modules/authentication/helpers/jwt.interceptor";
import { JwtModule } from "@auth0/angular-jwt";

=======
import { AccountDetailsComponent } from './modules/account-details/account-details.component';
>>>>>>> 69d83f3131b06b18eb6aa7f10916762a749caf86

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    AccountDetailsComponent
>>>>>>> 69d83f3131b06b18eb6aa7f10916762a749caf86
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
