import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Feedback } from '../../feedback/model/feedback.model';
import { FeedbackService } from '../../feedback/services/feedback.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  alignLeft: string;
  alignRight: string;
  feedbacks: Feedback[];
  isLogged: boolean = false;
  userRole: string = '';

  constructor(private feedbackService: FeedbackService, private authService: AuthService) {
    this.feedbacks = [];
    this.alignLeft = 'left';
    this.alignRight = 'right';
  }

  ngOnInit(): void {
    this.authService.loginObserver.subscribe((val) => {
      this.isLogged = val;
      if(this.isLogged)
        this.userRole = this.authService.getUserRole();
      else
        this.userRole = '';
    });
    this.getPublicFeedbacks();
  }

  getPublicFeedbacks(){
    this.feedbackService.getPublicFeedbacks().subscribe((res: Feedback[]) => {
      this.feedbacks = res;
    });
  }
}
