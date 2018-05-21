import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrHomeComponent } from './ocr-home.component';

describe('OcrHomeComponent', () => {
  let component: OcrHomeComponent;
  let fixture: ComponentFixture<OcrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
