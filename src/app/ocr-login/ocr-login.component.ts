import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OcrInputService } from '../service/ocr-input.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-ocr-login',
  templateUrl: './ocr-login.component.html',
  styleUrls: ['./ocr-login.component.css'],
})
export class OcrLoginComponent {

  model = {'username': '', 'password': ''};
  verification = '';

  onSubmit() {
    console.log(this.model);
    this.ocrInputService.loginVerify(this.model)
      .subscribe((res) => {
        console.log(res.rspCode);
        console.log(res.rspMsg);
        console.log(res.data);
        localStorage.setItem('token', res.rspMsg);
        this.appComponent.user = this.model.username;
        this.appComponent.isLogin = true;
        // this.ocrInputService.isLogin = true;
        document.getElementById('closeLoginModal').click();
        this.model.username = '';
        this.model.password = '';
        this.verification = '';
        return res as any;
      });
  }

  constructor(private ocrInputService: OcrInputService,
              private router: Router,
              private modalService: NgbModal,
              private appComponent: AppComponent) {
  }

  openLogin(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', centered: true});
  }
}
