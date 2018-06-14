import { Component } from '@angular/core';
import { INFO } from './models/info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = '';
  isLogin = false;

  constructor() { }
}
