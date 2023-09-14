import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffLoginComponent } from './staff/staff-login/staff-login.component';


const routes: Routes = [
  {path : '', component:StaffLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
