export class Feedback implements FeedbackInterface{

    public patientFullName: string;
    public text: string;
    public rating: number;
    public creationDate: Date;

    constructor(feedbackCfg: FeedbackInterface)
    {
        this.patientFullName = feedbackCfg.patientFullName;
        this.text = feedbackCfg.text;
        this.rating = feedbackCfg.rating;
        this.creationDate = feedbackCfg.creationDate;
    }
}

interface FeedbackInterface{
    patientFullName: string;
    text: string;
    rating: number;
    creationDate: Date;
}