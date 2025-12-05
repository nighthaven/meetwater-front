import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Booking} from './booking.model';

@Injectable({
  providedIn: 'root',
})
export class GetBookings {
  private apiUrl = 'http://localhost:8000/bookings/';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Booking[]>(this.apiUrl, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
