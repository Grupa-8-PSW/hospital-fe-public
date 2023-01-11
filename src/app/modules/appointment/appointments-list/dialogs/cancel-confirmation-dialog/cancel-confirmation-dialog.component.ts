import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-confirmation-dialog',
  templateUrl: './cancel-confirmation-dialog.component.html',
  styleUrls: ['./cancel-confirmation-dialog.component.css']
})
export class CancelConfirmationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CancelConfirmationDialogComponent>) { }

  ngOnInit(): void {
  }

  submit(confirmation: boolean) {

  }

}
