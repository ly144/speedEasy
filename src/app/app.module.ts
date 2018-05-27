import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrHistoryComponent } from './ocr-history/ocr-history.component';
import { OcrPersonalComponent } from './ocr-personal/ocr-personal.component';
import { OcrLoginComponent } from './ocr-login/ocr-login.component';
import { FormsModule } from '@angular/forms';
import { OcrRegisterComponent } from './ocr-register/ocr-register.component';


@NgModule({
  declarations: [
    AppComponent,
    OcrHomeComponent,
    OcrHistoryComponent,
    OcrPersonalComponent,
    OcrLoginComponent,
    OcrRegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FileUploadModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ProjectDetailPageModule { }
