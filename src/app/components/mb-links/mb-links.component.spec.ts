import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbLinksComponent } from './mb-links.component';

describe('MbLinksComponent', () => {
  let component: MbLinksComponent;
  let fixture: ComponentFixture<MbLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
