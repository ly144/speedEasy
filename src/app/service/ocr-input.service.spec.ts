import { TestBed, inject } from '@angular/core/testing';

import { OcrInputService } from './ocr-input.service';

describe('OcrInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcrInputService]
    });
  });

  it('should be created', inject([OcrInputService], (service: OcrInputService) => {
    expect(service).toBeTruthy();
  }));
});
