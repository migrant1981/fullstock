/*
 * @Author: your name
 * @Date: 2020-04-20 14:26:57
 * @LastEditTime: 2020-04-24 16:50:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\company\list\list.component.ts
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CompanyService } from '../../company.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface CompanyItem {
  id: string;
  name: string;
  turnover: string;
  ceo: string;
  bod: string;
  sexchange: string;
  price: number;
  sector: string;
  brief: string;
  stockcode: string;
}

const COMPANY: CompanyItem[] = [{
  id: '1',
  name: 'company001',
  turnover: 'test',
  ceo: 'testceo',
  bod: 'Board of Dirctors 001',
  sexchange: 'BSE',
  price: 23.9,
  sector: 'sectors test1',
  brief: 'brief write up tes 1',
  stockcode: 'stock0001'
}, {
  id: '2',
  name: 'company002',
  turnover: 'test',
  ceo: 'testceo',
  bod: 'Board of Dirctors 002',
  sexchange: 'NSE',
  price: 23.9,
  sector: 'sectors test2',
  brief: 'brief write up tes 2',
  stockcode: 'stock0002'
}
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  options: any;
  isDisplay: boolean;

  constructor(private companyservice: CompanyService, private router:Router) {
    this.isDisplay = false;
  }

  companys: CompanyItem[];

  ngOnInit(): void {
    this.companys = COMPANY;
    // this.getAllCompanyList();

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

  getAllCompanyList() {
    this.companyservice.getAllCompanyList().subscribe(
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

  getSingleCompany(id: any) {
    this.companyservice.getCompanyById(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        if (200 === info.code) {
            console.log('company single info successful,redirect page...');
            this.isDisplay = true;
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
