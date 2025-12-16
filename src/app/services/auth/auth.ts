import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subdomain} from '../subdomain/subdomain';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:8000';

  constructor(
    private http: HttpClient,
    private subdomain: Subdomain,
    ) {}

  login(email: string, password: string): Observable<any> {
    const subdomain = this.subdomain.getCurrentSubdomain();
    const body = new URLSearchParams();
    body.set('username', email);
    body.set('password', password);

    return this.http.post(`${this.apiUrl}/login`, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'subdomain': subdomain,
      },
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
