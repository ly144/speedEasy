import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../models/language';
import { LANGUAGES } from '../models/languages';

@Component({
  selector: 'app-ocr-home',
  templateUrl: './ocr-home.component.html',
  styleUrls: ['./ocr-home.component.css']
})
export class OcrHomeComponent implements OnInit {

  languages = LANGUAGES;

  selectedLanguage: Language = this.languages[0];

  isDisplay: String = 'none';

  onSelect(language: Language): void {
    this.selectedLanguage = language;
  }

  onDisplay(): void {
    if (this.isDisplay === 'none') {
      this.isDisplay = 'block';
    } else {
      this.isDisplay = 'none';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
