import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  approveForm = this.fb.group({
    request_code: [''],
    request_date: [''],
    dep_code: [''],
    request_topic: [''],
    request_to: [''],
    paragraph1: [''],
    paragraph2: [''],
    paragraph3: [''],
    item_status: [''],
    request_emp_code: ['']
  });
  /**
   * request_code : number;
      request_date : Date;
      dep_code : number;
      request_topic : string;
      request_to : number;        // เชื่อมโยงไปยัง manager
      paragraph1 : string;
      paragraph2 : string;
      paragraph3 : string;
      item_status : string;
      request_emp_code : number;        // เชื่อมโยงไปยัง Employee
   */
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.approveForm.value);
  }

}
