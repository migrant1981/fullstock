import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportstockComponent } from './importstock.component';

describe('ImportstockComponent', () => {
  let component: ImportstockComponent;
  let fixture: ComponentFixture<ImportstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
