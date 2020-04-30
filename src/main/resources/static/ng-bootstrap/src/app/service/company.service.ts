import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

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
    return this.http.post(`${environment.baseUrl}/companyaction`, JSON.stringify(value), httpOptions);
  }

  getCompanyList(value: any) {
    return this.http.post(`${environment.baseUrl}/companylist`, JSON.stringify(value), httpOptions);
  }

  getCompanyById(id: any) {
    return this.http.post(`${environment.baseUrl}/singlecompany`, JSON.stringify(id), httpOptions);
  }
}
