import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormsService, SharableModule, SnackbarService } from 'shared-lib';
import { environment } from 'projects/shell/environments/environment';
import { endpoints } from 'projects/shell/environments/endpoint';


// Interface to define the shape of each card
interface Card {
  imageSrc: string;
  title: string;
  description: string;
  count: number;
  backgroundColor: string; // Add backgroundColor property here
}


@Component({
  selector: 'lib-accreditation-dashboard',
  standalone: true,
  imports: [SharableModule],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './accreditation-dashboard.component.html',
  styleUrls: ['./accreditation-dashboard.component.scss']
})
export class AccreditationDashboardComponent implements OnInit, AfterViewInit {




  // List of light background colors
 lightColors = [
  '#FFF0F5', '#FFFAF0', '#F0FFF0', '#F0F8FF', '#F5F5F5',
  '#E6E6FA', '#FFF8E8', '#FAFAD2', '#F5FFFA', '#E0FFFF',
  '#F8F8FF', '#FDF5E6', '#FFEBE8', '#F0E68C', '#EDEDED'
];

// Array of card data with random background colors
cards = [
  {
    imageSrc: '../../../assets/images/thesis.png',
    title: 'Excellence in Education, Endorsed by Accreditation.',
    description: 'Thesis :',
    count: 30,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/trophy.png',
    title: 'Empowering Minds through Accredited Excellence',
    description: 'Awards',
    count: 30,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/workshop.png',
    title: 'Accredited Workshops: Empowering Minds, Elevating Standards.',
    description: 'Workshops:',
    count: 30,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/books.png',
    title: 'Accredited Knowledge, Boundless Horizons',
    description: 'Books :',
    count: 40,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/h-index.png',
    title: 'Accredited Excellence, Measured by H-Index Impact',
    description: 'H-index :',
    count: 12,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/citations.png',
    title: 'Accredited Quality, Recognized by Citations',
    description: 'Citations :',
    count: 20,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/grant.png',
    title: 'Accredited Innovation, Fueled by Grants',
    description: 'Grants :',
    count: 400000,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/trust.png',
    title: 'Accredited Partnerships, Strengthened by MOUs.',
    description: 'MOUs',
    count: 43,
    backgroundColor: this.getRandomLightColor()
  }
];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  public accreditationData = new MatTableDataSource<any>([]);
  public studentData = new MatTableDataSource<any>([]);
  public facultyData = new MatTableDataSource<any>([]);
  public departmentData = new MatTableDataSource<any>([]);
  public sportsData = new MatTableDataSource<any>([]);
  public expenditureData = new MatTableDataSource<any>([]);
  public researchData = new MatTableDataSource<any>([]);
  public placementData = new MatTableDataSource<any>([]);
  public infrastructureData = new MatTableDataSource<any>([]);
  public transportationData = new MatTableDataSource<any>([]);
  public adminAccountsData = new MatTableDataSource<any>([]);
  public hrAccountsData = new MatTableDataSource<any>([]);

  accreditationColumns: string[] = ['accreditationYear', 'accreditationBody', 'status'];
  studentColumns: string[] = ['type', 'count'];
  facultyColumns: string[] = ['type', 'count'];
  departmentColumns: string[] = ['departmentName', 'totalStudents', 'totalFaculty', 'programsOffered'];
  sportsColumns: string[] = ['type', 'count', 'achievements'];
  expenditureColumns: string[] = ['type', 'amount'];
  researchColumns: string[] = ['type', 'amount', 'projects'];
  placementColumns: string[] = ['type', 'count', 'percentage', 'recruiters'];
  infrastructureColumns: string[] = ['type', 'count', 'details'];
  transportationColumns: string[] = ['type', 'count', 'routes', 'capacity', 'facilities'];
  adminAccountsColumns: string[] = ['username', 'name', 'email', 'contactNumber', 'department', 'accessLevel'];
  hrAccountsColumns: string[] = ['username', 'name', 'email', 'contactNumber', 'department', 'accessLevel'];

