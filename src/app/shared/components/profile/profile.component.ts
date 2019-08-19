import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/_models/profile.model';


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
  constructor() {
    
   }

  ngOnInit() {
    this.initProfile();
  }

  initProfile() {
    this.topic = 'หัวข้อเรื่อง....!';
    this.p = new Profile();
    this.p.name = 'นายอุ๊ฟ';
    this.p.position = 'นักวิชาการคอมพิวเตอร์';
    this.p.department = 'สำนักงานเลขานุการคณะ';
  }

}
