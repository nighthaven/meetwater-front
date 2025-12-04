import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Swimmer} from './swimmer.model';


@Injectable({
  providedIn: 'root',
})
export class GetSwimmers {
  private apiUrl = 'http://localhost:8000/swimmers/';

  constructor(private http: HttpClient) {}

  getSwimmers(): Observable<Swimmer[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Swimmer[]>(this.apiUrl, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
