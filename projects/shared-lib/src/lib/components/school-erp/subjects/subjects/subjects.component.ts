import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SessionService, SwalService } from 'school-erp-public';
import { FileUploadService } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-subjects',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, ConfirmationService, MessageService,DialogService],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent   {
  
  form: FormGroup;
  isEdit: boolean = false; // Toggle between Add and Edit modes
  visible:boolean=false;

  actionItems: any[] = [];
  selectedElement: any;

  public isAddForm:boolean=true
  public isEditForm:boolean=true
  public dialogTitle:any
  public loading = false;
  public listData: any;
  public getMetaData: any;
  public searchValue: any;
  public metaTableData:any;
  public globalBranchID;
  public boardList:any;
  public submitted:boolean=false;
  public selectedBoardID:any;
  public displayEditModal: boolean = false;
  public subjectsMetaData:any;
  public statusMetaData:any;
  public selectedMetaStatus:any


  constructor(
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private sessionService: SessionService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private swalService: SwalService,
    public dialog: MatDialog,
    private formsService: FormsService,

  ){

    this.form = this.fb.group({
      board:[''],
      subjectName: ['', Validators.required],
      year: ['', Validators.required],
      creditHour: ['', Validators.required],
      totalMarks: ['', Validators.required],
      passingMarks: ['', Validators.required],
      description: ['', [Validators.required, Validators.min(1)]],
      managedBy: ['', [Validators.required, Validators.min(1)]],
      regulationIds: ['', Validators.required],
      status: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.loadTableData();
    
    this.actionItems = this.tableActionItems(null);

  }


  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

  


  tableActionItems(val: any) {
    return [
      {
        label: 'View',
        icon: 'pi pi-eye',
        // command: () => this.viewElement(val),
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.openEditDialog(val),
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.deleteElement(val),
      },
    ];
  }


  async openEditDialog(event?:any){
    this.displayEditModal=true

    const selectedID= event.id


    try {
      const response = await this.formsService.getFormData(selectedID, schoolErpEndpoint.SchoolEventAdd);
      console.log('Response data:', response);

      if (response && response.data) {
        const formData = response.data; // Access the first item in the array



        const boardID= formData.board_id== 

        // Patch the form with retrieved data
        this.form.patchValue({
          eventName: formData?.eventName || '',
          eventType: formData?.eventType || '',
          startDate: formData?.start_date || '',
          endDate: formData?.end_date || '',
          duration: formData?.duration || '',
          totalParticipants: formData?.participants_total || '',
          location: formData?.location || '',
          description: formData?.description || '',
        });

        // this.preFillData = formData;

      } else {
        console.error('Data array is empty or invalid structure:', response);
      }
    } catch (error) {
      console.error('Failed to load form data:', error);
    }
  }





  async deleteElement(val: any): Promise<void> {
    const id = val.id;
    const endpoint = schoolErpEndpoint.SchoolStudentBasicInfo;
    this.loading = true;

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'swalAlertSuccess',
        cancelButton: 'swalAlertConfirm'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await this.formsService.deleteFormData(id, endpoint);
          this.swalService.deleteSuccess();
          await this.loadTableData();
        } catch (error) {
          this.swalService.deleteError();
        } finally {
          setTimeout(() => {
            this.loading = false; 
          }, 1000);
        }
      } else {
        console.log("User clicked Cancel");
        this.loading = false; 
      }
    });

  }



  onButtonClick(element: any) {
    this.selectedElement = element;
    this.actionItems = this.tableActionItems(element);
  }

  openAddDialog(type: string, data?: any) {
    this.loadMetaData()
    this.visible = true; // Open the dialog
  }
  

  async loadMetaData() {
    try {
      // Fetch the list data from the server using the forms service.
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation);
      // const globleMetaData = await this.formsService.getListData(schoolErpEndpoint.SchoolMetaData);
      // this.statusMetaData = globleMetaData.filter((data: any) => data.statusValues);
  
      // Assign the fetched data to the boardList property.
      this.boardList = listData.data;
  
      // Debugging output (update variable to `this.boardList` instead of `this.listData`).
      console.log("this.boardList", this.boardList);
  
    } catch (error) {
      // Handle errors with meaningful output or a toast notification.
      console.error("Failed to load metadata:", error);
    }
  }
  

  async loadTableData() {
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolSubject);

      // Store the fetched data in the component's `listData` property.
      this.metaTableData = listData.data;

      // Log the fetched data to the console for debugging purposes.
      console.log("this.listData", this.listData);

    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
    }
  }



  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.loading = true; // Show loading spinner
  
      if (this.isAddForm) {

        // Prepare data for adding a new record
        const postData = {
          branch_id: this.globalBranchID,
          board: this.form.get('board')?.value,
          title: this.form.get('name')?.value,
          creditHour: this.form.get('creditHour')?.value,
          subjectType: this.form.get('subjectType')?.value,
          // classType: this.form.get('classType')?.value,
          passingMarks: this.form.get('passingMarks')?.value,
          location: this.form.get('location')?.value,
          description: this.form.get('description')?.value,
          managedBy: this.form.get('managedBy')?.value,
          regulationIds: this.form.get('regulationIds')?.value,
          status: this.form.get('status')?.value,
        };
  
        try {
          console.log('POST Data:', postData);
  
          // Submit the form data to the add endpoint
          const response = await this.formsService.onFormSubmit(
            postData,
            schoolErpEndpoint.SchoolSubject
          );
  
          // Refresh the list and show success notification
          this.listData = response.data;
          await this.loadTableData(); // Refresh list data
  
          // Simulate delay for spinner
          // await this.delay(1000);
          this.swalService.addSuccess();
        } catch (error) {
          console.error('Form submission error:', error.message || error);
          this.swalService.warningNotification(
            'Submission Failed',
            'Please try again later.'
          );
        } finally {
          this.loading = false; // Hide spinner
        }
      } else {
        // Handle editing an existing record
        const updateData = {
          board_id: this.selectedBoardID,
          event_name: this.form.get('eventName')?.value,
          event_type: this.form.get('eventType')?.value,
          event_startdate: this.form.get('startDate')?.value,
          event_end_date: this.form.get('endDate')?.value,
          duration: this.form.get('duration')?.value,
          total_participants: this.form.get('totalParticipants')?.value,
          location: this.form.get('location')?.value,
          description: this.form.get('description')?.value,
        };
  
        try {
          console.log('Update Data:', updateData);
  
          // Submit the form data to the edit endpoint
          const id = formData.id; // Ensure `id` exists in formData
          const response = await this.formsService.updateFormData(updateData,id,schoolErpEndpoint.SchoolEventAdd);
  
          // Refresh the list and show success notification
          this.listData = response.data;
          await this.loadTableData(); // Refresh list data
  
          // Simulate delay for spinner
          // await this.delay(1000);
          this.swalService.updateSuccess();
        } catch (error) {
          console.error('Form update error:', error.message || error);
          this.swalService.warningNotification(
            'Update Failed',
            'Please try again later.'
          );
        } finally {
          this.loading = false; // Hide spinner
        }
      }
  
      this.visible = false; // Close the dialog
    } else {
      // Handle invalid form case
      this.form.markAllAsTouched();
      await this.swalService.warningNotification(
        'Invalid Form',
        'Please check the fields and try again.'
      );
      this.loading = false;
    }
  }



  async onBoardSelection(event: any) {
    try {
      const selectedID = event.id; // Extract the selected ID
      // Assign the selected board ID to the class property
      this.selectedBoardID = selectedID;
  
    } catch (error) {
      console.error('Failed to process board selection:', error.message || error);
    }
  }

  async metaStatus(event: any) {
    try {
      const selectedID = event.id; // Extract the selected ID
      // Assign the selected board ID to the class property
      this.selectedMetaStatus = selectedID;
  
    } catch (error) {
      console.error('Failed to process board selection:', error.message || error);
    }
  }
  

}
