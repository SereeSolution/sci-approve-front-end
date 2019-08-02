/*
 *   เก็บรายละเอียดการให้ความเห็นของผู้บังคับบัญชา
 */
export class Comment {
    comment_code : number;
    request_code : number;
    comment_date : Date;
    result : string;        //Domin in Y = อนุมัติ and N = ไม่อนุมัติ
    comment_desc : string;
}