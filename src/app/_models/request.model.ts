/**
 *   คำร้องขอไปราชการ
 */

export class Request {
    request_code : number;
    request_date : Date;
    dep_code : number;
    request_topic : string;
    request_to : number;        // เชื่อมโยงไปยัง manager
    paragraph1 : string;
    paragraph2 : string;
    paragraph3 : string;
    item_status : string;
    request_emp_code : number;        // เชื่อมโยงไปยัง Employee
}


export class RequestDesplay {
    request_code : number;
    request_date : Date;
    dep_name : string;
    request_topic : string;
    request_to : string;        // เชื่อมโยงไปยัง manager
    paragraph1 : string;
    paragraph2 : string;
    paragraph3 : string;
    item_status : string;
    request_emp : string;        // เชื่อมโยงไปยัง Employee
}
