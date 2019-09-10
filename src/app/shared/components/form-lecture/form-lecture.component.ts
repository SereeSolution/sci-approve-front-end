import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Province } from 'src/app/shared/commonSelect';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RequestApproval } from 'src/app/_models/form.module';
import { ToastrService } from 'ngx-toastr';
import { iScheduleList, iScheduleListAction } from 'src/app/_models/schedule.model';



const ScheduleList: iScheduleList[] = [
  { sid: 1, empID: 1, empName: 'รศ.ดร.อรุณศรี  สุขเกษม', orgName: 'สถาปันเพิ่มผลผลิต', provinceID: 10, provinceName: 'กรุงเทพมหานคร', startDate: '01/20/2560', endDate: '01/20/2560', numDate: 1 },

  { sid: 2, empID: 1, empName: 'ผศ.ดร.กนกกาญจน์  เหมโยธิน', orgName: 'สถาปันเพิ่มผลผลิต', provinceID: 20, provinceName: 'กรุงเทพมหานคร', startDate: '05/20/2560', endDate: '05/20/2560', numDate: 1 },
  { sid: 3, empID: 1, empName: 'รศ.ดร.ประพาส  เทพรักษา', orgName: 'สถาปันเพิ่มผลผลิต', provinceID: 30, provinceName: 'กรุงเทพมหานคร', startDate: '09/20/2560', endDate: '10/20/2560', numDate: 2 }
];

const emp: Employee[] = [
  { id: 1, name: 'กมล' },
  { id: 2, name: 'เกษม' },
  { id: 3, name: 'สมจิต' },
  { id: 4, name: 'เจน' },
  { id: 5, name: 'จันทนา' },
  { id: 6, name: 'ชัยรัตน์' },
  { id: 7, name: 'จันทวรรณ' },
  { id: 8, name: 'เกษรา' },
  { id: 9, name: 'สมปอง' },
  { id: 10, name: 'สมหวัง' },
  { id: 11, name: 'ชัชวาล' },
];

@Component({
  selector: 'form-lecture',
  templateUrl: './form-lecture.component.html',
  styleUrls: ['./form-lecture.component.css']
})

export class FormLectureComponent implements OnInit {
  @ViewChild('template', { static: false }) templateRef: TemplateRef<any>;
  //@ViewChild('template') templateRef: TemplateRef<any>;  
  Province = Province;
  requestDate: any;

  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-lg'
  };

  // Data Entity 
  r: RequestApproval;

  // for ag-Grid component
  columnDefs = [
    { headerName: 'อาจารย์นิเทศ', field: 'empName', suppressSizeToFit: true },
    { headerName: 'สถานที่', field: 'orgName' },
    { headerName: 'จากวันที่', field: 'startDate' },
    { headerName: 'ถึงวันที่', field: 'endDate' },
    { headerName: 'จำนวน (วัน)', field: 'numDate' },
  ];
  public gridApi;
  public gridColumnApi;
  public defaultColDef;
  rowData: iScheduleList[] = [];
  scheduleItem: iScheduleListAction;

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService
  ) { }

  openModal(template: TemplateRef<any>) {
    //this.modalRef = this.modalService.show(template, this.modalConfig);    
    this.modalRef = this.modalService.show(template, this.modalConfig);
    //this.modalRef.content.scheduleItem = this.scheduleItem;
    //console.log('openModal : ',this.modalRef.content.scheduleItem);
    /*
    this.modalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        this.toastr.success('Receive data from Modal !');
      }
    });
    */
  }

  callAddNewRow() {
    this.scheduleItem = new iScheduleListAction();
    this.scheduleItem.action = 'ADD';  
   // this.scheduleItem.setDefaultData();  
    this.openModal(this.templateRef);    
  }

  onRowClicked($event) {
    //this.toastr.success(data);    
    this.scheduleItem = new iScheduleListAction();
    this.scheduleItem.scheduleItem  = $event['data'];
    this.scheduleItem.action = 'EDIT';
    this.openModal(this.templateRef);
    console.log('OUTPUT ', this.scheduleItem.scheduleItem);    
  }


  ngOnInit() {
    this.r = new RequestApproval();
    this.rowData = ScheduleList;
  }

  saveData() {
    console.log('Save data : ', this.r);
    this.toastr.success('<h1 class="text-danger"> Save data </h1><br/><hr><img src="data:image/jpeg;base64,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" />' + this.r.orgName, ' Save data', {
      enableHtml: true,
      titleClass: 'text-light',
      progressBar: true
    });
  }

  onSendBack(item: iScheduleListAction) {    
if (item.action=='EDIT') {
    let res = this.gridApi.updateRowData({ update: [item.scheduleItem] });
    this.toastr.success('ปรับปรุงข้อมูลเรียบร้อย !');
} else if (item.action == 'ADD') {
  let res = this.gridApi.updateRowData({ add: [item.scheduleItem] });
  this.toastr.success('เพิ่มข้อมูลเรียบร้อย !');
}

    /*for (let index of ScheduleList) {
      let itemSid = index.sid;
      console.log(index.empName);

      if (itemSid == item.sid) {
        
        let res = this.gridApi.updateRowData({ update: [item] });
        console.log(res);
      }
      else {
        console.log('Not Update');
      }
    };
*/
    //this.gridApi.updateRowData({ update:[item]});
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}




export class Employee {
  id: number;
  name: string;
}