import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  constructor() {}

  // Success Notification
  async successNotification(title: string, text: string = '') {
    await Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title,
      text,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'swal2-success-light-bg'
      }
    });
  }

  // Error Notification
  async errorNotification(title: string = 'Operation failed', text: string = 'Please try again.') {
    await Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title,
      text,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'swal2-warn-light-bg'
      }
    });
  }

  // Warning Notification
  async warningNotification(title: string, text: string = '') {
    await Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'warning',
      title,
      text,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'swal2-danger-light-bg'
      }
    });
  }

  // Notification for Add Operation
  async addSuccess() {
    await this.successNotification('Record added successfully!');
  }

  async addError() {
    await this.errorNotification('Adding record failed');
  }

  // Notification for Update Operation
  async updateSuccess() {
    await this.successNotification('Record updated successfully!');
  }

  async updateError() {
    await this.errorNotification('Updating record failed');
  }

  // Notification for Delete Operation
  async deleteSuccess() {
    await this.successNotification('Record deleted successfully!');
  }

  async deleteError() {
    await this.errorNotification('Deleting record failed');
  }

   // Method to show confirmation dialog
   confirmDelete(): Promise<any> {
    return Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d00000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });
  }


  loggedOut(): Promise<any> {
    return Swal.fire({
      title: 'You’ve Been Logged Out Due to No Activity',
      text: 'Please log in again to continue.',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: false, 
      confirmButtonColor: '#2dc653',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Back to Login',
    });
  }

  
}
