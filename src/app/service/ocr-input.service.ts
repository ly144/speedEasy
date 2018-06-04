import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Result } from '../models/result';
import { UPLOADURL } from '../models/uploadUrl';
import { User } from '../models/user';
import { Response } from '../models/response';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class OcrInputService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { }

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

  readAsDataUrl(file) {
    const that = this;
    return new Promise(function(resolve, reject) {
      const reader = that.getReader(resolve, reject);
      reader.readAsDataURL(file);
    });
  }
  getReader(resolve, reject) {
    const reader = new FileReader();
    reader.onload = this.Onload(reader, resolve);
    reader.onerror = this.OnError(reader, reject);
    return reader;
  }
  Onload(reader: FileReader, resolve) {
    return () => {
      resolve(reader.result);
    };
  }
  OnError(reader: FileReader, reject) {
    return () => {
      reject(reader.result);
    };
  }


}
