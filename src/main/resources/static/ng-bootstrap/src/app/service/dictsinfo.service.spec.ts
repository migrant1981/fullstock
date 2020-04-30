/*
 * @Author: your name
 * @Date: 2020-04-21 20:29:04
 * @LastEditTime: 2020-04-21 21:08:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-bootstrap\src\app\dictsinfo.service.spec.ts
 */
import { TestBed } from '@angular/core/testing';

import { DictsinfoService } from './dictsinfo.service';

describe('DictsinfoService', () => {
  let service: DictsinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictsinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be check stock exchange', function() {
    expect(service.getStockExchange()).toContain('BSE');
  });

  it('should be check admin in list', function() {
    expect(service.getUserType()).toMatch('Admin');
  });

  it('should be search json style', function() {
    expect(service.getSearchJson()).toBeDefined();
  });
});
