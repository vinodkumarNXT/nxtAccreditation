import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'projects/shell/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BehaviorSubject allows subscribing to value changes
  private loggedInSource = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSource.asObservable(); // Observable to subscribe to

  constructor(private router: Router) { }


  async login(formValue: any, endpoint: string): Promise<any> {
    const fullUrl = `${environment.apiBaseURL}${endpoint}`; // Combine base URL with endpoint
    console.log("Full URL:", fullUrl);

    // Retrieve CSRF token from meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    // Create Axios instance with CSRF token in headers
    const axiosInstance = axios.create({
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json',

      }
    });

    try {
      const response = await axiosInstance.post(fullUrl, formValue);
      console.log('Success!', response);
      return response.data;

    } catch (error) {
      console.error('Error!', error);
      throw error;

    }
  }



  logout(): Observable<void> {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    localStorage.removeItem('branchID');


    // Convert the Promise returned by router.navigate to an Observable
    return new Observable<void>(observer => {
      this.router.navigate(['/login']).then(() => {
        observer.next(); // Notify that navigation is complete
        observer.complete(); // Complete the observable
      }).catch(error => {
        observer.error(error); // Handle navigation error
      });
    });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const branchID = localStorage.getItem('branchID');

    if (!token || !branchID) {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false; // User is not logged in
    }
    return true; // User is logged in
  }

  isLoggedInAccreditation(): boolean {
    const token = localStorage.getItem('token');
    // const branchID = localStorage.getItem('branchID');

    if (!token) {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false; // User is not logged in
    }
    return true; // User is logged in
  }



  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');
    const branchID = localStorage.getItem('branchID');

    // Check if token and branchID are available
    if (token && branchID) {
      // Implement token expiration logic if you have expiration data
      return false; // Placeholder for actual expiration check
    }

    return true; // Token or branchID is missing, or token expired
  }

  // Method to set login status
  setLoggedIn(status: boolean): void {
    this.loggedInSource.next(status); // Update the value of loggedIn
  }

}
