import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'staff-request-form',
  templateUrl: './staff-request-form.component.html',
  styleUrls: ['./staff-request-form.component.css']
})
export class StaffRequestFormComponent implements OnInit {
  openForm: string = '';
  private sub: any;

  constructor(
    private route: ActivatedRoute
  ) {    
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.openForm = params['form'];
   });
  }

  ngOnDestroy() {
    this.openForm = '';
  }

}
