import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalRoutingModule } from './approval-routing.module';
import { ApprovalDashboardComponent } from './approval-dashboard/approval-dashboard.component';
import { ApprovalRequestApproveComponent } from './approval-request-approve/approval-request-approve.component';
import { ApprovalRequestCommentComponent } from './approval-request-comment/approval-request-comment.component';
import { ApprovalRequestStatComponent } from './approval-request-stat/approval-request-stat.component';
import { ApprovalNavComponent } from './approval-nav/approval-nav.component';
import { SharedModule } from '../shared/shared.module';
import { ApprovalLayoutComponent } from './approval-layout/approval-layout.component';

@NgModule({
  declarations: [
    ApprovalDashboardComponent, 
    ApprovalRequestApproveComponent, 
    ApprovalRequestCommentComponent, 
    ApprovalRequestStatComponent, 
    ApprovalNavComponent, ApprovalLayoutComponent
  ],
  imports: [
    CommonModule,
    ApprovalRoutingModule,
    SharedModule
  ]
})
export class ApprovalModule { }