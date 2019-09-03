import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/shared/commonSelect';

@Component({
  selector: 'form-supervision',
  templateUrl: './form-supervision.component.html',
  styleUrls: ['./form-supervision.component.css']
})
export class FormSupervisionComponent implements OnInit {
  Province = Province;
  
  constructor() { }

  ngOnInit() {
  }

}
