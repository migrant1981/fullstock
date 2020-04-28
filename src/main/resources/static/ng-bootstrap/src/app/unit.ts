/*
 * @Author: your name
 * @Date: 2020-04-19 10:28:21
 * @LastEditTime: 2020-04-21 20:10:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\unit.ts
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserService } from '../app/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class Unit {

  constructor(private http: HttpClient) { }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }

  postSignIn(user) {
    return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);
  }
}

