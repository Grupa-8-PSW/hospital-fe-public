import { DateRange } from "../../shared/model/date-range.model";

export class Examination implements IExamination {
    id: number | null = 0;
    doctorId: number = 0;
    patientId: number = 0;
    patientFullName: string = "";
    dateRange: DateRange | null = null;

    constructor(examination: IExamination) {
        this.id = examination.id;
        this.doctorId = examination.doctorId;
        this.patientId = examination.patientId;
        this.patientFullName = examination.patientFullName;
        this.dateRange = examination.dateRange;
    }
}

interface IExamination {
    id: number | null,
    doctorId: number,
    patientId: number,
    patientFullName: string,
    dateRange: DateRange | null
};
