import { async } from '@angular/core/testing';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SessionService, SwalService } from 'school-erp-public';
import {  YearMonthDayPipe, FileUploadService } from 'shared-lib';

@Component({
  selector: 'lib-event-type-add',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './event-type-add.component.html',
  styleUrl: './event-type-add.component.css'
})
export class EventTypeAddComponent {

    
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
    public branchID:any
    public boardList:any;
    public selectedBoardValue:any
    
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
          boardID:[''],
          eventName: ['', Validators.required],
          event_type: ['', Validators.required],
          startDate: ['',Validators.required],
          endDate: ['',Validators.required],
          description: ['',Validators.required],
          duration:['',Validators.required],
          total:['',Validators.required],
          location:['',Validators.required],
        });
      }
    
    
      ngOnInit(): void {
        this.loadMetaData();
        this.getbranchID();
       }
  
       
       getbranchID(){
        this.branchID = this.sessionService.getbranchID();
        console.log("this.branchID", this.branchID );
        
      }
    
      async submitForm() {
        this.submitted = true;
        this.loading = true;
        
        if (this.form.valid) {

          console.log(" Valid Submitted ", this.form.value);

            const postData = {
                board_id: this.selectedBoardValue,
                event_name: this.form.get('eventName')?.value,
                event_type: this.form.get('event_type')?.value,
                description: this.form.get('description')?.value,
                event_startdate: this.form.get('startDate')?.value,
                event_end_date: this.form.get('endDate')?.value,
                duration: this.form.get('duration')?.value,
                location: this.form.get('location')?.value,
                total_participants: this.form.get('total')?.value,
          };
    
          try {
            const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolEventAdd);
    
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
          const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolEventAdd);
  
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
          // Fetch metadata and board metadata from the server
          const boardMetaData = await this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation);
      
          // Assign the data to the respective variables
          this.boardList = boardMetaData?.data || []; // Ensure it handles undefined or null safely
          // Log results for debugging
          console.log('Board List:', this.boardList);
      
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      }

      async updateBoard(event:any){
        this.selectedBoardValue= event;
        console.log("board_id", event);
        
       
      }

    
      // Method to get statusValues only
      getOptions(data: any): any[] {
        return data.statusValues || [];
      }
  
      
    
    
    }
    
  
  
