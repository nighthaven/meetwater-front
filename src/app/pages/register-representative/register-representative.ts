import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {minimumAgeValidator, passwordMatchValidator, passwordPatternValidator} from './validators';


@Component({
  selector: 'app-register-representative',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register-representative.html',
  styleUrls: ['./register-representative.scss'],
})
export class RegisterRepresentative {

  registerRepresentativeForm;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

    this.registerRepresentativeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, minimumAgeValidator(18)]],
      email: ['', [Validators.required, Validators.email]],
      raw_password: ['', [Validators.required, passwordPatternValidator]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  submit() {
    if (!this.registerRepresentativeForm.valid) {
      this.registerRepresentativeForm.markAllAsTouched();
      return;
    }

    const values = this.registerRepresentativeForm.value;
    const payload = {
      first_name: values.firstName,
      last_name: values.lastName,
      birth_date: new Date(values.birthDate!).toISOString().split('T')[0],
      email: values.email,
      raw_password: values.raw_password
    };

    this.http.post('http://localhost:8000/representatives/', payload)
      .subscribe({
        next: res => {
          console.log('Success:', res);
          this.router.navigate(['/login']);
        },
        error: err => console.error('Error:', err)
      });
  }
}
