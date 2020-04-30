import { Injectable, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DictsinfoService {

  constructor() { }

  getStockExchange() : any {
    return ['BSE', 'NSE'];
  }

  getMockStockCode(): any {
    return ['stockcode001', 'stockcode002', 'stockcode003'];
  }

  getUserType(): any {
    return ['Admin', 'User'];
  }

  getUserConfirmed(): any {
    return ['Yes', 'No'];
  }

  getMockSectorsList(): any {
    return [{
      id:'1',
      sectorname: 'sn001',
      brief: 'test001'
    },{
      id:'2',
      sectorname: 'sn002',
      brief: 'test002'
    },{
      id:'3',
      sectorname: 'sn003',
      brief: 'test003'
    },{
      id:'4',
      sectorname: 'sn004',
      brief: 'test004'
    }
    ];
  }

  getMockStockPrice(): any {
    return [{
      id:'1',
      companyname: 'company001',
      stockexchange: 'BSE',
      price: 44.12,
      date: '2020-07-28',
      time: '13:00'
    },{
      id:'2',
      companyname: 'company002',
      stockexchange: 'NSE',
      price: 23.1,
      date: '2020-07-28',
      time: '13:00'
    },{
      id:'3',
      companyname: 'company003',
      stockexchange: 'NSE',
      price: 78.1,
      date: '2020-07-28',
      time: '13:00'
    },{
      id:'4',
      companyname: 'company004',
      stockexchange: 'BSE',
      price: 12.4,
      date: '2020-07-28',
      time: '13:00'
    }
    ];
  }

  getMockIPOList(): any {
    return [{
      id:'1',
      companyname: 'company001',
      stockexchange: 'BSE',
      price: 44.12,
      totalnumber: 100000,
      units: '手',
      opendate: '2020-07-28',
      remarks: 'test001'
    },{
      id:'2',
      companyname: 'company002',
      stockexchange: 'NSE',
      price: 23.1,
      totalnumber: 100000,
      units: '手',
      opendate: '2020-07-20',
      remarks: 'test002'
    },{
      id:'3',
      companyname: 'company003',
      stockexchange: 'NSE',
      price: 78.1,
      totalnumber: 100000,
      units: '手',
      opendate: '2020-08-28',
      remarks: 'test003'
    },{
      id:'4',
      companyname: 'company004',
      stockexchange: 'BSE',
      price: 12.4,
      totalnumber: 100000,
      units: '手',
      opendate: '2020-09-08',
      remarks: 'test004'
    }
    ];
  }

  getSearchJson(): any {
    return [{
      condition1: {
        companycode: '*',
        startdate: '****-**-**',
        enddate: '****-**-**'
      },
      condition2: {
        date: '****-**-**',
        company1: '*',
        company2: '*'
      }
    }];
  }
}
