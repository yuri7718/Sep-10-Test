import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleHoverTableComponent } from './responsible-hover-table.component';

describe('ResponsibleHoverTableComponent', () => {
  let component: ResponsibleHoverTableComponent;
  let fixture: ComponentFixture<ResponsibleHoverTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibleHoverTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibleHoverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
