import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRepresentative } from './services/create-representative/create-representative';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {minimumAgeValidator, passwordMatchValidator, passwordPatternValidator} from './validators';
import { RepresentativeForm } from './models/representative-form.model';


@Component({
  selector: 'app-register-representative',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-representative.html',
  styleUrls: ['./register-representative.scss'],
})
export class RegisterRepresentative {

  registerRepresentativeForm;

  constructor(
    private fb: FormBuilder,
    private createRepService: CreateRepresentative,
    private router: Router
  ) {

    this.registerRepresentativeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, minimumAgeValidator(18)]],
      email: ['', [Validators.required, Validators.email]],
      raw_password: ['', [Validators.required, passwordPatternValidator]],
      confirmPassword: ['', Validators.required]
    }, {validators: passwordMatchValidator});
  }

  submit() {
    if (!this.registerRepresentativeForm.valid) {
      this.registerRepresentativeForm.markAllAsTouched();
      return;
    }

    const values = this.registerRepresentativeForm.value;

    const representative: RepresentativeForm = {
      firstName: values.firstName!,
      lastName: values.lastName!,
      birthDate: new Date(values.birthDate!),
      email: values.email!,
      password: values.raw_password!
    };

    this.createRepService.createRepresentative(representative).subscribe({
      next: response => {
        console.log('Success:', response);
        this.router.navigate(['/login']);
      },
      error: error => console.error('Error:', error)
    });
  }
}
