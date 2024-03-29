import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';

console.warn("staff module loaded");


@NgModule({
  imports: [
    CommonModule,
    StaffRoutingModule
  ],
  declarations: [StaffDashboardComponent]
})
export class StaffModule { }
