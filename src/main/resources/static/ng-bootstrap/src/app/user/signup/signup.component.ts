import { UserService } from './../../user';
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DictsinfoService } from './../../dictsinfo.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  alerts : Alert[];

  @Input() searchname: any;
  @Input() searchdate: any;

  constructor(private routeInfo: ActivatedRoute, private router:Router, private userservice: UserService, public dictsinfo: DictsinfoService) {
    this.reset();
  }

  usertype: any;

  ngOnInit(): void {
    this.usertype = this.dictsinfo.getUserType();
  }

  ngSignup(value: any) {
    if (this.validInput(value)) {
      this.userservice.signup(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.code) {
              console.log('signup successful,redirect page...');
              this.router.navigate(['/dashboad']);
          } else {
            console.log('signup failing.');
            this.alerts.push({type : 'danger', message: 'please contact administrators!'});
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

    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      return false;
    }

    if (!value.confirmpwd) {
      this.alerts.push({type : 'danger', message: 'confirm password required!'});
      return false;
    }

    if (value.confirmpwd !== value.password) {
      this.alerts.push({type : 'danger', message: 'input password is different!'});
      return false;
    }

    return true;
  }
}

