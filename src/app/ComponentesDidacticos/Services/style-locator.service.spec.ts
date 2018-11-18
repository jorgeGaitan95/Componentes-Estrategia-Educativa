import { TestBed, inject } from '@angular/core/testing';

import { StyleLocatorService } from './style-locator.service';

describe('StyleLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleLocatorService]
    });
  });

  it('should be created', inject([StyleLocatorService], (service: StyleLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
