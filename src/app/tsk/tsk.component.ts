import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service';
import { type } from 'src/app/shared/posts.type';
import { Type } from '@angular/compiler';
@Component({
  selector: 'app-tsk',
  templateUrl: './tsk.component.html',
  styleUrls: ['./tsk.component.scss']
})
export class TskComponent implements OnInit {
  page: number = 0;
  pageSize: number = 5;
  sortOrder: string = 'desc';
  sortProperty: string = 'employeeCode';
  users!: type[];
  projects!: any;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.list()
    // this.showlist()
    this.loginservice._userData.subscribe((res) => {
      this.users = res
    })
  }

  list() {
    return this.loginservice.showposts(this.sortOrder, this.pageSize, this.page, this.sortProperty).subscribe();
  }

  usersSort(event: any) {
    // event.stopPropagation();
    console.log("event", event)
    if (event.field === 'employee') {
      if (event.order === 1) {
        this.sortOrder = 'desc';
      } else {
        this.sortOrder = 'asc';
      }
      console.log("order", this.sortOrder)
      this.loginservice.showposts(this.sortOrder, this.pageSize, this.page, this.sortProperty).subscribe();
    }
    if (event.field === 'employeeCode') {
      if (event.order === 1) {
        this.sortProperty = 'employeeCode';
      } else {
        this.sortProperty = 'firstName';
      }
      console.log("order", this.sortProperty);
      this.loginservice.showposts(this.sortOrder, this.pageSize, this.page, this.sortProperty).subscribe();

    }
  }

  // getProjectName(project)
  paginate(event: any) {
    console.log("event", event);

    console.log("rows", this.pageSize);
    console.log("page", this.page);
    this.loginservice.showposts(this.sortOrder, event.rows, event.page, this.sortProperty).subscribe();
  }

  showlist() {
    // this.loginservice._userData.subscribe((res) => {
    //   this.users = res
    // console.log(res);
    // return res
    for (let user of this.users) {
      console.log(user.project);

    }

    // })


  }

}

