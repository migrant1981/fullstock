import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  constructor(private router: Router) { }

  isRole: boolean;
  loginuser: string;

  ngOnInit(): void {
    if (sessionStorage.getItem('token') === 'admin'){
      this.isRole = true;
    } else {
      this.isRole = false;
    }
    this.loginuser = sessionStorage.getItem('loginuser');
  }

}
