import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule,  YearMonthDayPipe, FormsService, SnackbarService, SpinnerService, TablePaginationService, AveragePercentageViewComponent, AveragePercentageAddComponent, AveragePercentageEditComponent } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-average-percentage',
  standalone: true,
  imports: [MaterialModule, SharableModule,  YearMonthDayPipe,MatSort],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './average-percentage.component.html',
  // styleUrl: './average-percentage.component.css'
})
export class AveragePercentageComponent {

  pageSizeOptions: number[] = [];
    displayedColumns = ["id", "courseCode", "courseName","status", 'activities', "actions"];
  
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
  
    public isLoading = false;
    public fetchedData: any;
    public listData: any;
    form: FormGroup;
  
    constructor(
      private spinnerService: SpinnerService,
      private tablePaginationService: TablePaginationService,
      private formBuilder: FormBuilder,
      private _snackBar: MatSnackBar,
      private route: ActivatedRoute,
      public dialog: MatDialog,
      private snackbarService: SnackbarService,
      private formsService: FormsService
    ) {
    }
  
    ngOnInit(): void {
      this.loadFormData();
    }
  
  
    async loadFormData() {
      try {
        const listData = await this.formsService.getListData(endpoints.CirAspAveragePercent);
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
      const dialogRef = this.dialog.open(AveragePercentageAddComponent, {});
      dialogRef.afterClosed().subscribe(result => {
        this.loadFormData();
      });
    }
  
    viewElement(val: any) {
      const dialogRef = this.dialog.open(AveragePercentageViewComponent, {
        data: { id: val.id }
      });
    }
  
    
  
    async editElement(val: any) {
      this.isLoading = true; // Start the loading spinner
    
      const dialogRef = this.dialog.open(AveragePercentageEditComponent, {
        data: { id: val.id }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        this.loadFormData(); // Refresh the data
        setTimeout(() => {
          this.isLoading = false; // Stop the loading spinner after a slight delay
        }, 1000);
      });
    }
    
  

    async deleteElement(val: any) {
      const id = val.id;
      const endpoint = endpoints.CirAspAveragePercent;
    
      const confirmationResult = await Swal.fire({
        title: 'Are you sure you want to delete?',
        text: "This action cannot be undone!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        customClass: {
          confirmButton: 'swal2-confirm',
          cancelButton: 'swal2-cancel'
        }
      });
    
      if (confirmationResult.isConfirmed) {
        try {
          this.isLoading = true; // Start loading spinner
          await this.formsService.deleteFormData(id, endpoint);
    
          Swal.fire({
            icon: 'success',
            title: 'Record deleted successfully!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
    
          this.loadFormData();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Failed to delete record. Please try again.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
        } finally {
          setTimeout(() => {
            this.isLoading = false; // Stop loading spinner
          }, 1000);
        }
      } else {
        console.log("User clicked Cancel");
      }
    }
    
    
  
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  
    }
  
  
  
  
  
  }
  