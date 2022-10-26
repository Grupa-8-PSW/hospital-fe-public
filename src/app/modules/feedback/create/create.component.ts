import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Feedback } from '../model/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  feedback: Feedback;

  constructor(private feedbackService: FeedbackService) {
    this.feedback = {
       patientFullName: "string",
       text: "string",
       rating: 0,
       creationDate: new Date(),
       isAnonymous: false,
       isPublic: false
    };
   }
  
  ngOnInit(): void {
  }
  createFeedback(){
    this.feedbackService.addFeedback(this.feedback).subscribe(() => {
      alert("Feedback succesfully added!");
      this.feedback = {
        patientFullName: "string",
        text: "string",
        rating: 0,
        creationDate: new Date(),
        isAnonymous: false,
        isPublic: false
     }
    });
  }
}
