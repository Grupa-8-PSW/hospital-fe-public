import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/layout/home/home.component';
import { CreateComponent } from './modules/feedback/create/create.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { AccountDetailsComponent } from './modules/account-details/account-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'createFeedback' ,component: CreateComponent},
  {path:'account-details',component: AccountDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
