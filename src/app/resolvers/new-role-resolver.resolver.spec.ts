import { TestBed } from '@angular/core/testing';

import { NewRoleResolverResolver } from './new-role-resolver.resolver';

describe('NewRoleResolverResolver', () => {
  let resolver: NewRoleResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewRoleResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
