import { TestBed, inject } from '@angular/core/testing';

import { EstrategiaDataService } from './estrategia-data.service';

describe('EstrategiaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstrategiaDataService]
    });
  });

  it('should be created', inject([EstrategiaDataService], (service: EstrategiaDataService) => {
    expect(service).toBeTruthy();
  }));
});
