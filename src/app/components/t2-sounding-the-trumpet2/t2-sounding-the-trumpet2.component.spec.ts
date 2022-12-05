import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2SoundingTheTrumpet2Component } from './t2-sounding-the-trumpet2.component';

describe('T2SoundingTheTrumpet2Component', () => {
  let component: T2SoundingTheTrumpet2Component;
  let fixture: ComponentFixture<T2SoundingTheTrumpet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2SoundingTheTrumpet2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2SoundingTheTrumpet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
