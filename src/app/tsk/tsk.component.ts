import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service';
import { type } from 'src/app/shared/posts.type';
@Component({
  selector: 'app-tsk',
  templateUrl: './tsk.component.html',
  styleUrls: ['./tsk.component.scss']
})
export class TskComponent implements OnInit {
  

  sortOrder: string = 'desc';
  users!: type[];
  projects!: any;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.list()
    this.loginservice._userData.subscribe((res) => {
      this.users = res
    })
  }

  list() {
    this.loginservice.showposts(this.sortOrder).subscribe();
  }

  usersSort(event: any) {
    console.log("event", event)
    if (event.field === 'employee') {
      if (event.order === 1) {
        this.sortOrder = 'desc';
      } else {
        this.sortOrder = 'asc';
      }
      console.log("order", this.sortOrder)
      this.loginservice.showposts(this.sortOrder).subscribe();
    }
  }

  // getProjectName(project)
  paginate(event:any){
    console.log("event", event);
    
  }

}

