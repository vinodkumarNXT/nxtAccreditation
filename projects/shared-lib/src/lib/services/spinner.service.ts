import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinnerCount = 0;

  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerName: string = 'default'): void {
    this.spinnerCount++;
    this.spinner.show(spinnerName);
  }

  hideSpinner(spinnerName: string = 'default'): void {
    if (this.spinnerCount > 0) {
      this.spinnerCount--;
      if (this.spinnerCount === 0) {
        this.spinner.hide(spinnerName);
      }
    }
  }

  resetSpinner(spinnerName: string = 'default'): void {
    this.spinnerCount = 0;
    this.spinner.hide(spinnerName);
  }
}
