import { Component, OnInit } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { BloodType } from '../../shared/enum/blood-type';
import { Gender } from '../../shared/enum/gender';
import { Address } from '../../shared/model/address.model';
import { Allergen } from '../../shared/model/allergen.model';
import { AllergenService } from '../../shared/service/allergen.service';
import { Doctor } from '../model/doctor.model';
import { RegisterRequest } from '../model/register-request.model';
import { RegisteredUser } from '../model/registered-user.model';
import { AuthService } from '../services/auth.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  doctors:any;
  allergens:any;
  registerUser: RegisteredUser;
  registerRequest: RegisterRequest;
  blood: number;
  gender: number;

  constructor(private doctorService: DoctorService,private allergenService: AllergenService, private authService: AuthService) {
    this.blood = 0
    this.gender = 0
    this.doctors=[];
    this.allergens = [];
    this.registerUser = {
      firstName: "",
      lastName: "",
      email: "",
      pin:"",
      allergens: [],
      bloodType: BloodType.ZERO_POSITIVE,
      gender: Gender.MALE,
      address: new Address(),
      selectedDoctorId:0
    }
    this.registerRequest = {
      registerUser: this.registerUser,
      email: this.registerUser.email,
      username: '',
      password: ''
    }
  }
  ngOnInit(): void {
    this.getAllergens();
    this.getAvailableDoctors();
  }
  getAllergens(){
    this.allergenService.getAllergens().subscribe((res: Allergen[]) => {
      for(let i = 0; i < res.length; i++){
        this.allergens.push({name: res[i], checked: false})
      }
    });
  }
  getAvailableDoctors(){
    this.doctorService.getAvailableDoctors().subscribe((response:Doctor[])=>{
      for(let i=0;i<response.length;i++){
        this.doctors.push({value : response[i]})
      }
    }
    );
  }
  register(){
    for(let i = 0; i < this.allergens.length; i++){
      if(this.allergens[i].checked == true)
          this.registerUser.allergens.push(this.allergens[i].name);
    }

    if(!this.validForm()){
      alert("Form is not valid")
      console.log(this.registerUser.bloodType)
      console.log(this.registerUser.gender)
      return;
    }

    this.registerRequest.email = this.registerUser.email;

    this.authService.register(this.registerRequest).subscribe(() => {
     alert("Successfully submitted registration request")
      this.registerUser = {
        firstName: "",
        lastName: "",
        email: "",
        pin:"",
        allergens: [],
        bloodType: BloodType.ZERO_POSITIVE,
        gender: Gender.MALE,
        address: new Address(),
        selectedDoctorId:0

      }
    this.registerRequest.password = ''
    this.registerRequest.email = ''
  });}

  onChangeAllergens(index: number){
    this.allergens[index].checked = !this.allergens[index].checked
  }
  onChangeBloodType(index: number): void {
    if(index == 0) this.registerUser.bloodType = BloodType.ZERO_POSITIVE;
    else if(index == 1) this.registerUser.bloodType = BloodType.ZERO_NEGATIVE;
    else if(index == 2) this.registerUser.bloodType = BloodType.A_POSITIVE;
    else if(index == 3) this.registerUser.bloodType = BloodType.A_NEGATIVE;
    else if(index == 4) this.registerUser.bloodType = BloodType.B_POSITIVE;
    else if(index == 5) this.registerUser.bloodType = BloodType.B_NEGATIVE;
    else if(index == 6) this.registerUser.bloodType = BloodType.AB_POSITIVE;
    else if(index == 7) this.registerUser.bloodType = BloodType.AB_NEGATIVE;

  }
  onChangeGender(index: number): void {
    if(index == 0) this.registerUser.gender = Gender.MALE;
    else if(index == 1) this.registerUser.gender = Gender.FEMALE;
  }

  validForm(): boolean{
    if(this.registerUser.firstName == "" || this.registerUser.lastName == ""
    || !this.registerUser.email.includes("@") || this.registerUser.pin.length != 13) return false;
    return true;
  }
}
