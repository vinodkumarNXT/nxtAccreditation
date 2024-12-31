import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, RandomColorService, FormsService } from 'school-erp-public';
import { PercentageofProgramsEditComponent } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-student-council-view',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  templateUrl: './student-council-view.component.html',
  styleUrl: './student-council-view.component.css'
})
export class StudentCouncilViewComponent {


 
  @Input() colorData: any; // Assuming formData is passed as an input
   @Output() dataAdded = new EventEmitter<void>();
   public data: any;
   public formData: any;
   public randomColor: string;
   isLoading: boolean;
 
 
   constructor(@Inject(MAT_DIALOG_DATA) data: any,
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
   
 
 
 // Implementation  Load Form  Start Here
   async loadFormData() {
     try {
       const formData = await this.formsService.getFormData(this.data.id, endpoints.StudentsCounsil);
       this.formData = formData.data;
       console.log("Getting Form Data", formData);
     } catch (error) {
       console.error('Failed to load form data:', error);
     }
   }
 
   
 
 // Implementation  Load Form  ENDS Here
 
 async editElement(val: any) {
   console.log("val", val);
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
   const endpoint = endpoints.StudentsCounsil;
 
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
 
 
 }
 
 