import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/shared/commonSelect';

@Component({
  selector: 'form-lecture',
  templateUrl: './form-lecture.component.html',
  styleUrls: ['./form-lecture.component.css']
})
export class FormLectureComponent implements OnInit {
  Province = Province;

  requestDate: any;
  
  constructor() { }

  ngOnInit() {
  }

}
