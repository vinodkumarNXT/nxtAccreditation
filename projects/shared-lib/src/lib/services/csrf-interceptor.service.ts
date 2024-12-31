// src/app/csrf-interceptor.service.ts
import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class CsrfInterceptorService {

  intercept(config: AxiosRequestConfig): AxiosRequestConfig {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    // Initialize headers object if not present
    if (!config.headers) {
      config.headers = {};
    }

    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken;
    }

    return config;
  }
}
