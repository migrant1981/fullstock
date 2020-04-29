import { Component, OnInit } from '@angular/core';
import {Unit} from '../unit';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private routeInfo: ActivatedRoute) { }

   isSignin: boolean;
   isRole: boolean;
   loginuser: string;

  ngOnInit(): void {
    if (sessionStorage.getItem('token')){
      if (sessionStorage.getItem('token') === 'admin'){
        this.isRole = true;
      } else {
        this.isRole = false;
      }
      this.isSignin = true;
      this.loginuser = sessionStorage.getItem('loginuser');
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
    sessionStorage.removeItem('loginuser');
    this.router.navigate(['/login']);
  }
}

