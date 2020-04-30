import { TestBed } from '@angular/core/testing';

import { IpoplanService } from './ipoplan.service';

describe('IpoplanService', () => {
  let service: IpoplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpoplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
