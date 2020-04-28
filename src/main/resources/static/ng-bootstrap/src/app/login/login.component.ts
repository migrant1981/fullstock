/*
 * @Author: your name
 * @Date: 2020-04-18 15:35:49
 * @LastEditTime: 2020-04-24 17:05:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\login\login.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  alerts : Alert[];

  constructor(private unit: Unit, private route: Router) {
    this.reset();
   }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.unit.postSignIn(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.code) {
              console.log('login successful,redirect page...');
              this.route.navigate(['/adminlist']);
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
    this.reset();
    if (!value.username) {
      this.alerts.push({type : 'danger', message: 'username required!'});
      return false;
    }

    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      return false;
    }

    return true;
  }

}
