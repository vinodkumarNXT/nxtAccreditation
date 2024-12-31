import {  ChangeDetectorRef, Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService,SwalService, FileUploadService } from 'shared-lib';

@Component({
  selector: 'lib-institution-integrates-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    provideNativeDateAdapter() 
  ],
  templateUrl: './institution-integrates-edit.component.html',
  styleUrl: './institution-integrates-edit.component.scss'
})
export class InstitutionIntegratesEditComponent {

  @Output() dataAdded = new EventEmitter<void>();

  // progressInfos: { fileName: string; value: number }[] = []; // Newly selected files

  
  public loading:boolean= false
  public data: any;
  public submitted: boolean = false;
  public editformID: any;
  public preLoadData:any;
  public isLoading:boolean;
  public listData :any
  public  preFillData:any
  public uploadedFiles:any; // Already uploaded files
  public removedFiles: string[] = []; // To track which files were removed
  public uploadProgressInfos: { fileName: string; value: number, file: File }[] = []; 
  public isTochedAndUpload:boolean=true;


  form: FormGroup;
  
  
  constructor(
    private cdr: ChangeDetectorRef,
    private fileUploadService:FileUploadService,
    private swalService:SwalService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private matDialog:MatDialog
  ) {
    this.data = data;
    this.editformID = data.id;
  
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      documentLink: [''],
    });
  }
  
  ngOnInit(): void {
    this.loadFormData();
  }
  


 /**
 * Handles the form submission for updating existing data.
 * It validates the form, constructs the data to be updated, and
 * sends it to the server. Displays notifications based on the result
 * of the update operation.
 */
 async updateForm(): Promise<void> {
  this.submitted = true;


  if (this.form.valid) {
    const postData = {
      description: this.form.get('description')?.value,
      documentLink: this.form.get('documentLink')?.value,
      fileUpload: this.selectedFiles
    };

    try {
      // Attempt to update the form data using the service
      await this.formsService.updateFormData(postData, this.editformID, endpoints.InstitutionIntegrates);
      
      // Display success notification
      await this.swalService.updateSuccess();
      this.submitted = false;

      // Refresh the list data and simulate the loading spinner delay
      await this.loadFormData(); // Refresh the list data

      // Function to simulate the delay before hiding the spinner
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      // Ensure the spinner is visible for at least 1000ms
      await delay(1000);
      
      this.loading = false; // Stop loading spinner
      this.matDialog.closeAll(); // Close dialog

    } catch (error) {
      console.error('Form update failed:', error);
      await this.swalService.updateError();

      this.loading = false; // Stop loading spinner
    }
  } else {
    await this.swalService.warningNotification('Form is invalid. Please check the fields and try again.');

    this.loading = false; // Stop loading spinner
  }
}




async loadFormData(): Promise<void> {
  try {
    const response = await this.formsService.getFormData(this.data.id, endpoints.InstitutionIntegrates);
    console.log('Response data:', response);

    if (response  && response.data) {
      const formData = response.data; // Access the first item in the array
      this.preLoadData = formData;
      // Patch the form with retrieved data
      this.uploadedFiles = response.upload_files || [];


      this.form.patchValue({
        description: response.data.description || '',
        documentLink: response.data.document_links || '',
      });
  // Manually trigger change detection
  this.cdr.detectChanges();

    } else {
      console.error('Data array is empty or invalid structure:', response);
    }
  } catch (error) {
    console.error('Failed to load form data:', error);
  }
}


  
 
resetForm(): void {
  // Reset the form to its initial state
  this.form.reset();
  
  // Clear validation errors for all form controls
  Object.keys(this.form.controls).forEach(key => {
    const control = this.form.get(key);
    if (control) {
      control.setErrors(null); // Clear any validation errors
    }
  });
  
  // Mark the form as pristine (untouched and unchanged from its initial state)
  this.form.markAsPristine();
  this.form.markAsUntouched();
  
  // Reset the submission state to allow for a new form submission
  this.submitted = false;
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

  // Method to handle file selection
// Method to handle file selection
async onFilesSelected(event: Event) {
  this.isTochedAndUpload=false
  const files = (event.target as HTMLInputElement).files; // Use specific type for event
  this.clearProgressInfos(); // Clear previous progressInfos

  if (!files || files.length === 0) {
    return false; // No files selected
  }

  const uploadPromises = []; // To hold promises for all file uploads

  for (let i = 0; i < files.length; i++) {
    this.progressInfos.push({
      fileName: files[i].name,
      value: 0, // Initial progress
    });

    // Simulate file upload and store the promise
    const uploadPromise = this.uploadFile(files[i], this.progressInfos.length - 1);
    uploadPromises.push(uploadPromise);
  }

  // Wait for all uploads to complete
  await Promise.all(uploadPromises);
  
  return true; // All uploads succeeded
}


  private uploadFile(file: File, index: number): void {
    const interval = setInterval(() => {
      if (this.progressInfos[index].value >= 100) {
        clearInterval(interval);
      } else {
        this.progressInfos[index].value += 10; // Simulate progress
      }
    }, 500);
  }

  // Method to remove a file from progressInfos
// Method to remove a file from progressInfos
uploadRemoveFile(index: number): void {
  if (index > -1 && index < this.progressInfos.length) { // Check if index is valid
    this.progressInfos.splice(index, 1);
  }
}


  // Clear progressInfos for new uploads
  clearProgressInfos(): void {
    // this.progressInfos = [];
  }

  // Load preloaded data (set when the component initializes)
  loadPreloadedFiles(files: { fileName: string; value: number }[]): void {
    this.uploadedFiles = files;
  }

  
  }
  
  
  

