import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Subdomain {
  getCurrentSubdomain(): string {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'test-pool';
    }
    const parts = hostname.split('.');
    if (parts.length >= 2) {
      const subdomain = parts[0];  // "paris"
      console.log('Sous-domaine détecté:', subdomain);
      return subdomain;
    }
    return 'default';
  }

  isDevelopment(): boolean {
    return window.location.hostname.includes('localhost') ||
      window.location.hostname.includes('127.0.0.1');
  }
}
