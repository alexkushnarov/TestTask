import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGatewayComponent } from './schedule-gateway.component';

describe('ScheduleGatewayComponent', () => {
  let component: ScheduleGatewayComponent;
  let fixture: ComponentFixture<ScheduleGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
