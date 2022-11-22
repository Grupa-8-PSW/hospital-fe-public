import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/layout/home/home.component';
import { CreateComponent } from './modules/feedback/create/create.component';
<<<<<<< HEAD
import { RegistrationComponent } from './modules/authentication/registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
=======
import { AccountDetailsComponent } from './modules/account-details/account-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'createFeedback' ,component: CreateComponent},
  {path:'account-details',component: AccountDetailsComponent},
>>>>>>> 69d83f3131b06b18eb6aa7f10916762a749caf86
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
