/*
 * @Author: Sammi Liu
 * @Date: 2020-04-12 20:51:40
 * @LastEditTime: 2020-04-21 11:26:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule} from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './company/list/list.component';
import { EditComponent } from './company/edit/edit.component';
import { MoneyPipe } from './money.pipe';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ImportstockComponent } from './importstock/importstock.component';
import { UserPasswordComponent } from './user/user-password/user-password.component';
import { IpoplanComponent } from './ipoplan/ipoplan.component';
import { StrockpriceComponent } from './strockprice/strockprice.component';
import { DashboadComponent } from './dash/dashboad/dashboad.component';
import { AddComponent } from './company/add/add/add.component';
import { DetailComponent } from './ipoplan/detail/detail.component';
import { SignupComponent } from './user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent,
    EditComponent,
    MoneyPipe,
    UserProfileComponent,
    ImportstockComponent,
    UserPasswordComponent,
    IpoplanComponent,
    StrockpriceComponent,
    DashboadComponent,
    AddComponent,
    DetailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
