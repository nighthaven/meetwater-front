import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepresentativeForm } from '../../models/representative-form.model'
import {RepresentativePayload} from '../../models/representative-payload.model';

@Injectable({
  providedIn: 'root',
})
export class CreateRepresentative {
  private apiUrl = 'http://localhost:8000/representatives';

  constructor(private http: HttpClient) {}

  createRepresentative(data: RepresentativeForm): Observable<any> {
    const payload: RepresentativePayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      birth_date: data.birthDate.toISOString().split('T')[0],
      email: data.email,
      raw_password: data.password
    };

    return this.http.post(this.apiUrl, payload);
  }
}
