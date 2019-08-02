import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppURL } from './app-routing.url';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  { path: 'approve', loadChildren: './approve/approve.module#ApproveModule'  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
