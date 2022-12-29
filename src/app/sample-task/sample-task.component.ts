import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service';
import { Projects, type } from '../shared/posts.type';

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
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.list();
    this.loginservice._userData.subscribe((res) => {
      this.users = res
    })
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


  userSort(event: any) {
    if (this.sortOrder == 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc') {
      this.list();
    }
    else if (this.sortOrder == 'desc' ? this.sortOrder = 'asc' : this.sortOrder = 'desc') {
      this.list();
    }
  }
  empSort(event: any) {
    console.log("empsort");

    if (this.sortProperty == 'employeeCode') {
      this.sortProperty = 'firstName'
      console.log("sortProperty", this.sortProperty);
      this.list();
    }
    else if (this.sortProperty == 'firstName') {
      this.sortProperty = 'employeeCode'

      console.log("sortProperty", this.sortProperty);
      this.list();

    }
  }

  getTooltipName(project: Projects[]) {
    let allProjects: string[] = [];
    project.forEach((el) => {
      allProjects.push(el.project)
    });
    allProjects.splice(0, 1);
    return allProjects;

  }
}
