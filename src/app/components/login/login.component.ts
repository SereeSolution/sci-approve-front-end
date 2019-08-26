import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { loginParam } from 'src/app/_models/authen.model';
import { TuAuthenService } from 'src/app/shared/services/tu-authen.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_Key= 'MGRiOTVmNDUwZGQ4ODFhYTRkZTA3YWNhNzVhN2Y2NTA5ODU0NjJiYzFmZDRmZWVlNGYyYTQzMmIxMGVjZGM2ZA==';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apiURL = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify';
  headers: HttpHeaders;
  options: any;

  data: loginParam = {
    UserName: 's_chal84',
    PassWord: '3100900017671'
  }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
    //private authen: TuAuthenService
  ) { }

  ngOnInit() {
  }

  OnSubmit() {

    console.log('Form submit : ', this.loginForm.value );
    //this.data.UserName = this.loginForm['email'];
    //this.data.PassWord = this.loginForm['password'];
    this.login(this.data);
    //this.authen.login(this.data);
    
    this.router.navigate(['/staff']);    
  }

  login(data: loginParam) {
    this.headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Application-Key', API_Key);
      //.append('Access-Control-Allow-Origin', '*');

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
