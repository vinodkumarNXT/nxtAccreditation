import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, FileUploadService, SwalService } from 'shared-lib';

@Component({
  selector: 'lib-system-and-procedure-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    provideNativeDateAdapter()
  ],
  templateUrl: './system-and-procedure-edit.component.html',
  styleUrl: './system-and-procedure-edit.component.css'
})
export class SystemAndProcedureEditComponent {

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
      details:["",Validators.required],
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
  
    let masterfileUpload: any[] = [];

    if (this.selectedFiles.length > 0) {
        masterfileUpload = this.selectedFiles; // Use the newly selected files
    } else if (this.preLoadData?.uploadFiles?.length > 0) {
        // Use pre-loaded files and convert them to Base64
        masterfileUpload = await this.convertFilesToBase64(this.preLoadData.uploadFiles);
    } else {
        masterfileUpload = []; // No files, send an empty array
    }
  
    if (this.form.valid) {
      const postData = {
        detailsText: this.form.get('details')?.value,
        documentLink: this.form.get('documentLink').value,
        fileUpload: masterfileUpload // Send as an array
      };
  
      try {
        await this.formsService.updateFormData(postData, this.editformID, endpoints.SystemAndProcedure);
        await this.swalService.updateSuccess();
        this.submitted = false;
        this.dataAdded.emit(); // Notify parent component
        await this.loadFormData();
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to show spinner
        this.loading = false;
        this.matDialog.closeAll();
      } catch (error) {
        console.error('Form update failed:', error);
        await this.swalService.updateError();
        this.loading = false;
      }
    } else {
      await this.swalService.warningNotification('Form is invalid. Please check the fields and try again.');
      this.loading = false;
    }
  }
  


  convertFilesToBase64(files: File[]): Promise<any[]> {
    const fileUploadPromises = files.map(file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve({
                    fileName: file.name,
                    fileContent: reader.result as string // Base64 string
                });
            };
            reader.onerror = (error) => {
                console.error('Error reading file:', error);
                reject(error);
            };
            reader.readAsDataURL(file); // Read as Base64
        });
    });

    // Return a promise that resolves when all files are processed
    return Promise.all(fileUploadPromises);
}

  

  async loadFormData(): Promise<void> {
    try {
      const response = await this.formsService.getFormData(this.data.id, endpoints.SystemAndProcedure);
      console.log('Response data:', response);

      if (response && response.data) {
        const formData = response.data; // Access the first item in the array
        console.log('Retrieved formData:', formData);

        this.preLoadData = formData;

        // Patch the form with retrieved data
        this.form.patchValue({
          details: formData?.detailsText || '',
          documentLink: formData?.documentLinks || '',
        });

        this.preFillData = formData;

      console.log("this.preLoadData For File Upload ",this.preLoadData.uploadFiles);


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


/**
 * Handles the event triggered when files are selected by the user.
 * It checks if the total number of selected files exceeds the limit (8),
 * and then processes each file to ensure it meets the allowed file types
 * and size restrictions. If valid, the files are added to the `selectedFiles` array.
 * 
 * @param event - The event triggered when files are selected.
 */
onFilesSelected(event: any): void {
  const allowedTypes = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg']; // Allowed file types
  const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes
  const files = Array.from(event.target.files) as File[]; // Convert the selected files to an array

  // Clear previous selections if new files are selected
  this.selectedFiles = [];

  // Check if the total number of files exceeds the limit of 8
  if (this.selectedFiles.length + files.length > 8) {
    // Show a warning notification if the limit is exceeded
    this.swalService.warningNotification("You can upload a maximum of 8 files.");
    return;
  }

  // Process each selected file
  this.processFiles(files, allowedTypes, maxSizeInBytes).then(() => {
    // If no valid files were selected, use preloaded files (if any)
    if (this.selectedFiles.length === 0 && this.preLoadData?.uploadFiles?.length > 0) {
      this.selectedFiles = this.preLoadData.uploadFiles; // Use pre-loaded files
    } else if (this.selectedFiles.length === 0) {
      // If no valid files and no pre-loaded files, clear the selection
      this.selectedFiles = [];
    }
  });
}

/**
 * Processes the selected files by validating their type, size, and duplication.
 * If a file passes all checks, it is added to the `selectedFiles` array
 * and its upload progress is simulated.
 * 
 * @param files - Array of files to be processed.
 * @param allowedTypes - Array of allowed file MIME types.
 * @param maxSizeInBytes - Maximum allowed file size in bytes.
 */
async processFiles(files: File[], allowedTypes: string[], maxSizeInBytes: number): Promise<void> {
  for (const file of files) {
    // Check if the file type is allowed
    if (!allowedTypes.includes(file.type)) {
      await this.swalService.warningNotification("Only PDF, PNG, JPG, and JPEG files are allowed.");
      continue;
    }

    // Check if the file size exceeds the maximum limit
    if (file.size > maxSizeInBytes) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2); // Convert file size to MB
      await this.swalService.warningNotification(`File size (${fileSizeMB} MB) exceeds the 2MB limit.`);
      continue;
    }

    // Check for duplicate file names
    const isDuplicate = this.selectedFiles.some(
      selectedFile => selectedFile.fileName === file.name
    );

    if (isDuplicate) {
      await this.swalService.warningNotification(`Duplicate file detected: ${file.name}`);
      continue;
    }

    // Process the valid file and add it to the selectedFiles array
    const fileData = await this.getFileData(file);
    if (this.selectedFiles.length < 8) {
      this.selectedFiles.push(fileData); // Add valid file to the array
      await this.uploadFile(file); // Simulate the file upload process
    }
  }
}


  /**
   * Converts the selected file into a Base64 encoded string for easier handling and storage.
   * The resulting object includes the file's name and its content in Base64 format.
   * 
   * @param file - The file to be processed.
   * @returns A promise that resolves with the file's name and Base64 encoded content.
   */
  getFileData(file: File): Promise<{ fileName: string; fileContent: string }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // On successful file read, resolve the promise with the file data
      reader.onloadend = () => {
        const base64File = reader.result as string;
        resolve({
          fileName: file.name,
          fileContent: base64File.split(',')[1], // Remove the data URL part
        });
      };

      // Handle file reading errors
      reader.onerror = reject;

      // Read the file as a Data URL
      reader.readAsDataURL(file);
    });
  }

  /**
   * Simulates the file upload process by updating the progress value.
   * This function creates an object to track the upload progress and updates
   * the progress over time.
   * 
   * @param file - The file to be uploaded.
   * @returns A promise that resolves when the simulated upload is complete.
   */
  async uploadFile(file: File): Promise<void> {
    const progressInfo = { fileName: file.name, value: 0 };
    this.progressInfos.push(progressInfo);

    return new Promise<void>((resolve) => {
      this.simulateUploadProgress(progressInfo, resolve);
    });
  }

  /**
   * Simulates the progress of a file upload. The progress value is increased
   * in increments until it reaches 100%, at which point the upload is considered complete.
   * 
   * @param progressInfo - Object containing the file name and current progress value.
   * @param resolve - Function to call when the upload simulation is complete.
   */
  simulateUploadProgress(progressInfo: { fileName: string; value: number }, resolve: () => void): void {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 10; // Increment the progress value by 10%
        progressInfo.value = progress;
      } else {
        clearInterval(interval); // Stop the interval when progress reaches 100%
        resolve(); // Resolve the promise indicating the upload is complete
      }
    }, 200); // Simulate progress update every 200 milliseconds
  }

  /**
   * Removes a file from the selected files array based on its index.
   * This function also removes the corresponding progress information.
   * 
   * @param index - The index of the file to be removed from the `selectedFiles` array.
   */
  removeFile(index: number): void {
    this.progressInfos.splice(index, 1); // Remove the file's progress information
  }


}


