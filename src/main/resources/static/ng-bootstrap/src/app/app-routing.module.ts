/*
 * @Author: your name
 * @Date: 2020-04-12 20:51:40
 * @LastEditTime: 2020-04-23 14:49:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './company/list/list.component';
import { EditComponent } from './company/edit/edit.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ImportstockComponent } from './importstock/importstock.component';
import { UserPasswordComponent } from './user/user-password/user-password.component';
import { IpoplanComponent } from './ipoplan/ipoplan.component';
import { StrockpriceComponent } from './strockprice/strockprice.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'adminlist', component: ListComponent},  //canActivate: [LoginGuard]
  { path: 'companyedit/:id', component: EditComponent},
  { path: 'companylist', component: ListComponent},
  { path: 'sellerlist', component: UserComponent},
  { path: 'sellerprofile/:id', component: UserProfileComponent},
  { path: 'importstock', component: ImportstockComponent},
  { path: 'changepwd/:id', component: UserPasswordComponent},
  { path: 'ipoplan', component: IpoplanComponent},
  { path: 'stockprice', component: StrockpriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
