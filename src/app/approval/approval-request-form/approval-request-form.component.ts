import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'approval-request-form',
  templateUrl: './approval-request-form.component.html',
  styleUrls: ['./approval-request-form.component.css']
})
export class ApprovalRequestFormComponent implements OnInit {
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
