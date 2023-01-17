export class Patient implements PatientInterface{

    public id: number;
    public firstName: string;
    public lastName: string;

    constructor(patientCfg: PatientInterface){
        this.id = patientCfg.id;
        this.firstName = patientCfg.firstName;
        this.lastName = patientCfg.lastName;
    }
}

interface PatientInterface{
    id: number;
    firstName: string;
    lastName: string;
}
