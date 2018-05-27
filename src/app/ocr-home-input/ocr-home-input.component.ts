import { Component, Input, OnInit, Output } from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import { Observable } from 'rxjs';
import { FileUploader, ParsedResponseHeaders } from 'ng2-file-upload';
import { Txt } from '../useCase/Txt';

@Component({
  selector: 'app-ocr-home-input',
  templateUrl: './ocr-home-input.component.html',
  styleUrls: ['./ocr-home-input.component.css']
})
export class OcrHomeInputComponent implements OnInit {

  uploadUrl: String = 'http://10.0.0.20:8080';
  // uploadUrl: String = 'http://10.0.0.16:8080';

  txt: Txt = { id: '123', name: '456' };

  uploader: FileUploader = new FileUploader({
    url: this.uploadUrl + '/test/upload',
    method: 'POST',
    itemAlias: 'file',
    autoUpload: false,
  });

  selectedFileOnChanged(event) {
    console.log(event.target.value);
    console.log(event);
    // this.uploadFile();
  }
  uploadFile() {
    // 上传跨域验证
    this.uploader.queue.forEach(queue => {
      queue.withCredentials = false;
      queue.onError = (response: string, status: number, headers: ParsedResponseHeaders) => {
        console.log(response, status, headers);
      };
      queue.onSuccess = (response, status, headers) => {
        if (status === 200) {
          const res = JSON.parse(response);
          console.log('res', res);
        } else {
          // console.log("err",response, status, headers);//判断错在哪同样重要
          console.log('err', Error);
        }
      };
      queue.upload();
    });
  }

  getTxt() {
    this.ocrInputService.getTxt()
      .subscribe( (data: Txt) => {
        console.log(data);
        this.txt =  {
        id: data['ern'],
        name: data['companyName']
        };
        console.log(this.txt);
      });
  }

  constructor(public ocrInputService: OcrInputService) { }

  ngOnInit() {
    this.getTxt();
  }
}
