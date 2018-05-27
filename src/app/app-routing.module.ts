import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcrHomeComponent } from './ocr-home/ocr-home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OcrHomeComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
