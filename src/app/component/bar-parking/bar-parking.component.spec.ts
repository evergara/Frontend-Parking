import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarParkingComponent } from './bar-parking.component';

describe('BarParkingComponent', () => {
  let component: BarParkingComponent;
  let fixture: ComponentFixture<BarParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
