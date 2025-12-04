import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeDashboard } from './representative-dashboard';

describe('RepresentativeDashboard', () => {
  let component: RepresentativeDashboard;
  let fixture: ComponentFixture<RepresentativeDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepresentativeDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentativeDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
