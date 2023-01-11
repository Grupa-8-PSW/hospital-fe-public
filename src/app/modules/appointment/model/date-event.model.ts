export class DateEvent{
    public aggregateId: number;
    public selectedDate: Date;

    constructor(aggregateId: number, selectedDate: Date){
        this.aggregateId = aggregateId;
        this.selectedDate = selectedDate;
    }
}

