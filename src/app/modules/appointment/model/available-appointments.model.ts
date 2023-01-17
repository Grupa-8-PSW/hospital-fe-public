import { DateRange } from "../../shared/model/date-range.model";
import { Doctor } from "../../shared/model/doctor.model";

export class AvailableAppointments implements IAvailableAppointments {
    doctor: Doctor;
    slots: Array<DateRange>;

    constructor(availableAppointments: IAvailableAppointments) {
        this.doctor = availableAppointments.doctor;
        this.slots = availableAppointments.slots;
    }
}

interface IAvailableAppointments {
    doctor: Doctor,
    slots: Array<DateRange>
}
