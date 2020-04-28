/*
 * @Author: your name
 * @Date: 2020-04-20 14:27:26
 * @LastEditTime: 2020-04-24 14:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\company\edit\edit.component.ts
 */
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CompanyService } from '../../company.service';
import { DictsinfoService } from './../../dictsinfo.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  alerts : Alert[];

  @Input() searchname: any;
  @Input() searchdate: any;

  constructor(private routeInfo: ActivatedRoute, private router:Router, private companyservice: CompanyService, public dictsinfo: DictsinfoService) {
    this.reset();
  }

  companyid: string;
  sexchange: any;
  stockcodelist: any;
  sectorslist: any;
  companys: any;

  ngOnInit(): void {
    this.sexchange = this.dictsinfo.getStockExchange();
    this.stockcodelist = this.dictsinfo.getMockStockCode();
    this.sectorslist = this.dictsinfo.getMockSectorsList();

    this.companyid = this.routeInfo.snapshot.params['id'];

    this.companys = this.companyservice.getComppanyInfo(this.companyid);
  }

  ngSaveComapny(value: any) {
    if (this.validInput(value)) {
      this.companyservice.setCompanyInfo(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.code) {
              console.log('modify company info successful,redirect page...');
              this.router.navigate(['/companylist']);
          } else {
            console.log('modify company info failing.');
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
    if (!value.companyname) {
      this.alerts.push({type : 'danger', message: 'companyname required!'});
      return false;
    }

    return true;
  }
}
