import { Component, OnInit } from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import {Router} from '@angular/router';

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
      .subscribe(
        (res) => {
          this.setSession(res);
          this.model.username = '';
          this.model.password = '';
          this.verification = '';
          // this.router.navigate(['/home']);
          return res as any;
        }
      );
  }

  private setSession(authResult) {
    if (authResult.status === 0) {
      // const expiresAt = moment().add(authResult.expiresIn, 'second');
      localStorage.setItem('id_token', authResult.id_token);
      // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
      // this.isLogin = true;
      // this.loginSubject.next(true);
    }
  }

  constructor(private ocrInputService: OcrInputService, private router: Router) {
  }

  ngOnInit() {
  }
}
