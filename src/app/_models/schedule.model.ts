
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
      this.scheduleItem.startDate = '';
      this.scheduleItem.endDate = '';
      this.scheduleItem.numDate = null;
    }
  }