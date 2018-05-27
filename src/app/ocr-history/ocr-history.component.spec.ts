import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrHistoryComponent } from './ocr-history.component';

describe('OcrHistoryComponent', () => {
  let component: OcrHistoryComponent;
  let fixture: ComponentFixture<OcrHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
