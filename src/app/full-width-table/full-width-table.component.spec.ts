import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthTableComponent } from './full-width-table.component';

describe('FullWidthTableComponent', () => {
  let component: FullWidthTableComponent;
  let fixture: ComponentFixture<FullWidthTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
