import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() modalRef: BsModalRef;
  @Output() sendBack  = new EventEmitter<iScheduleList>();

  Province = Province;
  event: EventEmitter<any> = new EventEmitter();


  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.bsModalRef = this.modalRef;
    console.log('INPUT ', this.scheduleItem);
  }

  onClose() {
    console.log('Close Click');
    this.bsModalRef.hide();
  }

  saveScheduleForm() {
    this.sendBackItem();
    console.log('Save Click');
    this.event.emit('OK');
    this.bsModalRef.hide();
  }

  sendBackItem() {
    this.sendBack.emit( this.scheduleItem );
  }
}
