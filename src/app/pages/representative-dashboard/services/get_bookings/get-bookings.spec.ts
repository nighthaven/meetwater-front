import { TestBed } from '@angular/core/testing';

import { GetBookings } from './get-bookings';

describe('GetBookings', () => {
  let service: GetBookings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBookings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
