import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(token: string) {
    return localStorage.getItem('token');
  }

  login(userInfo: {
    email: string;
    password: string;
  }): Observable<string | boolean> {
    if (
      userInfo.email === 'admin@gmail.com' &&
      userInfo.password === 'user123'
    ) {
      this.setToken('usertoken1');
      return of(true);
    } else if (
      userInfo.email === 'user@gmail.com' &&
      userInfo.password === 'admin456'
    ) {
      this.setToken('usertoken221');
      return of(true);
    }
    return throwError(() => new Error('Failed Login'));
  }
}
