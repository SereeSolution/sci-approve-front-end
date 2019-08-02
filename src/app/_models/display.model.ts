export class displayDepartment {
    dep_code : number;
    dept_name : string;
    dept_tel : string;
}

export class displayRequestList {
    request_code : number;
    request_date : string;
    request_topic : string;     // หัวเรื่อง
    request_to : string;        // ส่งถึง
    request_emp : string;        // ผู้ขอ
    dep_name: string;           //สาขาวิชา
    status: string;
}