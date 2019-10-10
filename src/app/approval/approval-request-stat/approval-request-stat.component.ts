import { Component, OnInit } from '@angular/core';
import { displayRequestList } from 'src/app/_models/display.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { Request } from 'src/app/_models/request.model';
import { RequestApproval } from 'src/app/_models/form.model';

const DATA: displayRequestList[] = [
  // { request_code: 1, request_date: '2019-07-20', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาคณิตศาสตร์', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-21'), file: '<i class="fa fa-file-pdf-o" aria-hidden="true"></i>'},
  // { request_code: 2, request_date: '2019-07-22', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีการเกษตร', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-23'), file: 'file...' },
  // { request_code: 3, request_date: '2019-07-22', request_topic: 'ขออนุมัตไปเป็นวิทยากร', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเคมี', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-23'), file: 'file...' },
  // { request_code: 4, request_date: '2019-07-24', request_topic: 'ขออนุมัตไปศึกษาดูงาน', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีชีวภาพ', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-25'), file: 'file...' },
  // { request_code: 5, request_date: '2019-07-25', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาคณิตศาสตร์', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-26'), file: 'file...' },
  // { request_code: 6, request_date: '2019-07-26', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาวิทยาการคอมพิวเตอร์', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-27'), file: 'file...' },
  // { request_code: 7, request_date: '2019-07-26', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาฟิสิกส์', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-27'), file: 'file...' },
  // { request_code: 8, request_date: '2019-07-29', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเทคโนโลยีการอาหาร', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-30'), file: 'file...' },
  // { request_code: 9, request_date: '2019-07-29', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาสิ่งทอ', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-30'), file: 'file...' },
  // { request_code: 10, request_date: '2019-07-30', request_topic: 'ขออนุมัตไปราชการ', request_to: 'คณบดี', request_emp: 'อ.ทดสอบ', dep_name: 'สาขาวิชาเคมี', status: 'คณบดีอนุมัติ', approve_date: new Date('2019-07-31'), file: 'file...' }
];

@Component({
  selector: 'app-approval-request-stat',
  templateUrl: './approval-request-stat.component.html',
  styleUrls: ['./approval-request-stat.component.css']
})
export class ApprovalRequestStatComponent implements OnInit {

  columnDefs = [
    { headerName: 'วันที่', field: 'request_date'},
    { headerName: 'หัวเรื่อง', field: 'request_topic' },
    { headerName: 'สาขาวิชา/หน่วยงาน', field: 'dep_name' },
    { headerName: 'ผู้ขออนุมัติ', field: 'request_emp' },
    { headerName: 'สถานะ', field: 'status' },
    { headerName: 'วันที่อนุมัติ', field: 'approve_date' },
    { headerName: 'เอกสารแนบ', field: 'file' }
  ];

  private gridApi;
  private gridColumnApi;
  private defaultColDef;

  rowData: displayRequestList[] = [];
  requestData: RequestApproval[] = [];

  constructor(
    private ApiService: ApiService
  ) { }

  ngOnInit() {
    this.initMockData();
    this.initData();
    //this.defaultColDef = { resizable: true, sortable : true, suppressFilter: true};
  }

  initMockData() {
    this.rowData = DATA;
  }

  initData() {
    this.ApiService.getRequests()
      .subscribe(
        (res) => {
          this.requestData = res;
          console.log(res);
        }
      );
    console.log(this.requestData);
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
    // this.initMockData();
    // this.initData();

  }

  onRowClicked(event: any) {
    console.log('event - on row click \n =>', event);
    alert('event - on row click \n => ID : ' + event['data'].request_code + ' Topic : ' + event['data'].request_topic);
  }
}
