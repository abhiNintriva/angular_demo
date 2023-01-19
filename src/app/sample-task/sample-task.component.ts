import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service';
import { perPage, Projects, type } from '../shared/posts.type';

@Component({
  selector: 'app-sample-task',
  templateUrl: './sample-task.component.html',
  styleUrls: ['./sample-task.component.scss']
})
export class SampleTaskComponent implements OnInit {
  users!: type[];
  page: number = 0;
  pageSize: number = 5;
  sortOrder: string = 'asc';
  sortProperty: string = 'employeeCode';
  totalPage!: number;
  rowsPerPage!: perPage[];
  selectedPerPage!: string;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.list();
    this.loginservice._userData.subscribe((res) => {
      console.log(res);
      this.users = res.users
      this.totalPage = res.totalPage
    })
    console.log("totalpage", this.totalPage);

  }

  list() {

    this.loginservice.showposts(this.sortOrder, this.pageSize, this.page, this.sortProperty).subscribe();
  }

  paginate(event: any) {
    console.log("event", event);
    this.page = event.page;
    this.pageSize = event.rows;

    console.log("rows", this.pageSize);
    console.log("page", this.page);
    console.log("event.rows", event.rows);
    console.log("event.page", event.page);
    this.list();
  }


  // userSort(event: any) {
  //   if (this.sortProperty == 'employeeCode') {
  //     this.sortProperty = 'firstName'

  //     if (this.sortOrder == 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc') {
  //       this.list();
  //     }
  //     else if (this.sortOrder == 'desc' ? this.sortOrder = 'asc' : this.sortOrder = 'desc') {
  //       this.list();
  //     }
  //   }
  //   else if (this.sortProperty == 'firstName') {
  //     // if 
  //     (this.sortOrder == 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc') 
  //       this.list();
  //     // }
  //     // else if (this.sortOrder == 'desc' ? this.sortOrder = 'asc' : this.sortOrder = 'desc') {
  //     //   this.list();
  //     // }
  //   }

  // }

  firstNameSort(event: any) {
   this.sortProperty = 'firstName';
   this.sortOrder == 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc';
   this.list();
  }

  empCode(event: any) {
    this.sortProperty = 'employeeCode';
    this.sortOrder == 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc';
    this.list();
   }
  

  getTooltipName(project: Projects[]) {
    let allProjects: string[] = [];
    project.forEach((el) => {
      const newString = el.project.toLowerCase()
      const updatedString = newString[0].toUpperCase() + newString.slice(1);
      allProjects.push(updatedString)
    });
    allProjects.splice(0, 1);
    return allProjects;

  }



  // empSort(event: any) {
  //   console.log("bug");
  //   if (this.sortProperty == 'firstName') {
  //     this.sortProperty = 'employeeCode'

  //     // if
  //      this.sortOrder == 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc';
  //       this.list();
  //     // }
  //     // else if (this.sortOrder == 'desc' ? this.sortOrder = 'asc' : this.sortOrder = 'desc') {
  //     //   this.list();
  //     // }
  //   }
  //   else if (this.sortProperty == 'employeeCode') {
  //     // if 
  //     (this.sortOrder == 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc') 
  //       this.list();
  //     // }
  //     // else if (this.sortOrder == 'desc' ? this.sortOrder = 'asc' : this.sortOrder = 'desc') {
  //     //   this.list();
  //     // }
  //   }
  // }
  

  PerPage = [
    { row: '5' },
    { row: '10' },
    { row: '15' }
  ]

}

