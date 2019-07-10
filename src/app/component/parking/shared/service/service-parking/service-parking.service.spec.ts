import { TestBed } from '@angular/core/testing';

import { ServiceParkingService } from './service-parking.service';

describe('ServiceParkingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceParkingService = TestBed.get(ServiceParkingService);
    expect(service).toBeTruthy();
  });
});
