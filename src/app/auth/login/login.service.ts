import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { LoginResponse } from 'src/app/shared/login.type';
import { type, UserListResponse } from 'src/app/shared/posts.type';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private userData$ = new BehaviorSubject<UserListResponse>({
    pageNumber: 1,
    totalPage: 1,
    users: []
  });
  _userData = this.userData$.asObservable();

  loginUrl = 'http://164.52.200.24:6204/users/auth/signin';
  registerUrl = 'http://164.52.200.24:6204/users/create';

  getlogin(params: any) {
    return this.http.post<LoginResponse>(this.loginUrl, params).pipe(tap((res) => {
      console.log("res", res);
    }),
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
  showconfig() {
    return this.http.get<any>(this.showUrl);
  }
  postUrl = 'http://164.52.200.24:6204/users/get-all';

  showposts(order: string, size: number, page: number, sortProperty: string) {
    const headers = {
      "pageNumber": page,
      "pageSize": size,
      "sortOrder": order,
      "sortProperty": sortProperty,
    }
    return this.http.post<UserListResponse>(this.postUrl, { headers: headers }).pipe(tap((res) => {
      if (res) {
        this.userData$.next(res);
        // console.log(res);

      }
    }));
  }
  forTest() {
    const headers = {
      "pageNumber": 0,
      "pageSize": 5,
      "sortOrder": "desc",
      "sortProperty": "employeeCode"
    }
    {
      return this.http.post<UserListResponse>(this.postUrl, { headers: headers }).pipe(tap((res) => {
        console.log("res", res);

      }))
    }
  }
}
