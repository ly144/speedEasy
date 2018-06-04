import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrHistoryComponent } from './ocr-history/ocr-history.component';
// import { OcrPersonalComponent } from './ocr-personal/ocr-personal.component';
import { OcrLoginComponent } from './ocr-login/ocr-login.component';
import { OcrRegisterComponent } from './ocr-register/ocr-register.component';
import { OcrHomeInputComponent } from './ocr-home-input/ocr-home-input.component';
import { OcrFooterComponent } from './ocr-footer/ocr-footer.component';
import { OcrCkeditorComponent } from './ocr-ckeditor/ocr-ckeditor.component';
import { AppRoutingModule } from './/app-routing.module';
import { OcrInputService } from './service/ocr-input.service';
import { AuthInterceptor } from './service/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OcrHomeComponent,
    OcrHistoryComponent,
    // OcrPersonalComponent,
    OcrLoginComponent,
    OcrRegisterComponent,
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
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
