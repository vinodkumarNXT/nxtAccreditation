import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ScoolRoleMasterService } from 'school-erp-public';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard {
  constructor(private authService: ScoolRoleMasterService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const requiredRole = route.data['role'];

    // Check if the user has the required role
    if (this.authService.hasRole(requiredRole)) {
      return true;
    } else {
      // Redirect to an unauthorized page or the login page
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}
