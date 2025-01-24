import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule, SharableModule, FormsService, FeaturemasterAddComponent, FeaturemasterEditComponent, TablePaginationService, FileUploadService, SwalService } from 'shared-lib';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-feature-master',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './feature-master.component.html',
  styleUrl: './feature-master.component.scss'
})
export class FeatureMasterComponent implements OnInit {
  public isLoading = false;
  public loading = false;
  public fetchedData: any;
  public listData: any;
  displayedColumns = ['ID', 'RoleName', 'FeatureName', 'Create', 'View', 'Edit', 'Delete', 'Actions'];

    pageSizeOptions: number[] = [];


    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    form: FormGroup;

  constructor(
    private fileUploadService: FileUploadService,
    private swalService: SwalService,
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
      const listData = await this.formsService.getListData(endpoints.FeatureMaster);
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


  openAddDialog() {
    const dialogRef = this.dialog.open(FeaturemasterAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.loadFormData();
    });
  }



  async editElement(val: any) {
    const dialogRef = this.dialog.open(FeaturemasterEditComponent, {
      data: { id: val.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.loadFormData();
    });
  }

  // async deleteElement(val: any) {
  //   const id = val.role_master_id; // Adjust based on your data structure
  //   const endpoint = endpoints.FeatureMaster; // Adjust endpoint if needed


    // this.confirmationDialogService.open('Are you sure you want to Delete ?', 'Delete', 'Delete', 'Cancel').subscribe(async result => {
    //   if (result) {
    //     try {
    //       await this.formsService.deleteFormData(id, endpoint);
    //       this.snackbarService.openSnackBar('Record deleted successfully!', 'X', 'snackbar-success', 3000);
    //       this.loadFormData();

    //     } catch (error) {
    //       this.snackbarService.openSnackBar('Failed to delete record. Please try again.', 'X', 'snackbar-danger', 3000);
    //     } finally {
    //     }
    //   } else {
    //     console.log("User clicked Cancel");
    //   }
    // });
  // }


  async deleteElement(val: any): Promise<void> {
    const id = val.role_master_id;
    const endpoint = endpoints.FeatureMaster;
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
