import { TestBed } from '@angular/core/testing';

import { SimpleTablesService } from './simple-tables.service';

describe('SimpleTablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleTablesService = TestBed.get(SimpleTablesService);
    expect(service).toBeTruthy();
  });
});
