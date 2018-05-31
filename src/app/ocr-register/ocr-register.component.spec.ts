import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrRegisterComponent } from './ocr-register.component';

describe('OcrRegisterComponent', () => {
  let component: OcrRegisterComponent;
  let fixture: ComponentFixture<OcrRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
