import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationSystemComponent } from './recommendation-system/recommendation-system.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: 'appointment/recommendation-system' ,component: RecommendationSystemComponent},
];

@NgModule({
  declarations: [
    RecommendationSystemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentModule { }
