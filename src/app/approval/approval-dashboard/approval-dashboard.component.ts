import { Component, OnInit } from '@angular/core';
import { displayDashboardList } from 'src/app/_models/display.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { Request } from 'src/app/_models/request.model';
import { RequestApproval } from 'src/app/_models/form.model';
import { Profile } from 'src/app/_models/profile.model';
import { UserProfileService } from 'src/app/shared/services/userProfile.service';

const DATA: displayDashboardList[] = [
  { request_type: 'ไปนิเทศนักศึกษา', department: 'สาขา A', amount_time: 10, amount_day: 10 },
  { request_type: 'ไปอบรม', department: 'สาขา A', amount_time: 0, amount_day: 0 },
  { request_type: 'ไปเป็นวิทยากร', department: 'สาขา A', amount_time: 1, amount_day: 3 }
];

@Component({
  selector: 'app-approval-dashboard',
  templateUrl: './approval-dashboard.component.html',
  styleUrls: ['./approval-dashboard.component.css']
})
export class ApprovalDashboardComponent implements OnInit {
  columnDefs = [
    { headerName: 'ประเภทการขออนุมัติ', field: 'request_type' },
    { headerName: 'สาขาหน่วยงาน', field: 'department' },
    { headerName: 'จำนวนครั้ง', field: 'amount_time' },
    { headerName: 'จำนวนวัน', field: 'amount_day' }
  ];

  private gridApi;
  private gridColumnApi;
  private defaultColDef;


  rowData: displayDashboardList[] = [];
  requestData: RequestApproval[] = [];

  userProfile: Profile;

  constructor(
    private ApiService: ApiService,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
    this.defaultColDef = { resizable: true, sortable: true };
    this.userProfile = new Profile();
    this.userProfile = this.userProfileService.getUserProfile();
    this.userProfile.role = 'APPROVER'
    this.userProfileService.setUserProfile(this.userProfile);
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
    this.initMockData();
    this.initData();

  }

  onRowClicked(event: any) {
    console.log('event - on row click \n =>', event);
    alert('event - on row click \n => ID : ' + event['data'].request_code + ' Topic : ' + event['data'].request_topic);
  }
}
