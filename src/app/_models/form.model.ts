export class Form {
  description: RequestApproval;
  schedule:iScheduleList[];
}

// export class Headers{
//   request_type: number;
//   governmentA: string;
//   bookNum: string;
//   date: string;
//   to: string;
// }

export class RequestApproval {              //-----รายละเอียดการไปเป็นวิทยากร
  //Headers ---
  request_type: number;
  governmentA: string;
  bookNum: string;
  date: string;
  sendTo: string;

  //description ----
  request_id: number  ;              // หมายเลขคำร้องในระบบ
  org_name: string ;                 // หน่วยงานผู้เชิญ
  address: string  ;                 // ที่อยู่
  province: string  ;                // จังหวัด
  tel: string  ;                     // เบอร์โทร
  topic: string;                     // หัวข้อบรรยาย, ชื่อผลงาน
  audience: string;                  // กลุ่มผู้เข้าฟัง -- Lecture
  coordinator: string ;              // ผู้ประสานงาน -- StudyTrip
  coordinatorTel: string;            // เบอร์โทรผู้ประสานงาน -- StudyTrip
  caretaker: string;                 // ผู้ดูแลนักศึกษา -- Supervision
  studentList: string  ;             // รายชื่อนักศึกษา -- Supervision
  studentYear: string  ;             // ชั้นปี -- Supervision
  studentDepartment: string  ;       // สาขาวิชา -- Supervision
  description: string    ;           // รายละเอียดเพิ่มเติม -- Supervision
  remark: string;                    //หมายเหตุ
  status_name: string;               //ชื่อสถานะ 

  //approve ----
  approvers_id: string;            //id ของผู้อนุมัติ
  approval_results: string;        //ผลการอนุมัติ
}


export class RequestApprovalView {              //-----รายละเอียดการไปเป็นวิทยากร
  //Headers ---
  request_type: number;
  governmentA: string;
  bookNum: string;
  date: string;
  sendTo: string;

  //description ----
  request_id: number  ;                // หมายเลขคำร้องในระบบ
  org_name: string ;                  // หน่วยงานผู้เชิญ
  address: string  ;                 // ที่อยู่
  province: string  ;                // จังหวัด
  tel: string  ;                     // เบอร์โทร
  topic: string;                     // หัวข้อบรรยาย, ชื่อผลงาน
  audience: string;                  // กลุ่มผู้เข้าฟัง -- Lecture
  coordinator: string ;              // ผู้ประสานงาน -- StudyTrip
  coordinatorTel: string;           // เบอร์โทรผู้ประสานงาน -- StudyTrip
  caretaker: string;                 // ผู้ดูแลนักศึกษา -- Supervision
  studentList: string  ;             // รายชื่อนักศึกษา -- Supervision
  studentYear: string  ;             // ชั้นปี -- Supervision
  studentDepartment: string  ;       // สาขาวิชา -- Supervision
  description: string    ;           // รายละเอียดเพิ่มเติม -- Supervision
  remark: string;                  //หมายเหตุ
  type_name: string;
  status_name: string;               //ชื่อสถานะ 
  
  //approve ----
  approvers_id: string;            //id ของผู้อนุมัติ
  approval_results: string;        //ผลการอนุมัติ
}


export class iScheduleList {
  sid: number;   /* รหัสกำหนดการณ์ */
  empID: number;     /* รหัสบุคลากร */
  empName: string;   /* ชื่อ สกุล */
  orgName: string;   /* ชื่อสถานที่ / หน่วยงาน */
  provinceID: number;  /* รหัสจังหวัด */
  provinceName: string;    /* ชื่อจังหวัด */
  startDate: string;     /* วันที่เริ่มต้น */
  endDate: string;       /* ถึงวันที่ */
  numDate: number;       /* จำนวนวัน */
  request_id : number   /* หมายเลขคำร้องในระบบ */
}


export class iScheduleListAction {
  scheduleItem : iScheduleList;
  action : string;

  constructor() {
    this.scheduleItem = new iScheduleList();
    this.scheduleItem.sid = null;
    this.scheduleItem.empID = null;
    this.scheduleItem.empName = '';
    this.scheduleItem.orgName = '';
    this.scheduleItem.provinceID = null;
    this.scheduleItem.provinceName = '';
    this.scheduleItem.startDate = null;
    this.scheduleItem.endDate = null;
    this.scheduleItem.numDate = null;
  }
}

// export class Schedule {             //-----กำหนดการณ์
//   empID: number;
//   empName: string;                  // ชื่อผู้ไปราชการ
//   place: string;                    // สถานที่
//   startDate: string;                // เริ่มวันที่
//   stopDate: string;                 // ถึงวันที่
//   numDate: number;                  // จำนวนวัน  
// }

/*
export class Presentation {      //-----รายละเอียดการไปนิเทศนักศึกษา
  orgName: string     // ชื่อสถานที่เสนอผลงาน
  address: string        // ที่อยู่
  province: string       // จังหวัด
  tel: string            // เบอร์โทร
  topic: string       // ชื่อผลงาน
  remark: string;
  schedules : Schedule[];     // รายการเหตุการณ์
}

export class StudyTrip {              //-----รายละเอียดการไปนิเทศนักศึกษา
  orgName: string        // หน่วยงานผู้เชิญ
  address: string           // ที่อยู่
  province: string          // จังหวัด
  tel: string               // เบอร์โทร
  coordinator: string       // ผู้ประสานงาน
  coordinator_tel: string   // เบอร์โทรผู้ประสานงาน
  remark: string;
  schedules : Schedule[];     // รายการเหตุการณ์
}

export class Supervision {            //-----รายละเอียดการไปนิเทศนักศึกษา
  orgName: string      // ชื่อสถานที่นิเทศ
  address: string         // ที่อยู่
  province: string        // จังหวัด
  tel: string             // เบอร์โทร
  caretaker: string       // ผู้ดูแลนักศึกษา
  studentList: string     // รายชื่อนักศึกษา
  studentYear: string            // ชั้นปี
  studentDepartment: string          // สาขาวิชา
  description: string     // รายละเอียดเพิ่มเติม
  remark: string;
  schedules : Schedule[];     // รายการเหตุการณ์
}
*/