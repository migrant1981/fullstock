import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrockpriceComponent } from './strockprice.component';

describe('StrockpriceComponent', () => {
  let component: StrockpriceComponent;
  let fixture: ComponentFixture<StrockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
