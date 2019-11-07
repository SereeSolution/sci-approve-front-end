import { Injectable } from '@angular/core';
import { APIUrl } from './apiURL';
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Request } from 'src/app/_models/request.model';
import { RequestApproval, iScheduleList, Form, RequestApprovalView } from 'src/app/_models/form.model';
import { loginParam } from 'src/app/_models/authen.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  request: RequestApproval[];

  constructor(
    private http: HttpClient
  ) { }

  public getRequests(): Observable<RequestApprovalView[]> {
    console.log('API URL : ', APIUrl.RequestReadAll);
    //return this.http.get<RequestApproval[]>( APIUrl.RequestReadAll );
    return this.http.get(APIUrl.RequestReadAll).pipe(
      map((res) => {
        //this.request = 
        return res['records'];
      })
    )
  }

  public getScheduleByID(id: number): Observable<iScheduleList[]> {
    const url = `${APIUrl.ScheduleReadByID}?rid=${id}`;
    console.log('API URL : ', url);
    return this.http.get(url).pipe(
      map((res) => {
        return res['records'];
      })
    )
  }

  public getRequestByID(id: number) {
    const url = `${APIUrl.RequestReadByID}?rid=${id}`;
    console.log('API URL : ', url);
    return this.http.get(url).pipe(
      map((res) => {
        return res;
      })
    )
  }

  public getRequestViewByID(id: number) {
    const url = `${APIUrl.RequestReadViewByID}?rid=${id}`;
    console.log('API URL : ', url);
    return this.http.get(url).pipe(
      map((res) => {
        return res['records'];
      })
    )
  }

  public createRequest(obj: RequestApproval) {
    console.log('API URL : ', APIUrl.RequestCreate);
    return this.http.post(APIUrl.RequestCreate, obj);
  }

  public createSchedule(obj: iScheduleList) {
    console.log('API URL : ', APIUrl.ScheduleCreate);
    return this.http.post(APIUrl.ScheduleCreate, obj);
  }

  public createForm(obj: Form) {
    console.log('API URL : ', APIUrl.FormCreate);
    return this.http.post(APIUrl.FormCreate, obj);
  }

  public updateRequest(obj: Request) { }

  public deleteRequest(id: number) { }

  public login(obj: loginParam) {
    console.log('API URL : ', APIUrl.login);
    console.log('API ------------------: ', this.http.post(APIUrl.login, obj));
    return this.http.post(APIUrl.login, obj).pipe(
      map(
        (res) => { return res; }
      )
    );
  }
}
