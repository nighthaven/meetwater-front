import { TestBed } from '@angular/core/testing';

import { GetSwimmers } from './get-swimmers';

describe('GetSwimmers', () => {
  let service: GetSwimmers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSwimmers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
