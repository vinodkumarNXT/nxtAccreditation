import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { MaterialModule, SharableModule, FormsService } from 'school-erp-public';

@Component({
  selector: 'lib-student-list-add',
  standalone: true,
  imports: [MaterialModule, SharableModule ],
  providers: [FormsService, ConfirmationService, MessageService],
  templateUrl: './student-list-add.component.html',
  styleUrl: './student-list-add.component.css'
})
export class StudentListAddComponent {

  public isUpdate: boolean =false;
  visible: boolean = true;
  form:FormGroup;

  public selectedDOB:Date[] | undefined;
  formsService: any;
  genderList: any;
  selectedBoardID: any;

  public statusMetaData;
  public genderMetaData;
  public agreedTypeMetaData;
  public stateList: any;

  public castList: any;
  public castCategoryList: any;
  public bloodGroupList: any;
  public countryList: any;
  public filteredStates: any;
  public districtList: any;
  public filteredDistricts: any;

  public academicYearList:any;
  public academicClassList:any;
  public filteredGraduationYear :any;


  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dateOfBirth:['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadMetaData()
  }


  abortForm(){

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
  

  onGenderClick(arg0: { value: any; }) {
    throw new Error('Method not implemented.');
  }


  async onSelectionChange(event: any, type: string): Promise<void> {
    const selectedValue = event.value;
    try {
     if (type === 'year') {
        const response = await this.formsService.updateDataID(selectedValue, schoolErpEndpoint.SchoolState);
        this.stateList = response.data || [];
      } 
    } catch (error) {
      console.error(`Error loading data for ${type}:`, error);
    } finally {
    }
  }

}
