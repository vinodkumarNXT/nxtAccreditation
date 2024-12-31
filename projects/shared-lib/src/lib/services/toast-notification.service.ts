import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  private readonly toastClasses = {
    success: 'ngx-toastr custom-toast toast-success',
    error: 'ngx-toastr custom-toast toast-error',
    info: 'ngx-toastr custom-toast toast-info',
    warning: 'ngx-toastr custom-toast toast-warning'
  };

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title?: string): void {
    this.toastr.success(message, title || 'Success', {
      toastClass: this.toastClasses.success,
      closeButton: true,
      enableHtml: true
    });
  }

  showError(message: string, title?: string): void {
    this.toastr.error(message, title || 'Error', {
      toastClass: this.toastClasses.error,
      closeButton: true,
      enableHtml: true
    });
  }

  showInfo(message: string, title?: string): void {
    this.toastr.info(message, title || 'Info', {
      toastClass: this.toastClasses.info,
      closeButton: true,
      enableHtml: true
    });
  }

  showWarning(message: string, title?: string): void {
    this.toastr.warning(message, title || 'Warning', {
      toastClass: this.toastClasses.warning,
      closeButton: true,
      enableHtml: true
    });
  }
}
