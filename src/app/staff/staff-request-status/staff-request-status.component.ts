import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { displayRequestList } from 'src/app/_models/display.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Request } from 'src/app/_models/request.model';
import { RequestApproval } from 'src/app/_models/form.model';
import { FormLectureComponent } from 'src/app/shared/components/form-lecture/form-lecture.component';


//import "ag-grid-enterprise";

var DATA: RequestApproval[] = [
  // { request_code: 1, request_date: '2019-07-20', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาคณิตศาสตร์', status: 'คณบดีอนุมัติ', approve_date:null, file: null},
  // { request_code: 2, request_date: '2019-07-22', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีการเกษตร', status: 'คณบดีอนุมัติ', approve_date:null, file: null },
  // { request_code: 3, request_date: '2019-07-22', request_topic: 'ขออนุมัตไปเป็นวิทยากร', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเคมี', status: 'เลขานุการคณะพิจารณาอนุมัติ', approve_date:null, file: null },
  // { request_code: 4, request_date: '2019-07-24', request_topic: 'ขออนุมัตไปศึกษาดูงาน', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีชีวภาพ', status: 'เลขานุการคณะพิจารณาอนุมัติ', approve_date:null, file: null },
  // { request_code: 5, request_date: '2019-07-25', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาคณิตศาสตร์', status: 'หัวหน้าสาขาพิจารณาอนุมัติ', approve_date:null, file: null },
  // { request_code: 6, request_date: '2019-07-26', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาวิทยาการคอมพิวเตอร์', status: 'หัวหน้าสาขาพิจารณาอนุมัติ', approve_date:null, file: null },
  // { request_code: 7, request_date: '2019-07-26', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาฟิสิกส์', status: 'หัวหน้าสาขาพิจารณาอนุมัติ', approve_date:null, file: null },
  // { request_code: 8, request_date: '2019-07-29', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีการอาหาร', status: 'บันทึกข้อมูล', approve_date:null, file: null },
  // { request_code: 9, request_date: '2019-07-29', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาสิ่งทอ', status: 'บันทึกข้อมูล', approve_date:null, file: null },
  // { request_code: 10, request_date: '2019-07-30', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเคมี', status: 'บันทึกข้อมูล', approve_date:null, file: null }
];
var rr: RequestApproval[] = [];

// var requestData: RequestApproval[] = [];

@Component({
  selector: 'app-staff-request-status',
  templateUrl: './staff-request-status.component.html',
  styleUrls: ['./staff-request-status.component.css']
})
export class StaffRequestStatusComponent implements OnInit {
  @ViewChild('template', { static: false }) public templateRef: TemplateRef<any>;

  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-lg'
  };

  columnDefs = [
    { headerName: 'วันที่', field: 'date', suppressSizeToFit: true },
    { headerName: 'หัวเรื่อง', field: 'type_name' },
    { headerName: 'สาขาวิชา/หน่วยงาน', field: 'governmentA' },
    { headerName: 'ผู้ขออนุมัติ', field: '' },
    { headerName: 'เอกสารแนบ', field: 'file' },
    { headerName: 'วันที่อนุมัติ', field: 'approve_date' },
    { headerName: 'สถานะ', field: 'status' },
  ];

  openForm: string = '';
  requestID: string;

  gridApi;
  private gridColumnApi;
  private defaultColDef;


  rowData: RequestApproval[];
  requestData: RequestApproval[] = [];

  constructor(
    private ApiService: ApiService,
    private modalService: BsModalService
  ) {

    const requestObservable = this.ApiService.getRequests();
    requestObservable.subscribe(res => {
      this.requestData = res;
      this.getRequestData(res);
    });
  }

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

  ngOnInit() {
    this.defaultColDef = { resizable: true, sortable: true };
    // //this.getRequestData();
    // console.log('init > ',this.requestData);
  }

  getRequestData(data: RequestApproval[]) {
    console.log('getRequestData1 > ', data);
    this.requestData = data;
    console.log('getRequestData2 > ', this.requestData);

    /*
        this.ApiService.getRequests()
          .subscribe(
            (res: RequestApproval[]) => {
              console.log('Subscribe > ', res);
              this.requestData = res;
              // DATA = this.requestData
              console.log(this.requestData);
            },
            (err) => {
              console.log('Error : ', err);
            }
          );
          */
  }
  
  initMockData() {
    //this.requestData.length
    console.log(DATA);
    //console.log(this.requestData);
  }

  initData() {
    // this.ApiService.getRequests()
    //   .subscribe(
    //     (res) => {
    //       this.dd = res;
    //       console.log(this.dd);
    //     }
    //   );
  }

  // sizeToFit() {
  //   this.gridApi.sizeColumnsToFit();
  // }

  // autoSizeAll() {
  //   var allColumnIds = [];
  //   this.gridColumnApi.getAllColumns().forEach(function (column) {
  //     allColumnIds.push(column.colId);
  //   });
  //   this.gridColumnApi.autoSizeColumns(allColumnIds);
  // }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // this.defaultColDef = { resizable: true, sortable : true };

    // get data to grid
    //this.initData();

    // this.initMockData();
  }

  onRowClicked(event: any) {
    console.log('event - on row click \n =>', event);
    //alert('event - on row click \n => ID : ' + event['data'].request_id + ' Topic : ' + event['data'].type_name);

    if (event['data'].type_name == "ขออนุมัติไปเป็นวิทยากร") {
      console.log(event['data'].type_name);
      this.openForm = 'LECTURE';
      //this.openForm = 'SUPERVISION';
      // this.openForm = 'PRESENT';
      //this.openForm = 'TRIP';
      this.requestID = event['data'].request_id;
      this.openModal(this.templateRef);
      console.log("ก่อน------------------->", this.modalRef);

    } else if (event['data'].type_name == "ขออนุมัติไปนิเทศนักศึกษา") {
      console.log(event['data'].type_name);
      this.openForm = 'SUPERVISION';
      this.requestID = event['data'].request_id;
      this.openModal(this.templateRef);

    } else if (event['data'].type_name == "ขออนุมัติไปนำเสนอผลงาน") {
      console.log(event['data'].type_name);
      this.openForm = 'PRESENT';
      this.requestID = event['data'].request_id;
      this.openModal(this.templateRef);

    } else if (event['data'].type_name == "ขออนุมัติไปศึกษาดูงาน") {
      console.log(event['data'].type_name);
      this.openForm = 'TRIP';
      this.requestID = event['data'].request_id;
      this.openModal(this.templateRef);
    }
  }
}




