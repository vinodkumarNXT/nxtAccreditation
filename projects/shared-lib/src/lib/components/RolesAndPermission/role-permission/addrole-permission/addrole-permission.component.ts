import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, SnackbarService, FileUploadService, SwalService } from 'shared-lib';

@Component({
  selector: 'lib-addrole-permission',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter()
  ],
  templateUrl: './addrole-permission.component.html',
  styleUrls: ['./addrole-permission.component.scss']
})
export class AddrolePermissionComponent implements OnInit {

  @Output() dataAdded = new EventEmitter<void>();
  public isLoading = false;
  public loading = false;
  public data: any;
  public submitted: boolean = false;
  public fetchedData: any;
  public listData: any;
  public roles: any;
  public masterCheckList: any;

  displayedColumns = ["ID", "RoleName", "Actions"];
  dataSource: any;

  form: FormGroup;

  constructor(
    private fileUploadService: FileUploadService,
    private swalService: SwalService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private matDialog: MatDialog
  ) {
    this.data = data;

    this.form = this.formBuilder.group({
      headerTitle: [''],
      roleName: ['', Validators.required],
      selectedRoleName: ['', Validators.required],
      features: this.formBuilder.array([]) // Initialize FormArray
    });
  }

  ngOnInit(): void {
    this.loadOptions();
  }

  get features(): FormArray {
    return this.form.get('features') as FormArray;
  }

  // async submitForm() {
  //   this.submitted = true;

  //   if (this.form.valid) {
  //     console.log("this.form", this.form.value);

  //     const postData = {
  //       roleName: this.form.get('roleName')?.value,
  //       selectedRoleName: this.form.get('selectedRoleName')?.value,
  //       features: this.form.get('features')?.value
  //     };

  //     try {
  //       const response = await this.formsService.onFormSubmit(postData, endpoints.RolePermission);

  //       console.log('Form submitted successfully:', response);
  //       this.snackbarService.openSnackBar('Form submitted successfully!', 'X', 'snackbar-success', 3000);

  //       this.fetchedData = response.data;
  //       this.dataAdded.emit();
  //       this.resetForm();

  //       setTimeout(() => {
  //         this.matDialog.closeAll();
  //       }, 2000);

  //     } catch (error) {
  //       console.error('Form submission failed:', error);
  //       const roleName = postData.roleName || 'unknown role';
  //       this.snackbarService.openSnackBar(`Form submission failed for role "${roleName}". Please try again.`, 'X', 'snackbar-danger', 3000);
  //     }

  //   } else {
  //     console.error('Form is invalid. Cannot submit.');
  //     this.snackbarService.openSnackBar('Please check the fields and try again.', 'X', 'snackbar-warn', 3000);
  //   }
  // }

  async submitForm() {
    this.submitted = true;

    if (this.form.valid) {


      const postData = {
        roleName: this.form.get('roleName')?.value,
        roleMasterID: this.form.get('selectedRoleName')?.value,
        features: this.form.get('features')?.value
        
      };

      try {
        const response = await this.formsService.onFormSubmit(postData, endpoints.PermissionMaster);

        // Show success toast notification
        this.swalService.addSuccess();


        // Start showing the loading spinner
        this.loading = true;

        // Refresh the list data
        this.listData = response.data;
        this.dataAdded.emit();  // Notify the parent component
        this.resetForm();

        // Function to simulate the delay before hiding the spinner
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        // Refresh the list data and simulate the loading spinner delay
        await this.loadFormData(); // Refresh the list data

        // Hold the spinner for an additional 2 seconds
        await delay(1000);

        // Hide the spinner after the delay
        this.loading = false;

        this.matDialog.closeAll();

      } catch (error) {

        this.swalService.addError();

        // Ensure the spinner is hidden on error
        this.loading = false;

      } finally {
        // Ensure the spinner is off after all actions are complete
        this.loading = false;
      }
    } else {
      // Show warning toast notification
      await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
      // Ensure the spinner is hidden if form is invalid
      this.loading = false;
    }
  }

  
  async loadFormData() {
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(endpoints.PermissionMaster);

      // Store the fetched data in the component's `listData` property.
      this.listData = listData.data;

      // Log the fetched data to the console for debugging purposes.
      console.log("this.listData", this.listData);

    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
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

  async loadOptions() {
    try {
      const listData = await this.formsService.getListData(endpoints.RolesMaster);
      this.roles = listData.data;
    } catch (error) {
      console.error("Failed to fetch roles", error);
    }
  }

  async loadFeatures(val: any) {
    try {
      const listData = await this.formsService.getFormData(val, endpoints.RolePermission);
      this.masterCheckList = listData.data;

      if (Array.isArray(this.masterCheckList) && this.masterCheckList.length > 0) {
        const featuresArray = this.form.get('features') as FormArray;
        featuresArray.clear(); // Clear existing controls

        this.masterCheckList.forEach(feature => {
          featuresArray.push(this.formBuilder.group({
             featureMasterId: [feature.id],  // Add ID here
            featureName: [feature.feature_name],
            featureCreate: [feature.feature_create === 1],
            featureView: [feature.feature_view === 1],
            featureEdit: [feature.feature_edit === 1],
            featureDelete: [feature.feature_delete === 1]
          }));
        });
      }
    } catch (error) {
      console.error('Failed to load form data:', error);
      await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');

      // this.snackbarService.openSnackBar('Failed to load features. Please try again.', 'X', 'snackbar-danger', 3000);
    } finally {
      console.log('Successfully Fetched:');
    }
  }
}
