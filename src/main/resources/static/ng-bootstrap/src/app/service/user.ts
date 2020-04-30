import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {HttpParams} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  id: string;
  name: string;
  password: string;
  usertype: string;
  email: string;
  mobile: string;
  token?: string;

  constructor(private http: HttpClient) { }

  allUser() {
    // return this.http.get(`${environment.baseUrl}/sellerlist`, httpOptions);
  }

  getUserInfo(id: string) {
    const params = new HttpParams()
    .set('id', id);
    return this.http.get(`${environment.baseUrl}/user`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params
    });
  }

  signup(value: any) {
    return this.http.post(`${environment.baseUrl}/user/signup`, JSON.stringify(value), httpOptions);
  }

  setUserInfo(value: any) {
    return this.http.post(`${environment.baseUrl}/user/changeprofile`, JSON.stringify(value), httpOptions);
  }

  setUserPwd(value: any) {
    return this.http.post(`${environment.baseUrl}/user/changepwd`, JSON.stringify(value), httpOptions);
  }
}


