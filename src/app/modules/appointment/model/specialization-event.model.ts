import { DoctorSpecialization } from "../../shared/model/doctor-specialization.model";

export class SpecializationEvent{
    public aggregateId: number;
    public selectedSpecialization: DoctorSpecialization;

    constructor(aggregateId: number, selectedSpecialization: DoctorSpecialization){
        this.aggregateId = aggregateId;
        this.selectedSpecialization = selectedSpecialization;
    }
}

