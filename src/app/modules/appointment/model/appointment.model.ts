export class Appointment implements AppointmentInterface{

    public id: number;
    public startTime: Date;
    public doctorFullName: string;
    public roomId: number;
    public floorId: number;
    public roomName: string;

    constructor(appointmentCfg: AppointmentInterface)
    {
        this.id = appointmentCfg.id;
        this.startTime = appointmentCfg.startTime;
        this.doctorFullName = appointmentCfg.doctorFullName;
        this.roomId = appointmentCfg.roomId;
        this.floorId = appointmentCfg.floorId;
        this.roomName = appointmentCfg.roomName;
    }
}

interface AppointmentInterface{
    id: number;
    startTime: Date;
    doctorFullName: string;
    roomId: number;
    floorId: number;
    roomName: string;
}