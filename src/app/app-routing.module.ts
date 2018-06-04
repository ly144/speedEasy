import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';
import { OcrCkeditorComponent } from './ocr-ckeditor/ocr-ckeditor.component';
import {OcrLoginComponent} from './ocr-login/ocr-login.component';
import {OcrPersonalComponent} from './ocr-personal/ocr-personal.component';
import {OcrRegisterComponent} from './ocr-register/ocr-register.component';
import {OcrHistoryComponent} from './ocr-history/ocr-history.component';
import {OcrChildpersonal1Component} from './ocr-childpersonal1/ocr-childpersonal1.component';
import {OcrChildpersonal2Component} from './ocr-childpersonal2/ocr-childpersonal2.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OcrHomeComponent},
  { path: 'ckeditor', component: OcrCkeditorComponent },
  { path: 'login', component: OcrLoginComponent },
  { path: 'register', component: OcrRegisterComponent },
  { path: 'history', component: OcrHistoryComponent },
  { path: 'ocr-personal', component: OcrPersonalComponent,
      children: [
        { path: '', component: OcrChildpersonal1Component},
        { path : 'childpersonal1', component: OcrChildpersonal1Component},
        { path : 'childpersonal2', component: OcrChildpersonal2Component}
      ]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
