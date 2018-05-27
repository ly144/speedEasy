import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Txt } from '../useCase/Txt';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class OcrInputService {

  uploadUrl: String = 'http://10.0.0.20:8080';
  // uploadUrl: String = 'http://10.0.0.16:8080';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { }

  getTxt(): Observable<Txt> {
    return this.http.get<Txt>(this.uploadUrl + '/test')
      .pipe(
        catchError(this.handleError('getTxt'))
      );
  }
}
