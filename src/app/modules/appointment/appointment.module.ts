import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AuthGuard } from '../authentication/helpers/auth.guard';
import { RoleGuard } from '../authentication/helpers/role.guard';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RecommendationSystemComponent } from './recommendation-system/recommendation-system.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { CreateAppointmentStepComponent } from './create-appointment-step/create-appointment-step.component';
import { MatRadioModule } from '@angular/material/radio';
import { SelectSchedulingDialogComponent } from './appointments-list/dialogs/select-scheduling-dialog/select-scheduling-dialog.component';
import { CancelConfirmationDialogComponent } from './appointments-list/dialogs/cancel-confirmation-dialog/cancel-confirmation-dialog.component';

const routes: Routes = [
  { path: 'appointments/create-with-recommendation' ,component: RecommendationSystemComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Patient']}},
  { path: 'appointments/create-step-by-step' ,component: CreateAppointmentStepComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Patient']}},
  { path: 'appointments', component: AppointmentsListComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Patient'] }}
]

@NgModule({
  declarations: [
    AppointmentsListComponent,
    RecommendationSystemComponent,
    CreateAppointmentStepComponent,
    SelectSchedulingDialogComponent,
    CancelConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentModule { }
