export class Doctor implements IDoctor {

    public id: number;
    public firstName: string;
    public lastName: string;
    public fullName: string;

    constructor(doctor: IDoctor) {
        this.id = doctor.id;
        this.firstName = doctor.firstName;
        this.lastName = doctor.lastName;
        this.fullName = doctor.fullName;
    }
}

interface IDoctor {
    id: number,
    firstName: string,
    lastName: string,
    fullName: string
}
