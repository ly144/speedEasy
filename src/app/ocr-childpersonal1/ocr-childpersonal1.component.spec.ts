import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrChildpersonal1Component } from './ocr-childpersonal1.component';

describe('OcrChildpersonal1Component', () => {
  let component: OcrChildpersonal1Component;
  let fixture: ComponentFixture<OcrChildpersonal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrChildpersonal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrChildpersonal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
