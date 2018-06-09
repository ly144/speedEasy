import { Component, OnInit } from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocr-login',
  templateUrl: './ocr-login.component.html',
  styleUrls: ['./ocr-login.component.css']
})
export class OcrLoginComponent implements OnInit {

  model = { 'username': '', 'password': '' };
  verification = '';

  onSubmit() {
    console.log(this.model);
    this.ocrInputService.loginVerify(this.model)
      .subscribe((res) => {
        console.log(res.rspCode);
        console.log(res.rspMsg);
        console.log(res.data);
        this.setSession(res);
        this.model.username = '';
        this.model.password = '';
        this.verification = '';
        // this.router.navigate(['/home']);
        return res as any;
      });
  }

  private setSession(authResult) {
    console.log(authResult.rspCode);
    if (authResult.rspCode === '000000') {
      // const expiresAt = moment().add(authResult.expiresIn, 'second');
      localStorage.setItem('token', authResult.data);
      // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
      // this.isLogin = true;
      // this.loginSubject.next(true);
    } else {
      console.log('else');
    }
  }

  logout() {
    // this.isLogin = false;
    localStorage.removeItem('token');
    // localStorage.removeItem('expires_at');
    // this.loginSubject.next(false);
  }

  constructor(
    private ocrInputService: OcrInputService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }
}
