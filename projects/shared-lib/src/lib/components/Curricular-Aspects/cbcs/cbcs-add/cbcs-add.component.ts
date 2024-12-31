import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { endpoints } from 'projects/shell/environments/endpoint';
import { take } from 'rxjs';
import { MaterialModule, SharableModule, FormsService, SnackbarService, SpinnerService } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cbcs-add',
  templateUrl: './cbcs-add.component.html',
  styleUrls: ['./cbcs-add.component.scss'],
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter(),

  ],
})
export class CbcsAddComponent implements OnInit {

  @Output() dataAdded = new EventEmitter<void>();
  public isLoading = false;
  public submitted: boolean = false;
  public listData: any;
  selectedFile: any;
  progressInfos: { fileName: string; value: number }[] = [];
  displayedColumns: any;
  dataSource: any;

  form: FormGroup;

  constructor(

    private spinnerService: SpinnerService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private formsService: FormsService,
    private matDialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      programCode: ['', Validators.required],
      programName: ['', Validators.required],
      status: ['', Validators.required],
      introductionYear: ['', [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      revisionYear: ['', Validators.required, Validators.pattern(/^\d{1,4}$/) ],
      contentPercentage: ['', Validators.required],
      documentLink: ['']
    });

  
  }
  ngOnInit(): void { }


  // async submitForm() {
  //   this.submitted = true;

  //    console.log("this.form", this.form.value);

  //   if (this.form.valid) {


  //     const postData = {
  //       programcode: this.form.get('programCode')?.value,
  //       programName: this.form.get('programName')?.value,
  //       introductionYear: this.form.get('introductionYear')?.value,
  //       status: this.form.get('status')?.value,
  //       revisionYear: this.form.get('revisionYear')?.value,
  //       contentPercentage: this.form.get('contentPercentage').value,
  //       documentLink: this.form.get('documentLink').value,
  //       fileUpload: this.selectedFile
  //     };

  //     console.log("postData", postData);
      

  //     try {
  //       const response = await this.formsService.onFormSubmit(postData, endpoints.CBCS);
  //       console.log('Form submitted successfully:', response);

  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Form submitted successfully!',
  //         toast: true,
  //         position: 'top-end',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true
  //       });

  //       this.listData = response.data;

  //       this.dataAdded.emit();  // Notify the parent component
  //       this.resetForm();

  //       setTimeout(() => {
  //         this.matDialog.closeAll();
  //       }, 2000);

  //     } catch (error) {
  //       console.error('Form submission failed:', error);

  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Form submission failed. Please try again.',
  //         toast: true,
  //         position: 'top-end',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true
  //       });
  //     } finally {
  //       this.isLoading = false; // Stop the loading spinner immediately after processing
  //     }
  //   } else {
  //     console.error('Form is invalid. Cannot submit.');

  //     Swal.fire({
  //       icon: 'warning',
  //       title: 'Please check the fields and try again.',
  //       toast: true,
  //       position: 'top-end',
  //       showConfirmButton: false,
  //       timer: 3000,
  //       timerProgressBar: true
  //     });
  //   }
  // }

