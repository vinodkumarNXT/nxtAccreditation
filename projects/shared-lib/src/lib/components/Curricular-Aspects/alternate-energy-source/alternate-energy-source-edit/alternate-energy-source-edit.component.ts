import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, FileUploadService, SwalService } from 'shared-lib';

@Component({
  selector: 'lib-alternate-energy-source-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    provideNativeDateAdapter(),
  ],
  templateUrl: './alternate-energy-source-edit.component.html',
  styleUrl: './alternate-energy-source-edit.component.css'
})
export class AlternateEnergySourceEditComponent {
 


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
  public isEdit:boolean= true;
  public isUpdate:boolean= true;
  

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
      AlternateSource: ['', Validators.required],
      documentLink: [''],
    });
  }

  ngOnInit(): void {
    this.loadFormData();
    // Subscribe to the progress updates
    this.progressInfos = this.fileUploadService.progressInfos;
  }


  submitForm() {
    if (this.isEdit) {
      return; // Exit if the form has already been submitted
    }
    console.log('Form submitted!');
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
        AlternateSource: this.form.get("AlternateSource")?.value,
        documentLink: this.form.get("documentLink")?.value,
        fileUpload: this.selectedFiles
      };

      try {
        // Attempt to update the form data using the service
        await this.formsService.updateFormData(postData, this.editformID, endpoints.AlternateEnergySource);

        // Display success notification
        await this.swalService.updateSuccess();
        this.submitted = false;

        // Refresh the list data and simulate the loading spinner delay
        this.dataAdded.emit();  // Notify the parent component
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
      const response = await this.formsService.getFormData(this.data.id, endpoints.AlternateEnergySource);
      console.log('Response data:', response);

      if (response && response.data) {
        const formData = response.data; // Access the first item in the array
        console.log('Retrieved formData:', formData);

        this.preLoadData = formData;

        // Patch the form with retrieved data
        this.form.patchValue({
          AlternateSource: formData?.AlternateSource || '',
          documentLink: formData?.document_links || '',
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

 async onFilesSelected(event: any) {
    const files = Array.from(event.target.files) as File[];
    this.fileUploadService.onFilesSelected(files);
  }


  async removeFile(index: number) {
    this.fileUploadService.removeFile(index);
  }


}

