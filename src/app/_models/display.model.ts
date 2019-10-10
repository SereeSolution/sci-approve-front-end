export class displayDepartment {
    dep_code: number;
    dept_name: string;
    dept_tel: string;
}

export class displayRequestList {
    // request_code : number;
    // request_date : string;
    // request_topic : string;     // หัวเรื่อง
    // request_to : string;        // ส่งถึง
    // request_emp : string;        // ผู้ขอ
    // dep_name: string;           //สาขาวิชา
    // status: string;
    // approve_date : Date;       //วันที่อนุมัติ
    // file : any;             //เอกสารที่ใช้แนบ

    //Headers ---
    request_type: number;
    governmentA: string;
    bookNum: string;
    date: string;
    sendTo: string;

    //description ----
    request_id: number;                
    org_name: string;                  
    address: string;                 
    province: string;                
    tel: string;                     
    topic: string;                     
    audience: string;                  
    coordinator: string;              
    coordinatorTel: string;           
    caretaker: string;                 
    studentList: string;             
    studentYear: string;             
    studentDepartment: string;       // สาขาวิชา -- Supervision
    description: string;           // รายละเอียดเพิ่มเติม -- Supervision
    remark: string;                  //หมายเหตุ
}

export class displayDashboardList {
    request_type: string;   // ประเภทขอการขออนุมัติ
    department: string;     // สาขาหน่วยงาน
    amount_time: number;    // จำนวนครั้งทั้งหมดที่ขอ
    amount_day: number;     // จำนวนวันทั้งหมดที่ขอ
}

export class displayPendingList {

}
