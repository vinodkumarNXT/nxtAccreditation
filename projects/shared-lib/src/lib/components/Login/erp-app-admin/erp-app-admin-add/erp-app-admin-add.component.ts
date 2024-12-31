import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SwalService, FormsNewService } from 'school-erp-public';
import { FileUploadService } from 'shared-lib';

@Component({
  selector: 'lib-erp-app-admin-add',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './erp-app-admin-add.component.html',
  styleUrl: './erp-app-admin-add.component.css'
})
export class ErpAppAdminAddComponent  implements OnInit {
    
    @Output() dataAdded = new EventEmitter<void>();
    public isLoading = false;
    public loading = false;
    public submitted: boolean = false;
    public listData: any;
    public displayedColumns: any;
    public dataSource: any;
    public selectedFiles: { fileName: string; fileContent: string }[] = [];
    public progressInfos: { fileName: string; value: number }[] = [];
    public isEdit:boolean= false;
    public isUpdate:boolean= false;
    public getMetaDataStatus: any;
    public  getMetaDataBranch:any
    
    form: FormGroup;

  selectedModule: any;
  public boardList:any;
  public countryList:any;
  public stateList:any;
  public districtList:any;

  countries: any[] = []; // Array to hold country data
  states: any[] = [];    // Array to hold state data based on country selection
  filteredStates: any[] ;
  distrcit: any[] = [];    // Array to hold state data based on country selection
  filteredDistricts: any[] ;
  
  public selectedBranch: any;
  public selectedBoards: any;
  public selectedCountry: any;
  public selectedState: any;
  public selectedDistrict: any;
    
      constructor(
        private formsNewService:FormsNewService,
        // private envconfigrationService:EnvconfigrationService,
        private fileUploadService: FileUploadService,
        private swalService: SwalService,
        @Inject(MAT_DIALOG_DATA) data: any,
        private formBuilder: FormBuilder,
        private formsService: FormsService,
        private matDialog: MatDialog
      ) {
    
        this.form = this.formBuilder.group({
        domainName: ['', Validators.required],
        domain: ['', Validators.required],
        url: ['', [Validators.required]],
        hosting: ['', Validators.required],
        ssh: ['', Validators.required],
        contactNumber:['', Validators.required],
        email:['', Validators.required],
        board:['', Validators.required],
        branch:['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        line1: ['', Validators.required],
        line2: [''],
        area: ['', Validators.required],
        postalCode: ['', Validators.required],
        landmark: ['']
        });
      }
    
    
      ngOnInit(): void {
  
        this.loadMetaData()
       }
  
  
    

    
  
      async loadMetaData() {
        try {
        const metaData = await this.formsService.getListData(schoolErpEndpoint.SchoolMetaData);
        const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBranch);
        this.getMetaDataBranch = listData?.data || [];

        // Fetch list data for SchoolERPAffiliation
        // const boardData = await this.formsNewService.getListData('SchoolERPAffiliation')

        const boardData = await this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation);
        this.boardList = boardData?.data || [];

        // Fetch list data for Country
        const countryData = await this.formsService.getListData(schoolErpEndpoint.SchoolCountry);
        this.countryList = countryData?.data || [];

    
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      }
    
      // Method to get statusValues only
      getOptions(data: any): any[] {
        return data.statusValues || [];
      }
  
        onModuleSelect(): void {
    // Logic for selecting a module (optional: reset other selections)
  }

  async loadFormData() {
    // Show loading spinner
    // this.spinnerService.show();

    try {
        // Fetch list data for SchoolBranch
        const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBranch);
        this.getMetaDataStatus = listData?.data || [];
        console.log("School Branch Data:", this.getMetaDataStatus);

        // Fetch list data for SchoolERPAffiliation
        const boardData = await this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation);
        this.boardList = boardData?.data || [];
        console.log("Board List Data:", this.boardList);

        // Fetch list data for Country
        const countryData = await this.formsService.getListData(schoolErpEndpoint.SchoolCountry);
        this.countryList = countryData?.data || [];
        console.log("Country List Data:", this.countryList);

    } catch (error) {
        console.error("Failed to load data", error);
    } finally {
        // Hide loading spinner after data loading is complete or fails
        // this.spinnerService.hide();
    }
}

async updateStates(countryId: number): Promise<void> {
  debugger
  try {
    // const stateData = await this.formsNewService.getListData(this.envconfigrationService.getSchoolAppURL('SchoolState'))
      const stateData = await this.formsService.getListData(schoolErpEndpoint.SchoolState);
      this.stateList = stateData?.data || [];
      this.filteredStates = this.stateList.filter(state => state.country_id === countryId);
      this.form.get('country')?.setValue(countryId); // Reset state input
      this.filteredDistricts = []; // Clear district list
      this.selectedCountry = countryId; // Set selected country
      console.log("Filtered States:", this.filteredStates); // Log filtered states
  } catch (error) {
      console.error("Failed to load states", error);
  }
}

