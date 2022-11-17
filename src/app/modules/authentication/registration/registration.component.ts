import { Component, OnInit } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { BloodType } from '../../shared/enum/blood-type';
import { Gender } from '../../shared/enum/gender';
import { Allergen } from '../../shared/model/allergen.model';
import { AllergenService } from '../../shared/service/allergen.service';
import { RegisterRequest } from '../model/register-request.model';
import { RegisteredUser } from '../model/registered-user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  allergens:any;
  registeredUser: RegisteredUser;
  registerRequest: RegisterRequest

  constructor(private allergenService: AllergenService, private authService: AuthService) { 
    this.allergens = [];
    this.registeredUser = {
      firstName: "",
      lastName: "",
      email: "",
      pin:"",
      allergens: [],
      bloodType: BloodType.ZERO_POSITIVE,
      gender: Gender.MALE

    }
    this.registerRequest = {
      registeredUser: this.registeredUser,
      email: this.registeredUser.email,
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
    this.getAllergens()
  }
  getAllergens(){
    this.allergenService.getAllergens().subscribe((res: Allergen[]) => {
      for(let i = 0; i < res.length; i++){
        this.allergens.push({name: res[i], checked: false})
      }
      
    });
  }
  register(){
    for(let i = 0; i < this.allergens.length; i++){
      if(this.allergens[i].checked == true)
          this.registeredUser.allergens.push(this.allergens[i].name);
    }
    this.registerRequest.email = this.registeredUser.email;

    this.authService.register(this.registerRequest).subscribe(() => {
      alert("Request for registration successfully submitted");
      this.registeredUser = {
        firstName: "",
        lastName: "",
        email: "",
        pin:"",
        allergens: [],
        bloodType: BloodType.ZERO_POSITIVE,
        gender: Gender.MALE
  
      }
    });
    
  }
  onChange(index: number){
    this.allergens[index].checked = !this.allergens[index].checked
    if(this.allergens[index].checked)
      console.log(this.allergens[index].name);
  }
}
