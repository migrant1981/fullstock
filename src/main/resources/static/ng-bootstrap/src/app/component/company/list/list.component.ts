import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CompanyService } from '../../../service/company.service';
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



  constructor(private companyservice: CompanyService, private router:Router) { }

  companys: CompanyItem[];

  ngOnInit(): void {
    this.companys = COMPANY;
    // this.getAllCompanyList();
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

  getSingleCompany(id: any) {
    this.companyservice.getCompanyById(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        if (200 === info.code) {
            console.log('company single info successful,redirect page...');
        } else {
          console.log('modify company info failing.');
        }
      }
    );
  }


}
