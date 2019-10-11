import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { Province } from 'src/app/shared/commonSelect';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RequestApproval, iScheduleList, iScheduleListAction, Form } from 'src/app/_models/form.model';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { dpConfig } from 'src/app/shared/common.config';


const ScheduleList: iScheduleList[] = [
  // { sid: null, empID: 1, empName: 'รศ.ดร.อรุณศรี  สุขเกษม', orgName: 'สถาปันเพิ่มผลผลิต', provinceID: 10, provinceName: 'กรุงเทพมหานคร', startDate: '01/20/2560', endDate: '01/20/2560', numDate: 1 , request_id: 1},

  // { sid: null, empID: 1, empName: 'ผศ.ดร.กนกกาญจน์  เหมโยธิน', orgName: 'สถาปันเพิ่มผลผลิต', provinceID: 20, provinceName: 'กรุงเทพมหานคร', startDate: '05/20/2560', endDate: '05/20/2560', numDate: 1, request_id: 1 },
  // { sid: null, empID: 1, empName: 'รศ.ดร.ประพาส  เทพรักษา', orgName: 'สถาปันเพิ่มผลผลิต', provinceID: 30, provinceName: 'กรุงเทพมหานคร', startDate: '09/20/2560', endDate: '10/20/2560', numDate: 2 , request_id: 1}

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
  @Input() requestID: string;
  //@ViewChild('template') templateRef: TemplateRef<any>;  
  Province = Province;
  requestDate: any;
  openForm: string = 'LECTURE';
  date: Date;
  dateConfig: Partial<BsDatepickerConfig> = dpConfig;    // Config date format

  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-lg'
  };

  // Data Entity 
  r: RequestApproval;
  //h: Headers;

  // for ag-Grid component
  columnDefs = [
    { headerName: 'ผู้ไปเป็นวิทยากร', field: 'empName', suppressSizeToFit: true },
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
  form: Form;

  constructor(
    private apiService: ApiService,
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
    this.scheduleItem.scheduleItem = $event['data'];
    this.scheduleItem.action = 'EDIT';
    this.openModal(this.templateRef);
    console.log('OUTPUT ', this.scheduleItem.scheduleItem);
  }


  ngOnInit() {
    this.r = new RequestApproval();
    //this.dateConfig = dpConfig;    // Config date format
    //this.h = new Headers();
    //this.rowData = ScheduleList;
    this.form = new Form();
    //this.h.request_type = 1;
    this.r.request_type = 1;

    if (this.requestID) {
      console.log('Request ID : ', this.requestID);

      this.apiService.getRequestByID(Number.parseInt(this.requestID)).subscribe(
        (res) => {
          console.log("res Description: ",res);
          this.setDescriptionInForm(res);
        }
      );

      this.apiService.getScheduleByID(Number.parseInt(this.requestID)).subscribe(
        (res) => {
          console.log("res Schedule: ",res);
          this.setScheduleListInForm(res);
        }
      );

      
    }

  }

  setDescriptionInForm(data: any) {
    this.r = data;
    this.date = new Date(this.r.date);
    console.log(this.date.toString());
  }

  setScheduleListInForm(data: any) {
    // for (let scheduleItem of data) {
    //   this.rowData.push(scheduleItem);
    // }
    this.rowData = data;
    console.log("SetScheduleList: ",this.rowData);
  }

  saveData() {

    //console.log('Save data : ', this.r);
    this.toastr.success('<h1 class="text-danger"> Save data </h1><br/><hr>' + this.r.org_name, ' Save data', {
      enableHtml: true,
      titleClass: 'text-light',
      progressBar: true
    });

    //this.form.headers = this.h;
    this.form.description = this.r;
    this.form.schedule = this.rowData;

    console.log('Save data : ', this.form);

    this.apiService.createForm(this.form).subscribe(
      (res) => {
        console.log(res);
      }
    );

    // for (let index of ScheduleList) {
    //   console.log(index);
    //   this.apiService.createSchedule(index).subscribe(
    //     (res) => {
    //       console.log(res);
    //     }
    //   );
    // };

  }

  onSendBack(item: iScheduleListAction) {
    if (item.action == 'EDIT') {
      let res = this.gridApi.updateRowData({ update: [item.scheduleItem] });
      this.toastr.success('ปรับปรุงข้อมูลเรียบร้อย !');
    } else if (item.action == 'ADD') {
      let res = this.gridApi.updateRowData({ add: [item.scheduleItem] });
      this.toastr.success('เพิ่มข้อมูลเรียบร้อย !');
    }

    this.rowData.push(item.scheduleItem);
    //console.log(item.scheduleItem);
    console.log(this.rowData);

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