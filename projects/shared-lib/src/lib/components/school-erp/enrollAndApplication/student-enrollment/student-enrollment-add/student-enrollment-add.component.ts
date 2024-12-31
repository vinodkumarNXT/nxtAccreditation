import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import {
  SessionService,
  SwalService,
  FormsService,
  MaterialModule,
  SharableModule,
} from 'school-erp-public';

@Component({
  selector: 'lib-student-enrollment-add',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  templateUrl: './student-enrollment-add.component.html',
  styleUrl: './student-enrollment-add.component.css',
})
export class StudentEnrollmentAddComponent {
  @Output() dataAdded = new EventEmitter<void>();
  public isLoading = false;
  public loading = false;
  public submitted: boolean = false;
  public listData: any;
  public displayedColumns: any;
  public dataSource: any;
  public selectedFiles: { fileName: string; fileContent: string }[] = [];
  public progressInfos: { fileName: string; value: number }[] = [];
  public isEdit: boolean = false;
  public isUpdate: boolean = false;
  public getMetaData: any;
  public branchID: any;
  form: FormGroup;

  public statusMetaData;
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

  constructor(
    private sessionService: SessionService,
    private swalService: SwalService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private matDialog: MatDialog
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
    this.loadMetaData();
    this.getbranchID();
    this.loadBoardData();
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
        this.dataAdded.emit(); // Notify the parent component
        this.resetForm();

        // Function to simulate the delay before hiding the spinner
        const delay = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));

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
      this.markAllAsTouched();
    }
  }

  // Helper method to mark all form fields as touched
  markAllAsTouched(): void {
    Object.values(this.form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  /**
   * Resets the form to its initial state, clearing all form fields, errors, and submission status.
   */

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
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.get(key);
      if (control) {
        control.setErrors(null); // Remove any validation errors
      }
    });

    // Mark the form as pristine, indicating that it hasn't been modified
    this.form.markAsPristine();

    // Mark the form as untouched, indicating that none of its controls have been interacted with
    this.form.markAsUntouched();

    // Reset the form submission status
    this.submitted = false;
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
    const selectedID = event.value;
    console.log('YEAR  ID', selectedID);
    // Clear the table data on new selection
    this.dataSource = null;
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
    const selectedID = event.value; // Make sure this is a number or convert it accordingly
    console.log('CLASS ID:', selectedID); // Log the selected ID to see what is passed

    // Clear the table data on new selection
    this.dataSource = null;
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

  async updateStates(countryId: any): Promise<void> {
    const selectedID = countryId.value;
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

  async updateDistricts(stateId: any): Promise<void> {
    const selectedID = stateId.value;

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
    const districtId = event.value; // Gets the selected district ID
    console.log('Selected District ID:', districtId);

    // Set district input value if needed
    this.form.get('district')?.setValue(districtId);
  }



  
}
