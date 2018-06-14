import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = '';
  isLogin = false;

  logout() {
    // this.isLogin = false;
    localStorage.removeItem('token');
    // localStorage.removeItem('expires_at');
    // this.loginSubject.next(false);
    this.user = '';
    this.isLogin = true;
  }

  constructor() { }
}
