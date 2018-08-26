import { TestBed, inject } from '@angular/core/testing';

import { RealTimeFilterService } from './real-time-filter.service';

describe('RealTimeFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealTimeFilterService]
    });
  });

  it('should be created', inject([RealTimeFilterService], (service: RealTimeFilterService) => {
    expect(service).toBeTruthy();
  }));
});
