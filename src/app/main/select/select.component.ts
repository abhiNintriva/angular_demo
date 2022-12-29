import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login/login.service';
import { type } from 'src/app/shared/posts.type';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  users!: type[];

  
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {

    // this.loginservice.showposts().subscribe((res) => {
      // console.log(res);
      // this.user = res
      // console.log(res.userId);
  //     // userId=res.userId
  //     console.log();
  //     // this.userid = res.userId;
  //     // console.log(res.userId);

  //   // }
  //   // )
  // }
  // user: type[] = [];
  // // userid: any;
}
paginate(event:any){
  console.log("event",event);
  
}
sample(event:any){
  console.log("event",event);
  
}
sampleSort(event:any){
  console.log("event",event);
  
}
}