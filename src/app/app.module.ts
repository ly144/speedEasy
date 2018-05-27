import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrHomeInputComponent } from './ocr-home-input/ocr-home-input.component';
import { AppRoutingModule } from './/app-routing.module';
import { OcrFooterComponent } from './ocr-footer/ocr-footer.component';
import { OcrInputService } from './service/ocr-input.service';

@NgModule({
  declarations: [
    AppComponent,
    OcrHomeComponent,
    OcrHomeInputComponent,
    OcrFooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FileUploadModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    OcrInputService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class ProjectDetailPageModule { }
