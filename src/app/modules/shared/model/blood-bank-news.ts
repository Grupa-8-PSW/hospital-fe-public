export class BloodBankNews implements IBloodBankNews {
    id: number;
    subject: string;
    text: string;
    imgSrc: string;

    constructor(bloodBankNews: IBloodBankNews) {
        this.id = bloodBankNews.id;
        this.subject = bloodBankNews.subject;
        this.text = bloodBankNews.text;
        this.imgSrc = bloodBankNews.imgSrc;
    }
};

interface IBloodBankNews {
    id: number,
    subject: string,
    text: string,
    imgSrc: string
};