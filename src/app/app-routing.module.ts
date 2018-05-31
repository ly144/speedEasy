import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrCkeditorComponent } from './ocr-ckeditor/ocr-ckeditor.component';
import {OcrLoginComponent} from './ocr-login/ocr-login.component';
import {OcrPersonalComponent} from './ocr-personal/ocr-personal.component';
import {OcrRegisterComponent} from './ocr-register/ocr-register.component';
import {OcrHistoryComponent} from './ocr-history/ocr-history.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OcrHomeComponent},
  { path: 'ckeditor', component: OcrCkeditorComponent },
  { path: 'login', component: OcrLoginComponent },
  { path: 'register', component: OcrRegisterComponent },
  { path: 'history', component: OcrHistoryComponent },
  { path: 'personal', component: OcrPersonalComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
