import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { loginParam } from 'src/app/_models/authen.model';
import { TuAuthenService } from 'src/app/shared/services/tu-authen.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { UserProfileService } from 'src/app/shared/services/userProfile.service';
import { Profile } from 'src/app/_models/profile.model';
import { CommonService } from 'src/app/shared/services/common.service';


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

  data: loginParam = {
    UserName: 's_chal84',
    PassWord: '3100900017671'
  }

  loginForm = this.fb.group({
    UserName: [''],
    PassWord: ['']
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private authen: TuAuthenService,
    private commonService: CommonService,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
  }

  OnSubmit() {

    console.log('Form submit : ', this.loginForm.value);
    this.data.UserName = this.loginForm['email'];
    this.data.PassWord = this.loginForm['password'];

    console.log('DEBUG : ', this.loginForm.value);
    //this.authen.login( this.loginForm.value );
    //this.login(this.loginForm.value);
    //this.auth(this.loginForm.value);


    // IF SUCCESS
    let user: Profile = new Profile();
    user.name = 'ดร.อุ๊ฟ';
    user.department = '12';
    user.position = 'Super Developer';
    user.role = 'APPROVER';
    //user.role = 'STAFF';
    this.commonService.getCommonData();


    this.userProfileService.setUserProfile(user);
    switch (user.role) {
      case 'STAFF' : this.router.navigate(['/staff']);
        break;
      case 'APPROVER': this.router.navigate(['/approval']);
        break;
      default:
        this.router.navigate(['/staff']);
    }


    //this.testRequest();
  }

  auth(login): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL,
        { "UserName": login.UserName, "PassWord": login.PassWord },
        {
          headers: new HttpHeaders({
            "Application-Key": API_Key,
            "Content-Type": "application/json",


            //"Accept": "*/*",
            //"cache-control": "no-cache",
            //'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Credentials': 'true'

          })
        }
      )
        .subscribe((response: any) => {
          alert(response);
          resolve(response);
        });
    });
  }


  testRequest() {
    let apiURL = "https://spreadsheets.google.com/feeds/list/1Auu5Pj-zSbhiS55GDptBIb19osr7EStd9byKrobMKWE/1/public/values?alt=json";
    console.log(apiURL);
    return new Promise((resolve, reject) => {
      this.http.get(apiURL)
        .subscribe((response: any) => {
          console.log(response);
          resolve(response);
        });
    });
  }


  login(data: loginParam) {
    //let postData = "{\n\t\"UserName\":\"s_chal84\",\n\t\"PassWord\":\"3100900017671\"\n}";
    console.log(data);

    return this.http.post(this.apiURL, data, {
      headers: new HttpHeaders({
        "Application-Key": API_Key,
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        "mode": "no-cors"
      })
    })
      .subscribe(
        res => {
          console.log(res);
          return res;
        },
        err => {
          console.log(err);
          return err;
        }
      );

    /*
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        this.apiURL,
        {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
           'Application-Key': 'MGRiOTVmNDUwZGQ4ODFhYTRkZTA3YWNhNzVhN2Y2NTA5ODU0NjJiYzFmZDRmZWVlNGYyYTQzMmIxMGVjZGM2ZA=='
          },
          method: 'POST'
        }
      )
    );
    */
  }
}
