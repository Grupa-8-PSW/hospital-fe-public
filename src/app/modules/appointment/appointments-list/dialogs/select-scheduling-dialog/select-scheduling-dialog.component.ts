import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-scheduling-dialog',
  templateUrl: './select-scheduling-dialog.component.html',
  styleUrls: ['./select-scheduling-dialog.component.css']
})
export class SelectSchedulingDialogComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<SelectSchedulingDialogComponent>) { }

  ngOnInit(): void {
  }

  onClassicScheduling() {
    this.dialogRef.close();
    this.router.navigate(['/appointments/create-step-by-step'])
  }

  onSystemRecommendationScheduling() {
    this.dialogRef.close();
    this.router.navigate(['/appointments/create-with-recommendation'])
  }

}
