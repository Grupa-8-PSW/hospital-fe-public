import { Component, OnInit } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { AllergenService } from '../services/allergen.service';
import { Allergen } from './model/allergen.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  allergens: Allergen[];
  constructor(private allergenService: AllergenService) { 
    this.allergens = [];
  }

  ngOnInit(): void {
    this.getAllergens()
  }
  getAllergens(){
    this.allergenService.getAllergens().subscribe((res: Allergen[]) => {
      this.allergens = res;
    });
  }
}