  async submitForm() {
    this.submitted = true;
  
    if (this.form.valid) {
      this.isLoading = true; // Start the loading spinner
  
      const postData = {
        programcode: this.form.get('programCode')?.value,
        programName: this.form.get('programName')?.value,
        introductionYear: this.form.get('introductionYear')?.value,
        status: this.form.get('status')?.value,
        revisionYear: this.form.get('revisionYear')?.value,
        contentPercentage: this.form.get('contentPercentage').value,
        documentLink: this.form.get('documentLink').value,
        fileUpload: this.selectedFile
      };

  
      try {
        const response = await this.formsService.onFormSubmit(postData, endpoints.CirAspAveragePercent);
        console.log('Form submitted successfully:', response);
  
        Swal.fire({
          icon: 'success',
          title: 'Form submitted successfully!',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
  
        this.listData = response.data;
  
        this.dataAdded.emit();  // Notify the parent component
        this.resetForm();
  
        setTimeout(() => {
          this.matDialog.closeAll();
        }, 2000);
  
      } catch (error) {
        console.error('Form submission failed:', error);
  
        Swal.fire({
          icon: 'error',
          title: 'Form submission failed. Please try again.',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      } finally {
        this.isLoading = false; // Stop the loading spinner immediately after processing
      }
    } else {
      console.error('Form is invalid. Cannot submit.');
  
      Swal.fire({
        icon: 'warning',
        title: 'Please check the fields and try again.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  }


  resetForm() {
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      if (control) {
        control.setErrors(null);
      }
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.submitted = false;
  }


  // onFilesSelected(event: any): void {
  //   const allowedTypes = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg'];
  //   const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes
  //   const files = event.target.files;

  //   console.log(" EVENT   FILE", files);


  //   if (files.length + this.progressInfos.length > 8) {
  //     this.toastr.success('You can upload a maximum of 8 files.');
  //     return;
  //   }

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];

  //     // Check for allowed file types
  //     if (!allowedTypes.includes(file.type)) {
  //       this.toastr.warning('Only PDF, PNG, JPG, and JPEG files are allowed.');
  //       continue;
  //     }

  //     // Check for file size limit
  //     if (file.size > maxSizeInBytes) {
  //       this.toastr.warning('File size must be less than 2MB.');
  //       continue;
  //     }

  //     // Check for duplicate file name and size
  //     const isDuplicate = this.progressInfos.some(
  //       progressInfo => progressInfo.fileName === file.name
  //     );

  //     if (isDuplicate) {
  //       this.toastr.warning('Duplicate file name and size are not allowed.');
  //       continue;
  //     }

  //     this.uploadFile(file);
  //   }
  // }

  // async uploadFile(file: File): Promise<void> {
  //   const progressInfo = { fileName: file.name, value: 0, size: file.size };
  //   this.progressInfos.push(progressInfo);

  //   // Convert file to Base64
  //   const reader = new FileReader();
  //   reader.onloadend = async () => {
  //     const base64File = reader.result as string;
  //     const fileData = {
  //       fileName: file.name,
  //       fileContent: base64File.split(',')[1], // Remove the data URL part
  //     };

  //     this.selectedFile = fileData

  //     try {
  //       const response = await axios.post(`${environment.apiBaseURL}${endpoints.fileUpload}`, fileData, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json, text/plain, */*',
  //           'Referrer-Policy': 'strict-origin-when-cross-origin'
  //         }
  //       });

  //       console.log('Upload complete:', response.data);
  //       this.toastr.success('Upload successful!');
  //     } catch (error) {
  //       let errorMsg = 'Upload failed. Please try again.';
  //       if (axios.isAxiosError(error)) {
  //         console.error('Upload failed:', error.response?.data || error.message);
  //         if (error.response) {
  //           errorMsg = error.response.data?.message || errorMsg;
  //         }
  //       } else {
  //         console.error('Upload failed:', error);
  //       }
  //       this.toastr.error(errorMsg);
  //     }
  //   };

  //   reader.readAsDataURL(file);
  // }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!')
      .onTap
      .pipe(take(1))
      .subscribe(() => this.toasterClickedHandler());
  }

  toasterClickedHandler() {
    console.log('Toastr clicked');
  }


  removeFile(index: number): void {
    this.progressInfos.splice(index, 1); // Remove the file from progressInfos
  }


  async userFileUpload(event: any): Promise<void> {
    const files = event.target.files;




    if (files.length === 0) {
      console.error('No files selected');
      return;
    }

    const fileDataArray: { fileName: string, fileContent: string }[] = [];

    for (const file of files) {
      console.log('Uploaded Selected File:', file);

      // Convert file to Base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64File = reader.result as string;
        const fileData = {
          fileName: file.name,
          fileContent: base64File.split(',')[1], // Remove the data URL part
        };

        fileDataArray.push(fileData);

        // If all files are processed, log the result
        if (fileDataArray.length === files.length) {
          this.selectedFile = fileDataArray;
          console.log('File Data: Final ', this.selectedFile);
          // Handle the file data array as needed, e.g., send it to the server
        }
      };

      reader.readAsDataURL(file);
    }
  }


}


