import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class IpoplanService {
  id: string;
  companyname: string;
  sexchange: string;
  price: number;
  totalnum: number;
  opendate: string;
  remarks: string;

  constructor(private http: HttpClient) { }

  getAllIPOList() {
    return this.http.post(`${environment.baseUrl}/ipoplan`, JSON.stringify(''), httpOptions);
  }

  getIPOInfo(id: string) {
    return {
      id: '1',
      companyname:'Company001',
      sexchange: 'NSE',
      price: 32.29,
      totalnum: 39999,
      opendate: '2020-06-09',
      remarks: 'demo'
    };
  }

  setIPO(value: any) {
    return this.http.post(`${environment.baseUrl}/ipoaction`, JSON.stringify(value), httpOptions);
  }

  getIPOList(value: any) {
    return this.http.post(`${environment.baseUrl}/ipoplan`, JSON.stringify(value), httpOptions);
  }

  getIPOInfoById(id: any) {
    return this.http.post(`${environment.baseUrl}/doipo`, JSON.stringify(id), httpOptions);
  }
}
