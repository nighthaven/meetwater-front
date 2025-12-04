import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth/auth'; // ← importe ton service !!

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,       // ← utilise ton service
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;

    this.auth.login(email, password).subscribe({
      next: (response: any) => {
        console.log('Réponse backend :', response);
        this.auth.saveToken(response.access_token);
        this.router.navigate(['/representative-dashboard']);
      },
      error: (err) => {
        console.error('Erreur login :', err);
        alert('Login échoué : ' + (err.error.detail || err.message));
      },
    });
  }
}
