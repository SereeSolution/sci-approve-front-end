import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffRequestStatComponent } from './staff-request-stat/staff-request-stat.component';
import { StaffRequestStatusComponent } from './staff-request-status/staff-request-status.component';

const routes: Routes = [
  { path: '', component: StaffDashboardComponent },
  { path: 'dashboard', component: StaffDashboardComponent },
  { path: 'requeststat', component: StaffRequestStatComponent },
  { path: 'requeststatus', component: StaffRequestStatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
