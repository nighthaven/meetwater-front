import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRepresentative } from './register-representative';

describe('RegisterRepresentative', () => {
  let component: RegisterRepresentative;
  let fixture: ComponentFixture<RegisterRepresentative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRepresentative]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRepresentative);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