async updateDistricts(stateId: number): Promise<void> {
  try {
      this.selectedState = stateId; // Set selected state
    //  await this.formsService.getListData(schoolErpEndpoint.SchoolDistrict);
      const districtData = await this.formsService.getListData(schoolErpEndpoint.SchoolDistrict);
      this.districtList = districtData?.data || [];
      this.filteredDistricts = this.districtList.filter(district => district.province_id === stateId);
      this.form.get('state')?.setValue(stateId); // Clear district input

      console.log("Filtered Districts:", this.filteredDistricts); // Log filtered districts
  } catch (error) {
      console.error("Failed to load districts", error);
  }
}

// Main handler for selection changes
onSelectionChange(event: MatSelectChange, type: string): void {
  const selectedValue = event.value;

  switch (type) {
    case 'branch':
      this.selectedBranch = selectedValue;
      this.getBranchID(selectedValue);
      this.form.get('branch')?.setValue(selectedValue);
      break;
    case 'board':
      this.selectedBoards = selectedValue;
      this.getBoardID(selectedValue);
      this.form.get('board')?.setValue(selectedValue);
      break;
    case 'country':
      this.selectedCountry = selectedValue;
      this.updateStates(selectedValue); 
      break;
    case 'state':
      this.selectedState = selectedValue;
      this.updateDistricts(selectedValue);
      break;
      case 'district':
      this.selectedDistrict = selectedValue;
      this.getDistrictID(selectedValue);
      this.form.get('district')?.setValue(selectedValue);

      break;
  }
}
    
    
getDistrictID(event: any): void {
  const districtId = event.value; // Gets the selected district ID
  console.log("Selected District ID:", districtId);
  this.form.get('district')?.setValue(districtId); // Clear district input
 return  districtId; // Store or use the district ID as needed
}

getBranchID(event: any): void {
  const branchID = event.value; // Gets the selected branch ID
  console.log("Selected Branch ID:", branchID);
  // Correctly set the value to the form control
  this.form.get('branch')?.setValue(branchID);
  
  return branchID; // Return the selected branch ID if needed
}

getBoardID(event: any): void {
  const boardID = event.value; // Gets the selected branch ID
  console.log("Selected Branch ID:", boardID);
  // Correctly set the value to the form control
  this.form.get('branch')?.setValue(boardID);
  
  return boardID; // Return the selected branch ID if needed
}





async submitForm() {
  this.submitted = true;
  console.log("this.form", this.form.value);

  console.log("Selected Country:", this.selectedCountry);
  console.log("Selected State:", this.selectedState);
  console.log("Selected District:", this.selectedDistrict);
  console.log("Selected Branch:", this.selectedBranch);
  console.log("Selected Board:", this.selectedBoards);
  

  if (this.form.valid) {
    const postData = {
      code: this.form.get("domainName")?.value,
      name: this.form.get("url")?.value,
      contactInfo: this.form.get("hosting")?.value,
      status: this.form.get("ssh")?.value,
      contact_number: this.form.get("contactNumber")?.value,
      email: this.form.get("email")?.value,
      city: this.form.get("city")?.value,
      line1: this.form.get("line1")?.value,
      line2: this.form.get("line2")?.value,
      area: this.form.get("area")?.value,
      postalCode: this.form.get("postalCode")?.value,
      landmark: this.form.get("landmark")?.value,
      country: this.form.get('country'),
      state: this.form.get('state'),
      district:this.form.get('district'),
      branch:this.form.get('branch'),
      board:this.selectedBoards,
    };

    try {
      const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolERPAppAdminRegister);

      // Show success toast notification
      this.swalService.addSuccess()

      // Start showing the loading spinner
      this.loading = true;

      // Refresh the list data
      this.listData = response.data;
      this.dataAdded.emit();  // Notify the parent component
      this.resetForm();

      // Function to simulate the delay before hiding the spinner
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

      // Refresh the list data and simulate the loading spinner delay
      await this.loadFormData(); // Refresh the list data

      // Hold the spinner for an additional 2 seconds
      await delay(1000);

      // Hide the spinner after the delay
      this.loading = false;

      this.matDialog.closeAll();

    } catch (error) {

      this.swalService.addError();

      // Ensure the spinner is hidden on error
      this.loading = false;

    } finally {
      // Ensure the spinner is off after all actions are complete
      this.loading = false;
    }
  } else {
    // Show warning toast notification
    await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
    // Ensure the spinner is hidden if form is invalid
    this.loading = false;
  }
}

 
 
updateForm() {
    if (this.isEdit) {
      return; // Exit if the form has already been submitted
    }
    console.log('Form submitted!');
}
 
resetForm() {
  // Reset all form fields to their initial values
  this.form.reset();

  // Clear any validation errors from each control in the form
  Object.keys(this.form.controls).forEach(key => {
    const control = this.form.get(key);
    if (control) {
      control.setErrors(null);  // Remove any validation errors
    }
  });

  // Mark the form as pristine, indicating that it hasn't been modified
  this.form.markAsPristine();

  // Mark the form as untouched, indicating that none of its controls have been interacted with
  this.form.markAsUntouched();

  // Reset the form submission status
  this.submitted = false;
}


}
