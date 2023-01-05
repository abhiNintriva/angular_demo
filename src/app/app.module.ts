import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { TskComponent } from './tsk/tsk.component';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { SampleTaskComponent } from './sample-task/sample-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NmsRegisterComponent } from './nms-register/nms-register.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        TskComponent,
        SampleTaskComponent,
        NmsRegisterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        HttpClientModule,
        TableModule,
        InputTextModule,
        FormsModule,
        DropdownModule,
        ButtonModule,
        PaginatorModule,
        BrowserAnimationsModule,
        TooltipModule,
        NgbModule,
        NgxPaginationModule,
        RouterModule,
        InputNumberModule,
        InputTextareaModule,

    ]
})
export class AppModule { }
