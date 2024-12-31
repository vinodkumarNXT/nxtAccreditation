import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table/table';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService, SwalService, StudentEnrollmentAddComponent, StudentEnrollmentViewComponent, StudentEnrollmentEditComponent, SessionService } from 'school-erp-public';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-student-enrollment',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, ConfirmationService, MessageService, DialogService,DatePipe],
  templateUrl: './student-enrollment.component.html',
  styleUrl: './student-enrollment.component.css'
})
export class StudentEnrollmentComponent {


  public loading = false;
  public fetchedData: any;
  public listData: any;
  form: FormGroup;
  public getMetaData: any;

  public  visible: boolean = false;
  public searchValue: any;
  public selectedSection: any;
  public tableMetaDataList:any
  public branchID:any;
  public submitted:boolean=false;


  public genderMetaData;
  public agreedTypeMetaData;
  public stateList: any;

  public academicClassList: any;
  public boardList: any;
  public academicYearList: any;
  public selectedBoardID: any;
  public filteredGraduationYear: any;
  public castList: any;
  public castCategoryList: any;
  public bloodGroupList: any;
  public countryList: any;
  public filteredStates: any;
  public districtList: any;
  public filteredDistricts: any;
  public selectedCountry: any;
  public statusMetaData:any;

  public isAddForm:boolean=true
  public isEditForm:boolean=true

