import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SwalService, SessionService } from 'school-erp-public';
import { FileUploadService } from 'shared-lib';

@Component({
  selector: 'lib-ground-add',
  standalone: true,
  imports: [MaterialModule, SharableModule,],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './ground-add.component.html',
  styleUrl: './ground-add.component.css'
})
export class GroundAddComponent {

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
    public boardList: any;
    public selectedBoardID: any;
    public branchID:any;
    
    form: FormGroup;



    typeOfGround = [
      { id: 1, name: 'Indoor' },
      { id: 2, name: 'OutDoor' }
    ];
    
      constructor(
        private sessionService:SessionService,
        private fileUploadService: FileUploadService,
        private swalService: SwalService,
        @Inject(MAT_DIALOG_DATA) data: any,
        private formBuilder: FormBuilder,
        private formsService: FormsService,
        private matDialog: MatDialog
      ) {
    

      //   {
      //     "branchId":3,
      //     "board":3,
      //     "name":"qwertyui",
      //     "address":"mnbvcdfghj,gvsch,tybjd",
      //     "status":"2",
      //     "city":"hyd",
      //     "state":"telangana",
      //     "postalCode":"505001",
      //     "country":"india",
      //     "length":"12metres",
      //     "width":"300 metres",
      //     "facilities":"sdsfs",
      //     "sportName":"cricket",
      //     "weekDays":"monday",
      //     "weekends":"sunday",
      //     "managerName":"sdfghjhg",
      //     "phone":"98765432",
      //     "email":"sunday@mail.com",
      //     "type":"Basket Ball"
      // }

        this.form = this.formBuilder.group({
          board: ['', Validators.required],
          name: ['', Validators.required],
          address: ['',Validators.required],
          status: ['',Validators.required],
          city:['',],
          length:['',Validators.required],
          width:['',Validators.required],
          facilities:['',Validators.required],
          sportName:['',Validators.required],
          weekDays:[''],
          weekends:[''],
          managerName:[''],
          phone:['',Validators.required],
          type:['',Validators.required],
          postalCode:[''],
          email:['']
        });
      }
    
    
      ngOnInit(): void {
  
        this.loadMetaData();
        this.getbranchID();
        this.loadBoardList();
        
      }
      
      onTypeChange(value: string) {
        if (value === 'Indoor') {
          this.form.get('type')?.setValue('OutDoor', { emitEvent: false });
        }
        
        
       
      }
      getbranchID(){
        this.branchID = this.sessionService.getbranchID();
        
      }

    
      async submitForm() {
        this.submitted = true;
    
        console.log("this.form.Value Before Submitted ", this.form.value);
        const branchID = this.branchID;
        console.log("Before branchID ", branchID);
    
        // Show loading spinner before form submission
        this.loading = true;
    
        if (this.form.valid) {
            const postData = {
                branch_id: branchID,
                boardID: this.selctedBoard,
                name: this.form.get("name")?.value,
                address: this.form.get("address")?.value,
                status: this.form.get("status")?.value,
                city: this.form.get("city")?.value,
                length: this.form.get("length")?.value,
                width: this.form.get("width")?.value,
                facilities: this.form.get("facilities")?.value,
                sportName: this.form.get("sportName")?.value,
                weekDays: this.form.get("weekDays")?.value,
                weekends: this.form.get("weekends")?.value,
                managerName: this.form.get("managerName")?.value,
                phone: this.form.get("phone")?.value,
                type: this.form.get("type")?.value,
                postalCode: this.form.get("postalCode")?.value,
                email: this.form.get("email")?.value,
            };
    
            try {
                const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolSportsGround);
    
                // Show success toast notification
                this.swalService.addSuccess();
    
                // Refresh list data
                this.listData = response.data;
                this.dataAdded.emit();  // Notify parent component
    
                // Reset form after successful submission
                this.resetForm();
    
                // Load fresh data (you can remove the delay here if you rely on actual loading)
                await this.loadFormData();
    
                // Close dialog
                this.matDialog.closeAll();
    
            } catch (error) {
                // Show error notification
                this.swalService.addError();
    
                // Log the error for debugging
                console.error("Form submission failed", error);
    
            } finally {
                // Hide the loading spinner after all actions
                this.loading = false;
            }
    
        } else {
            // Show warning toast notification when the form is invalid
            await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
            this.loading = false; // Ensure loading spinner is hidden on invalid form
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
          const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolSportsGround);
  
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

          console.log(" metaData ",  metaData );
          // Filter to only include objects that have 'statusValues'
          this.getMetaData = metaData.filter((data: any) => data.statusValues);
          console.log('getMetaData (filtered)', this.getMetaData);
    
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      }


      async loadBoardList() {
        try {
          // Fetch the board list from the server
          const boardMetaData = await this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation);
          this.boardList = boardMetaData.data;
      
          console.log("Board List:", this.boardList);
        } catch (error) {
          console.error('Error fetching board list:', error);
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



      async selctedBoard(id: any) {
        this.selectedBoardID = id;
        console.log(" this.selectedBoardID",  this.selectedBoardID);
        
      
      }
      
    
    
    }
    
  
  