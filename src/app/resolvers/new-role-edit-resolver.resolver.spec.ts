import { TestBed } from '@angular/core/testing';

import { NewRoleEditResolverResolver } from './new-role-edit-resolver.resolver';

describe('NewRoleEditResolverResolver', () => {
  let resolver: NewRoleEditResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewRoleEditResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
