export class Feedback implements FeedbackInterface{

    public patientFullName: string;
    public text: string;
    public creationDate: Date;

    constructor(feedbackCfg: FeedbackInterface)
    {
        this.patientFullName = feedbackCfg.patientFullName;
        this.text = feedbackCfg.text;
        this.creationDate = feedbackCfg.creationDate;
    }
}

interface FeedbackInterface{
    patientFullName: string;
    text: string;
    creationDate: Date;
}