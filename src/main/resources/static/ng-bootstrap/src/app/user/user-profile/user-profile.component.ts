/*
 * @Author: your name
 * @Date: 2020-04-21 17:50:13
 * @LastEditTime: 2020-04-24 13:33:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\user\user-profile\user-profile.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DictsinfoService } from './../../dictsinfo.service';
import { UserService } from './../../user';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  alerts : Alert[];

  constructor(private routeInfo: ActivatedRoute, private router:Router, public userservice: UserService, public dictinfo: DictsinfoService) {
    this.reset();
   }

  userid: any;
  userInfo: any;
  usertype: any;

  ngOnInit(): void {
    this.usertype = this.dictinfo.getUserType();
    this.userid = this.routeInfo.snapshot.params['id'];
    this.userInfo = this.userservice.getUserInfo(this.userid);
  }

  updateUserProfile(value: any) {
    if (this.validInput(value)) {
      this.userservice.setUserInfo(value).subscribe(
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
    if (!value.username) {
      this.alerts.push({type : 'danger', message: 'username required!'});
      return false;
    }

    return true;
  }

}
