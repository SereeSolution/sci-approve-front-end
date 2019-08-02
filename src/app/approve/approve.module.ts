import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent }
  /*
  {
    path: '**',
    component: NotfoundComponent
  }
  */
];

@NgModule({
  declarations: [ListComponent, DashboardComponent, DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,    
    RouterModule.forChild(routes),
    AgGridModule.withComponents(null)
  ]
})
export class ApproveModule { }
