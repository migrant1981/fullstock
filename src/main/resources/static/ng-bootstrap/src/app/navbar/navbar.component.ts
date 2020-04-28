/*
 * @Author: your name
 * @Date: 2020-04-18 20:42:34
 * @LastEditTime: 2020-04-22 16:03:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\navbar\navbar.component.ts
 */
import { Component, OnInit } from '@angular/core';
import {Unit} from '../unit';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

   isSignin: boolean;

  ngOnInit(): void {
    if (sessionStorage.getItem('token')){
      this.isSignin = true;
    } else {
      this.isSignin = false;
    }
  }

  ngDoCheck(): void {
    console.log('docheck');
    if (sessionStorage.getItem('token')){
      this.isSignin = true;
    } else {
      this.isSignin = false;
    }
  }

  signOut() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

