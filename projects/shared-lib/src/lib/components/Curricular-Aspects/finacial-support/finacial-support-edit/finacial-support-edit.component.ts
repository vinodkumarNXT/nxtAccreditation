import { ChangeDetectorRef, Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, FileUploadService, SwalService, ImageService } from 'shared-lib';

@Component({
  selector: 'lib-finacial-support-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    provideNativeDateAdapter()
  ],
  templateUrl: './finacial-support-edit.component.html',
  styleUrl: './finacial-support-edit.component.css'
})

export class FinacialSupportEditComponent {



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
  public imagePreView:any;
  public isUploading: boolean = false; // Flag to track upload state


  form: FormGroup;


  constructor(
    private cdr: ChangeDetectorRef,
    private imageService:ImageService,
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
      year: ['', Validators.required],
        teacherName: ['', Validators.required],
        workshop: ['', Validators.required],
        body: ['', Validators.required],
        amount: ['', Validators.required],
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
        year: this.form.get("year")?.value,
        teacherName: this.form.get("teacherName")?.value,
        workshop: this.form.get("workshop")?.value,
        body: this.form.get("body")?.value,
        amount: this.form.get("amount")?.value,
        documentLink: this.form.get("documentLink")?.value,
        fileUpload: this.selectedFiles
      };

      try {
        // Attempt to update the form data using the service
        await this.formsService.updateFormData(postData, this.editformID, endpoints.TeacherFinacialSupport);

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
      const response = await this.formsService.getFormData(this.data.id, endpoints.TeacherFinacialSupport);
      console.log('Response data:', response);

      if (response && response.data) {
        const formData = response.data; // Access the first item in the array
        console.log('Retrieved formData:', formData);

        this.preLoadData = formData;
        // Patch the form with retrieved data
        this.form.patchValue({
          year: formData?.year || '',
          teacherName: formData?.teacherName || '',
          workshop: formData?.workshop || '',
          body:formData?.body ||'',
          amount: formData?.amount || '',
          documentLink: formData?.documentLinks || '',
        });

        this.preFillData = formData;

            const files = this.preFillData.uploadFiles;
            this.imagePreView = [];  // Initialize array to store base64 images

            // Create an array of promises
            const imagePromises = files.map(file => {
              return this.imageService.getImageAsBase64(file)
                .then(base64Image => base64Image)  // Return the base64 image
                .catch(error => {
                  console.error(`Error fetching image ${file}:`, error);
                  return null;  // Handle error and return null for this image
                });
            });

            // Use Promise.all() to wait for all images to load
            Promise.all(imagePromises).then((base64Images) => {
              // Filter out any null values if an image failed to load
              this.imagePreView = base64Images.filter(image => image !== null);

              // this.cdr.detectChanges();  // Force Angular to detect changes
            
              console.log('All images loaded:', this.imagePreView);
            }).catch(error => {
              console.error('Error loading images:', error);
            });


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
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg']; // Allowed file types
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes
    const files = Array.from(event.target.files) as File[]; // Convert the selected files to an array

    if (this.selectedFiles.length + files.length > 8) {
      this.swalService.warningNotification("You can upload a maximum of 8 files.");
      
      return;
    }

    this.processFiles(files, allowedTypes, maxSizeInBytes);
  }


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
        this.isUploading = true; // Set the uploading flag to true

        await this.uploadFile(file); // Simulate the file upload process
      }
    }
  }

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

  async uploadFile(file: File): Promise<void> {
    const progressInfo = { fileName: file.name, value: 0 };
    this.progressInfos.push(progressInfo);

    return new Promise<void>((resolve) => {
      this.simulateUploadProgress(progressInfo, resolve);
    });
  }


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

  removeFile(index: number): void {
    this.progressInfos.splice(index, 1); // Remove the file's progress information
  }



}

