import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SwalService, SessionService, FormsService, MaterialModule, SharableModule } from 'school-erp-public';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [FormsService, provideNativeDateAdapter()],
  selector: 'lib-class-time-table-add',
  templateUrl: './class-time-table-add.component.html',
  styleUrls: ['./class-time-table-add.component.scss']
})
export class ClassTimeTableAddComponent implements OnInit {
  form: FormGroup;
  isLoading = false; // For loading spinner
  submitted = false;

  // Metadata lists
  boardList: any[] = [];
  yearList: any[] = [];
  classList: any[] = [];
  sectionList: any[] = [];
  dayOfWeekList: any[] = [];
  subjectList: any[] = [];
  userList: any[] = [];
  roomList: any[] = [];

  // Selected IDs
  selectedBoardID: any;
  selectedYearID: any;
  selectedClassID: any;
  selectedSectionID: any;

  currentDayIndex: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private sessionService: SessionService,
    private swalService: SwalService
  ) {
    this.form = this.formBuilder.group({
      boardID: ['', Validators.required],
      yearID: ['', Validators.required],
      classID: ['', Validators.required],
      sectionID: ['', Validators.required],
      days: this.formBuilder.array([]) // Dynamic day form array
    });
  }

  ngOnInit(): void {
    this.loadBoardData();

    this.dayOfWeekList.forEach(() => {
      const periodsFormArray = this.formBuilder.array([]); // Each day will have a 'periods' FormArray
    });
  }






  addPeriod(dayIndex: number): void {
    const periodGroup = this.formBuilder.group({
      subjectID: ['', Validators.required],
      userID: ['', Validators.required],
      roomID: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
    // this.getPeriods(dayIndex).push(periodGroup);
  }

 

  async loadBoardData(): Promise<void> {
    try {
      this.isLoading = true;
      const response = await this.formsService.getListData(schoolErpEndpoint.SchoolERPAffiliation);
      this.boardList = response.data || [];
    } catch (error) {
      console.error('Error loading board data:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async onSelectionChange(event: any, type: string): Promise<void> {
    const selectedValue = event.value;
    this.isLoading = true;
    try {
      if (type === 'board') {
        const response = await this.formsService.updateDataID(selectedValue, schoolErpEndpoint.SchoolYearOnBoard);
        this.yearList = response.data || [];
        this.classList = [];
        this.sectionList = [];
      } else if (type === 'year') {
        const response = await this.formsService.updateDataID(selectedValue, schoolErpEndpoint.SchoolClassOnYear);
        this.classList = response.data || [];
        this.sectionList = [];
      } else if (type === 'class') {
        const response = await this.formsService.updateDataID(selectedValue, schoolErpEndpoint.SchoolSectionOnClass);
        this.sectionList = response.data || [];
      } else if (type === 'section') {
        const response = await this.formsService.getListData(schoolErpEndpoint.SchoolDayOfWeek);
        this.dayOfWeekList = response.data || [];
      }
    } catch (error) {
      console.error(`Error loading data for ${type}:`, error);
    } finally {
      this.isLoading = false;
    }
  }

  async submitForm(): Promise<void> {
    this.submitted = true;
    if (this.form.invalid) {
      this.swalService.warningNotification('Invalid Form', 'Please fill all required fields.');
      return;
    }

    const postData = {
      boardID: this.form.value.boardID,
      yearID: this.form.value.yearID,
      classID: this.form.value.classID,
      sectionID: this.form.value.sectionID,
      days: this.form.value.days
    };

    try {
      this.isLoading = true;
      const response = await this.formsService.onFormSubmit(postData, schoolErpEndpoint.SchoolClassTimeTables);
      this.form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      this.isLoading = false;
    }
  }


    // Check if periods exist for a day
    // hasPeriods(dayIndex: number): boolean {
    //   return this.getPeriods(dayIndex).length > 0;
    // }



}
