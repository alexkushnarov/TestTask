import { TestBed, inject } from '@angular/core/testing';

import { ScheduleGatewayService } from './schedule-gateway.service';

describe('ScheduleGatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleGatewayService]
    });
  });

  it('should be created', inject([ScheduleGatewayService], (service: ScheduleGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
