/*
 * @Author: your name
 * @Date: 2020-04-21 16:03:00
 * @LastEditTime: 2020-04-21 20:24:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\money.pipe.ts
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number, floats?: number): string {
    return value.toFixed(isNaN(floats) ? 2 : floats);
  }

}
