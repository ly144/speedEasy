import { Component, OnInit} from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import { UPLOADURL } from '../models/uploadUrl';

class Personal {
  cno: string;
  cname: string;
  cpasd: string;
  profession: string;
  address: string;
  phone: string;
  cregTime: string;
}

@Component({
  selector: 'app-ocr-childpersonal1',
  templateUrl: './ocr-childpersonal1.component.html',
  styleUrls: ['./ocr-childpersonal1.component.css'],
})
export class OcrChildpersonal1Component implements OnInit {

  imgurl = UPLOADURL + '/image/usr';
  per: Personal = new Personal();

  constructor(private ocrInputService: OcrInputService) { }

  ngOnInit() {
    this.getPersonal();
  }

  setPersonal() {
    document.getElementById('closeButton').click();
    document.getElementById('childPersonal2').click();
  }

  getPersonal() {
    this.ocrInputService.getPersonal()
      .subscribe(data => {
        console.log(data);
        this.per = (data as Personal);
      });
  }

}
