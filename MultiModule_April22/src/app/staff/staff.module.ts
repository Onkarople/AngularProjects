import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffDeatilsComponent } from './staff-deatils/staff-deatils.component';



@NgModule({
  declarations: [
    StaffLoginComponent,
    StaffDeatilsComponent
  ],
  imports: [
    CommonModule,
  ],

  exports:[
    StaffLoginComponent,
    StaffDeatilsComponent
  ]
})
export class StaffModule { }
