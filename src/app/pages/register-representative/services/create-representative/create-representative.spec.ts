import { TestBed } from '@angular/core/testing';

import { CreateRepresentative } from './create-representative';

describe('CreateRepresentative', () => {
  let service: CreateRepresentative;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRepresentative);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
