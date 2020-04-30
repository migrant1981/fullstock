import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/company/list/list.component';
import { EditComponent } from './component/company/edit/edit.component';
import { AddComponent } from './component/company/add/add/add.component';
import { UserComponent } from './component/user/user.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { ImportstockComponent } from './component/importstock/importstock.component';
import { UserPasswordComponent } from './component/user/user-password/user-password.component';
import { IpoplanComponent } from './component/ipoplan/ipoplan.component';
import { DetailComponent } from './component/ipoplan/detail/detail.component';
import { StrockpriceComponent } from './component/strockprice/strockprice.component';
import { LoginGuard } from './guard/login.guard';
import { DashboadComponent } from './component/dash/dashboad/dashboad.component';
import { SignupComponent} from './component//user/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboad', component: DashboadComponent, canActivate: [LoginGuard]},
  { path: 'addcompany', component: AddComponent, canActivate: [LoginGuard]},
  { path: 'companyedit/:id', component: EditComponent, canActivate: [LoginGuard]},
  { path: 'companylist', component: ListComponent, canActivate: [LoginGuard]},
  { path: 'userlist', component: UserComponent, canActivate: [LoginGuard]},
  { path: 'signup', component: SignupComponent},
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
