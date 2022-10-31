
export class Feedback implements FeedbackInterface{

    public text: string;
    public isAnonymous: boolean;
    public isPublic: boolean;

    constructor(feedbackCfg: FeedbackInterface)
    {
        this.text = feedbackCfg.text;
        this.isAnonymous = feedbackCfg.isAnonymous;
        this.isPublic = feedbackCfg.isPublic;
    }
}

interface FeedbackInterface{
    text: string;
    isAnonymous: boolean;
    isPublic: boolean;
}