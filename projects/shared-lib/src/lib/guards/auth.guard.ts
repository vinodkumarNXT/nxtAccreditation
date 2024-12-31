import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'shared-lib';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuard: Checking if user is logged in');
    if (this.authService.isLoggedIn()) {
      console.log('User is authenticated');
      return true; // User is authenticated, allow access
    } else {
      console.log('User is not authenticated, redirecting to login');
      this.router.navigate(['/login']); // Not authenticated, redirect to login
      return false;
    }
  }
  
}
