import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { SwalService, FormsService, MaterialModule, SharableModule } from 'school-erp-public';
import * as XLSX from 'xlsx';


@Component({
  selector: 'lib-student-bulk-upload',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './student-bulk-upload.component.html',
  styleUrl: './student-bulk-upload.component.css'
})
export class StudentBulkUploadComponent {

  loading = false;
  bulkEnrollmentData: any[] = []; // Store parsed data here

  displayedColumns: string[] = [
    'branchID',
    'board',
    'firstName',
    'middleName',
    'lastName',
    'dateOfBirth',
    'gender',
    'nationality',
    'religion',
    'casteCategory',
    'classApplied',
    'dateOfJoining',
    'year',
    'previousSchool',
    'transferCertificate',
    'medicalReports',
    'guardianName',
    'guardianContactNumber',
    'guardianEmail',
    'emergencyContactNumber',
    'bloodGroup',
    'addressLine',
    'city',
    'state',
    'country',
    'postalCode',
    'residentialContactNumber',
    'status',
    'approvedBy'
  ];


  constructor(
    private swalService: SwalService,
    private formsService: FormsService
  ) {}


  // Method to parse the Excel file
  async onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // Use the first sheet
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
        // Check if sheetData is empty
        if (sheetData.length === 0) {
          this.swalService.warningNotification('Empty Sheet', 'The selected sheet does not contain any data.');
        } else {
          this.bulkEnrollmentData = sheetData; // Store parsed data
          this.swalService.successNotification('ADDED Sheet', 'The selected sheet Processing.');
          console.log("Parsed Data: ", this.bulkEnrollmentData); // Log the parsed data for debugging
        }
      };
      fileReader.readAsArrayBuffer(file);
    }
  }


  // Bulk upload method
  async submitForm() {
    if (!this.bulkEnrollmentData || this.bulkEnrollmentData.length === 0) {
      this.swalService.warningNotification('No Data', 'Please upload a file with enrollment data.');
      return;
    }

 
    // Convert data to match the required API format
    const formattedData = this.bulkEnrollmentData.map((entry: any) => ({
      branchId: entry.branchID || "", // Default branch code
      board: entry.board || "", // Default branch code
      firstName: entry.firstName || "", // Default empty string
      middleName: entry.middleName || "", // Default empty string
      lastName: entry.lastName || "", // Default empty string
      dateOfBirth: entry.dateOfBirth || "", // Default empty string
      gender: entry.gender || "", // Default empty string
      nationality: entry.nationality || "", // Default empty string
      religion: entry.religion || "", // Default empty string
      casteCategory: entry.casteCategory || "", // Default empty string
      classApplied: entry.classApplied || "", // Default empty string
      dateOfJoining: entry.dateOfJoining || "", // Default empty string
      year: entry.year || "", // Default empty string
      previousSchool: entry.previousSchool || "", // Default empty string
      transferCertificate: entry.transferCertificate || "", // Default empty string
      medicalReports: entry.medicalReports || "", // Default empty string
      guardianName: entry.guardianName || "", // Default empty string
      guardianContactNumber: entry.guardianContactNumber || "", // Default empty string
      guardianEmail: entry.guardianEmail || "", // Default empty string
      emergencyContactNumber: entry.emergencyContactNumber || "", // Default empty string
      bloodGroup: entry.bloodGroup || "", // Default empty string
      addressLine: entry.addressLine || "", // Default empty string
      city: entry.city || "", // Default empty string
      state: entry.state || "", // Default empty string
      country: entry.country || "", // Default empty string
      postalCode: entry.postalCode || "", // Default empty string
      residentialContactNumber: entry.residentialContactNumber || "", // Default empty string
      status: entry.status || "0", // Default to "1"
      approvedBy: entry.approvedBy || "admin" // Default to "admin"
    }));
    
  
    this.loading = true;
    try {
      // Send the formatted data to the API
      const response = await this.formsService.onFormSubmit({ 'bulkUploadData': formattedData }, schoolErpEndpoint.SchoolStudentBulkUpload);
  
      console.log("response", response);
      
      // Show success toast notification
      await this.swalService.addSuccess();
  
      // Reset the form after successful upload
      this.resetForm();
  
      // Hold the spinner for an additional 2 seconds (if necessary)
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      this.loading = false;
  
    } catch (error) {
      console.error("Bulk upload failed:", error);
      await this.swalService.addError();
      this.loading = false;
    }
  }
  
  resetForm() {
    this.bulkEnrollmentData = [];
    // Additional reset actions, if any
  }


   // Download Excel file
   // Download Excel file
   downloadExcel() {
    const link = document.createElement('a');
    link.href = 'assets/enrollmentBulkExcel.xlsx'; // Path to the Excel file
    link.download = 'enrollmentBulkExcel.xlsx'; // Download file name
    link.click();
  }
  
}
