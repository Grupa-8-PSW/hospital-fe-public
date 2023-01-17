import { DoctorSpecialization } from "../../shared/model/doctor-specialization.model";
import { Doctor } from "../../shared/model/doctor.model";

export class DoctorEvent{
    public aggregateId: number;
    public selectedDoctor: number;

    constructor(aggregateId: number, selectedDoctor: number){
        this.aggregateId = aggregateId;
        this.selectedDoctor = selectedDoctor;
    }
}

