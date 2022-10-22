import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /* { path: 'home', component: MenuItemsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'edit', component: EditMenuComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