  sharedImagePath = environment.assetsUrl;

  constructor(private formsService: FormsService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.loadFormData();

    this.cards = this.cards.map(card => ({
      ...card,
      backgroundColor: this.getRandomLightColor()
    }));

  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.accreditationData.paginator = this.paginator;
      this.studentData.paginator = this.paginator;
      this.facultyData.paginator = this.paginator;
      this.departmentData.paginator = this.paginator;
      this.sportsData.paginator = this.paginator;
      this.expenditureData.paginator = this.paginator;
      this.researchData.paginator = this.paginator;
      this.placementData.paginator = this.paginator;
      this.infrastructureData.paginator = this.paginator;
      this.transportationData.paginator = this.paginator;
      this.adminAccountsData.paginator = this.paginator;
      this.hrAccountsData.paginator = this.paginator;
    }
    if (this.sort) {
      this.accreditationData.sort = this.sort;
      this.studentData.sort = this.sort;
      this.facultyData.sort = this.sort;
      this.departmentData.sort = this.sort;
      this.sportsData.sort = this.sort;
      this.expenditureData.sort = this.sort;
      this.researchData.sort = this.sort;
      this.placementData.sort = this.sort;
      this.infrastructureData.sort = this.sort;
      this.transportationData.sort = this.sort;
      this.adminAccountsData.sort = this.sort;
      this.hrAccountsData.sort = this.sort;
    }
  }

  applyFilter(event: Event, dataSource: MatTableDataSource<any>) {
    const input = event.target as HTMLInputElement;
    dataSource.filter = input.value.trim().toLowerCase();
  }

  async loadFormData() {
    try {
      const response = await this.formsService.getListData(endpoints.AccreditationDashboard);
      const data = response?.data.collegeAccreditation || {};

      // Accreditation Details
      this.accreditationData = new MatTableDataSource([data.accreditationDetails || {}]);

      // Student Details
      this.studentData = new MatTableDataSource(data.studentDetails || []);

      // Faculty Details
      this.facultyData = new MatTableDataSource(data.facultyDetails || []);

      // Department Details
      this.departmentData = new MatTableDataSource(data.departmentDetails || []);

      // Sports Facilities
      this.sportsData = new MatTableDataSource(data.sportsFacilities || []);

      // Expenditure Details
      this.expenditureData = new MatTableDataSource(data.expenditureDetails || []);

      // Research and Development
      this.researchData = new MatTableDataSource(data.researchAndDevelopment || []);

      // Placement Details
      this.placementData = new MatTableDataSource(data.placementDetails || []);

      // Infrastructure Details
      this.infrastructureData = new MatTableDataSource(data.infrastructureDetails || []);

      // Transportation Details
      this.transportationData = new MatTableDataSource(data.transportationDetails || []);

      // Admin Accounts
      this.adminAccountsData = new MatTableDataSource((data.adminAccounts?.[0]?.accounts) || []);

      // HR Accounts
      this.hrAccountsData = new MatTableDataSource((data.hrAccounts?.[0]?.accounts) || []);

    } catch (error) {
      console.error("Failed to load data", error);
      // Handle the error appropriately
      this.accreditationData = new MatTableDataSource([]);
      this.studentData = new MatTableDataSource([]);
      this.facultyData = new MatTableDataSource([]);
      this.departmentData = new MatTableDataSource([]);
      this.sportsData = new MatTableDataSource([]);
      this.expenditureData = new MatTableDataSource([]);
      this.researchData = new MatTableDataSource([]);
      this.placementData = new MatTableDataSource([]);
      this.infrastructureData = new MatTableDataSource([]);
      this.transportationData = new MatTableDataSource([]);
      this.adminAccountsData = new MatTableDataSource([]);
      this.hrAccountsData = new MatTableDataSource([]);
    }
  }


   // Function to get a random light color from the array
   getRandomLightColor() {
    const randomIndex = Math.floor(Math.random() * this.lightColors.length);
    return this.lightColors[randomIndex];
  }
}
