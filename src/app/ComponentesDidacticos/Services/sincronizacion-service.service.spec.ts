import { TestBed, inject } from '@angular/core/testing';

import { SincronizacionService } from './sincronizacion.service';

describe('SincronizacionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SincronizacionService]
    });
  });

  it('should be created', inject([SincronizacionService], (service: SincronizacionService) => {
    expect(service).toBeTruthy();
  }));
});
