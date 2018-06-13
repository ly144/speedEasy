import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Result } from '../models/result';
import { UPLOADURL } from '../models/uploadUrl';
import { User } from '../models/user';
import { Response } from '../models/response';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class OcrInputService {

  private isLogin = false;

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) {
    // this.isLogin = localStorage.getItem('id_token') !== undefined;
  }

  /**
   * 登录
   * @param model
   * @returns {Observable<boolean>}
   */
  loginVerify(model): Observable<Response> {
    return this.http.post<Response>(UPLOADURL + '/user/login', JSON.stringify(model), httpOptions)
      .pipe(
        catchError(this.handleError('loginVerify'))
      );
  }

  /**
   * 注册
   * @param {User} user
   * @returns {Observable<User>}
   */
  sendUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(UPLOADURL + '/user/reg', JSON.stringify(user), httpOptions)
      .pipe(
        catchError(this.handleError('sendUser'))
      );
  }

  /**
   * 上传图片
   * @param {FormData} formData
   * @returns {Observable<HttpEvent<any>>}
   */
  uploadFiles(formData: FormData) {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers
      .set('Cache-Control', 'no-cache')
      .set('Authorization', 'Bearer ' + token);
    const url = UPLOADURL + '/upload/file';
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true, headers: headers
    });
    console.log('上传');
    return this.http.request(req);
  }

  public isLoggedIn() {
    return this.isLogin;
  }

}
