import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SelectComponent } from './select/select.component';
import { PersonalComponent } from './personal/personal.component';
import { MainComponent } from './main.component';



@NgModule({
    declarations: [
        NavbarComponent,
        SelectComponent,
        PersonalComponent,
        MainComponent,
        
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule,
    ]
})
export class MainModule { }
