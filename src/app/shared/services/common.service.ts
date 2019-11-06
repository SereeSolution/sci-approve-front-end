import { Injectable } from '@angular/core';
import { APIUrl } from './apiURL';
import { map, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        private http: HttpClient
    ) { }

    getCommonData() {
        console.log('API URL : ', APIUrl.getAllDepartment);
        let dep = this.http.get(APIUrl.getAllDepartment).toPromise();
        let professor = this.http.get(APIUrl.getAllProfessor).toPromise();

        Promise.all([dep, professor]).then(
            result => {
                console.log(result[0]['records']);
                console.log(result[1]['records']);
                localStorage.setItem('department', JSON.stringify(result[0]['records'])); // Add Data to Local Storage
                localStorage.setItem('professor', JSON.stringify(result[1]['records'])); // Add Data to Local Storage
            }
        )
    }

}