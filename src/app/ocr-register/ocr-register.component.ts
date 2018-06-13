import { Component, OnInit, ViewEncapsulation, OnChanges, AfterContentInit } from '@angular/core';
import { User } from '../models/user';
import { OcrInputService } from '../service/ocr-input.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ocr-register',
  templateUrl: './ocr-register.component.html',
  styleUrls: ['./ocr-register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OcrRegisterComponent implements OnInit, OnChanges, AfterContentInit {

  newUser: User = new User();
  repassword: String = '';

  onSubmit() {
    if (this.repassword === this.newUser.cpasd) {
      this.ocrInputService.sendUser(this.newUser)
        .subscribe((user: User) => {
            console.log(user);
            this.newUser = new User();
            this.repassword = '';
          }
        );
    } else {
      console.log('密码不一致！');
      this.newUser.cpasd = '';
      this.repassword = '';
    }
  }

  constructor(private ocrInputService: OcrInputService,
              private modalService: NgbModal) {
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
    // document.getElementById('openRegisterModal').click();
  }

  ngOnChanges() {
    console.log('OnChanges');
    // document.getElementById('openRegisterModal').click();
  }

  ngOnInit() {
    console.log('OnInit');
    // document.getElementById('openRegisterModal').click();
  }

  openregister(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', centered: true });
  }
}
