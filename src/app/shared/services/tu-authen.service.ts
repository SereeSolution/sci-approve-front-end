import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { loginParam } from 'src/app/_models/authen.model';
import { from } from 'rxjs';

const API_Key = 'MGRiOTVmNDUwZGQ4ODFhYTRkZTA3YWNhNzVhN2Y2NTA5ODU0NjJiYzFmZDRmZWVlNGYyYTQzMmIxMGVjZGM2ZA==';

@Injectable({
  providedIn: 'root'
})
export class TuAuthenService {

  apiURL = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify';    // 'http://localhost/tu-authen/authen-api';
  headers: HttpHeaders;
  options: any;

  constructor(
    private http: HttpClient
  ) { }

  login(data: loginParam) {

    /*
    this.headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Application-Key', API_Key);

    this.options = { headers: this.headers };
    console.log('\nURL => ', this.apiURL);
    console.log('\nDATA => ', data);
    console.log('\nOptions => ', this.options);
*/
    /*
        return from( // wrap the fetch in a from if you need an rxjs Observable
          fetch(
            this.apiURL,
            {
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json',
                'Application-Key': API_Key,
                //'Application-Key': 'MGRiOTVmNDUwZGQ4ODFhYTRkZTA3YWNhNzVhN2Y2NTA5ODU0NjJiYzFmZDRmZWVlNGYyYTQzMmIxMGVjZGM2ZA=='
              },
              method: 'POST',
              mode: 'no-cors'
            }
          )
        );
    */
    let httpHeaders = new HttpHeaders()
      .set('authorization', API_Key)
      .set('Content-Type', 'application/json');

    console.log('DEBUG on service', data);
    

    return this.http.post(this.apiURL, data, {
      headers: new HttpHeaders({
        "Application-Key": API_Key,
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*' 
        //"Sec-Fetch-Mode" : "no-cors"
      })
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

  }

}
