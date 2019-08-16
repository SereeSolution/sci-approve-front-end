import { Injectable } from '@angular/core';
import { APIUrl } from './apiURL';
import { HttpClient } from '@angular/common/http';
import { Request } from 'src/app/_models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }

  public getRequests() {
    console.log('API URL : ', APIUrl.RequestReadAll);
    return this.http.get<Request[]>( APIUrl.RequestReadAll );
  }

  public getRequestByID(id : number) {}
  
  public createRequest(obj: Request) {}

  public updateRequest(obj: Request) {  }

  public deleteRequest(id : number) {}
}
