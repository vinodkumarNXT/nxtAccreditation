import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SessionService, SwalService } from 'school-erp-public';
import Swal from 'sweetalert2';





@Component({
  selector: 'lib-blog-post',
  standalone: true,
  imports: [MaterialModule, SharableModule, HttpClientModule],
  providers: [FormsService, ConfirmationService, MessageService, DialogService,DatePipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})





export class BlogPostComponent {

  form: FormGroup;

    public loading = false;
    public fetchedData: any;
    public listData: any;
    public getMetaData: any;
    public boardList: any;
    public  visible: boolean = false;
    public searchValue: any;
    public selectedSection: any;
    public tableMetaDataList:any;
    public isAddForm:boolean= false
    public uploadedFiles;
    public submitted:boolean= false
    public   files: File[];
    public sourceFileUploaded:boolean=false;

    public  blogTypeTitle:any

    maxFiles = 10;
    allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    maxSizeInBytes = 2 * 1024 * 1024; // 2MB

    constructor(
      private  swalService:SwalService,
      private messageService: MessageService,
      private fb: FormBuilder,
      public dialog: MatDialog,
      private formsService: FormsService
    ){
      this.form = this.fb.group({
        blogTitle: ['', Validators.required],
        blogTypeTitle: ['', Validators.required],
        blogContent: ["",Validators.required],
        blogSubContent: [""],
      });
    }

    ngOnInit(){
      this.loadTableData();
    }


    clear(table: Table) {
      table.clear();
      this.searchValue = '';
    }

     // Open dialog method
  openAddDialog(): void {
    this.visible = true;
    this.isAddForm= true;
    this.loadAddMetaData()

  }

  tableActionItems = (val: any) => [
    {
      label: 'View',
      icon: 'pi pi-eye',
      // command: () => this.viewElement(val), // Pass `val` dynamically
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      // command: () => this.editElement(), // Pass `val` dynamically
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      // command: () => this.deleteElement(val), // Pass `val` dynamically
    },
  ];


  async loadTableData() {
  
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBlogAndPost);

      // Store the fetched data in the component's `listData` property.
      this.tableMetaDataList = listData.data;

      // Log the fetched data to the console for debugging purposes.
      console.log("this.listData", this.listData);

    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
    }
  }

  async loadAddMetaData() {
  
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBlogAndPostType);

      // Store the fetched data in the component's `listData` property.
      this.blogTypeTitle = listData.data;


    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
    }
  }

  async submitForm() {
    this.submitted = true;
  
    if (this.form.valid) {
      this.loading = true; // Start the loading spinner
  

      // title: ['', Validators.required],
      // blogTypeTitle: ['', Validators.required],
      // blogContent: ["",Validators.required],
      // blogSubContent: [""],


      const postData = {
        title: this.form.get('blogTitle')?.value,
        courseCode: this.form.get('blogTypeTitle')?.value,
        courseName: this.form.get('blogContent')?.value,
        introductionYear: this.form.get('blogSubContent')?.value,
        documentLink: this.form.get('documentLinks')?.value,
        fileUpload: this.uploadedFiles
      };
  
      try {
        const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolBlogAndPostType);
        console.log('Form submitted successfully:', response);
  
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Form submitted successfully!',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          position: 'top-end',
          toast: true,
          customClass: {
            popup: 'swal2-success-light-bg'
          }
        });
  
        this.listData = response.data;
  

  
    
  
      } catch (error) {
        console.error('Form submission failed:', error);
  
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Form submission failed. Please try again.',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          position: 'top-end',
          toast: true,
          customClass: {
            popup: 'swal2-warn-light-bg'
          }
        });
  
      } finally {
        this.loading = false; // Stop the loading spinner immediately after processing
      }
    } else {
      console.error('Form is invalid. Cannot submit.');
  
      Swal.fire({
        icon: 'warning',
        title: 'Warning!',
        text: 'Please check the fields and try again.',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
        customClass: {
          popup: 'swal2-danger-light-bg'
        }
      });
    }
  }


  onUpload(event: any) {
    this.sourceFileUploaded =true
    // Loop through all selected files and process them one by one
    for (let file of event.files) {
      const reader = new FileReader();
  
      // Define the onloadend function that will be called after the file is read
      reader.onloadend = () => {
        // Get the Base64 string from the result (excluding the data URL part)
        const base64File = reader.result as string;
        const fileData = {
          fileName: file.name,
          fileContent: base64File.split(',')[1], // Extract Base64 content (excluding data URL part)
        };
  
        // Store the file data in the uploadedFiles array
        this.uploadedFiles=fileData;

  
        // Show the success message after the file is successfully uploaded
        this.messageService.add({
          severity: 'success',
          summary: 'File Uploaded',
          detail: `${this.uploadedFiles.length} file(s) successfully uploaded.`,
        });
  
        // Log the uploaded files array (for debugging purposes)
        console.log('Uploaded Files:', this.uploadedFiles);
      };
  
      // Read the file as a Data URL (Base64)
      reader.readAsDataURL(file);
    }
  }


}
