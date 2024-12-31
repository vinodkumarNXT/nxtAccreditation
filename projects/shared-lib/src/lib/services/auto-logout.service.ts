import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService, SwalService } from 'shared-lib';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {
  private timeout: any;
  private readonly TIMEOUT_DURATION = 15* 60* 1000; 
  private logoutSubject = new Subject<void>();

  // Expose the logout observable to be subscribed to
  public logout$ = this.logoutSubject.asObservable();

  constructor(
    private router: Router,
    private authService: AuthService,
    private swalService: SwalService,
    private ngZone: NgZone
  ) {
    this.resetTimer();
    this.startListeningForUserActivity();
  }

  // Changed from private to public
  public startListeningForUserActivity() {
    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach(event => {
      window.addEventListener(event, () => this.ngZone.run(() => this.resetTimer()));
    });
  }

  private resetTimer() {
    this.clearTimer();
    this.timeout = setTimeout(() => {
      this.logout();
    }, this.TIMEOUT_DURATION);
  }

  private clearTimer() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  private logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.logoutSubject.next(); // Emit logout event
      },
      error: (err) => {
        console.error('Logout error:', err);
        this.swalService.errorNotification('Logout failed. Please try again.');
      }
    });
  }

  public triggerLogoutAlert(): void {
    Swal.fire({
      title: 'You’ve Been Logged Out Due to In Activity',
      text: 'Please log in again to continue.',
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonText: ' Back to Login',
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonColor: '#4ad66d',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/login');  // Redirect to the login page
      }
    });
  }
}
