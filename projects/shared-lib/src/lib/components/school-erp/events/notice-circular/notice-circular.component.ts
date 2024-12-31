import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SessionService, SwalService } from 'school-erp-public';
import { FileUploadService } from 'shared-lib';

@Component({
  selector: 'lib-notice-circular',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, ConfirmationService, MessageService, DialogService,DatePipe],
  templateUrl: './notice-circular.component.html',
  styleUrl: './notice-circular.component.css'
})
export class NoticeCircularComponent {


    form: FormGroup;
    public loading = false;
    public fetchedData: any;
    public listData: any;
    public getMetaData: any;
    public boardList: any;
    public  visible: boolean = false;
    public searchValue: any;
    public selectedSection: any;
    public tableMetaDataList:any



    constructor(
      private datePipe: DatePipe,
      private dialogService: DialogService,
      private confirmationService: ConfirmationService,
      private messageService: MessageService,
      private sessionService: SessionService,
      private spinner: NgxSpinnerService,
      private fb: FormBuilder,
      private fileUploadService: FileUploadService,
      private swalService: SwalService,
      public dialog: MatDialog,
      private formsService: FormsService
    ){

    }

    ngOnInit(){
      this.loadTableData();
    }


    clear(table: Table) {
      table.clear();
      this.searchValue = '';
    }

     // Open dialog method
  openAddDialog(): void {
    // Set visible to true to show the dialog
    this.visible = true;
    
  
  }

  tableActionItems = (val: any) => [
    {
      label: 'View',
      icon: 'pi pi-eye',
      // command: () => this.viewElement(val), // Pass `val` dynamically
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      // command: () => this.editElement(), // Pass `val` dynamically
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      // command: () => this.deleteElement(val), // Pass `val` dynamically
    },
  ];


  async loadTableData() {
  
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolNoticeBoard);

      // Store the fetched data in the component's `listData` property.
      this.tableMetaDataList = listData.data;

      // Log the fetched data to the console for debugging purposes.
      console.log("this.listData", this.listData);

    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
    }
  }

  

}
