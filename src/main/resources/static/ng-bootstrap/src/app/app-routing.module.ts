import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './company/list/list.component';
import { EditComponent } from './company/edit/edit.component';
import { AddComponent } from './company/add/add/add.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ImportstockComponent } from './importstock/importstock.component';
import { UserPasswordComponent } from './user/user-password/user-password.component';
import { IpoplanComponent } from './ipoplan/ipoplan.component';
import { DetailComponent } from './ipoplan/detail/detail.component';
import { StrockpriceComponent } from './strockprice/strockprice.component';
import { LoginGuard } from '../app/login.guard';
import { DashboadComponent } from '../app/dash/dashboad/dashboad.component';
import { SignupComponent} from '../app/user/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboad', component: DashboadComponent, canActivate: [LoginGuard]},
  { path: 'addcompany', component: AddComponent, canActivate: [LoginGuard]},
  { path: 'companyedit/:id', component: EditComponent, canActivate: [LoginGuard]},
  { path: 'companylist', component: ListComponent, canActivate: [LoginGuard]},
  { path: 'userlist', component: UserComponent, canActivate: [LoginGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard]},
  { path: 'userprofile/:id', component: UserProfileComponent, canActivate: [LoginGuard]},
  { path: 'changepwd/:id', component: UserPasswordComponent, canActivate: [LoginGuard]},
  { path: 'ipoplan', component: IpoplanComponent, canActivate: [LoginGuard]},
  { path: 'ipodetail/:id', component: DetailComponent, canActivate: [LoginGuard]},
  { path: 'importstock', component: ImportstockComponent, canActivate: [LoginGuard]},
  { path: 'stockprice', component: StrockpriceComponent, canActivate: [LoginGuard]},
  { path: 'companysearch:query', component: StrockpriceComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
