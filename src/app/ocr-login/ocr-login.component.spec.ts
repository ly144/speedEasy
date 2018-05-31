import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrLoginComponent } from './ocr-login.component';

describe('OcrLoginComponent', () => {
  let component: OcrLoginComponent;
  let fixture: ComponentFixture<OcrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
