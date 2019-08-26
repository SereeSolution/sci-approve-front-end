import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { ApiService } from './services/api.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    NavBarComponent,
    AuthContentComponent,
    SidebarComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    AuthContentComponent,
    ProfileComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
