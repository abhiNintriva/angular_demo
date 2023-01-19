import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service';
import { perPage, type } from 'src/app/shared/posts.type';
import { Type } from '@angular/compiler';
@Component({
  selector: 'app-tsk',
  templateUrl: './tsk.component.html',
  styleUrls: ['./tsk.component.scss']
})
export class TskComponent implements OnInit {
  users!: type[];
  page: number = 1;
  pageSize: number = 5;
  sortOrder: string = 'asc';
  sortProperty: string = 'employeeCode';
  totalPage!: number;
  rowsPerPage!: perPage[];
  selectedPerPage!: string;
  PageRow!: any;

  title!: string;
  constructor(private loginservice: LoginService) {
    this.PageRow = [
      { row: '5' ,label:'Result' },
      { row: '10',label:'Result'},
      { row: '15',label:'Result'}
    ]

  }

  ngOnInit(): void {
    this.list();

    this.loginservice._userData.subscribe((res) => {
      console.log(res);
      this.users = res.users
      this.totalPage = res.totalPage
    })

  }
  list() {
    this.loginservice.showposts(this.sortOrder, this.pageSize, this.page, this.sortProperty).subscribe();
  }
  paginate(event: number) {
    console.log(event);
    this.page = event;
    this.list();
  }
  hello(selectedCity: any) {
    console.log(selectedCity);

  }
  onchange(event: any) {
    console.log(event);
    console.log(event.value.row);

  }
}

