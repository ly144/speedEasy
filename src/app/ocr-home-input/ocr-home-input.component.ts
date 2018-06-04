import {Component, HostListener, Input, OnInit, Output} from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import { Observable } from 'rxjs';
import { FileUploader, ParsedResponseHeaders } from 'ng2-file-upload';
import { Result } from '../models/result';
import { UPLOADURL } from '../models/uploadUrl';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-ocr-home-input',
  templateUrl: './ocr-home-input.component.html',
  styleUrls: ['./ocr-home-input.component.css']
})
export class OcrHomeInputComponent implements OnInit {

  isImage = false;
  images: any;
  txt: Result = { ern: '企业注册号', companyName: '企业名称', fileUrl: '文件地址' };
  value: String = '拖拽文件到此处上传';

  uploader: FileUploader = new FileUploader({
    url: UPLOADURL + '/test/upload',
    method: 'POST',
    itemAlias: 'file',
    autoUpload: false,
  });

  @HostListener('window:resize', ['$event'])
  selectedFileOnChanged(event) {
    const file = this.uploader.queue[0];
    console.log(file);
    // 必须 bypassSecurityTrustUrl 转换一下 url ，要不能angular会报，说url不安全错误。
    this.images = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    // this.getImagePath(event);
    this.isImage = true;
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

  fileOverBase(event) {
    // 拖拽状态改变的回调函数
    this.value = '松开上传';
  }
  fileDropOver(event) {
    // 文件拖拽完成的回调函数
    console.log(event);
    console.log('length:' + this.uploader.queue.length);
    this.value = '拖拽文件到此处上传';
  }

  getImagePath(event) {
  }

  constructor(
    public ocrInputService: OcrInputService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
  }
}
