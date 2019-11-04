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
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AllRequestFormComponent } from './components/all-request-form/all-request-form.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { CryptoService } from './services/crypto.service';
import { UserProfileService } from './services/userProfile.service';

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
    AllRequestFormComponent,
    ScheduleFormComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDatepickerModule.forRoot(),    
    FormsModule,
    AgGridModule.withComponents([])
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
    FormSupervisionComponent
  ],
  providers: [
    ApiService,
    TuAuthenService,
    UserProfileService,
    CryptoService
  ],
  entryComponents:[
    ScheduleFormComponent
  ]
})
export class SharedModule { }
