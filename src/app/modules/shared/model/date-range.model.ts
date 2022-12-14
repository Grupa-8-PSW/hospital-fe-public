export class DateRange implements IDateRange {
    start: Date;
    end: Date;

    constructor(dateRange: IDateRange) {
        this.start = dateRange.start;
        this.end = dateRange.end;
    }
    
}

interface IDateRange {
    start: Date,
    end: Date
};
