import { FeedbackRating } from "../../shared/model/feedback-rating.model";

export class NewFeedback implements NewFeedbackInterface{

    public text: string;
    public isAnonymous: boolean;
    public isPublic: boolean;
    public rating: FeedbackRating

    constructor(feedbackCfg: NewFeedbackInterface)
    {
        this.text = feedbackCfg.text;
        this.isAnonymous = feedbackCfg.isAnonymous;
        this.isPublic = feedbackCfg.isPublic;
        this.rating = feedbackCfg.rating;

    }
}

interface NewFeedbackInterface{
    text: string;
    isAnonymous: boolean;
    isPublic: boolean;
    rating: FeedbackRating;
}