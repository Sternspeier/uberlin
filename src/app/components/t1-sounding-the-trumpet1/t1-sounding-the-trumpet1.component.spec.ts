import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1SoundingTheTrumpet1Component } from './t1-sounding-the-trumpet1.component';

describe('T1SoundingTheTrumpet1Component', () => {
  let component: T1SoundingTheTrumpet1Component;
  let fixture: ComponentFixture<T1SoundingTheTrumpet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1SoundingTheTrumpet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1SoundingTheTrumpet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
