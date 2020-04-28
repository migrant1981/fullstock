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

@Component({
  selector: 'app-strockprice',
  templateUrl: './strockprice.component.html',
  styleUrls: ['./strockprice.component.css']
})
export class StrockpriceComponent implements OnInit {

  constructor(public dictinfo: DictsinfoService) { }

  prices: any;

  ngOnInit(): void {
    this.prices = this.dictinfo.getMockStockPrice();
  }

}
