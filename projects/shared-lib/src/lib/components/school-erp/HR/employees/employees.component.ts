import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SwalService, SessionService, StudentListEditComponent, StudentListViewComponent } from 'school-erp-public';
import { FileUploadService } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-employees',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, ConfirmationService, MessageService,DialogService],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  public loading = false;
  public listData: any;
  form: FormGroup;
  public getMetaData: any;
  visible:boolean=false
  public searchValue: any;
  public metaTableData:any
  public globalBranchID;
 public  rolesMetaData:any;
 public boardList:any;
 


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
  ) {

    this.form = this.fb.group({
      selectedBoard: ['', Validators.required],
      selectedYear: ['', Validators.required],
      selectedClass: ['', Validators.required],
      selectedSection: ['', Validators.required],
      selectedCategory: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.BranchId();
    this.loadMetaData()
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
      command: () => this.deleteElement(val), // Pass `val` dynamically
    },
  ];

  async BranchId() {
    try {
      this.globalBranchID = await this.sessionService.getbranchID();
      console.log("Branch ID Global", this.globalBranchID);

    } catch (error) {
      console.error("Error fetching branch ID:", error);
    }
  }

  // Event handlers
  tableActionsave(type: string) {
    console.log(`Saved with type: ${type}`);
  }



  // Open dialog method
  openAddDialog(): void {
    // Set visible to true to show the dialog
    this.visible = true;
    this.loadAddFormData()
  }

  // Method to handle dialog close event
  onDialogClose(result: any): void {
    console.log('Dialog closed', result);
    if (result) {
      this.loadFormData(); // Refresh form data if needed
    }
  }

  // Example method for loading data after dialog closes
  loadAddFormData() {
    console.log('Form data From P Dailog');
    // Add your logic to reload or refresh data
  }

 


  viewElement(val: any): void {
    const dialogRef = this.dialog.open(StudentListViewComponent, {
      data: { id: val.id }
    });
  }



  async editElement(val: any): Promise<void> {
    this.loading = true;

    const dialogRef = this.dialog.open(StudentListEditComponent, {
      data: { id: val.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loading = false;
      this.loadFormData();

    });
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
          await this.loadFormData();
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




  submitForm() {

  }
  async loadFormData() {
    try {
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolStaffBasicInfo);
      this.metaTableData = listData?.data || [];

    } catch (error) {
      console.log("Failed to load data", error);
    }
  }


  async loadMetaData() {
    try {
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation);
      this.boardList = listData?.data || [];

    } catch (error) {
      console.log("Failed to load data", error);
    }
  }


  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }


  confirm() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }
  

  async onBoardSelection(event:any){
    const selectedID = event.branch_id;

    console.log(selectedID);
    
    try {
      const listData = await this.formsService.updateDataID(selectedID,schoolErpEndpoint.SchoolRoleBasedOnBoard);
      this.rolesMetaData = listData?.data || [];

    } catch (error) {
      console.log("Failed to load data", error);
    }

  }
  async onRoleSelection(event: any) {
    const selectedID = event.id;

    console.log("ROLE selectedID",selectedID);
    
  
    try {
      // Fetch data based on the selected ID
      const listData = await this.formsService.getListData( schoolErpEndpoint.SchoolStaffBasicInfo);
  
      // Safely assign the fetched data
      this.metaTableData = listData?.data || [];
  
      // Filter data based on the selected ID
      this.metaTableData = this.metaTableData.filter((data: any) => data.role === selectedID);

      console.log("this.metaTableData",   this.metaTableData );
      
    } catch (error) {
      console.error("Failed to load data", error);
    }
  }
  

}

