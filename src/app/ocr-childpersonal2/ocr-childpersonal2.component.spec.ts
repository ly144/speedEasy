import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrChildpersonal2Component } from './ocr-childpersonal2.component';

describe('OcrChildpersonal2Component', () => {
  let component: OcrChildpersonal2Component;
  let fixture: ComponentFixture<OcrChildpersonal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrChildpersonal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrChildpersonal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
