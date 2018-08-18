import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAbnnerComponent } from './main-abnner.component';

describe('MainAbnnerComponent', () => {
  let component: MainAbnnerComponent;
  let fixture: ComponentFixture<MainAbnnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAbnnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAbnnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
