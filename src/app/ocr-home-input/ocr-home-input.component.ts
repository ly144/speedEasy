import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import { FileUploader, ParsedResponseHeaders } from 'ng2-file-upload';
import { Result } from '../models/result';
import { UPLOADURL } from '../models/uploadUrl';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Response } from '../models/response';

@Component({
  selector: 'app-ocr-home-input',
  templateUrl: './ocr-home-input.component.html',
  styleUrls: ['./ocr-home-input.component.css']
})
export class OcrHomeInputComponent implements OnInit {

  isImage = false; // 是否有文件
  isUpload = false; // 是否识别
  selectedImgUrl: any[] = []; // 上传所有文件地址
  selectedImgName: string[] = []; // 上传所有文件名称
  selectedImgSize: number[] = []; // 上传所有文件大小
  selectedImgLength = 0; // 上传文件的数量
  onSelectedImgName: string; // 当前选择的文件名称
  onSelectedImgUrl: any; // 当前选择的文件地址
  txt: Result = { ern: '企业注册号', companyName: '企业名称', fileUrl: '文件地址' };
  value: String = '拖拽文件到此处上传';

  textwidth = 'col-7';

  formData: FormData = new FormData();
  downloadUrl = UPLOADURL + '/download/excel?fileUrl=';

  content;

  uploader: FileUploader = new FileUploader({
    url: UPLOADURL + '/upload/file',
    method: 'POST',
    itemAlias: 'file', // 文件标记/别名
    autoUpload: false, // 是否自动上传
  });

  changeState() {
    this.isImage = true;
    this.textwidth = 'col-6';
  }

  /**
   * 上传选择的文件
   * @param {HTMLInputElement} file
   */
  selectedFileOnChanged(file: HTMLInputElement) {
    console.log(this.selectedImgLength);
    const selectedArrName = this.selectedImgName;
    const selectedArr = this.selectedImgUrl;
    const selectedArrSize = this.selectedImgSize;
    for (this.selectedImgLength; this.selectedImgLength < this.uploader.queue.length; this.selectedImgLength++) {
      const q = this.uploader.queue[this.selectedImgLength];
      const name = q._file.name;
      const names = name.substring(name.indexOf('.'));
      console.log(names);
      if (names === '.zip') {
        selectedArrSize.push(q.file.size / 1024);
        selectedArrName.push(q._file.name);
        selectedArr.push('../../assets/image/ysb.png');
        this.formData.append('file', q.some);
        q.remove();
      } else {
        selectedArrSize.push(q.file.size / 1024);
        selectedArrName.push(q._file.name);
        const reader = new FileReader();
        reader.readAsDataURL(q.some);
        reader.onload = function () {
          selectedArr.push(this.result);
        };
      }
    }
    console.log(this.uploader.queue.length);
    this.changeState();

  }
  uploadFile() {
    // 上传跨域验证
    this.uploader.queue.forEach(queue => {
      console.log('添加文件');
      const singleFile = queue.some;
      // files 这个名字和spring mvc controller参数的名字要对应
      this.formData.append('files', singleFile);
    });
    console.log('添加完成，上传');
    this.ocrInputService.uploadFiles(this.formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // this.uploadProgress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('Files uploaded!');
        this.formData = new FormData();
        console.log(this.downloadUrl + ( event.body as Response).rspMsg);
        this.downloadUrl = this.downloadUrl + ( event.body as Response).rspMsg;
        this.isUpload = true;
      }
    });
  }

  /**
   * 拖拽状态改变的回调函数
   * @param event
   */
  fileOverBase(event) {
    this.value = '松开上传';
  }
  /**
   * 文件拖拽完成的回调函数
   * @param event
   */
  fileDropOver(event) {
    console.log(this.selectedImgLength);
    const selectedArrName = this.selectedImgName;
    const selectedArr = this.selectedImgUrl;
    const selectedArrSize = this.selectedImgSize;
    for (this.selectedImgLength; this.selectedImgLength < this.uploader.queue.length; this.selectedImgLength++) {
      const q = this.uploader.queue[this.selectedImgLength];
      selectedArrSize.push(q.file.size / 1024);
      selectedArrName.push(q._file.name);
      const reader = new FileReader();
      reader.readAsDataURL(q.some);
      reader.onload = function () {
        selectedArr.push(this.result);
      };
    }
    console.log(this.uploader.queue.length);
    this.changeState();
    this.value = '拖拽文件到此处上传';
  }

  /**
   * 打开浮窗
   * @param content
   */
  openVerticallyCentered(content, i) {
    this.onSelectedImgName = this.selectedImgName[i];
    this.onSelectedImgUrl = this.selectedImgUrl[i];
    this.content = content;
    this.modalService.open(content, { centered: true });
  }

  imgClose(i) {
    console.log('Close');
    this.uploader.queue[i].remove();
    this.selectedImgUrl.splice(i, 1);
    this.selectedImgName.splice(i, 1);
    this.selectedImgSize.splice(i, 1);
    this.selectedImgLength--;
    if (this.selectedImgLength === 0) {
      this.isImage = false;
      this.textwidth = 'col-7';
    }
  }

  constructor(
    public ocrInputService: OcrInputService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    ) { }

  ngOnInit() {
  }
}
