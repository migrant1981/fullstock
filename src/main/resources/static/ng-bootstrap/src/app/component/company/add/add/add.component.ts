import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CompanyService } from '../../../../service/company.service';
import { DictsinfoService } from './../../../../service/dictsinfo.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  alerts : Alert[];

  @Input() searchname: any;
  @Input() searchdate: any;

  constructor(private routeInfo: ActivatedRoute, private router:Router, private companyservice: CompanyService, public dictsinfo: DictsinfoService) {
    this.reset();
  }

  sexchange: any;
  stockcodelist: any;
  sectorslist: any;

  ngOnInit(): void {
    this.sexchange = this.dictsinfo.getStockExchange();
    this.stockcodelist = this.dictsinfo.getMockStockCode();
    this.sectorslist = this.dictsinfo.getMockSectorsList();
  }

  ngSaveComapny(value: any) {
    if (this.validInput(value)) {
      this.companyservice.setCompanyInfo(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.code) {
              console.log('create company info successful,redirect page...');
              this.router.navigate(['/companylist']);
          } else {
            console.log('create company info failing.');
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
