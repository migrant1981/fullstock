/*
 * @Author: your name
 * @Date: 2020-04-22 14:52:52
 * @LastEditTime: 2020-04-22 16:20:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\ipoplan\ipoplan.component.ts
 */
import { DictsinfoService } from './../dictsinfo.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ipoplan',
  templateUrl: './ipoplan.component.html',
  styleUrls: ['./ipoplan.component.css']
})
export class IpoplanComponent implements OnInit {

  constructor(public dictinfo: DictsinfoService) { }

  ipoplans : any;
  ngOnInit(): void {
    this.ipoplans = this.dictinfo.getMockIPOList();
  }

}
