import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NgxLoadingService } from 'ngx-loading';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule,  YearMonthDayPipe, FormsService, SwalService, TablePaginationService, UndertakingFieldProjectsEditComponent, UndertakingFieldProjectsAddComponent, UndertakingFieldProjectsViewComponent } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-undertaking-field-projects',
  standalone: true,
  imports: [MaterialModule, SharableModule,  YearMonthDayPipe,MatSort],
  providers: [FormsService, provideNativeDateAdapter()],

  templateUrl: './undertaking-field-projects.component.html',
  styleUrl: './undertaking-field-projects.component.css'
})
export class UndertakingFieldProjectsComponent implements OnInit , AfterViewInit  {
  
  pageSizeOptions: number[] = [];


  // {
  //   "id": 2,
  //   "course_name": "Electrical And Electronics",
  //   "course_code": "EEE",
  //   "no_of_students": "",
  //   "upload_files": [
  //     "1725079841_Screenshot_(8).png",
  //     "1725079841_Screenshot_(9).png"
  //   ],
  //   "document_links": null
  // }

  displayedColumns = ["id", "courseCode", "courseName", "noOfStudents", "actions"];




  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public loading = false;
  public fetchedData: any;
  public listData: any;
  form: FormGroup;

  constructor(
    private swalService:SwalService,
    private loadingService: NgxLoadingService,
    private tablePaginationService: TablePaginationService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private formsService: FormsService
  ) {
  }

  ngOnInit(): void {
    this.loadFormData();
  }


  async loadFormData() {
    try {
      const listData = await this.formsService.getListData(endpoints.UndertakingFieldProjects);
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
  const dialogRef = this.dialog.open(UndertakingFieldProjectsAddComponent, {});
  
  // Subscribe to the dialog's afterClosed event to refresh the form data once the dialog is closed
  dialogRef.afterClosed().subscribe(result => {
    this.loadFormData(); // Refresh the form data to reflect any changes
  });
}



viewElement(val: any): void {
  // Open the dialog with the Component
  const dialogRef = this.dialog.open(UndertakingFieldProjectsViewComponent, {
    // Pass the element's id as data to the dialog
    data: { id: val.id }
  });

  // Optional: Add any additional logic to handle after the dialog is closed or during its lifecycle if needed
}

  


async editElement(val: any): Promise<void> {
  this.loading = true; // Start the loading spinner to indicate that a process is ongoing

  // Open the dialog with the InstitutionIntegratesEditComponent
  const dialogRef = this.dialog.open(UndertakingFieldProjectsEditComponent, {
    // Pass the element's id as data to the dialog
    data: { id: val.id }
  });

  // Subscribe to the afterClosed observable of the dialog
  dialogRef.afterClosed().subscribe(result => {
    // Refresh the form data to reflect any changes made in the dialog
    this.loadFormData();
    
    // Stop the loading spinner after a slight delay to ensure smooth user experience
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  });
}

  
async deleteElement(val: any): Promise<void> {
  const id = val.id;
  const endpoint = endpoints.UndertakingFieldProjects;
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
