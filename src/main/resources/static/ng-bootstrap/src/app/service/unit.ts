import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserService } from '../service/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class Unit {

  constructor(private http: HttpClient) { }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }

  postSignIn(user): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/user/login`,
    JSON.stringify(user),
     httpOptions).pipe(
      tap(list => console.log('getTestList success!')),
      catchError(this.handleError('getTestList Error'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      // this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}

