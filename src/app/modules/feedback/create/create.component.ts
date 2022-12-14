import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewFeedback } from '../model/new-feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  feedback: NewFeedback;
  feedbackError: boolean = false;

  constructor(private feedbackService: FeedbackService, private router: Router) {
    this.feedback = {
       text: "",
       isAnonymous: false,
       isPublic: false
    };
   }
  
  ngOnInit(): void {
  }

  createFeedback(){
    if(this.feedback.text == "")
      this.feedbackError = false;
    else{
      this.feedbackError = true;
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

  
}
