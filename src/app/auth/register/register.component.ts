import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private loginservice : LoginService) { }
// email="";
  ngOnInit(): void {
    // this.loginservice.showconfig().subscribe((res:any)=>{
    //   console.log(res);
    //   this.email=res.email;
    // })
  }
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    employeeCode: new FormControl('',[Validators.required]),
    email: new FormControl(),
    phoneNumber: new FormControl(),

  });

  onsubmit() {
this.loginservice.registraion(this.registerForm.value).subscribe();


//     if(this.registerForm.invalid){
//    alert('invalid');

//     }
// else{
//     console.warn(this.registerForm.value)
//     this.router.navigateByUrl('login');
    
// }
  }

  get firstName() { return this.registerForm.get('firstName') }
  get lastName() { return this.registerForm.get('lastName') }


}



