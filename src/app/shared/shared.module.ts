import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { ApiService } from './services/api.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TuAuthenService } from './services/tu-authen.service';
import { FormLectureComponent } from './components/form-lecture/form-lecture.component';
import { FormPresentationComponent } from './components/form-presentation/form-presentation.component';
import { FormStudyTripComponent } from './components/form-study-trip/form-study-trip.component';
import { FormSupervisionComponent } from './components/form-supervision/form-supervision.component';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavBarComponent,
    AuthContentComponent,
    SidebarComponent,
    FooterComponent,
    ProfileComponent,
    FormLectureComponent,
    FormPresentationComponent,
    FormStudyTripComponent,
    FormSupervisionComponent,
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
    SidebarComponent,
    FormLectureComponent,
    FormPresentationComponent,
    FormStudyTripComponent,
    FormSupervisionComponent,
  ],
  providers: [
    ApiService,
    TuAuthenService    
  ]
})
export class SharedModule { }
