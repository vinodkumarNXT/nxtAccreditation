import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, FileUploadService, SwalService } from 'shared-lib';

@Component({
  selector: 'lib-teacherpaper-research-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    provideNativeDateAdapter()
  ],
  templateUrl: './teacherpaper-research-edit.component.html',
  styleUrl: './teacherpaper-research-edit.component.css'
})
export class TeacherpaperResearchEditComponent {


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
      paperTitle: ['', Validators.required],
      authorName: ['', Validators.required],
      departmentName: ['', Validators.required],
      journalName: ['', Validators.required],
      year: ['', Validators.required],
      issnNumber: ['', Validators.required],
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
        paperTitle: this.form.get("paperTitle")?.value,
        authorName: this.form.get("authorName")?.value,
        departmentName: this.form.get("departmentName")?.value,
        journalName: this.form.get("journalName")?.value,
        year: this.form.get("year")?.value,
        issnNumber: this.form.get("issnNumber")?.value,
        documentLink: this.form.get("documentLink")?.value,
        fileUpload: this.selectedFiles
      };

      try {
        // Attempt to update the form data using the service
        await this.formsService.updateFormData(postData, this.editformID, endpoints.TeacherResearchPapers);

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
      const response = await this.formsService.getFormData(this.data.id, endpoints.TeacherResearchPapers);
      console.log('Response data:', response);

      if (response && response.data) {
        const formData = response.data; // Access the first item in the array
        console.log('Retrieved formData:', formData);

        this.preLoadData = formData;


        // Patch the form with retrieved data
        this.form.patchValue({

      

          paperTitle: formData?.paper_title || '',
          authorName: formData?.author_name || '',
          departmentName: formData?.department_name || '',


          journalName: formData?.journal_name || '',
          year: formData?.publication_year || '',
          issnNumber: formData?.issn_number || '',

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

    // Check if the total number of files exceeds the limit of 8
    if (this.selectedFiles.length + files.length > 8) {
      // Show a warning notification if the limit is exceeded
      this.swalService.warningNotification("You can upload a maximum of 8 files.");
      return;
    }

    // Process each selected file
    this.processFiles(files, allowedTypes, maxSizeInBytes);
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
        // Show a warning notification if the file size exceeds the limit
        await this.swalService.warningNotification(`File size (${fileSizeMB} MB) exceeds the 2MB limit.`);
        continue;
      }

      // Check if the file name is a duplicate
      const isDuplicate = this.selectedFiles.some(
        selectedFile => selectedFile.fileName === file.name
      );

      if (isDuplicate) {
        // Show a warning notification if a duplicate file is detected
        await this.swalService.warningNotification(`Duplicate file detected: ${file.name}`);
        continue;
      }

      // Process and add the valid file to the `selectedFiles` array
      const fileData = await this.getFileData(file);

      // Ensure the total number of files does not exceed the limit of 8
      if (this.selectedFiles.length < 8) {
        this.selectedFiles.push(fileData);
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



