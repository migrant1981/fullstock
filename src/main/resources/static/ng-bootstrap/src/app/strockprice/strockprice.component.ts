import { DictsinfoService } from './../dictsinfo.service';
/*
 * @Author: your name
 * @Date: 2020-04-23 14:48:06
 * @LastEditTime: 2020-04-23 14:56:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\strockprice\strockprice.component.ts
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CompanyService } from '../company.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-strockprice',
  templateUrl: './strockprice.component.html',
  styleUrls: ['./strockprice.component.css']
})
export class StrockpriceComponent implements OnInit {

  prices: any;
  options: any;
  isDisplay: boolean;

  constructor(public dictinfo: DictsinfoService,private router:Router,private companyservice: CompanyService) {
    this.isDisplay = false;
  }

  ngOnInit(): void {
    this.prices = this.dictinfo.getMockStockPrice();

    this.options = {
      xAxis: {
          type: 'category',
          data: ['Company001', 'Company002']
      },
      yAxis: {
          type: 'value',
          data: [5,400]
      },
      series: [{
          itemStyle: {
            color: 'blue',
            barBorderRadius: [18, 18, 0 ,0]
          },
          barWidth: 40,
          barCategoryGap: '20%',
          data: [40, 100],
          type: 'bar'
      }]
  };
  }

  getCompanyList(value: any) {
    this.companyservice.getCompanyList(value).subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        if (200 === info.code) {
            console.log('company list successful,redirect page...');
            this.router.navigate(['/companylist']);
        } else {
          console.log('modify company info failing.');
        }
      }
    );
  }


  showCompanyCharts(): void {
    this.isDisplay = !this.isDisplay;
  }

}
