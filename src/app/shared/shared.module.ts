import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    AuthContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    AuthContentComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
