import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWrapperComponent } from './text-wrapper.component';

describe('TextWrapperComponent', () => {
  let component: TextWrapperComponent;
  let fixture: ComponentFixture<TextWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
