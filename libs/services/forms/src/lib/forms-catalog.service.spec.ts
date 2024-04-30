import { TestBed } from '@angular/core/testing';

import { FormsCatalogService } from './forms-catalog.service';

describe('FormsCatalogService', () => {
  let service: FormsCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
