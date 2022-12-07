import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AuthGuard } from '../authentication/helpers/auth.guard';
import { RoleGuard } from '../authentication/helpers/role.guard';
import { MaterialModule } from 'src/app/material/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {path: 'appointments', component: AppointmentsListComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Patient'] }}
];

@NgModule({
  declarations: [
    AppointmentsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentModule { }
