import { Injectable } from '@angular/core';
@Injectable()
export class MyService {
  serviceproperty = "Service Created";
  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
