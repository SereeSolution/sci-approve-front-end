import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { iScheduleList } from 'src/app/_models/display.model';
import { Province } from 'src/app/shared/commonSelect';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
 @Input() scheduleItem: iScheduleList;
 
 Province = Province;
 event: EventEmitter<any> = new EventEmitter();


  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    console.log('INPUT ', this.scheduleItem);    
  }

  onClose() {
    this.bsModalRef.hide();
  }

  saveScheduleForm() {
    this.event.emit('OK');
        this.bsModalRef.hide();
  }
}
