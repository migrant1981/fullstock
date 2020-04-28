/*
 * @Author: your name
 * @Date: 2020-04-22 14:05:22
 * @LastEditTime: 2020-04-24 13:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\user\user-password\user-password.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user';
import { ActivatedRoute, Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit {
  alerts : Alert[];
  userInfo: any;

  constructor(private routeInfo: ActivatedRoute, private router:Router, public userservice: UserService) {
    this.reset();
  }

  ngOnInit(): void {
    this.userInfo = {
      userid: '1',
      username: 'seller001'
    };
  }

  updateUserPwd(value: any) {
    if (this.validInput(value)) {
      this.userservice.setUserPwd(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.code) {
              console.log('login successful,redirect page...');
              this.router.navigate(['/sellerlist']);
          } else {
            console.log('login failing.');
            this.alerts.push({type : 'danger', message: 'username or password error!'});
          }
        }
      );
    }
  }

  reset(): void {
    this.alerts = Array.from(ALERTS);
  }

  close(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  validInput(value: any): boolean {
    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      return false;
    }

    if (!value.cfmpassword) {
      this.alerts.push({type : 'danger', message: 'cfmpassword required!'});
      return false;
    }

    if (value.password !== value.cfmpassword) {
      this.alerts.push({type : 'danger', message: 'password is different cfmpassword !'});
      return false;
    }

    return true;
  }

}
