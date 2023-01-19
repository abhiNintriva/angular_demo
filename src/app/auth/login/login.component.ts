import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/shared/login.type';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  console: any;

  constructor(private router: Router, private loginservice: LoginService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('faazns@gmail.com', [Validators.required]),
    password: new FormControl('fahad123', [Validators.required]),
  });

  onlogin() {
    // this.loginservice.getlogin(this.loginForm.value).subscribe(
    //   ((res) => {
    //     console.log("login res",res);
    //     if (res.success) {
    //       localStorage.setItem('Token', res.data.access_token);
    //       this.router.navigateByUrl('main/Personal');
    //       // alert(res.message);
    //     }
    //     else {
    //       alert(res.message)
    //       console.log("wrong", res);
    //     }
    //   })
    // );

    this.loginservice.getlogin(this.loginForm.value).subscribe(
      (res) => {
        console.log('login res', res);
        if(!res.success){
          console.log(res.message);
          
        }

        localStorage.setItem('Token', res.data.access_token);
        this.router.navigateByUrl('main/Personal');
        // alert(res.message);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        
        console.log(error.error[0].message);
            console.log(error.error.message);


            alert(error.error[0].message);
        
      }
    );

    // }

    //     this.loginservice.getlogin()
    //       .subscribe((res: any) => {

    // if(this.loginForm.controls.email.value == res.email) {

    //   console.log(res.email);
    //   localStorage.setItem('Token',res.email);
    //   this.router.navigateByUrl('main/Personal');

    // }

    //   })
    // console.log(this.loginForm.value);

    // console.log("hii");
  }

  showlogin() {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
