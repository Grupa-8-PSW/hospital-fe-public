export class FeedbackRating {
    rating: number;

    constructor(feedbackRating: IFeedbackRating) {
        this.rating = feedbackRating.rating;
    }
    
}

interface IFeedbackRating {
    rating: number;
};