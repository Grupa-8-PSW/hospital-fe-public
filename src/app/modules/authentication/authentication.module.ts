import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MatRadioModule } from '@angular/material/radio';
import { Routes, RouterModule  } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCheckboxModule,
    MatRadioModule,
    JwtModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
