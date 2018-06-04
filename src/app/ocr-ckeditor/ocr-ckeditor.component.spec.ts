import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrSpreadComponent } from './ocr-ckeditor.component';

describe('OcrSpreadComponent', () => {
  let component: OcrSpreadComponent;
  let fixture: ComponentFixture<OcrSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
