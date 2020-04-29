import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { IpoplanService } from '../../ipoplan.service';
import { DictsinfoService } from './../../dictsinfo.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  alerts : Alert[];

  constructor(private routeInfo: ActivatedRoute, private router:Router, private ipoplanservice: IpoplanService, public dictsinfo: DictsinfoService) {
    this.reset();
  }
  sexchange: any;
  ipoid: string;
  ipodetail: any;

  ngOnInit(): void {
    this.sexchange = this.dictsinfo.getStockExchange();

    this.ipoid = this.routeInfo.snapshot.params['id'];

    this.ipodetail = this.ipoplanservice.getIPOInfo(this.ipoid);
  }

  ngSaveIPO(value: any) {
    if (this.validInput(value)) {
      this.ipoplanservice.setIPO(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.code) {
              console.log('modify company info successful,redirect page...');
              this.router.navigate(['/ipoplan']);
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
