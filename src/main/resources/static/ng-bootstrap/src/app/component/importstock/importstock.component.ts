import { Injectable } from '@angular/core';
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
