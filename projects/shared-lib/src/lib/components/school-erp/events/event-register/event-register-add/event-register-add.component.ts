import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SessionService, SwalService } from 'school-erp-public';
import { FileUploadService } from 'shared-lib';

@Component({
  selector: 'lib-event-register-add',
  standalone: true,
 
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './event-register-add.component.html',
  styleUrl: './event-register-add.component.css'
})
export class EventRegisterAddComponent {

    
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
    public  eventList:any
    selectedEvent: any = null; // To hold the selected event's details

    form: FormGroup;
  
    
      constructor(
      private sessionService:SessionService,
        private fileUploadService: FileUploadService,
        private swalService: SwalService,
        @Inject(MAT_DIALOG_DATA) data: any,
        private formBuilder: FormBuilder,
        private formsService: FormsService,
        private matDialog: MatDialog
      ) {
    
        this.form = this.formBuilder.group({
          studentID: ['', Validators.required],
          studentName: ['', Validators.required],
          eventID: ['',Validators.required],
        });
      }
    
    
      ngOnInit(): void {
  
        this.loadMetaData()
       }
  
  
    
       async submitForm() {
        this.submitted = true;
      
        // Check if the form is valid
        if (this.form.valid) {
          // Collect the form data
          const postData = {
            studentID: this.form.get("studentID")?.value,
            studentName: this.form.get("studentName")?.value,
            eventID: this.form.get("eventID")?.value,
            eventName: this.form.get("eventName")?.value,
            eventType: this.form.get("eventType")?.value,
            location: this.form.get("location")?.value,
            duration: this.form.get("duration")?.value,
            eventStartDate: this.form.get("eventStartDate")?.value,
            eventEndDate: this.form.get("eventEndDate")?.value,
            description: this.form.get("description")?.value,
            registrationStatus: this.form.get("registrationStatus")?.value,
            branchID: this.form.get("branchID")?.value
          };
      
          // Try submitting the form data
          try {
            // Call the service to send the data to the backend
            const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolBranch);
      
            // Show success toast notification
            this.swalService.addSuccess();
      
            // Show loading spinner
            this.loading = true;
      
            // Refresh the list data (if needed)
            this.listData = response.data;
      
            // Notify the parent component that the data was added
            this.dataAdded.emit();
      
            // Reset the form after submission
            this.resetForm();
      
            // Function to simulate the delay before hiding the spinner
            const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      
            // Simulate the loading spinner delay
            await this.loadFormData(); // Refresh the form data if necessary
      
            // Hold the spinner for an additional 1 second
            await delay(1000);
      
            // Hide the loading spinner
            this.loading = false;
      
            // Close the dialog
            this.matDialog.closeAll();
      
          } catch (error) {
            // Handle errors (e.g., validation errors from the backend)
            if (error.response && error.response.data.errors) {
              // Loop through errors and display them on the form
              Object.keys(error.response.data.errors).forEach(field => {
                const errors = error.response.data.errors[field];
                // You can display the error messages in the form controls
                this.form.get(field)?.setErrors({ serverError: errors.join(', ') });
              });
            } else {
              // Show a generic error if no specific error is returned from the backend
              this.swalService.addError();
            }
      
            // Ensure the spinner is hidden in case of error
            this.loading = false;
          } finally {
            // Hide the spinner once the process is completed (success or failure)
            this.loading = false;
          }
      
        } else {
          // If the form is invalid, show a warning notification
          await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
      
          // Hide the loading spinner if form is invalid
          this.loading = false;
        }
      }
      

       
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
          const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBranch);
  
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
          const metaData = await this.formsService.getListData(schoolErpEndpoint.SchoolEventRegister);
      
          // Safely access event data from the response
          const eventListEventedData = metaData.data || [];
      
          // Extract events from the response if available
          this.eventList = eventListEventedData.map((item: any) => item.event).filter((event: any) => event);
      
          console.log("this.eventList", this.eventList); // Log the event list for debugging



      
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      }
      
      // Method to get statusValues only
      getOptions(data: any): any[] {
        return data.statusValues || [];
      }
  
        // Function triggered when event is selected
getEventDetails(eventId: number) {
  // Find the selected event from the eventList
  this.selectedEvent = this.eventList.find(event => event.id === eventId) || null;

  // Check if the selectedEvent exists and populate form fields
  if (this.selectedEvent) {
    this.form.patchValue({
      eventName: this.selectedEvent.name,
      eventType: this.selectedEvent.event_type,
      location: this.selectedEvent.location,
      duration: this.selectedEvent.duration,
      eventStartDate: this.selectedEvent.event_startdate,
      eventEndDate: this.selectedEvent.event_end_date
    });
  } else {
    // Optional: Handle case if no event is found (clear the form or handle error)
    this.form.reset();  // This resets the form if no event is found
  }
}

      }
    
    
  
  