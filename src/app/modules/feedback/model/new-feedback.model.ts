
export class NewFeedback implements NewFeedbackInterface{

    public text: string;
    public isAnonymous: boolean;
    public isPublic: boolean;

    constructor(feedbackCfg: NewFeedbackInterface)
    {
        this.text = feedbackCfg.text;
        this.isAnonymous = feedbackCfg.isAnonymous;
        this.isPublic = feedbackCfg.isPublic;

    }
}

interface NewFeedbackInterface{
    text: string;
    isAnonymous: boolean;
    isPublic: boolean;
}