import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalDashboardComponent } from './approval-dashboard/approval-dashboard.component';
import { ApprovalRequestApproveComponent } from './approval-request-approve/approval-request-approve.component';
import { ApprovalRequestStatComponent } from './approval-request-stat/approval-request-stat.component';
import { ApprovalRequestFormComponent } from './approval-request-form/approval-request-form.component';

const routes: Routes = [
  { path: '', component: ApprovalDashboardComponent },
  { path: 'dashboard', component: ApprovalDashboardComponent },
  { path: 'requestapprove', component: ApprovalRequestApproveComponent },
  { path: 'requeststat', component: ApprovalRequestStatComponent },
  { path: 'requestform', component: ApprovalRequestFormComponent },
  { path: 'requestform/:form', component: ApprovalRequestFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalRoutingModule { }
