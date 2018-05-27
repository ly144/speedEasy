import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrHomeInputComponent } from './ocr-home-input.component';

describe('OcrHomeInputComponent', () => {
  let component: OcrHomeInputComponent;
  let fixture: ComponentFixture<OcrHomeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrHomeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrHomeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
