import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { CreateComponent } from './create/create.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../authentication/helpers/auth.guard';
import { RoleGuard } from '../authentication/helpers/role.guard';

const routes: Routes = [
{ path: 'createFeedback' ,component: CreateComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Patient'] }},
]

@NgModule({
  declarations: [
    FeedbackDetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ],
  exports: [FeedbackDetailsComponent]
})
export class FeedbackModule { }
