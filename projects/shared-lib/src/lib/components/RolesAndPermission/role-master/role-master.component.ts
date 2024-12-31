import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { endpoints } from 'projects/shell/environments/endpoint';
import { FormsService, MaterialModule, RolemasterAddComponent, RolemasterEditComponent, SharableModule, SnackbarService, TablePaginationService, UnderscoreToSpacePipe, YearMonthDayPipe } from 'shared-lib';
@Component({
  selector: 'lib-role-master',
  standalone: true,
  imports: [MaterialModule, SharableModule, UnderscoreToSpacePipe, YearMonthDayPipe],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.css'
})
export class RoleMasterComponent  implements OnInit  {

  public isLoading = false;
  public fetchedData: any;
  public listData: any;
  displayedColumns = ["ID", "RoleName", "Actions"];
  pageSizeOptions: number[] = [];


  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form: FormGroup;

  constructor(
    private tablePaginationService:TablePaginationService,
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
      const listData = await this.formsService.getListData(endpoints.RolesMaster);
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
    const dialogRef = this.dialog.open(RolemasterAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.loadFormData();
    });
  }

  // viewElement(val: any) {
  //   const dialogRef = this.dialog.open(CoordinateViewComponent, {
  //     data: { id: val.id }
  //   });
  // }

  async editElement(val: any) {
    const dialogRef = this.dialog.open(RolemasterEditComponent, {
      data: { id: val.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadFormData();
      setTimeout(() => {
        this.isLoading= false;
          }, 1000);
    });
  }

  async deleteElement(val: any) {
    const id = val.id; // Adjust based on your data structure
    const endpoint = endpoints.RolesMaster; // Adjust endpoint if needed


    // this.confirmationDialogService.open('Are you sure you want to Delete ?', 'Delete', 'Delete', 'Cancel').subscribe(async result => {
    //   if (result) {
    //     try {
    //       this.isLoading= true;
    //       await this.formsService.deleteFormData(id, endpoint);
    //       this.snackbarService.openSnackBar('Record deleted successfully!', 'X', 'snackbar-success', 3000);
    //       this.loadFormData();

    //     } catch (error) {
    //       this.snackbarService.openSnackBar('Failed to delete record. Please try again.', 'X', 'snackbar-danger', 3000);
    //     } finally {

    //         setTimeout(() => {
    //       this.isLoading= false;
    //         }, 1000);

    //     }
    //   } else {
    //     console.log("User clicked Cancel");
    //   }
    // });
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
