import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrHomeInputComponent } from './ocr-home-input/ocr-home-input.component';
import { OcrFooterComponent } from './ocr-footer/ocr-footer.component';
import { OcrCkeditorComponent } from './ocr-ckeditor/ocr-ckeditor.component';
import { AppRoutingModule } from './/app-routing.module';
import { OcrInputService } from './service/ocr-input.service';

@NgModule({
  declarations: [
    AppComponent,
    OcrHomeComponent,
    OcrHomeInputComponent,
    OcrFooterComponent,
    OcrCkeditorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    FileUploadModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    QuillModule,
  ],
  providers: [
    OcrInputService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
