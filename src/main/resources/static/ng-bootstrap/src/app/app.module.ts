import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule} from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListComponent } from './component/company/list/list.component';
import { EditComponent } from './component/company/edit/edit.component';
import { MoneyPipe } from './pipe/money.pipe';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { ImportstockComponent } from './component/importstock/importstock.component';
import { UserPasswordComponent } from './component/user/user-password/user-password.component';
import { IpoplanComponent } from './component/ipoplan/ipoplan.component';
import { StrockpriceComponent } from './component/strockprice/strockprice.component';
import { DashboadComponent } from './component/dash/dashboad/dashboad.component';
import { AddComponent } from './component/company/add/add/add.component';
import { DetailComponent } from './component/ipoplan/detail/detail.component';
import { SignupComponent } from './component/user/signup/signup.component';

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
