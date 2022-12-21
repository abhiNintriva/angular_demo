import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SelectComponent } from './select/select.component';
import { PersonalComponent } from './personal/personal.component';
import { MainComponent } from './main.component';

import {ButtonModule} from 'primeng/button';
import {TableModule}from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
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
        ButtonModule,
        TableModule,
        PaginatorModule
    ]
})
export class MainModule { }
