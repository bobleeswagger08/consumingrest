import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteraddressComponent } from './registeraddress.component';

describe('RegisteraddressComponent', () => {
  let component: RegisteraddressComponent;
  let fixture: ComponentFixture<RegisteraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
