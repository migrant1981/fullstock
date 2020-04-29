import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

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
    return {
      id: '1',
      username:'Seller001',
      usertype: 'User',
      email: 'testtest@cn.ibm.com',
      mobile: '17700998899'
    };
  }

  signup(value: any) {
    return this.http.post(`${environment.baseUrl}/signup`, JSON.stringify(value), httpOptions);
  }

  setUserInfo(value: any) {
    return this.http.post(`${environment.baseUrl}/useraction`, JSON.stringify(value), httpOptions);
  }

  setUserPwd(value: any) {
    return this.http.post(`${environment.baseUrl}/userpwdaction`, JSON.stringify(value), httpOptions);
  }
}


