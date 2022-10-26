export class Feedback implements FeedbackInterface{

    public patientFullName: string;
    public text: string;
    public rating: number;
    public creationDate: Date;
    public isAnonymous: boolean;
    public isPublic: boolean;

    constructor(feedbackCfg: FeedbackInterface)
    {
        this.patientFullName = feedbackCfg.patientFullName;
        this.text = feedbackCfg.text;
        this.rating = feedbackCfg.rating;
        this.creationDate = feedbackCfg.creationDate;
        this.isAnonymous = feedbackCfg.isAnonymous;
        this.isPublic = feedbackCfg.isPublic;
    }
}

interface FeedbackInterface{
    patientFullName: string;
    text: string;
    rating: number;
    creationDate: Date;
    isAnonymous: boolean;
    isPublic: boolean;
}