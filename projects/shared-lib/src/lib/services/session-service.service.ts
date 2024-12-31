import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private branchIDKey = 'branchID'; // Key for local storage

  constructor() { }

  // Set the branch code in local storage
  setbranchID(branchID: string): void {
    localStorage.setItem(this.branchIDKey, branchID);
  }

  // Get the branch code from local storage
  getbranchID(): string | null {
    return localStorage.getItem(this.branchIDKey);
  }

  // Remove the branch code from local storage
  clearbranchID(): void {
    localStorage.removeItem(this.branchIDKey);
  }
}
