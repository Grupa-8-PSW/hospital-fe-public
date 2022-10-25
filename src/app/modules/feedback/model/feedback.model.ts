export class Feedback implements FeedbackInterface{

    public id: number;
    public patientId: number;
    public text: string;
    public rating: number;
    public creationDate: Date;
    public isAnonymous: boolean;
    public isPublic: boolean;
    public feedbackStatus: FeedbackStatus;

    constructor(feedbackCfg: FeedbackInterface)
    {
        this.id = feedbackCfg.id;
        this.patientId = feedbackCfg.patientId;
        this.text = feedbackCfg.text;
        this.rating = feedbackCfg.rating;
        this.creationDate = feedbackCfg.creationDate;
        this.isAnonymous = feedbackCfg.isAnonymous;
        this.isPublic = feedbackCfg.isPublic;
        this.feedbackStatus = feedbackCfg.feedbackStatus;
    }
}

interface FeedbackInterface{
    id: number;
    patientId: number;
    text: string;
    rating: number;
    creationDate: Date;
    isAnonymous: boolean;
    isPublic: boolean;
    feedbackStatus: FeedbackStatus;
}

export enum FeedbackStatus { OnHold, Approved, Denied }