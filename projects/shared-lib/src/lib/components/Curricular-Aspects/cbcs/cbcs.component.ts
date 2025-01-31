import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule,  YearMonthDayPipe, FormsService, SnackbarService, SpinnerService, TablePaginationService, CbcsAddComponent, CbcsViewComponent, CbcsEditComponent } from 'shared-lib';
import Swal from 'sweetalert2';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-cbcs',
  templateUrl: './cbcs.component.html',
  styleUrls: ['./cbcs.component.scss'],
  standalone:true,
  imports: [MaterialModule, SharableModule,  YearMonthDayPipe,MatSort, NgxPrintModule],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
})
export class CbcsComponent implements OnInit , AfterViewInit  {
  
  pageSizeOptions: number[] = [];


  displayedColumns = ["id",  "programName","status", 'introductionYear', 
    'revisionYear', 'contentPercentage', "actions"];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('print-section', { static: false }) printSection: ElementRef;


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
      const listData = await this.formsService.getListData(endpoints.CBCS);
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
    const dialogRef = this.dialog.open(CbcsAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.loadFormData();
    });
  }

  viewElement(val: any) {
    const dialogRef = this.dialog.open(CbcsViewComponent, {
      data: { id: val.id }
    });
  }

  

  async editElement(val: any) {
    this.isLoading = true; // Start the loading spinner
  
    const dialogRef = this.dialog.open(CbcsEditComponent, {
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
    const endpoint = endpoints.CBCS;
  
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d00000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await this.formsService.deleteFormData(id, endpoint);
          
          Swal.fire({
            title: 'Deleted!',
            text: 'Record deleted successfully!',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false,
            position: 'top-end',
            toast: true
          });
  
          this.loadFormData();
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete the record. Please try again.',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false,
            position: 'top-end',
            toast: true
          });
        } finally {
          setTimeout(() => {
            this.isLoading = false; // Stop loading spinner
          }, 1000);
        }
      } else {
        console.log("User clicked Cancel");
      }
    });
  
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

  printPage(){}

  downloadPDF(){}


}
