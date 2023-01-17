import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Feedback } from '../../feedback/model/feedback.model';
import { FeedbackService } from '../../feedback/services/feedback.service';
import { AuthService } from '../../authentication/services/auth.service';
import { BloodBankNewsService } from '../../shared/service/blood-bank-news.service';
import { BloodBankNews } from '../../shared/model/blood-bank-news';

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
  bloodBankNews: BloodBankNews[];

  constructor(
    private feedbackService: FeedbackService, 
    private authService: AuthService,
    private bloodBankNewsService: BloodBankNewsService) {
    this.feedbacks = [];
    this.alignLeft = 'left';
    this.alignRight = 'right';
    this.bloodBankNews = [];
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
    this.getBloodBankNews();
  }

  getPublicFeedbacks(){
    this.feedbackService.getPublicFeedbacks().subscribe((res: Feedback[]) => {
      this.feedbacks = res;
    });
  }

  getBloodBankNews() {
    this.bloodBankNewsService.getPublished().subscribe((res) => {
      this.bloodBankNews = res;
    });
  }

}
