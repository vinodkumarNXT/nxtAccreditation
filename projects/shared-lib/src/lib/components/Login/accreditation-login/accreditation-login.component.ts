import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, FormsService, MaterialModule, SharableModule, SnackbarService, SwalService } from 'shared-lib';
import { endpoints } from 'projects/shell/environments/endpoint';
import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';



@Component({
  selector: 'lib-accreditation-login',
  standalone: true,
  imports: [SharableModule, MaterialModule],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './accreditation-login.component.html',
  styleUrl: './accreditation-login.component.scss'
})
export class AccreditationLoginComponent {

  public sumittedDataID: any
  public submitted = false;
  public fetchedData: any;
  public selectedValue: any;
  public setLocalToken: any
  public showPassword = false;
  public isLogggedIn: boolean = false;

  form: FormGroup;

  constructor(
    // private store: Store,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private swalService: SwalService,
    private authService: AuthService,
    private formsService: FormsService) {


    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  async submitForm() {
    this.submitted = true;

    console.log("Before Form Values", this.form.value);

    if (this.form.valid) {
      console.log("this.form", this.form.value);

      const postData = {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      };

      try {
        const response = await this.authService.login(postData, endpoints.AccreditationLogin);


        await this.swalService.successNotification('Logged in successfully');
        // Ensure token is saved in localStorage
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', response.token); // Example, adjust as needed
        console.log("Final response", response);

        // Redirect to dashboard
        this.resetForm();
        // this.isLogggedIn = true;
        // this.store.dispatch(setLoginStatus({ status: true }));


      } catch (error) {
        console.error('Form submission failed:', error);
        await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');

        this.resetForm();
      }
    } else {
      console.error('Form is invalid. Cannot submit.');
      await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
      this.resetForm();
    }
  }






  resetForm() {
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      if (control) {
        control.setErrors(null);
      }
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.submitted = false;
  }


  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


}
