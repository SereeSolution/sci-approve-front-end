import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { loginParam } from 'src/app/_models/authen.model';

const API_Key= 'MGRiOTVmNDUwZGQ4ODFhYTRkZTA3YWNhNzVhN2Y2NTA5ODU0NjJiYzFmZDRmZWVlNGYyYTQzMmIxMGVjZGM2ZA==';

@Injectable({
  providedIn: 'root'
})
export class TuAuthenService {
  
  apiURL = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify';
  headers: HttpHeaders;
  options: any;

  constructor(
    private http: HttpClient
  ) { }

  login(data: loginParam) {
    this.headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Application-Key', API_Key);

    this.options = { headers: this.headers };
    console.log('\nURL => ', this.apiURL);
    console.log('\nDATA => ', data);
    console.log('\nOptions => ', this.options);

    return this.http.post(this.apiURL, data, this.options)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

}
