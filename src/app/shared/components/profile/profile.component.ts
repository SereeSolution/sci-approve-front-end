import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/_models/profile.model';
import { UserProfileService } from '../../services/userProfile.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {  
  topic : string;
  p : Profile;

  name: string;
  position: string;
  department: string;
  constructor(
    private userProfileService: UserProfileService
  ) {
    
   }

  ngOnInit() {
    this.initProfile();
  }

  initProfile() {
    this.topic = 'ยินดีต้อนรับ';
    this.p = new Profile();
    this.p = this.userProfileService.getUserProfile();
    console.log( 'initProfile > ', this.p);
  }

}
