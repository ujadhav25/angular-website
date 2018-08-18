import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocailComponent } from './socail.component';

describe('SocailComponent', () => {
  let component: SocailComponent;
  let fixture: ComponentFixture<SocailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
