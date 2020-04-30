import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

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
