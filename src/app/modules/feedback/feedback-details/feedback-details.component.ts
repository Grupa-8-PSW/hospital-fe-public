import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback.model';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {

  @Input() feedback: Feedback;
  @Input() number: number;
  @Input() alignment: string;

  constructor() {
    this.feedback = {
      patientFullName: '',
      text: '',
      creationDate: new Date()
    };
    this.number = -1;
    this.alignment = ''
  }

  ngOnInit(): void {
    if (this.feedback.patientFullName == null){
      this.feedback.patientFullName = 'Anonymous';
    }
  }

}
