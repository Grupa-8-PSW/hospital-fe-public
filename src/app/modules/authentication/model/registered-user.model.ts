import { BloodType } from "../../shared/enum/blood-type";
import { Gender } from "../../shared/enum/gender";
import { Allergen } from "../../shared/model/allergen.model";

export class RegisteredUser implements NewRegisteredUserInterface{
    firstName: string;
    lastName: string;
    email: string;
    pin: string;
    allergens: Allergen[];
    bloodType: BloodType;
    gender: Gender;

    constructor(nrui: NewRegisteredUserInterface)
    {
        this.firstName = nrui.firstName;
        this.lastName = nrui.lastName;
        this.email = nrui.email;
        this.pin = nrui.pin;
        this.allergens = nrui.allergens;
        this.bloodType = nrui.bloodType;
        this.gender = nrui.gender;

    }
}

interface NewRegisteredUserInterface{
    firstName: string;
    lastName: string;
    email: string;
    pin: string;
    allergens: Allergen[];
    bloodType: BloodType;
    gender: Gender;
}