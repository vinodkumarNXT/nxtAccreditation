import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { endpoints } from 'projects/shell/environments/endpoint';
import { MaterialModule, SharableModule, FormsService, SnackbarService, SpinnerService } from 'shared-lib';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-percentageof-programs-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter() 
  ],
  templateUrl: './percentageof-programs-edit.component.html',
  styleUrl: './percentageof-programs-edit.component.css'
})
export class PercentageofProgramsEditComponent {
  public data: any;
  public submitted: boolean = false;
  public editformID: any;
  public selectedFiles: any;
  public preLoadData:any;

  progressInfos: { fileName: string; value: number; size: number }[] = [];
  form: FormGroup;

  public  preFillData:any

  constructor(
    private cdr: ChangeDetectorRef,
    private spinnerService:SpinnerService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private formsService: FormsService,
    private matDialog:MatDialog
  ) {
    this.data = data;
    this.editformID = data.id;

    this.form = this.formBuilder.group({
      programCode:['', Validators.required],
      programName:['', Validators.required],
      status:['', Validators.required],
      introductionYear: ['', [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      implementationYear: ['',  [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      revisionYear: ['',  [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      contentPercentage:['', Validators.required],
      documentLink:['']
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  }


  async updateForm() {
    this.submitted = true;
  
    if (this.form.valid) {
      // Construct postData from form values
      const postData = {
        programcode: this.form.get('programCode')?.value,
        programName: this.form.get('programName')?.value,
        introductionYear: this.form.get('introductionYear')?.value,
        status: this.form.get('status')?.value,
        implementationYear: this.form.get('implementationYear')?.value,
        revisionYear: this.form.get('revisionYear')?.value,
        contentPercentage: this.form.get('contentPercentage')?.value,
        documentLink: this.form.get('documentLink')?.value,
        // fileUpload : this.selectedFile
      };
  
      try {
        const response = await this.formsService.updateFormData(postData, this.editformID, endpoints.CirAspPercentageProgrammes);
        
        Swal.fire({
          icon: 'success',
          title: 'Form updated successfully!',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
  
        this.resetForm();
        this.submitted = false; // Reset the submission state
        console.log("Final Submission response", response);
  
        setTimeout(() => {
          this.matDialog.closeAll();
        }, 2000);
  
      } catch (error) {
        console.error('Form update failed:', error);
  
        Swal.fire({
          icon: 'error',
          title: 'Form update failed. Please try again.',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      }
    } else {
      console.error('Form is invalid. Cannot update.');
  
      Swal.fire({
        icon: 'warning',
        title: 'Form is invalid. Please check the fields and try again.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  }
  

  async loadFormData() {
    try {
      const formData = await this.formsService.getFormData(this.data.id, endpoints.CirAspPercentageProgrammes);
      console.log("Getting Form Data", formData.data);



      const data = formData.data;
      this.preLoadData = data;
      this.form.patchValue({
        programCode:data.program_code,
        programName:data.program_name,
        introductionYear:data.introduction_year,
        status:data.status,
        implementationYear:data.implementation_year,
        revisionYear:data.revision_year,
        contentPercentage:data.content_percentage,
        documentLink:data.document_links,
        
      });
      
      this.preFillData = data;
    } catch (error) {
      console.error('Failed to load form data:', error);
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


onFilesSelected(event: any): void {
  const allowedTypes = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg'];
  const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes
  const files = Array.from(event.target.files) as File[]; // Convert FileList to Array<File>

  if (files.length + this.progressInfos.length > 8) {
    this.toastr.success('You can upload a maximum of 8 files.');
    return;
  }

  this.processFiles(files, allowedTypes, maxSizeInBytes);
}

async processFiles(files: File[], allowedTypes: string[], maxSizeInBytes: number): Promise<void> {
  for (const file of files) {
    // Check for allowed file types
    if (!allowedTypes.includes(file.type)) {
      this.toastr.warning('Only PDF, PNG, JPG, and JPEG files are allowed.');
      continue;
    }

    // Check for file size limit
    if (file.size > maxSizeInBytes) {
      this.toastr.warning('File size must be less than 2MB.');
      continue;
    }

    // Check for duplicate file name
    const isDuplicate = this.selectedFiles.some(
      selectedFile => selectedFile.name === file.name && selectedFile.size === file.size
    );

    if (isDuplicate) {
      this.toastr.warning('Duplicate file name and size are not allowed.');
      continue;
    }

    // Add the file to the selectedFiles array
    this.selectedFiles.push(file);
    
    await this.uploadFile(file); // Wait for each file to be processed
  }
}

async uploadFile(file: File): Promise<void> {
  const progressInfo = { fileName: file.name, value: 0, size: file.size };
  this.progressInfos.push(progressInfo);

  return new Promise<void>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64File = reader.result as string;
      const fileData = {
        fileName: file.name,
        fileContent: base64File.split(',')[1], // Remove the data URL part
      };

      this.simulateUploadProgress(progressInfo, resolve); // Pass resolve to finalize each file upload
    };

    reader.readAsDataURL(file);
  });
}

simulateUploadProgress(progressInfo: { fileName: string; value: number; size: number }, resolve: () => void): void {
  const interval = setInterval(() => {
    if (progressInfo.value >= 100) {
      clearInterval(interval);
      resolve(); // Resolve the promise once the upload is complete
    } else {
      progressInfo.value += 10; // Adjust the increment as necessary
      this.cdr.detectChanges(); // Force change detection
    }
  }, 200); // Adjust the interval as necessary
}

removeFile(index: number): void {
  this.progressInfos.splice(index, 1);
  this.selectedFiles.splice(index, 1); // Also remove the file from selectedFiles array
}

}


