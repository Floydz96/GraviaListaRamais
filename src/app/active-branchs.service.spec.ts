import { TestBed } from '@angular/core/testing';

import { ActiveBranchsService } from './active-branchs.service';

describe('ActiveBranchsService', () => {
  let service: ActiveBranchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveBranchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
