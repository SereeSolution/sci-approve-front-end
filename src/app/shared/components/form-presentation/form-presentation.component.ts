import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Province } from '../../commonSelect';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RequestApproval, iScheduleList, iScheduleListAction, Form,  } from 'src/app/_models/form.model';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';


const ScheduleList: iScheduleList[] = [
  // { sid: 1, empID: 1, empName: 'รศ.ดร.อรุณศรี  สุขเกษม', orgName: '', provinceID: null, provinceName: '', startDate: '01/20/2560', endDate: '01/20/2560', numDate: 1 },

  // { sid: 2, empID: 1, empName: 'ผศ.ดร.กนกกาญจน์  เหมโยธิน', orgName: '', provinceID: null, provinceName: '', startDate: '05/20/2560', endDate: '05/20/2560', numDate: 1 },
  // { sid: 3, empID: 1, empName: 'รศ.ดร.ประพาส  เทพรักษา', orgName: '', provinceID: null, provinceName: '', startDate: '09/20/2560', endDate: '10/20/2560', numDate: 2 }
];

@Component({
  selector: 'form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.css']
})
export class FormPresentationComponent implements OnInit {
  @ViewChild('template', { static: false }) templateRef: TemplateRef<any>;
  Province = Province;
  requestDate: any;
  openForm: string = 'PRESENT';

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
    { headerName: 'ผู้ไปเสนองาน', field: 'empName', suppressSizeToFit: true },
    { headerName: 'จากวันที่', field: 'startDate' },
    { headerName: 'ถึงวันที่', field: 'endDate' },
    { headerName: 'จำนวน (วัน)', field: 'numDate' },
  ];
  public gridApi;
  public gridColumnApi;
  public defaultColDef;
  rowData: iScheduleList[] = [];
  scheduleItem: iScheduleListAction;
  form : Form;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
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
    //this.h = new Headers();
    //this.rowData = ScheduleList;
    this.form = new Form();
    //this.h.request_type = 1;
    this.r.request_type = 3;
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
