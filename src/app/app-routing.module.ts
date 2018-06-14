import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcrCkeditorComponent } from './ocr-ckeditor/ocr-ckeditor.component';
import { OcrHistoryComponent } from './ocr-history/ocr-history.component';
import { OcrHomeInputComponent } from './ocr-home-input/ocr-home-input.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OcrHomeInputComponent },
  { path: 'ckeditor', component: OcrCkeditorComponent },
  { path: 'history', component: OcrHistoryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
