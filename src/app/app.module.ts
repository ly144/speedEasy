import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
