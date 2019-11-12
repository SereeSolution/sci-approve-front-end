import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/shared/services/userProfile.service';
import { Profile } from 'src/app/_models/profile.model';


@Component({
  selector: 'approval-request-form',
  templateUrl: './approval-request-form.component.html',
  styleUrls: ['./approval-request-form.component.css']
})
export class ApprovalRequestFormComponent implements OnInit {
  openForm: string = '';
  private sub: any;
  userProfile: Profile;

  constructor(
    private route: ActivatedRoute,
    private userProfileService: UserProfileService
  ) {    
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.openForm = params['form'];
      this.userProfile = new Profile();
      this.userProfile = this.userProfileService.getUserProfile();
      this.userProfile.role = 'STAFF'
      this.userProfileService.setUserProfile(this.userProfile);
   });
  }

  ngOnDestroy() {
    this.openForm = '';
  }

}
