import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { displayRequestList } from 'src/app/_models/display.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Request } from 'src/app/_models/request.model';
import { RequestApproval } from 'src/app/_models/form.model';
import { Profile } from 'src/app/_models/profile.model';
import { UserProfileService } from 'src/app/shared/services/userProfile.service';


const DATA: displayRequestList[] = [
  // { request_code: 1, request_date: '2019-07-20', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาคณิตศาสตร์', status: 'รอพิจารณา', approve_date:null, file: null},
  // { request_code: 2, request_date: '2019-07-22', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีการเกษตร', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 3, request_date: '2019-07-22', request_topic: 'ขออนุมัตไปเป็นวิทยากร', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเคมี', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 4, request_date: '2019-07-24', request_topic: 'ขออนุมัตไปศึกษาดูงาน', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีชีวภาพ', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 5, request_date: '2019-07-25', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาคณิตศาสตร์', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 6, request_date: '2019-07-26', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาวิทยาการคอมพิวเตอร์', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 7, request_date: '2019-07-26', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาฟิสิกส์', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 8, request_date: '2019-07-29', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีการอาหาร', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 9, request_date: '2019-07-29', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาสิ่งทอ', status: 'รอพิจารณา', approve_date:null, file: null },
  // { request_code: 10, request_date: '2019-07-30', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเคมี', status: 'รอพิจารณา', approve_date:null, file: null }
];

@Component({
  selector: 'app-approval-request-approve',
  templateUrl: './approval-request-approve.component.html',
  styleUrls: ['./approval-request-approve.component.css']
})
export class ApprovalRequestApproveComponent implements OnInit {
  @ViewChild('template', { static: false }) templateRef: TemplateRef<any>;

  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-lg'
  };

  columnDefs = [
    { headerName: 'วันที่ขออนุมัติ', field: 'date', suppressSizeToFit: true },
    { headerName: 'หัวเรื่อง', field: 'type_name' },
    { headerName: 'สาขาวิชา/หน่วยงาน', field: 'governmentA' },
    { headerName: 'ผู้ขออนุมัติ', field: '' },
    { headerName: 'สถานะ', field: '' },
    // { headerName: 'วันที่อนุมัติ', field: 'approve_date' },
    // { headerName: 'เอกสารแนบ', field: 'file' },
  ];

  openForm: string = '';
  requestID: string;

  private gridApi;
  private gridColumnApi;
  private defaultColDef;

  rowData: displayRequestList[] = [];
  requestData: RequestApproval[] = [];
  userProfile: Profile;

  constructor(
    private ApiService: ApiService,
    private modalService: BsModalService,
    private userProfileService: UserProfileService
  ) {
    this.userProfile = new Profile();
    this.userProfile = this.userProfileService.getUserProfile();
    const requestObservable = this.ApiService.getRequestViewByID(Number.parseInt(this.userProfile.department));
    requestObservable.subscribe(res => {
      this.requestData = res;
      this.getRequestData(res);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  ngOnInit() {
    this.defaultColDef = { resizable: true, sortable: true };
  }

  getRequestData(data: RequestApproval[]) {
    console.log('getRequestData1 > ', this.userProfile);
    this.requestData = data;
    console.log('getRequestData2 > ', this.requestData);
    
    // data.forEach(r => {
    //   if(this.userProfile.department == r.governmentA){
    //     dataR.push(r);
    // }
    // });
  }

  // initMockData() {
  //   this.rowData = DATA;
  // }

  // initData() {
  //   this.ApiService.getRequests()
  //     .subscribe(
  //       (res) => {
  //         this.requestData = res;
  //         console.log(res);
  //       }
  //     );
  //   console.log(this.requestData);
  // }

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
    // this.initMockData();
    // this.initData();

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
