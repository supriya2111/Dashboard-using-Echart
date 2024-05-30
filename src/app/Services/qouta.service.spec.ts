import { TestBed } from '@angular/core/testing';

import { QoutaService } from './qouta.service';

describe('QoutaService', () => {
  let service: QoutaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QoutaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
