import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ocr-childpersonal1',
  templateUrl: './ocr-childpersonal1.component.html',
  styleUrls: ['./ocr-childpersonal1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OcrChildpersonal1Component implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openchildpersonal1(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', centered: true, size: 'sm'});
  }
}
