import { TestBed } from '@angular/core/testing';

import { NewRoleService } from './new-role.service';

describe('NewRoleService', () => {
  let service: NewRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
