import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SwalService, SessionService } from 'school-erp-public';
import {  YearMonthDayPipe } from 'shared-lib';

@Component({
  selector: 'lib-shift-master-add',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './shift-master-add.component.html',
  styleUrl: './shift-master-add.component.css'
})
export class ShiftMasterAddComponent {

    
    @Output() dataAdded = new EventEmitter<void>();
    public isLoading = false;
    public loading = false;
    public submitted: boolean = false;
    public listData: any;
    public displayedColumns: any;
    public dataSource: any;
    public selectedFiles: { fileName: string; fileContent: string }[] = [];
    public progressInfos: { fileName: string; value: number }[] = [];
    public isEdit:boolean= false;
    public isUpdate:boolean= false;
    public getMetaData: any;
    public  branchID: any;
    form: FormGroup;
  
    
      constructor(
        private sessionService:SessionService,
        private swalService: SwalService,
        @Inject(MAT_DIALOG_DATA) data: any,
        private formBuilder: FormBuilder,
        private formsService: FormsService,
        private matDialog: MatDialog
      ) {

    
        this.form = this.formBuilder.group({
          shiftName: ['', Validators.required],
          shiftShortName:['',  Validators.required],
          shiftStartTime: ['',Validators.required],
          shiftEndTime: ['',Validators.required],
          graceInTime: ['',Validators.required],
          lunchBreakInTime:['',Validators.required],
          lunchBreakOutTime:['',Validators.required],
          halfDayGraceTime:['',Validators.required],
          graceOutTime:['',Validators.required],
        });
      }
    


    
      ngOnInit(): void {
  
        this.loadMetaData();
        this.getbranchID()
       }
       getbranchID(){
        this.branchID = this.sessionService.getbranchID();
      }
    
      async submitForm() {
        this.submitted = true;

  
    
        if (this.form.valid) {
          const postData = {
            branchID:this.branchID,
            shiftName: this.form.get("shiftName")?.value,
            shiftShortName: this.form.get("shiftShortName")?.value,
            shiftStartTime: this.form.get("shiftStartTime")?.value,
            shiftEndTime:this.form.get("shiftEndTime")?.value,
            graceInTime: this.form.get("graceInTime")?.value,
            graceOutTime: this.form.get("graceOutTime")?.value,
            lunchBreakInTime: this.form.get("lunchBreakInTime")?.value,
            lunchBreakOutTime: this.form.get("lunchBreakOutTime")?.value,
            halfDayGraceTime: this.form.get("halfDayGraceTime")?.value,
            
          };
    
          try {
            const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolShiftMaster);
    
            // Show success toast notification
            this.swalService.addSuccess()
    
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
    
      /**
       * Resets the form to its initial state, clearing all form fields, errors, and submission status.
       */
       
       
     updateForm() {
          if (this.isEdit) {
            return; // Exit if the form has already been submitted
          }
          console.log('Form submitted!');
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
          const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolShiftMaster);
  
          // Store the fetched data in the component's `listData` property.
          this.listData = listData.data;
    
          // Log the fetched data to the console for debugging purposes.
          console.log("this.listData", this.listData);
    
        } catch (error) {
          // Handle any errors that occur during the data fetch process.
          // Currently, the catch block is empty, but error handling could be added here if needed.
        }
      }
  
  
      async loadMetaData() {
        try {
          // Fetch the metadata from the server
          const metaData = await this.formsService.getListData(schoolErpEndpoint.SchoolMetaData);
    
          // Filter to only include objects that have 'statusValues'
          this.getMetaData = metaData.filter((data: any) => data.statusValues);
          console.log('getMetaData (filtered)', this.getMetaData);
    
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      }
    
      // Method to get statusValues only
      getOptions(data: any): any[] {
        return data.statusValues || [];
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
    
  
  