import { DateRange } from "../../shared/model/date-range.model";

export class AppointmentEvent{
    public aggregateId: number;
    public selectedSlot: DateRange;

    constructor(aggregateId: number, selectedSlot: DateRange){
        this.aggregateId = aggregateId;
        this.selectedSlot = selectedSlot;
    }
}
