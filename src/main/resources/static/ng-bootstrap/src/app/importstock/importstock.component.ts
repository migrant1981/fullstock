import { Injectable } from '@angular/core';
/*
 * @Author: your name
 * @Date: 2020-04-21 18:08:47
 * @LastEditTime: 2020-04-24 17:13:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\importstock\importstock.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-importstock',
  templateUrl: './importstock.component.html',
  styleUrls: ['./importstock.component.css']
})
export class ImportstockComponent implements OnInit {

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }

  upload(fileData): any {
    return this.httpclient.post<any>("C:\sammi\fullstack", fileData, {
      reportProgress: true,
      observe: 'events'
    });

  }

}
