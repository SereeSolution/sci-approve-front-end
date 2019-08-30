import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppURL } from './app-routing.url';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },  
  { path: 'approval', loadChildren: './approval/approval.module#ApprovalModule' },
  { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
  { path: '**', component: NotfoundComponent }  
  
];

/*


{ path: AppURL.Approval, loadChildren: () => import('./approval/approval.module').then(mod => mod.ApprovalModule) },

{ path: AppURL.Approve , loadChildren: () => import('./approve/approve.module').then(mod => mod.ApproveModule) },

  { path: 'approve', loadChildren: './approve/approve.module#ApproveModule' },
  { path: AppURL.Approval, loadChildren: './approval/approval.module#ApprovalModule' },
 
 { path: AppURL.Approve, loadChildren: () => import('./approve/approve.module').then(mod => mod.ApproveModule)},
  */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
