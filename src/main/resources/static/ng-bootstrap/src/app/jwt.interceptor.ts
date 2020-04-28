import { Unit } from './unit';
/*
 * @Author: your name
 * @Date: 2020-04-20 14:14:58
 * @LastEditTime: 2020-04-20 14:25:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\jwt.interceptor.ts.ts
 */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from './unit';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private unit: Unit) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.unit.currentUserToken;
    console.log('token:' + token);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(request);
  }
}
