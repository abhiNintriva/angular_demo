import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { LoginResponse } from 'src/app/shared/login.type';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = 'http://164.52.200.24:6204/users/auth/signin';
  registerUrl = 'http://164.52.200.24:6204/users/create';

  getlogin(params: any) {
    return this.http.post<LoginResponse>(this.loginUrl, params).pipe(tap((res) => {
      console.log("res", res);

    },
  ),
    
    )
  }
    
    
  
  registraion(params: any) {
    params = {
      ...params, "options": [
        {
          "optionId": "42",
          "label": "Department",
          "option": "Tech Team"
        }
      ],
      "projects": [
        {
          "optionId": 21,
          "label": "Projects",
          "option": "TOFEERIDE"
        },
        {
          "optionId": 20,
          "label": "Projects",
          "option": "KESHER"
        },
        {
          "optionId": 19,
          "label": "Projects",
          "option": "NMS"
        }
      ]
    }
    return this.http.post<any>(this.registerUrl, params).pipe(tap((res) => {
      console.log("res", res);

    }))
  }
  showUrl = 'assets/login.json';
  showconfig(){
    return this.http.get<any>(this.showUrl);
  }
}
