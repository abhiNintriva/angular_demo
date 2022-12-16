import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../auth/register/register.component';
import { MainComponent } from './main.component';
import { PersonalComponent } from './personal/personal.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path:'', component: MainComponent,
  children:[
    { path:'Personal', component: PersonalComponent},
    { path: 'Select', component :SelectComponent},
    { path: '**', component : PersonalComponent}
  ]
},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
