import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoolRoleMasterService {

  private userRoles: string[] = [];  // This should be populated with the user's roles after login

  constructor() {
    // Initialize user roles, typically from a backend or token
    this.userRoles = ['school-masterAdmin', 'otherRole']; // Example roles
  }

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }
}
