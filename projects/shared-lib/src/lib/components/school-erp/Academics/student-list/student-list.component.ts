import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Table } from 'primeng/table/public_api';
import { DatePipe } from '@angular/common';
import { ChartOptions } from 'chart.js';
import {
  MaterialModule,
  SharableModule,
  FormsService,
  SwalService,
  StudentListViewComponent,
  SessionService,
  ChartsjsService,
} from 'school-erp-public';
import { FileUploadService } from 'shared-lib';
import Swal from 'sweetalert2';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog'; // Import DialogService

@Component({
  selector: 'lib-student-list',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, ConfirmationService, MessageService, DialogService, DatePipe],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent {
  public loading = false;
  public fetchedData: any;
  public listData: any;
  form: FormGroup;
  public getMetaData: any;
  public boardList: any;
  visible: boolean = false;
  isprofileView: boolean = false;
  public searchValue: any;
  public selectedSection: any;

  public genderMetaData;
  public agreedTypeMetaData;
  public stateList: any;
  public statusMetaData: any;
  public castList: any;
  public castCategoryList: any;
  public bloodGroupList: any;
  public countryList: any;

  public globalBranchID;

  public filteredBoards: any;
  public filteredGraduationYear: any;

  public academicYearList: any;
  public selectedBoardID: any;

  public academicClassList: any;

  public academicSectionList: any;
  public academicStudentList: any;
  public submitted: boolean = false;


  public selectedClassID: any;

  public selctedGenderVal: any;
  public studentMetaData: any;

  public filteredStates: any;
  public filteredDistricts: any;
  public selectedCountry: any;
  public districtList: any;
  public selectedStateID: any;
  public selectedDistrict: any
  public isAddForm: boolean = true
  public selectedBoardYearClassSection: any;

  public  nxtTableViewMode: 'table' | 'grid' = 'table'; 
  public paginatedStudentList: any[] = []; // This will hold the currently paginated data


  actionItems: any[] = [];
  selectedElement: any;;


  profileViewItems: MenuItem[] | any;

  profileViewActiveItem: MenuItem | any;


  public  pageSize: number = 20;
  public currentPage: number = 0;
  public totalRecords: number = 0;

  /*pie*/

  myTypePie: any;
  myDataPie: any;



  public stdProfileData = [
    {
      "id": 1,
      "branch_id": 'Shaikpet',
      "board": "CBSE",
      "year": 2024,
      "student_id": "S12345",
      "registration_no": "R123456",
      "program_id": "10",
      "admission_no": "A987654",
      "roll_no": "R101",
      "user_category_id": 2,
      "identification_marks": "Small mole on right cheek",
      "joining_date": "2024-01-10",
      "seat_type_id": 1,
      "admission_type_id": 2,
      "distance_from_residence": "15 km",
      "phc": "None",
      "ph_details": "None",
      "scribe": "No",
      "group_id": "English",
      "faculty_id": "Shalini",
      "class_id": 10,
      "section_id": "A",
      "session_id": "Half-Yearly",
      "admission_date": "2024-01-05",
      "full_name": "Aarav Sharma",
      "middle_name": "Kumar",
      "first_name": "Aarav",
      "last_name": "Sharma",
      "father_name": "Rajesh Sharma",
      "mother_name": "Priya Sharma",
      "email": "aarav.sharma@mail.com",
      "email_verified_at": "2024-01-07",
      "password": "password123",
      "password_text": "EncryptedPasswordData",
      "set_password": 1,
      "attendance": {
        "total_classes": 50,
        "classes_attended": 45,
        "attendance_percentage": 90
      },
      "gender": 1,
      "status": 1,
      "contact": {
        "phone": "9876543210",
        "address": "123, Main Street, Guntur, Andhra Pradesh, 522501"
      },
      "date_of_birth": "2000-12-15",
      "religion": "Hindu",
      "mother_tongue": "Telugu",
      "permanent_address": {
        "country": "India",
        "state": "Andhra Pradesh",
        "district": "Guntur",
        "pincode": "522501",
        "address_1": "TADEPALLI"
      },
      "present_address": {
        "country": "India",
        "state": "Andhra Pradesh",
        "district": "Hyderabad",
        "pincode": "500001",
        "address_1": "Banjara Hills"
      }
    }
  ];



  constructor(
    private chartService:ChartsjsService,
    private datePipe: DatePipe,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private sessionService: SessionService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private swalService: SwalService,
    public dialog: MatDialog,
    private formsService: FormsService
  ) {
    this.form = this.fb.group({
      //  Academic and Personal

      rollNumber: ['', Validators.required],
      fullName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      region: [''],
      gender: ['', Validators.required],
      admissionDate: ['', Validators.required],
      admissionNumber: ['', Validators.required],
      category: ['', Validators.required],
      caste: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      aadharNumber: ['', [Validators.required, Validators.maxLength(12)]],
      motherTongue: ['', Validators.required],

      nationality: ['', Validators.required],
      bloodGroup: ['', Validators.required],

      // Adrdesss
      country: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.maxLength(6)]],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],

      // Gurdian Details

      fatherName: [''],
      fatherMobile: ['', [Validators.maxLength(12)]],
      fatherEmail: [''],
      fatherOccupation: [''],
      fatherIncome: ['', Validators.required],

      motherName: [''],
      motherMobile: ['', [Validators.maxLength(12)]],
      motherEmail: [''],
      motherOccupation: [''],
      motherIncome: ['', Validators.required],
    });


    this.myTypePie = "PieChart";
    this.myDataPie = [
      ["London", 8136000],
      ["New York", 8538000],
      ["Paris", 2244000],
      ["Berlin", 3470000],
      ["Kairo", 19500000]
    ];
  }

  ngOnInit(): void {
    this.loadMetaData();
    this.BranchId();
    this.loadAdminDashBoardData();

    this.profileViewItems = [
      { label: 'Profile', icon: 'pi pi-fw pi-user', isfor: "profileView" },
      { label: 'Academic', icon: 'pi pi-fw pi-book', isfor: "academicDetails" },
      { label: 'Attendance', icon: 'pi pi-fw pi-calendar', isfor: "attendance" },
      { label: 'Certificates', icon: 'pi pi-fw  pi-receipt', isfor: "certificates" },
      { label: 'Library', icon: 'pi pi-fw pi-bookmark', isfor: "library" },
      { label: 'Fee', icon: 'pi pi-fw pi-wallet', isfor: "fee" },
      { label: 'Transport', icon: 'pi pi-fw pi-car', isfor: "transport" },
      { label: 'Communication', icon: 'pi pi-fw pi-comment', isfor: "communication" },
      { label: 'Grievance & Activities', icon: 'pi pi-fw pi-exclamation-circle', isfor: "grievance" },
      { label: 'Settings', icon: 'pi pi-fw pi-cog', isfor: "settings" }
    ];

    this.profileViewActiveItem = this.profileViewItems[0];
  }





  dateFormat(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 
            ${date.getHours()}:${date.getMinutes()}`;
  }

  tableActionItems(val: any) {
    return [
      {
        label: 'View',
        icon: 'pi pi-eye',
        command: () => this.viewElement(val),
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editElement(val),
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.deleteElement(val),
      },
      {
        label: 'Particulars',
        icon: 'pi pi-user',
        command: () => this.studentProfileView(val), // Pass `val` dynamically
      },
    ];
  }

  onButtonClick(element: any) {
    this.selectedElement = element;
    this.actionItems = this.tableActionItems(element);
  }

  async BranchId() {
    try {
      this.globalBranchID = await this.sessionService.getbranchID();
      console.log('Branch ID Global', this.globalBranchID);
    } catch (error) {
      console.error('Error fetching branch ID:', error);
    }
  }

  // Event handlers
  tableActionsave(type: string) {
    console.log(`Saved with type: ${type}`);
  }

  // Open dialog method
  openAddDialog(): void {
    // Set visible to true to show the dialog
    this.visible = true;

    if (this.isAddForm) {
      this.loadMetaData();
    }

    if (!this.isAddForm) {
      // If editing, populate the form with existing data
      this.populateFormForEdit();
    }
  }

  // Method to handle dialog close event
  onDialogClose(result: any): void {
    console.log('Dialog closed', result);
    if (result) {
      this.loadFormData(); // Refresh form data if needed
    }
  }

  // Example method for loading data after dialog closes
  loadAddFormData() {
    console.log('Form data From P Dailog');
    // Add your logic to reload or refresh data
  }

  viewElement(val: any): void {
    const dialogRef = this.dialog.open(StudentListViewComponent, {
      data: { id: val.id },
    });
  }

  async editElement(event: any) {
    this.loading = true;
  }

  async deleteElement(val: any) {
    const id = val.id;
    const endpoint = schoolErpEndpoint.SchoolStudentBasicInfo;
    this.loading = true;

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'swalAlertSuccess',
        cancelButton: 'swalAlertConfirm',
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await this.formsService.deleteFormData(id, endpoint);
          this.swalService.deleteSuccess();
          await this.loadFormData();
        } catch (error) {
          this.swalService.deleteError();
        } finally {
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        }
      } else {
        console.log('User clicked Cancel');
        this.loading = false;
      }
    });
  }

  async submitForm() {
    this.submitted = true;
    const selectedAcademicData = this.selectedBoardYearClassSection;

    // Extract values from the form
    const admissionDate = this.form.get('admissionDate')?.value;
    const dateOfBirth = this.form.get('dateOfBirth')?.value;
    const category = this.form.get('category')?.value.id;
    const caste = this.form.get('caste')?.value.id;
    const bloodGroup = this.form.get('bloodGroup')?.value?.id;
    const district = this.form.get('district')?.value?.id;

    // Format dates
    const formattedAdmissionDate = admissionDate
      ? this.datePipe.transform(admissionDate, 'dd/MM/yyyy')
      : null;
    const formattedDateOfBirth = dateOfBirth
      ? this.datePipe.transform(dateOfBirth, 'dd/MM/yyyy')
      : null;

    console.log('Form Values:', this.form.value);

    if (this.form.valid) {
      this.loading = true; // Show loading spinner

      const postData = {
        // Academic data
        branchId: this.globalBranchID || selectedAcademicData?.branch_id,
        board: selectedAcademicData?.board_id,
        yearId: selectedAcademicData?.year_id,
        classId: selectedAcademicData?.class_erp_id,
        sectionId: selectedAcademicData?.id,

        // Student details
        rollNumber: this.form.get('rollNumber')?.value,
        fullName: this.form.get('fullName')?.value,
        firstName: this.form.get('fristName')?.value,
        middleName: this.form.get('middleName')?.value,
        lastName: this.form.get('lastName')?.value,
        region: this.form.get('region')?.value,
        gender: this.form.get('gender')?.value?.key,
        admissionDate: formattedAdmissionDate,
        admissionNumber: this.form.get('admissionNumber')?.value,
        category: category,
        caste: caste,
        email: this.form.get('email')?.value,
        dateOfBirth: formattedDateOfBirth,
        aadharNumber: this.form.get('aadharNumber')?.value,
        motherTongue: this.form.get('motherTongue')?.value,
        nationality: this.form.get('nationality')?.value,
        bloodGroup: bloodGroup,

        // Address details
        country: this.form.get('country')?.value?.id || this.selectedCountry,
        state: this.form.get('state')?.value?.id || this.selectedStateID,
        district: district || this.selectedDistrict?.id,
        pincode: this.form.get('pincode')?.value,
        addressLine1: this.form.get('addressLine1')?.value,
        addressLine2: this.form.get('addressLine2')?.value,

        // Guardian details
        fatherName: this.form.get('fatherName')?.value,
        fatherMobile: this.form.get('fatherMobile')?.value,
        fatherEmail: this.form.get('fatherEmail')?.value,
        fatherOccupation: this.form.get('fatherOccupation')?.value,
        fatherIncome: this.form.get('fatherIncome')?.value,
        motherName: this.form.get('motherName')?.value,
        motherMobile: this.form.get('motherMobile')?.value,
        motherEmail: this.form.get('motherEmail')?.value,
        motherOccupation: this.form.get('motherOccupation')?.value,
        motherIncome: this.form.get('motherIncome')?.value,
      };

      try {
        console.log('POST Data:', postData);

        // Submit the form data
        const response = await this.formsService.onFormSubmit(
          postData,
          schoolErpEndpoint.SchoolStudentBasicInfo
        );

        // Refresh data and show success notification
        this.listData = response.data;
        await this.loadFormData(); // Refresh list
        await this.delay(1000); // Optional delay
        this.swalService.addSuccess();
      } catch (error) {
        console.error('Form submission error:', error.message || error);
        this.swalService.warningNotification('Submission Failed', 'Please try again later.');
      } finally {
        this.loading = false; // Hide spinner
      }
    } else {
      // Invalid form warning
      this.form.markAllAsTouched();
      await this.swalService.warningNotification(
        'Invalid Form',
        'Please check the fields and try again.'
      );
      this.loading = false;
    }
  }



  // Utility function for delay
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  async loadFormData() {
    try {
      const listData = await this.formsService.getListData(
        schoolErpEndpoint.SchoolStudentBasicInfo
      );
      this.studentMetaData = listData?.data || [];

      // Set the first board as default and load data
      if (this.boardList.length > 0) {
        this.selectedBoardID = this.boardList[0].board_id;
        this.onBoardSelection({ value: this.selectedBoardID });
      }
    } catch (error) {
      console.log('Failed to load data', error);
    }
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
        selectedBoard,
      ] = await Promise.all([
        this.formsService.getListData(schoolErpEndpoint.SchoolMetaData),
        this.formsService.getListData(schoolErpEndpoint.Caste),
        this.formsService.getListData(schoolErpEndpoint.CasteCategory),
        this.formsService.getListData(schoolErpEndpoint.BloodGroup),
        this.formsService.getListData(schoolErpEndpoint.SchoolCountry),
        this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation),
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
      this.boardList = selectedBoard.data || [];
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  }



  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  confirm() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }

  async onGenderClick(event: any) {
    const selctedValue = event.value;

    this.selctedGenderVal = selctedValue;
    try {
    } catch (error) { }
  }

  async onBoardSelection(event: any, refreshTable: boolean = true) {
    const selectedID = event.id;
    console.log('Board event', event);

    // Clear the table data on new selection
    this.academicYearList = [];
    this.academicClassList = [];

    try {
      // Fetching the academic years
      const acdemicListData = await this.formsService.updateDataID(selectedID, schoolErpEndpoint.SchoolYearOnBoard);
      this.academicYearList = acdemicListData?.data || [];

      // Assuming event is the boardID, filter based on the correct boardID
      // this.filteredGraduationYear = this.academicYearList.filter((year) => year.board === selectedID);

      // Reset the selected year in the form

      console.log('academicYearList Year:', this.academicYearList); // Log filtered results
    } catch (error) {
      console.error('Failed to load academic years:', error);
    }
  }

  async onYearSelection(event: any, refreshTable: boolean = true) {
    const selectedID = event.id; // Make sure this is a number or convert it accordingly
    console.log('Board ID For Year:', selectedID); // Log the selected ID to see what is passed

    // Clear the table data on new selection
    this.academicClassList = [];
    try {
      // Fetching the list of academic classes
      const classesData = await this.formsService.updateDataID(selectedID,
        schoolErpEndpoint.SchoolAcademicClass
      );
      this.academicClassList = classesData?.data || [];

      console.log('Class List:', this.academicClassList);
    } catch (error) {
      console.error('Failed to load academic classes:', error);
    }
  }



  async onClassSelection(event: any, refreshTable: boolean = true) {
    const selectedID = event.id; // Make sure this is a number or convert it accordingly
    console.log('Class ID   FOR  SECTION:', selectedID); // Log the selected ID to see what is passed

    // Clear the table data on new selection
    this.academicSectionList = [];
    this.academicStudentList = [];

 

    try {
      // Fetching the list of academic classes
      const classesData = await this.formsService.updateDataID(
        selectedID,
        schoolErpEndpoint.SchoolAcademicSections
      );
      this.academicSectionList = classesData?.data || [];


   // Update the total records count
      this.totalRecords = this.academicStudentList.length;

      // Reset pagination
      this.currentPage = 0;

      // Call the pagination function to update the view
      this.updatePaginatedList();


      console.log('Sections List:', this.academicSectionList);
    } catch (error) {
      console.error('Failed to load academic classes:', error);
    }
  }



  async onSectionSelection(event: any, refreshTable: boolean = true) {
    const selectedID = event; // Get the selected section object from the event
    console.log('Getting Section:', selectedID); // Log the selected section


    this.selectedBoardYearClassSection = selectedID

    // If refreshTable is true, start the loading spinner
    if (refreshTable) {
      this.loading = true;
    }

    // Clear the table data on new selection
    this.academicStudentList = [];

    try {
      // Construct the query parameters object
      const postData = {
        branchId: selectedID.branch_id, // Branch ID from selected section
        board: selectedID.board_id, // Board from selected section
        yearId: selectedID.year_id, // Year from selected section
        classId: selectedID.class_erp_id, // Class ID from selected section
        sectionId: selectedID.id, // Section ID from selected section
      };

      // Call the service to fetch the student list using the constructed parameters
      const listData = await this.formsService.updateDataQuery(
        postData,
        schoolErpEndpoint.SchoolAcademicStudentList
      );

      // Assign the fetched list to academicStudentList
      this.listData = listData?.data || [];

      // If refreshTable is true, stop loading and update the list
      if (refreshTable) {
        this.academicStudentList = this.listData; // Update the student list
        this.loading = false; // Stop the loading spinner
        this.spinner.hide(); // Hide the spinner manually
      }

      // Log the fetched student list if any
      if (this.listData.length > 0) {
        console.log('Student List:', this.academicStudentList); // Log the fetched student list
      }
    } catch (error) {
      // Stop loading in case of error
      if (refreshTable) {
        this.loading = false;
        this.spinner.hide(); // Hide the spinner manually if there's an error
      }

      console.error('Failed to load student list:', error); // Handle any errors during the fetch process
    }
  }


  async updateStates(event: any): Promise<void> {
    const selectedID = event?.id;
    console.log('countryId', selectedID);

    try {
      // Fetch state data based on the country selection
      const stateData = await this.formsService.getListData(
        schoolErpEndpoint.SchoolState
      );
      this.stateList = stateData?.data || [];

      // Filter states based on selected country
      this.filteredStates = this.stateList.filter(
        (state) => state.country_id === selectedID
      );

      // Clear state and district values in the form
      this.form.get('country')?.setValue(selectedID); // Set country input
      this.form.get('state')?.setValue(null); // Reset state input
      this.filteredDistricts = []; // Clear district list

      // Set selected country ID for reference
      this.selectedCountry = selectedID;

      console.log('Filtered States:', this.filteredStates); // Log filtered states
    } catch (error) {
      console.error('Failed to load states', error);
    }
  }

  async updateDistricts(event: any): Promise<void> {
    const selectedID = event?.id; // Ensure you're using the correct path to the ID
    console.log('Selected District ID:', selectedID);

    try {
      // Fetch district data based on the selected state
      const districtData = await this.formsService.getListData(schoolErpEndpoint.SchoolDistrict);
      this.districtList = districtData?.data || [];

      console.log('All Districts:', this.districtList);

      // Filter districts based on selected state (province_id should match stateId)
      this.filteredDistricts = this.districtList.filter(
        (district) => district.province_id === selectedID
      );

      console.log('Filtered Districts:', this.filteredDistricts);

      // Optionally reset the district value in the form
      this.form.get('district')?.setValue(null);

    } catch (error) {
      console.error('Failed to load districts', error);
    }
  }





  async getDistrictID(event: any): Promise<void> {
    const districtId = event.id; // Gets the selected district ID
    this.selectedDistrict = districtId; // Store selected district ID in the variable

    // Set the district input value if needed
    this.form.get('district')?.setValue(districtId); // Set the form control's value to the selected district ID

    try {
      // If there are any additional tasks to perform on district selection, they go here
      // For example, fetching more data related to the selected district, if needed
      console.log('Selected District ID:', districtId);

      // You can add any additional logic here, like calling a service to fetch further data related to the selected district

    } catch (error) {
      console.error('Error handling district selection:', error);
    }
  }

  populateFormForEdit() {
    // Fetch the record to be edited and populate the form.
    // For example:
    this.form.patchValue({
      admissionDate: '2024-11-25', // Example of pre-filling data
      admissionNumber: 12345,
      rollNumber: 'R123',
      fullName: 'John Doe',
      // Other fields...
    });
  }

  studentProfileView(val: any) {
    console.log("val Details For Profile Vi ew", val);

    // Set visible to true to show the dialog
    this.isprofileView = true;
  }



    loadAdminDashBoardData() {
    this.chartService.createChart('lineChart', 'line', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Attendance',
          data: [10, 20, 30, 40, 50],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        },
      ],
    });


       this.chartService.createChart('barChart', 'bar', {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [
        {
          label: 'Votes',
          data: [12, 19, 3, 5],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
      ],
    });

  }

  ngOnDestroy(): void {
    // Destroy all charts when the component is destroyed
    this.chartService.destroyAllCharts();
  }


TableToggleView() {
  this.nxtTableViewMode = this.nxtTableViewMode === 'table' ? 'grid' : 'table';
  this.currentPage = 0; // Reset to first page when toggling views
}

get paginatedList() {
  const startIndex = this.currentPage * this.pageSize;
  return this.academicStudentList.slice(startIndex, startIndex + this.pageSize);
}

onPageChange(event: any) {
  this.currentPage = event.page;  // Update currentPage based on paginator change
  console.log('Current Page:', this.currentPage);
}


  // Update the paginated list based on current page and page size
  updatePaginatedList() {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedStudentList = this.academicStudentList.slice(startIndex, startIndex + this.pageSize);
  }


}
