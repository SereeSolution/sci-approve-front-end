import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'staff-nav',
  templateUrl: './staff-nav.component.html',
  styleUrls: ['./staff-nav.component.css']
})
export class StaffNavComponent implements OnInit {
  navbarOpen = false;
  
  constructor() { }

  ngOnInit() {
  }  

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
