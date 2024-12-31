import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, RandomColorService, FormsService, ImageService, LightboxService } from 'school-erp-public';
import { PercentageofProgramsEditComponent } from 'shared-lib';
import Swal from 'sweetalert2';
import { Lightbox } from 'ngx-lightbox';
import { environment } from 'projects/shell/environments/environment';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'lib-institution-integrates-view',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  templateUrl: './institution-integrates-view.component.html',
  styleUrl: './institution-integrates-view.component.scss'
})
export class InstitutionIntegratesViewComponent {

  
 
  @Input() colorData: any; // Assuming formData is passed as an input
   @Output() dataAdded = new EventEmitter<void>();
   public data: any;
   public formData: any;
   public randomColor: string;
   public isLoading: boolean;
   public imagContainer:any;
   public filesDataLoaded: boolean = false;

   isLightboxOpen = false; // Track if the lightbox is open
   currentImage: any; // Store the currently displayed image
   showPrevArrow: boolean = false; // Manage visibility of the previous arrow
   showNextArrow: boolean = false; // Manage visibility of the next arrow

   currentIndex: number = 0; // Track the current image index
   images: any[] = []; // Store the images for the lightbox

 
 
   constructor(@Inject(MAT_DIALOG_DATA) data: any,
   private lightboxService: LightboxService,
   private imageService: ImageService,
   private lightbox: Lightbox,
   public dialog: MatDialog,
   private randomColorService: RandomColorService,
   private formsService: FormsService) {
     this.data = data;
   }
 
   ngOnInit(): void {
     this.loadFormData();
     // this.randomColor = this.randomColorService.getRandomColor();
   }
 
  // Generic method to get a random color for any item
  getColorForItem(item: string): string {
   return this.randomColorService.getRandomColorForItem(item);
 }
   
 
 isImage(fileName: string): boolean {
  const imageExtensions = ['png', 'jpg', 'jpeg', 'gif'];
  const extension = fileName.split('.').pop()?.toLowerCase();
  return imageExtensions.includes(extension || '');
}
 
 // Implementation  Load Form  Start Here

async loadFormData() {
  try {
    const formData = await this.formsService.getFormData(this.data.id, endpoints.InstitutionIntegrates);
    this.formData = formData.data;

    if (this.formData.upload_files && this.formData.upload_files.length > 0) {
      this.imagContainer = this.formData.upload_files;
      this.filesDataLoaded = true;
    } else {
      this.imagContainer = []; // Ensure it's an empty array if no files are present
      this.filesDataLoaded = false; // Reset to false if no files
    }

    console.log("this.imagContainer", this.imagContainer);
    
  } catch (error) {
    console.error('Failed to load form data:', error);
  }
}

 
 // Implementation  Load Form  ENDS Here
 
 async editElement(val: any) {
   this.isLoading = true; // Start the loading spinner
 
   const dialogRef = this.dialog.open(PercentageofProgramsEditComponent, {
     data: { id: val }
   });
 
   dialogRef.afterClosed().subscribe(result => {
     this.loadFormData(); // Refresh the data
 
       // Close the dialog and refresh the data
       this.dialog.closeAll(); // Close all open dialogs
 
     setTimeout(() => {
       this.isLoading = false; // Stop the loading spinner after a slight delay
     }, 1000);
   });
 }
 
 
 async deleteElement(val: any) {
   const id = val;
   const endpoint = endpoints.InstitutionIntegrates;
 
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
       this.isLoading = true; // Start loading spinner
 
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
 
         // Optionally reload data after successful deletion
         this.loadFormData();
 
          this.dataAdded.emit();  // Notify the parent component
           // Close the dialog and refresh the data
           this.dialog.closeAll(); // Close all open dialogs
 
           this.dataAdded.emit();  // Notify the parent component
   
           // Function to simulate the delay before hiding the spinner
           const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
   
           // Refresh the list data and simulate the loading spinner delay
           await this.loadFormData(); // Refresh the list data
   
           // Hold the spinner for an additional 2 seconds
           await delay(1000);
       
       } catch (error) {
         console.error('Deletion error:', error); // Log error details
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
         this.isLoading = false; // Stop loading spinner
       }
     } else {
       console.log("User clicked Cancel");
     }
   });
 }
 


// Get full download URL for files
  getDownloadUrl(fileName: string): string {
      return `${environment.apiBaseURL}/${endpoints.DownloadFile}/${fileName}`;
} 
openLightbox(fileNames: string[], index: number): void {
  if (!fileNames || fileNames.length === 0) {
    console.warn('No images to display in the lightbox.');
    return; // Exit if there are no images
  }

  // Map each file name to an observable that converts the image to Base64
  const imageObservables = fileNames.map(fileName => this.imageService.getImageAsBase64(fileName));

  // Use forkJoin to wait for all observables to complete
  forkJoin(imageObservables)
    .subscribe({
      next: (base64Images) => {
        // Check if there are images available after loading
        if (base64Images.length === 0) {
          console.warn('No images were loaded successfully.');
          return; // Exit if there are no images loaded
        }

        // Create the images array for the lightbox
        this.images = base64Images.map(base64Image => ({
          src: base64Image,
          caption: 'Document Image',
          thumb: base64Image
        }));

        // Set the current index
        this.currentIndex = index;

        // Open lightbox with all images, starting at the selected index
        this.lightbox.open(this.images, this.currentIndex);
      },
      error: (error) => {
        console.error('Failed to open lightbox', error);
        // Optionally show a user-friendly message here
      }
    });
}



 }
 
 
