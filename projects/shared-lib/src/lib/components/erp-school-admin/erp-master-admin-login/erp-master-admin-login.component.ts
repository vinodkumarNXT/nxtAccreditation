import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MaterialModule, SharableModule, FormsService, SwalService, passwordValidator, ErpMasterAdminRegisterComponent } from 'school-erp-public';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-erp-master-admin-login',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './erp-master-admin-login.component.html',
  styleUrls: ['./erp-master-admin-login.component.scss']
})


export class ErpMasterAdminLoginComponent {
  form: FormGroup;

  public isLoading = false;
  public loading = false;
  public submitted: boolean = false;
  public branchID: any;
  public listData: any;

  public loginAttempts: number = 0;
  public isLocked: boolean = false;
  public lockTime: number = 0;
  public showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private swalService: SwalService,
    private formsService: FormsService,
    public dialog: MatDialog,
  ) {

    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]],
      authentictorCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  async submitForm() {
    this.submitted = true;

    // Get the branch code from the SessionService
    if (this.form.valid) {

      // Check if the account is locked
      if (this.isLocked && Date.now() < this.lockTime) {
        const lockDuration = Math.round((this.lockTime - Date.now()) / 60000); // Lock time in minutes
        alert(`Your account is locked. Please try again in ${lockDuration} minute(s).`);
        return;
      }

      const postData = {
        username: this.form.get("username")?.value,
        password: this.form.get("password")?.value,
        authentictorCode: this.form.get("authentictorCode")?.value,
      };

      try {
        // Make the API call to submit the form data
        const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolERPMasterAdminLogin);

        // Handle the success case
        if (response.success) {
          // Show success toast notification
          this.swalService.addSuccess();

          // Reset failed login attempts on success
          this.loginAttempts = 0; // Reset after a successful login
          this.isLocked = false;

          // Start showing the loading spinner
          this.loading = true;

          // Refresh the list data
          this.listData = response.data;

          // Reset form and show spinner delay
          this.resetForm();
          const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
          await this.loadFormData(); // Refresh the list data
          await delay(1000); // Hold the spinner for an additional 1 second
          this.loading = false; // Hide the spinner
        } else {
          // Handle failed attempt: increase the failed login count
          this.loginAttempts++;

          if (this.loginAttempts >= 3) {
            // Lock the account for 1 hour after 3 failed attempts
            this.isLocked = true;
            this.lockTime = Date.now() + 3600000; // 1 hour in milliseconds
            this.swalService.errorNotification('You have failed 3 times. Your account is now locked for 1 hour.');
          }

          // Show error toast if login fails
          this.swalService.addError();
          this.loading = false;
        }

      } catch (error) {
        // Handle any errors that occur during the API request
        this.swalService.addError();
        this.loading = false;
      } finally {
        // Ensure the spinner is turned off
        this.loading = false;
      }
    } else {
      // Show warning toast notification if form is invalid
      await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
      this.loading = false;
    }
  }


  resetForm() {
    // Reset all form fields to their initial values
    this.form.reset();

    // Clear any validation errors from each control in the form
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      if (control) {
        control.setErrors(null);  // Remove any validation errors
      }
    });

    // Mark the form as pristine, indicating that it hasn't been modified
    this.form.markAsPristine();

    // Mark the form as untouched, indicating that none of its controls have been interacted with
    this.form.markAsUntouched();

    // Reset the form submission status
    this.submitted = false;
  }



  async loadFormData() {
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBuildings);

      // Store the fetched data in the component's `listData` property.
      this.listData = listData.data;

      // Log the fetched data to the console for debugging purposes.
      console.log("this.listData", this.listData);

    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
    }
  }


  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  addNewUser() {
    // Open the dialog 
    const dialogRef = this.dialog.open(ErpMasterAdminRegisterComponent, {
      width:'500px !important'
    });
    // Subscribe to the dialog's afterClosed event to refresh the form data once the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      this.loadFormData(); // Refresh the form data to reflect any changes
    });
  }

}
