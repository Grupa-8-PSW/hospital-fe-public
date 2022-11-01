
export class Feedback implements FeedbackInterface{

    public patientFullName: string; 
    public text: string;
    public creationDate: Date;

    constructor(feedbackCfg: FeedbackInterface)
    {
        this.text = feedbackCfg.text;
        this.patientFullName=feedbackCfg.patientFullName;
        this.creationDate = feedbackCfg.creationDate;

    }
}

interface FeedbackInterface{
    text: string;
    patientFullName: string;
    creationDate: Date;
}