  constructor(

    private formBuilder:FormBuilder,
    private sessionService: SessionService,
    private swalService: SwalService,
    public dialog: MatDialog,
    private formsService: FormsService
  ) {

    this.form = this.formBuilder.group({
      boardName: ['', Validators.required],
      appliedYear: ['', Validators.required],
      classEnroll: ['', Validators.required],
      branchID: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      religion: ['', Validators.required],
      casteCategory: ['', Validators.required],
      caste: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      classApplied: ['', Validators.required],
      year: ['', Validators.required],
      previousSchool: ['', Validators.required],
      transferCertificate: ['', Validators.required],
      medicalReports: ['', Validators.required],
      guardianName: ['', Validators.required],
      guardianContactNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      guardianEmail: ['', [Validators.required, Validators.email]],
      emergencyContactNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      bloodGroup: ['', Validators.required],
      addressLine: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      residentialContactNumber: [null],
      status: [null],
      approvedBy: [null],
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  }


 
  

  tableActionItems = (val: any) => [
    {
      label: 'View',
      icon: 'pi pi-eye',
      command: () => this.viewElement(val), // Pass `val` dynamically
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => this.editElement(val), // Pass `val` dynamically
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      // command: () => this.deleteElement(val), // Pass `val` dynamically
    },
  ];





  

  viewElement(val: any): void {

  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  

  async editElement(val: any): Promise<void> {
    this.loading = true; // Start the loading spinner to indicate that a process is ongoing


  }

  


  async deleteElement(val: any): Promise<void> {
    const id = val.id;
    const endpoint = schoolErpEndpoint.SchoolEnrollment;
    this.loading = true; // Start the loading spinner

    // Show confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'swalAlertSuccess',
        cancelButton: 'swalAlertConfirm'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Perform the deletion request
          await this.formsService.deleteFormData(id, endpoint);
          this.swalService.deleteSuccess();
          await this.loadFormData();
        } catch (error) {
          this.swalService.deleteError();
        } finally {
          setTimeout(() => {
            this.loading = false; // Stop loading spinner
          }, 1000);
        }
      } else {
        console.log("User clicked Cancel");
        this.loading = false; // Ensure spinner is hidden if user cancels
      }
    });

  }
  


  getbranchID() {
    this.branchID = this.sessionService.getbranchID();
  }

  async submitForm() {
    this.submitted = true;
    // Get the branch code from the SessionService
    if (this.form.valid) {
      const postData = {
        boardName: this.form.get('boardName')?.value,
        appliedYear: this.form.get('appliedYear')?.value,
        classEnroll: this.form.get('classEnroll')?.value,
        branchID: this.branchID,
        firstName: this.form.get('firstName')?.value,
        middleName: this.form.get('middleName')?.value,
        lastName: this.form.get('lastName')?.value,
        dateOfBirth: this.form.get('dateOfBirth')?.value,
        gender: this.form.get('gender')?.value,
        nationality: this.form.get('nationality')?.value,
        religion: this.form.get('religion')?.value,
        casteCategory: this.form.get('casteCategory')?.value,
        caste: this.form.get('caste')?.value,
        dateOfJoining: this.form.get('dateOfJoining')?.value,
        classApplied: this.form.get('classApplied')?.value,
        year: this.form.get('year')?.value,
        previousSchool: this.form.get('previousSchool')?.value,
        transferCertificate: this.form.get('transferCertificate')?.value,
        medicalReports: this.form.get('medicalReports')?.value,
        guardianName: this.form.get('guardianName')?.value,
        guardianContactNumber: this.form.get('guardianContactNumber')?.value,
        guardianEmail: this.form.get('guardianEmail')?.value,
        emergencyContactNumber: this.form.get('emergencyContactNumber')?.value,
        bloodGroup: this.form.get('bloodGroup')?.value,
        addressLine: this.form.get('addressLine')?.value,
        city: this.form.get('city')?.value,
        state: this.form.get('state')?.value,
        country: this.form.get('country')?.value,
        postalCode: this.form.get('postalCode')?.value,
        residentialContactNumber: this.form.get('residentialContactNumber')
          ?.value,
        status: this.form.get('status')?.value,
        approvedBy: this.form.get('approvedBy')?.value,
      };

      try {
        const response = await this.formsService.onFormSubmit(
          postData,
          schoolErpEndpoint.SchoolBuildings
        );

        // Show success toast notification
        this.swalService.addSuccess();

        // Start showing the loading spinner
        this.loading = true;

        // Refresh the list data
        this.listData = response.data;
 

        // Function to simulate the delay before hiding the spinner
        const delay = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        // Refresh the list data and simulate the loading spinner delay
        await this.loadFormData(); // Refresh the list data

        // Hold the spinner for an additional 2 seconds
        await delay(1000);

        // Hide the spinner after the delay
        this.loading = false;

      } catch (error) {
        this.swalService.addError();

        // Ensure the spinner is hidden on error
        this.loading = false;
      } finally {
        // Ensure the spinner is off after all actions are complete
        this.loading = false;
        // If form is invalid, mark all fields as touched to show validation errors
      }
    } else {
      // Show warning toast notification
      await this.swalService.warningNotification(
        'Invalid Form',
        'Please check the fields and try again.'
      );
      // Ensure the spinner is hidden if form is invalid
      this.loading = false;
    }
  }
 
  async loadFormData() {
    try {
      // Fetch the list data from the server using the forms service.
      // The specific endpoint for this data is provided as an argument.
      const listData = await this.formsService.getListData(
        schoolErpEndpoint.SchoolEnrollment
      );

      // Store the fetched data in the component's `listData` property.
      this.listData = listData.data;

      // Log the fetched data to the console for debugging purposes.
      console.log('this.listData', this.listData);
    } catch (error) {
      // Handle any errors that occur during the data fetch process.
      // Currently, the catch block is empty, but error handling could be added here if needed.
    }
  }
  // const countryData = await this.formsService.getListData(schoolErpEndpoint.SchoolCountry);


  openAddDialog() {
    this.loadMetaData();
    this.loadBoardData()
    this.visible = true;
    this.isAddForm= true
  }
  



  async loadMetaData() {
    try {
      // Fetch all required metadata from the server
      const [
        schoolMetaData,
        casteDataMeta,
        casteCategoryMetaData,
        bloodGroupMetaData,
        countryMetaData,
      ] = await Promise.all([
        this.formsService.getListData(schoolErpEndpoint.SchoolMetaData),
        this.formsService.getListData(schoolErpEndpoint.Caste),
        this.formsService.getListData(schoolErpEndpoint.CasteCategory),
        this.formsService.getListData(schoolErpEndpoint.BloodGroup),
        this.formsService.getListData(schoolErpEndpoint.SchoolCountry),
      ]);

      // Separate arrays for statusValues from schoolMetaData
      this.statusMetaData = schoolMetaData.filter(
        (data: any) => data.statusValues
      );

      // Filter for gender options specifically
      const genderData = schoolMetaData.find(
        (data: any) => data.type === 'gender' && data.Available === 'Yes'
      );
      this.genderMetaData = genderData ? genderData.Gendervalues : [];

      // Filter for acceptValues specifically under type "AgreedType"
      const acceptValuesData = schoolMetaData.find(
        (data: any) => data.type === 'AgreedType'
      );
      this.agreedTypeMetaData = acceptValuesData
        ? acceptValuesData.acceptValues
        : [];

      // Assign caste and caste category lists
      this.castList = casteDataMeta.data || [];
      this.castCategoryList = casteCategoryMetaData.data || [];
      this.bloodGroupList = bloodGroupMetaData.data || [];
      this.countryList = countryMetaData.data || [];
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  }

  async loadBoardData() {
    try {
      const listData = await this.formsService.getListData(
        schoolErpEndpoint.SchoolERPAffiliation
      );
      this.boardList = listData?.data || [];

      // Set the first board as default and load data
      if (this.boardList.length > 0) {
        this.selectedBoardID = this.boardList[0].board_id;
        this.onBoardSelection({ value: this.selectedBoardID });
      }
    } catch (error) {
      console.log('Failed to load data', error);
    }
  }

  async onBoardSelection(event: any) {
    const selectedID = event.id;
    console.log('YEAR  ID', selectedID);
    // Clear the table data on new selection
    this.academicYearList = [];
    this.academicClassList = [];

    try {
      // Fetching the academic years
      const acdemicListData = await this.formsService.getListData(schoolErpEndpoint.SchoolAcademicYear);
      this.academicYearList = acdemicListData?.data || [];

      // Assuming event is the boardID, filter based on the correct boardID
      this.filteredGraduationYear = this.academicYearList.filter((year) => year.board_id === selectedID);

      // Reset the selected year in the form
      this.form.get('selectedYear')?.setValue(selectedID);

      console.log('Filtered Graduation Year:', this.filteredGraduationYear); // Log filtered results
    } catch (error) {
      console.error('Failed to load academic years:', error);
    }
  }

  async onYearSelection(event: any) {
    const selectedID = event.id; // Make sure this is a number or convert it accordingly
    console.log('CLASS ID:', selectedID); // Log the selected ID to see what is passed

    // Clear the table data on new selection
    this.academicClassList = [];
    try {
      // Fetching the list of academic classes
      const classesData = await this.formsService.updateDataID(
        selectedID,
        schoolErpEndpoint.SchoolAcademicClass
      );
      this.academicClassList = classesData?.data || [];

      console.log('Class List:', this.academicClassList);
    } catch (error) {
      console.error('Failed to load academic classes:', error);
    }
  }

  onClassChange(event:any){
    console.log("event", event);
  }

  async updateStates(countryId: any){
    
    const selectedID = countryId.id;
    console.log('countryId', selectedID);

    try {
      const stateData = await this.formsService.getListData(
        schoolErpEndpoint.SchoolState
      );
      this.stateList = stateData?.data || [];
      this.filteredStates = this.stateList.filter(
        (state) => state.country_id === selectedID
      );
      this.form.get('country')?.setValue(selectedID); // Reset state input
      this.filteredDistricts = []; // Clear district list
      this.selectedCountry = selectedID; // Set selected country
      console.log('Filtered States:', this.filteredStates); // Log filtered states
    } catch (error) {
      console.error('Failed to load states', error);
    }
  }

  async updateDistricts(stateId: any){
    const selectedID = stateId.id;

    try {
      const districtData = await this.formsService.getListData(
        schoolErpEndpoint.SchoolDistrict
      );
      this.districtList = districtData?.data || [];
      this.filteredDistricts = this.districtList.filter(
        (district) => district.province_id === selectedID
      );
      this.form.get('state')?.setValue(selectedID); // Clear district input

      console.log('Filtered Districts:', this.filteredDistricts); // Log filtered districts
    } catch (error) {
      console.error('Failed to load districts', error);
    }
  }

  // Get the selected district ID
  getDistrictID(event: any): void {
    const districtId = event.id; // Gets the selected district ID
    console.log('Selected District ID:', districtId);

    // Set district input value if needed
    this.form.get('district')?.setValue(districtId);
  }


}



