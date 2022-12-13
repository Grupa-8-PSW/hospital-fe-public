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
import { RecommendationSystemComponent } from './recommendation-system/recommendation-system.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: 'appointment/recommendation-system' ,component: RecommendationSystemComponent},
  { path: 'appointments', component: AppointmentsListComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Patient'] }}
]

@NgModule({
  declarations: [
    AppointmentsListComponent,
    RecommendationSystemComponent
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
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentModule { }
