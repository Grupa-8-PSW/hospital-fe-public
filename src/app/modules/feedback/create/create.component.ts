import { Component, OnInit } from '@angular/core';
import { NewFeedback } from '../model/new-feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  feedback: NewFeedback;

  constructor(private feedbackService: FeedbackService) {
    this.feedback = {
       text: "",
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
        text: "",
        isAnonymous: false,
        isPublic: false
     }
    });
  }
}
