/*
 * @Author: your name
 * @Date: 2020-04-24 11:10:12
 * @LastEditTime: 2020-04-24 11:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\notification.service.ts
 */
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [];
export class NotificationService {
  alerts : Alert[];

  constructor() { }

}
