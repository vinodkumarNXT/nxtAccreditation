import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, SwalService, FileUploadService } from 'shared-lib';

@Component({
  selector: 'lib-demand-ratio-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    provideNativeDateAdapter()
  ],
  templateUrl: './demand-ratio-edit.component.html',
  styleUrl: './demand-ratio-edit.component.css'
})
export class DemandRatioEditComponent {

  @Output() dataAdded = new EventEmitter<void>();

  public loading: boolean = false
  public data: any;
  public submitted: boolean = false;
  public editformID: any;
  public preLoadData: any;
  public isLoading: boolean;
  public listData: any
  public preFillData: any
  public selectedFiles: { fileName: string; fileContent: string }[] = [];
  public progressInfos: { fileName: string; value: number }[] = [];


  form: FormGroup;


  constructor(
    public fileUploadService: FileUploadService,
    private swalService: SwalService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private matDialog: MatDialog
  ) {
    this.data = data;
    this.editformID = data.id;

    this.form = this.formBuilder.group({
      programName: ['', Validators.required],
      programCode: ['', Validators.required],
      noOfSeatsSanctioned: ['', Validators.required],
      noOfAdmitted: ['', Validators.required],
      documentLink: [''],
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  // Subscribe to the progress updates
  this.progressInfos = this.fileUploadService.progressInfos;
 
 
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
        programName: this.form.get('programName')?.value,
        programCode: this.form.get('programCode')?.value,
        noOfSeatsSanctioned: this.form.get('noOfSeatsSanctioned')?.value,
        noOfAdmitted: this.form.get('noOfAdmitted')?.value,
        documentLink: this.form.get('documentLink')?.value,
        fileUpload: this.selectedFiles
      };

      try {
        // Attempt to update the form data using the service
        await this.formsService.updateFormData(postData, this.editformID, endpoints.DemandRatio);

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
      const response = await this.formsService.getFormData(this.data.id, endpoints.DemandRatio);
      console.log('Response data:', response);

      if (response && response.data) {
        const formData = response.data; // Access the first item in the array
        console.log('Retrieved formData:', formData);

        this.preLoadData = formData;

        // Patch the form with retrieved data
        this.form.patchValue({
          programName:formData.document_links || '',
          programCode:formData.programme_code || '',
          noOfSeatsSanctioned: formData.no_of_seats_sanctioned || '',
          noOfAdmitted: formData.no_of_admitted || '',
          documentLink: formData.document_links || '', // Ensure default value if undefined
        });

        this.preFillData = formData;

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


  onFilesSelected(event: any): void {
    // Pass the event to the service to handle file selection and upload
    this.fileUploadService.onFilesSelected(event);
  }

  removeFile(index: number): void {
    // Pass the index to the service to remove the file
    this.fileUploadService.removeFile(index);
  }
}





