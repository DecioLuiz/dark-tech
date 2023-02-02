import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooterComponent } from './hooter.component';

describe('HooterComponent', () => {
  let component: HooterComponent;
  let fixture: ComponentFixture<HooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
