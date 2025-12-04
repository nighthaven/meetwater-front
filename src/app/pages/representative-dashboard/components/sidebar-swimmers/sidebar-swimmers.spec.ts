import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSwimmers } from './sidebar-swimmers';

describe('SidebarSwimmers', () => {
  let component: SidebarSwimmers;
  let fixture: ComponentFixture<SidebarSwimmers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSwimmers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSwimmers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
