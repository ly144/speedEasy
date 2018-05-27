import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrFooterComponent } from './ocr-footer.component';

describe('OcrFooterComponent', () => {
  let component: OcrFooterComponent;
  let fixture: ComponentFixture<OcrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
