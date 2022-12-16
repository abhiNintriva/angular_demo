import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  nav=[
    {
      name:'Personal',
      id:'1'
    },
    {
      name: 'Select',
      id:'2'
    },
    {
      name: 'Private',
      id:'3'
    },
    {
      name:'Business',
      id:'4'
    },
    {
      name:'Corporate',
      id:'5'
    }
  ]
  logout(){
    localStorage.removeItem('Token')
    this.router.navigateByUrl('login')

  }
}
