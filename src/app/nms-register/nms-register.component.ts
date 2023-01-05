import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nms-register',
  templateUrl: './nms-register.component.html',
  styleUrls: ['./nms-register.component.scss']
})

export class NmsRegisterComponent implements OnInit {
city: any;

  constructor() { }

  ngOnInit(): void {
  }
  navbar = [
    {
      name: 'Profile',
      id: '1'
    },
    {
      name: 'Punch Card',
      id: '2'
    },
    {
      name: 'Quotas& Balance',
      id: '3'
    },
    {
      name: 'Vacation Log',
      id: '4'
    },
    {
      name: 'Pending Leaves',
      id: '5'
    },
    {
      name: 'projects',
      id: '6'
    },
    {
      name: 'Documents',
      id: '7'
    }
  ]
  cities: any[] | undefined;
}
