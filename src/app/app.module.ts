import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrHistoryComponent } from './ocr-history/ocr-history.component';
import { OcrPersonalComponent } from './ocr-personal/ocr-personal.component';
import { OcrLoginComponent } from './ocr-login/ocr-login.component';
import { FormsModule } from '@angular/forms';
import { OcrRegisterComponent } from './ocr-register/ocr-register.component';

import { OcrHomeInputComponent } from './ocr-home-input/ocr-home-input.component';
import { AppRoutingModule } from './/app-routing.module';
import { OcrFooterComponent } from './ocr-footer/ocr-footer.component';
import { OcrInputService } from './service/ocr-input.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OcrChildpersonal1Component } from './ocr-childpersonal1/ocr-childpersonal1.component';
import { OcrChildpersonal2Component } from './ocr-childpersonal2/ocr-childpersonal2.component';

@NgModule({
  declarations: [
    AppComponent,
    OcrHomeComponent,
    OcrHistoryComponent,
    OcrPersonalComponent,
    OcrLoginComponent,
    OcrRegisterComponent,
    OcrHomeInputComponent,
    OcrFooterComponent,
    OcrChildpersonal1Component,
    OcrChildpersonal2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FileUploadModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    OcrInputService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
