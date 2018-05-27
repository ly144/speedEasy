import{ Component, OnInit } from '@angular/core';
// import { LANGUAGES } from '../languages';

@Component({
  selector: 'app-ocr-history',
  templateUrl: './ocr-history.component.html',
  styleUrls: ['./ocr-history.component.css']
})
export class OcrHistoryComponent implements OnInit {

  imgs: string[] = ['a', 'b', 'c', 'd'];

  // imgs = LANGUAGES;
  constructor() { }

  ngOnInit() {
  }

  Onselect(): void {
  }

}
