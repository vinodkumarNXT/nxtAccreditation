import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, UnderscoreToSpacePipe, YearMonthDayPipe, FormsService, FileUploadService, SwalService, TablePaginationService, StudentComplaintsAddComponent, StudentComplaintsViewComponent, StudentComplaintsEditComponent, ProgramOutcomesEditComponent, ProgramOutcomesViewComponent, ProgramOutcomesAddComponent } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-program-outcomes',
  standalone: true,
  imports: [MaterialModule, SharableModule, UnderscoreToSpacePipe, YearMonthDayPipe,MatSort],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './program-outcomes.component.html',
  styleUrl: './program-outcomes.component.css'
})
export class ProgramOutcomesComponent {

  pageSizeOptions: number[] = [];
  displayedColumns = ["id", "programOutcome", "actions"];


//   {
//     "id": 1,
//     "program_outcome": "testing....",
//     "upload_files": [
//         "1725532780_Screenshot_(8).png"
//     ],
//     "document_links": "test"
// }

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public loading = false;
  public fetchedData: any;
  public listData: any;
  form: FormGroup;

  constructor(
   private fileUploadService:FileUploadService,
    private swalService:SwalService,
    private tablePaginationService: TablePaginationService,
    public dialog: MatDialog,
    private formsService: FormsService
  ) {
  }

  ngOnInit(): void {
    this.loadFormData();
  }


  async loadFormData() {
    try {
      const listData = await this.formsService.getListData(endpoints.ProgramOutcomes);
      this.listData = listData?.data || [];

      if (this.listData.length > 0) {
        // this.dataSource = new MatTableDataSource(this.listData);
      this.dataSource = this.tablePaginationService.loadTableData(this.listData);
      this.tablePaginationService.initializePaginator(this.dataSource, this.paginator, this.sort);

        // Generate page size options using the TableService
        this.tablePaginationService.generatePageSizeOptions(this.listData.length);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        console.log("No data available.");
        
      }
    } catch (error) {
      console.log("Failed to load data");

    }
  }


openAddDialog(): void {
  // Open the dialog 
  const dialogRef = this.dialog.open(ProgramOutcomesAddComponent, {});
  
  // Subscribe to the dialog's afterClosed event to refresh the form data once the dialog is closed
  dialogRef.afterClosed().subscribe(result => {
    this.loadFormData(); // Refresh the form data to reflect any changes
  });
}



viewElement(val: any): void {
  // Open the dialog with the Component
  const dialogRef = this.dialog.open(ProgramOutcomesViewComponent, {
    // Pass the element's id as data to the dialog
    data: { id: val.id }
  });

  // Optional: Add any additional logic to handle after the dialog is closed or during its lifecycle if needed
}

  


// async editElement(val: any): Promise<void> {
//   this.loading = true; // Start the loading spinner to indicate that a process is ongoing

//   // Open the dialog with the InstitutionIntegratesEditComponent
//   const dialogRef = this.dialog.open(DemandRatioEditComponent, {
//     // Pass the element's id as data to the dialog
//    

//     data: { files$: this.fileUploadService.selectedFiles$ }
//   });

//   // Subscribe to the afterClosed observable of the dialog
//   dialogRef.afterClosed().subscribe(result => {
//     // Refresh the form data to reflect any changes made in the dialog
//     this.loadFormData();
    
//     // Stop the loading spinner after a slight delay to ensure smooth user experience
//     setTimeout(() => {
//       this.loading = false;
//     }, 1000);
//   });
// }


async editElement(val: any): Promise<void> {
  this.loading = true; // Start the loading spinner to indicate that a process is ongoing

  // Open the dialog with the DemandRatioEditComponent
  const dialogRef = this.dialog.open(ProgramOutcomesEditComponent, {
    // Pass the element's id and file upload service data as data to the dialog
    data: { id: val.id }
  });

  // Optionally, you can subscribe to the dialog's afterClosed event if needed
  dialogRef.afterClosed().subscribe(result => {
    this.loading = false; // Stop the loading spinner
    // Handle the result if needed
  });
}


  
async deleteElement(val: any): Promise<void> {
  const id = val.id;
  const endpoint = endpoints.ProgramOutcomes;
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
      cancelButton: 'swalAlertConfirm'
    }
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
      console.log("User clicked Cancel");
      this.loading = false; // Ensure spinner is hidden if user cancels
    }
  });

}



applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  // Reset paginator to the first page after applying filter
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

ngAfterViewInit(): void {
  // Set the paginator and sort for the dataSource
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}



}





