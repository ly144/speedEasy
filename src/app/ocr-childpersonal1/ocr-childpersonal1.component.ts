import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ocr-childpersonal1',
  templateUrl: './ocr-childpersonal1.component.html',
  styleUrls: ['./ocr-childpersonal1.component.css'],
})
export class OcrChildpersonal1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setPersonal() {
    document.getElementById('childPersonal1').click();
    document.getElementById('childPersonal2').click();
  }

}
