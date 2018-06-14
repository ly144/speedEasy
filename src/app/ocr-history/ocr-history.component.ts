import { Component, OnInit } from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import { UPLOADURL } from '../models/uploadUrl';

class History {
  id: number;
  cno: string;
  filePath: string;
  regcTime: string;
}

@Component({
  selector: 'app-ocr-history',
  templateUrl: './ocr-history.component.html',
  styleUrls: ['./ocr-history.component.css']
})
export class OcrHistoryComponent implements OnInit {

  imgurl = UPLOADURL + '/image/usr';
  his: History[] = [];

  getHistory() {
    this.ocrInputService.getHistory()
      .subscribe(data => {
        console.log(data);
        this.his = (data as History[]);
      });
  }

  constructor(private ocrInputService: OcrInputService) { }

  ngOnInit() {
    this.getHistory();
  }

}
