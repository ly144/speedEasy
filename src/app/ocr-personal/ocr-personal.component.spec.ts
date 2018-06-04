import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrPersonalComponent } from './ocr-personal.component';

describe('OcrPersonalComponent', () => {
  let component: OcrPersonalComponent;
  let fixture: ComponentFixture<OcrPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
