import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffRequestStatComponent } from './staff-request-stat/staff-request-stat.component';
import { StaffRequestStatusComponent } from './staff-request-status/staff-request-status.component';
import { StaffRequestFormComponent } from './staff-request-form/staff-request-form.component';

const routes: Routes = [
  { path: '', component: StaffDashboardComponent },
  { path: 'dashboard', component: StaffDashboardComponent },
  { path: 'requeststat', component: StaffRequestStatComponent },
  { path: 'requeststatus', component: StaffRequestStatusComponent },
  { path: 'requestform', component: StaffRequestFormComponent },
  { path: 'requestform/:form', component: StaffRequestFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
