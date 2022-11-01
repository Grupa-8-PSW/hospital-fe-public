import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';

@NgModule({
  declarations: [
    FeedbackDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [FeedbackDetailsComponent]
})
export class FeedbackModule { }
