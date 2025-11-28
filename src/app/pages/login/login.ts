import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      const body = new URLSearchParams();
      body.set('username', this.loginForm.value.email!);
      body.set('password', this.loginForm.value.password!);

      this.http.post('http://localhost:8000/login', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).subscribe({
        next: (response: any) => {
          console.log('Réponse backend :', response);
          localStorage.setItem('token', response.access_token);
          this.router.navigate(['/user']);
        },
        error: (err) => {
          console.error('Erreur login :', err);
          alert('Login échoué : ' + (err.error.detail || err.message));
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
