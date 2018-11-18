import { TestBed, inject } from '@angular/core/testing';

import { TemplateLocatorService } from './template-locator.service';

describe('TemplateLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateLocatorService]
    });
  });

  it('should be created', inject([TemplateLocatorService], (service: TemplateLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
