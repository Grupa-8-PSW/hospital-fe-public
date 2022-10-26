import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class FeedbackModule { }
