import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Province } from 'src/app/shared/commonSelect';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { iScheduleListAction } from 'src/app/_models/form.model';


@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  @Input('scheduleItem') item: iScheduleListAction;
  @Input() modalRef: BsModalRef;
  @Input() openForm: string;
  @Input() editable_flag: boolean;
  @Output() sendBack = new EventEmitter<iScheduleListAction>();

  Province = Province;
  event: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private bsModalRef: BsModalRef
   
  ) { }

  ngOnInit() {
    this.bsModalRef = this.modalRef;
    console.log('INPUT->>>>>>>>>>>>>> ', this.bsModalRef);
    console.log('INPUT ', this.openForm , this.item);
    console.log('INPUT', this.editable_flag);
  }

  onClose() {
    console.log('Close Click');
    this.bsModalRef.hide();
  }

  saveScheduleForm() {
    this.item.scheduleItem.empID = 1;
    this.sendBackItem();
    console.log('Save Click');
    this.event.emit('OK');
    this.bsModalRef.hide();
    
  }

  sendBackItem() {
    this.sendBack.emit(this.item);
  }
}
