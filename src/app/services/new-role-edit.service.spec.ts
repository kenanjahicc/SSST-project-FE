import { TestBed } from '@angular/core/testing';

import { NewRoleEditService } from './new-role-edit.service';

describe('NewRoleEditService', () => {
  let service: NewRoleEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRoleEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
