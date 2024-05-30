import { TestBed } from '@angular/core/testing';

import { ContainerTypesService } from './container-types.service';

describe('ContainerTypesService', () => {
  let service: ContainerTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
