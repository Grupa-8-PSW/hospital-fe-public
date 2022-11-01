import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Feedback } from '../../feedback/model/feedback.model';
import { FeedbackService } from '../../feedback/services/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  alignLeft: string;
  alignRight: string;
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) {
    this.feedbacks = [];
    this.alignLeft = 'left';
    this.alignRight = 'right';
  }

  ngOnInit(): void {
    this.getPublicFeedbacks();
  }

  getPublicFeedbacks(){
    this.feedbackService.getPublicFeedbacks().subscribe((res: Feedback[]) => {
      this.feedbacks = res;
    });
  }
}
