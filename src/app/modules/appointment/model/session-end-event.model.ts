import { DateRange } from "../../shared/model/date-range.model";

export class SessionEndEvent{
    public aggregateId: number;

    constructor(aggregateId: number){
        this.aggregateId = aggregateId;
    }
}

