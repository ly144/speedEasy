import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrHomeInputComponent } from './ocr-home-input/ocr-home-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OcrHomeComponent,
    OcrHomeInputComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ProjectDetailPageModule { }
