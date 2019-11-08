import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { loginParam, loginResponse } from 'src/app/_models/authen.model';
import { TuAuthenService } from 'src/app/shared/services/tu-authen.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { UserProfileService } from 'src/app/shared/services/userProfile.service';
import { Profile } from 'src/app/_models/profile.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { ToastrService } from 'ngx-toastr';


const API_Key = 'MGRiOTVmNDUwZGQ4ODFhYTRkZTA3YWNhNzVhN2Y2NTA5ODU0NjJiYzFmZDRmZWVlNGYyYTQzMmIxMGVjZGM2ZA==';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apiURL = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify';
  //apiURL = 'http://localhost/tu-authen/authen-api';
  headers: HttpHeaders;
  options: any;
  result: any;

  // data: loginParam = {
  //   username: 's_chal84',
  //   password: '3100900017671'
  // }

  loginForm = this.fb.group({
    UserName: [''],
    PassWord: ['']
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private authen: TuAuthenService,
    private toastr: ToastrService,
    private commonService: CommonService,
    private userProfileService: UserProfileService,
    private apiServices: ApiService
  ) { }

  ngOnInit() {
  }

  OnSubmit() {
    console.log('Form submit : ', this.loginForm.value);
    let user: Profile = new Profile();
    this.commonService.getCommonData();
    let res: loginResponse;
    this.apiServices.login(this.loginForm.value).toPromise()
      .then(result => {
        console.log('From Promise:', result);
        console.log('   return status :', result['status']);
        if (result['status'] === true) {
          user.name = result['displayname_th'];
          user.department = result['department'];
          user.role = 'STAFF';
          this.userProfileService.setUserProfile(user);
          this.userProfileService.setUserProfile(user);
          switch (user.role) {
            case 'STAFF': this.router.navigate(['/staff']);
              break;
            case 'APPROVER': this.router.navigate(['/approval']);
              break;
            default:
              this.router.navigate(['/staff']);
          }
          this.toastr.success('Login ' + result['message'], 'Authentication');
        } else {
          this.loginForm.reset();
          console.log('Invalid username or password .');
          this.toastr.warning('Login ' + result['message'], 'Authentication');
        }

      })
      .catch(
        err => {
          console.log('Error : ', err);
        }
      )
  }

  // sendPostRequest() {
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     .set('Application-Key', 'NWM2MDE0OTY4YTZmOGRiZWU3NGQxNmU4ZmE1OTVkODBkMzRmNzQxMjc3MGMyY2QxNDBjZTEyYTg0NTYxYjllMg==')
  //     .set('Access-Control-Allow-Origin', 'true')
  //     .set('Access-Control-Allow-Credentials', 'true');


  //   const body = {
  //     username: 'Kunmar',
  //     password: '1103702197670',
  //   }

  //   return this.http
  //     .post(this.apiURL, body, { headers: headers })
  //     .subscribe(res => console.log("TEST LOGIN: ------> ", res));
  // }

  // auth(login): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.apiURL,
  //       { "UserName": login.UserName, "PassWord": login.PassWord },
  //       {
  //         headers: new HttpHeaders({
  //           "Application-Key": API_Key,
  //           "Content-Type": "application/json",


  //           //"Accept": "*/*",
  //           //"cache-control": "no-cache",
  //           //'Access-Control-Allow-Origin': '*',
  //           //'Access-Control-Allow-Credentials': 'true'

  //         })
  //       }
  //     )
  //       .subscribe((response: any) => {
  //         alert(response);
  //         resolve(response);
  //       });
  //   });
  // }


  // testRequest() {
  //   let apiURL = "https://spreadsheets.google.com/feeds/list/1Auu5Pj-zSbhiS55GDptBIb19osr7EStd9byKrobMKWE/1/public/values?alt=json";
  //   console.log(apiURL);
  //   return new Promise((resolve, reject) => {
  //     this.http.get(apiURL)
  //       .subscribe((response: any) => {
  //         console.log(response);
  //         resolve(response);
  //       });
  //   });
  // }


  // login(data: loginParam) {
  //   //let postData = "{\n\t\"UserName\":\"s_chal84\",\n\t\"PassWord\":\"3100900017671\"\n}";
  //   console.log(data);

  //   return this.http.post(this.apiURL, data, {
  //     headers: new HttpHeaders({
  //       "Application-Key": API_Key,
  //       "Content-Type": "application/json",
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Credentials': 'true',
  //       "mode": "no-cors"
  //     })
  //   })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         return res;
  //       },
  //       err => {
  //         console.log(err);
  //         return err;
  //       }
  //     );


  //   return from( // wrap the fetch in a from if you need an rxjs Observable
  //     fetch(
  //       this.apiURL,
  //       {
  //         body: JSON.stringify(data),
  //         headers: {
  //           'Content-Type': 'application/json',
  //          'Application-Key': 'MGRiOTVmNDUwZGQ4ODFhYTRkZTA3YWNhNzVhN2Y2NTA5ODU0NjJiYzFmZDRmZWVlNGYyYTQzMmIxMGVjZGM2ZA=='
  //         },
  //         method: 'POST'
  //       }
  //     )
  //   );

  // }
}
