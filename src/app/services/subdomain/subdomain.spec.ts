import { TestBed } from '@angular/core/testing';

import { Subdomain } from './subdomain';

describe('Subdomain', () => {
  let service: Subdomain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Subdomain);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
