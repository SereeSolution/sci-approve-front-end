import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffRequestStatusComponent } from './staff-request-status/staff-request-status.component';
import { StaffRequestStatComponent } from './staff-request-stat/staff-request-stat.component';
import { StaffCreateRequestComponent } from './staff-create-request/staff-create-request.component';
import { StaffRequestFormComponent } from './staff-request-form/staff-request-form.component';
import { StaffNavComponent } from './staff-nav/staff-nav.component';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    StaffDashboardComponent, 
    StaffRequestStatusComponent, 
    StaffRequestStatComponent, 
    StaffCreateRequestComponent, 
    StaffRequestFormComponent, 
    StaffNavComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    SharedModule,
    AgGridModule.withComponents(null)
  ]
})
export class StaffModule { }