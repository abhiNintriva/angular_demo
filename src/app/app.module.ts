import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './auth/login/login.component';


// import { MainComponent } from './main/main.component';
// import { Router } from '@angular/router';
@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        HttpClientModule

    ]
})
export class AppModule { }
