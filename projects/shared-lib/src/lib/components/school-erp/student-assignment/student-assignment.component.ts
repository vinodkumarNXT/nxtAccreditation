import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import {
  MaterialModule,
  SharableModule,
  FormsService,
  SessionService,
  SwalService,
} from 'school-erp-public';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-student-assignment',
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    ConfirmationService,
    MessageService,
    DialogService,
    DatePipe,
  ],
  standalone: true,
  templateUrl: './student-assignment.component.html',
  styleUrl: './student-assignment.component.css',
})
export class StudentAssignmentComponent {
  public loading = false;
  public fetchedData: any;
  public listData: any;
  form: FormGroup;
  public getMetaData: any;

  public visible: boolean = false;
  public searchValue: any;
  public selectedSection: any;
  public tableMetaDataList: any;
  public branchID: any;
  public submitted: boolean = false;

  public isAddForm: boolean = true;
  public isEditForm: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private swalService: SwalService,
    public dialog: MatDialog,
    private formsService: FormsService
  ) {
    this.form = this.formBuilder.group({
      boardName: ['', Validators.required],

      approvedBy: [null],
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  }

  tableActionItems = (val: any) => [
    {
      label: 'View',
      icon: 'pi pi-eye',
      command: () => this.viewElement(val), // Pass `val` dynamically
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => this.editElement(val), // Pass `val` dynamically
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      // command: () => this.deleteElement(val), // Pass `val` dynamically
    },
  ];

  viewElement(val: any): void {}

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  async editElement(val: any): Promise<void> {
    this.loading = true; // Start the loading spinner to indicate that a process is ongoing
  }

  async deleteElement(val: any): Promise<void> {
    const id = val.id;
    const endpoint = schoolErpEndpoint.SchoolEnrollment;
    this.loading = true; // Start the loading spinner

    // Show confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'swalAlertSuccess',
        cancelButton: 'swalAlertConfirm',
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Perform the deletion request
          await this.formsService.deleteFormData(id, endpoint);
          this.swalService.deleteSuccess();
          await this.loadFormData();
        } catch (error) {
          this.swalService.deleteError();
        } finally {
          setTimeout(() => {
            this.loading = false; // Stop loading spinner
          }, 1000);
        }
      } else {
        console.log('User clicked Cancel');
        this.loading = false; // Ensure spinner is hidden if user cancels
      }
    });
  }

  getbranchID() {
    this.branchID = this.sessionService.getbranchID();
  }

  async submitForm() {
    this.submitted = true;
    // Get the branch code from the SessionService
    if (this.form.valid) {
      const postData = {
        boardName: this.form.get('boardName')?.value,
        appliedYear: this.form.get('appliedYear')?.value,
        classEnroll: this.form.get('classEnroll')?.value,
        branchID: this.branchID,
        firstName: this.form.get('firstName')?.value,
        middleName: this.form.get('middleName')?.value,
        lastName: this.form.get('lastName')?.value,
        dateOfBirth: this.form.get('dateOfBirth')?.value,
      };

      try {
        const response = await this.formsService.onFormSubmit(
          postData,
          schoolErpEndpoint.SchoolBuildings
        );

        // Show success toast notification
        this.swalService.addSuccess();

        // Start showing the loading spinner
        this.loading = true;

        // Refresh the list data
        this.listData = response.data;

        // Function to simulate the delay before hiding the spinner
        const delay = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        // Refresh the list data and simulate the loading spinner delay
        await this.loadFormData(); // Refresh the list data

        // Hold the spinner for an additional 2 seconds
        await delay(1000);

        // Hide the spinner after the delay
        this.loading = false;
      } catch (error) {
        this.swalService.addError();

        // Ensure the spinner is hidden on error
        this.loading = false;
      } finally {
        // Ensure the spinner is off after all actions are complete
        this.loading = false;
        // If form is invalid, mark all fields as touched to show validation errors
      }
    } else {
      // Show warning toast notification
      await this.swalService.warningNotification(
        'Invalid Form',
        'Please check the fields and try again.'
      );
      // Ensure the spinner is hidden if form is invalid
      this.loading = false;
    }
  }

  async loadFormData() {
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(
        schoolErpEndpoint.SchoolEnrollment
      );

      // Store the fetched data in the component's `listData` property.
      this.listData = listData.data;

      // Log the fetched data to the console for debugging purposes.
      console.log('this.listData', this.listData);
    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
    }
  }
  // const countryData = await this.formsService.getListData(schoolErpEndpoint.SchoolCountry);

  openAddDialog() {
    this.visible = true;
    this.isAddForm = true;
  }
}
