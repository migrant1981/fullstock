/*
 * @Author: your name
 * @Date: 2020-04-20 14:15:33
 * @LastEditTime: 2020-04-20 14:18:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\login.guard.ts.ts
 */
import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if (!sessionStorage.getItem('token')) {
      alert('Please Sign in')
      return false;
    } else{
      return true;
    }
  }
}
