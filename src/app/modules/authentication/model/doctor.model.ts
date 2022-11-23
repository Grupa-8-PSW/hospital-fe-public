export class Doctor implements DoctorInterface{
  public Id : number;
  public FirstName: string='amko';
  public LastName: string;

  constructor(doctorCfg: DoctorInterface)
  {
      this.Id=doctorCfg.Id;
      this.FirstName = doctorCfg.FirstName;
      this.LastName = doctorCfg.LastName;
  }
}

interface DoctorInterface{
  Id : number;
  FirstName: string;
  LastName: string;
}
