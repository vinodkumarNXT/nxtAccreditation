import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, SnackbarService, SpinnerService, SwalService, FileUploadService } from 'shared-lib';
import { NgxLoadingModule } from 'ngx-loading';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'lib-institution-integrates-add',
  standalone: true,
  imports: [MaterialModule,MatProgressBarModule, SharableModule, NgxLoadingModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter() 
  ],
  templateUrl: './institution-integrates-add.component.html',
  styleUrl: './institution-integrates-add.component.scss'
})
export class InstitutionIntegratesAddComponent {

  @Output() dataAdded = new EventEmitter<void>();
  public isLoading = false;
  public loading = false;
  public submitted: boolean = false;
  public listData: any;
  public  displayedColumns: any;
  public  dataSource: any;
  public isFormSubmitted: boolean = false; // Track if the form is submitted

  // public selectedFiles: { fileName: string; fileContent: string }[] = [];
  // public progressInfos: { fileName: string; value: number }[] = [];


  form: FormGroup;

  constructor(
    private fileUploadService:FileUploadService,
    private swalService:SwalService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private matDialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      documentLink: [''],
   
    });
  }

  ngOnInit(): void {}



  async submitForm() {
    this.submitted = true;
  
    if (this.form.valid) {
      const postData = {
        description: this.form.get('description')?.value,
        documentLink: this.form.get('documentLink')?.value,
        fileUpload: this.selectedFiles
      };
  
      try {
        const response = await this.formsService.onFormSubmit(postData, endpoints.InstitutionIntegrates);

        // Show success toast notification
       this.swalService.addSuccess()
  
        // Start showing the loading spinner
        this.loading = true;
           // Set the form submitted flag to true
        this.isFormSubmitted = true;

       // Reset file upload data after successful submission
       this.fileUploadService.resetUploadData();

  
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
           // Reset file upload data after successful submission
       this.fileUploadService.resetUploadData();
  
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
  
  
  
  
/**
 * Resets the form to its initial state, clearing all form fields, errors, and submission status.
 */
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
    const listData = await this.formsService.getListData(endpoints.InstitutionIntegrates);

    // Store the fetched data in the component's `listData` property.
    this.listData = listData.data;

    // Log the fetched data to the console for debugging purposes.
    console.log("this.listData", this.listData);

  } catch (error) {
    // Handle any errors that occur during the data fetch process.
    // Currently, the catch block is empty, but error handling could be added here if needed.
  }
}

// This method is called when files are selected
onFilesSelected(event: any): void {
  this.fileUploadService.onFilesSelected(event); // Delegate to the service
}

// This method is called to remove a file from the upload list
removeFile(index: number): void {
  this.fileUploadService.removeFile(index); // Call the service to remove the file
}


get progressInfos() {
  return this.fileUploadService.progressInfos; // Access progress info from the service
}

get selectedFiles() {
  return this.fileUploadService.selectedFiles; // Access selected files from the service
}



}

