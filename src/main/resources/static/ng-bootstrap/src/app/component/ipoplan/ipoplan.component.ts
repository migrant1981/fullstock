import { DictsinfoService } from './../../service/dictsinfo.service';
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
