import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import {HttpParams} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
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

  constructor(private http: HttpClient) { }

  getAllCompanyList() {
    return this.http.post(`${environment.baseUrl}/companylist`, JSON.stringify(''), httpOptions);
  }

  getComppanyInfo(id: string) {
    return {
      id: '1',
      companyname:'Company001',
      turnover: 'testdemo',
      ceo: 'IBM-Learning',
      bod: 'test demo data',
      sexchange: 'NSE',
      sector: '3',
      brief: 'testssss',
      stockcode: 'stockcode002'
    };
  }

  setCompanyInfo(value: any) {
    return this.http.post(`${environment.companyUrl}/companyaction`, JSON.stringify(value), httpOptions);
  }

  getCompanyList(value: any) {
    const params = new HttpParams()
    .set('id', value);
    return this.http.get(`${environment.companyUrl}/company/list/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params
    });
  }

  getCompanyById(id: any) {
    const params = new HttpParams()
    .set('id', id);
    return this.http.get(`${environment.companyUrl}/company/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params
    });
  }
}
