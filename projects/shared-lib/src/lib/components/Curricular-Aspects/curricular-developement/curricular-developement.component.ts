
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, UnderscoreToSpacePipe, YearMonthDayPipe, FormsService, SnackbarService, SpinnerService, TablePaginationService, CurricularDevelopementAddComponent, ImageService, CurricularDevelopementEditComponent, CurricularDevelopementViewComponent } from 'shared-lib';

@Component({
  selector: 'lib-developement-relevance',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './curricular-developement.component.html',
  styleUrl: './curricular-developement.component.scss'
})
export class CurricularDevelopementComponent implements OnInit, AfterViewInit {
  viewMode: 'normal' | 'grid' | 'list' = 'normal';

  pageSizeOptions: number[] = [];

  displayedColumns = ["id", "description", "uploadFiles", "actions"];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public albums: Array<any> = [];
  public isLoading = false;
  public fetchedData: any;
  public listData: any;
  form: FormGroup;

  constructor(
    private imageService: ImageService,
    private lightbox: Lightbox,
    private spinnerService: SpinnerService,
    private tablePaginationService: TablePaginationService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private formsService: FormsService
  ) {

    this.lightbox = lightbox;
  }

  ngOnInit(): void {
    this.loadFormData();
  }


  async loadFormData() {
    try {
      const listData = await this.formsService.getListData(endpoints.CirDesignAndDevelopment);
      this.listData = listData?.data || [];

      if (this.listData.length > 0) {

        // await Promise.all(this.listData.map(async (item) => {
        //   if (item.upload_documents) {
        //     const base64Data = await this.imageService.getImageAsBase64(`${endpoints.DownloadFile}/${item.upload_documents}`);
        //     item.base64Image = base64Data; // Add Base64 data to item
        //   }
        // }));


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
    const dialogRef = this.dialog.open(CurricularDevelopementAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.loadFormData();
    });
  }

  viewElement(val: any) {
    const dialogRef = this.dialog.open(CurricularDevelopementViewComponent, {
      data: { id: val.id }
    });
  }



  async editElement(val: any) {
    this.isLoading = true; // Start the loading spinner

    const dialogRef = this.dialog.open(CurricularDevelopementEditComponent, {
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
    const endpoint = endpoints.CirDesignAndDevelopment;

    // this.confirmationDialogService.open('Are you sure you want to Delete ?', 'Delete', 'Delete', 'Cancel').subscribe(async result => {
    //   if (result) {
    //     try {
    //       this.isLoading = true; // Start loading spinner
    //       await this.formsService.deleteFormData(id, endpoint);
    //       this.snackbarService.openSnackBar('Record deleted successfully!', 'X', 'snackbar-success', 3000);
    //       this.loadFormData();
    //     } catch (error) {
    //       this.snackbarService.openSnackBar('Failed to delete record. Please try again.', 'X', 'snackbar-danger', 3000);
    //     } finally {
    //       setTimeout(() => {
    //         this.isLoading = false; // Stop loading spinner
    //       }, 1000);
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


  // openLightbox(val: string): void {
  //   const album = {
  //     src: val,
  //     caption: 'Your caption', // You can dynamically set this
  //     thumb: val
  //   };
  //   this.albums = [album]; // Set the albums array with the image
  //   this._lightbox.open(this.albums, 0); // Open the lightbox with the image
  // }

  // closeLightbox(): void {
  //   this._lightbox.close(); // Close the lightbox
  // }


  // Function to check if the file is an image
  isImage(fileName: string): boolean {
    const imageExtensions = ['png', 'jpg', 'jpeg', 'gif'];
    const extension = fileName.split('.').pop()?.toLowerCase();
    return imageExtensions.includes(extension || '');
  }

  getFileUrl(fileName: string): string {
    return `${fileName}`;
  }


  openLightbox(fileName: string): void {
    const imageUrl = `${fileName}`;
    this.imageService.getImageAsBase64(imageUrl).then(base64Image => {

      const images = [
        {
          src: base64Image,
          caption: 'Document Image',
          thumb: base64Image
        }
      ];


      this.lightbox.open(images, 0); // 0 is the index of the image to display
    }).catch(error => console.error('Failed to open lightbox', error));
  }


}
