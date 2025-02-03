import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import axios from 'axios';
import { Lightbox } from 'ngx-lightbox';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { AssetService, ChartsjsService, FormsService, SharableModule } from 'school-erp-public';

@Component({
  selector: 'lib-erp-dashboard',
  standalone: true,
  imports: [SharableModule],
  providers: [ChartsjsService, AssetService],
  templateUrl: './erp-dashboard.component.html',
  styleUrls: ['./erp-dashboard.component.css']
})
export class ErpDashboardComponent implements OnInit {
  basicData: any;
  blogImages: any; // Will hold dynamically loaded image data
  globalImagePath:any
  greetingMessage: string = '';


  cards = Array.from({ length: 12 }, (_, i) => i + 1); // Example: 12 cards

  private backgroundColors: string[] = [];
public randomAttendanceData:any

  contentList:any;
  timelinePosts=[
    {
      status: 'Day Schedule',
      date: '02/01/2025',
      color: '#9C27B0',
      image: 'game-controller.jpg',
      TimeTable: {
        Day: 'Thursday',
        schedule: [
          { time: '9:00 AM', subject: 'Maths', room: 'R21', BuildingName: 'Millennium', FacultyBy: 'JHON Maxer' },
          { time: '10:00 AM', subject: 'English', room: 'R22', BuildingName: 'Main Block', FacultyBy: 'Sarah Walker' },
          { time: '11:00 AM', subject: 'Science', room: 'R23', BuildingName: 'Science Lab', FacultyBy: 'Dr. Lee' },
          { time: '12:00 PM', subject: 'Lunch Break' },  // Lunch break (after 11 AM)
          { time: '1:00 PM', subject: 'History', room: 'R24', BuildingName: 'History Hall', FacultyBy: 'James Smith' },
          { time: '2:00 PM', subject: 'Geography', room: 'R25', BuildingName: 'Geography Block' },
          { time: '3:00 PM', subject: 'Art', room: 'R26', BuildingName: 'Art Studio', FacultyBy: 'Emily Brown' },
          { time: '4:00 PM', subject: 'Physical Education', room: 'R27', BuildingName: 'Sports Complex', FacultyBy: 'Michael Clark' },
          { time: '3:30 PM', subject: 'Break' }  // Optional break before the last subject (Art)
        ]
        
      }
    },
      { status: 'Tech Event', date: '03/01/2025 09:00', icon: 'pi pi-futbol', color: '#2196F3', image: 'football.jpg',
        TimeTable: {
          Day: 'Friday',
          schedule: [
            { time: '9:00 AM', subject: 'Maths', room: 'R21', BuildingName: 'Millennium', FacultyBy: 'JHON Maxer' },
            { time: '10:00 AM', subject: 'English', room: 'R22', BuildingName: 'Main Block', FacultyBy: 'Sarah Walker' },
            { time: '11:00 AM', subject: 'Science', room: 'R23', BuildingName: 'Science Lab', FacultyBy: 'Dr. Lee' },
            { time: '12:00 PM', subject: 'Lunch Break' },  // Lunch break (after 11 AM)
            { time: '1:00 PM', subject: 'History', room: 'R24', BuildingName: 'History Hall', FacultyBy: 'James Smith' },
            { time: '2:00 PM', subject: 'Geography', room: 'R25', BuildingName: 'Geography Block' },
            { time: '3:00 PM', subject: 'Art', room: 'R26', BuildingName: 'Art Studio', FacultyBy: 'Emily Brown' },
            { time: '4:00 PM', subject: 'Physical Education', room: 'R27', BuildingName: 'Sports Complex', FacultyBy: 'Michael Clark' },
            { time: '3:30 PM', subject: 'Break' }  // Optional break before the last subject (Art)
          ]
          
        }
       },
      { status: 'Science Seminar', date: '04/01/2025 11:00', icon: 'pi pi-briefcase', color: '#4CAF50', image: 'seminar.jpg' },
      { status: 'Annual Picnic', date: '06/01/2025 08:30', icon: 'pi pi-tree', color: '#FFEB3B', image: 'picnic.jpg' },
      { status: 'Math Workshop', date: '10/04/2024 14:00', icon: 'pi pi-pencil', color: '#FF5722', image: 'workshop.jpg',
         TimeTable: {
        Day: 'Wednesday',
        schedule: [
          { time: '9:00 AM', subject: 'Maths', room: 'R21', BuildingName: 'Millennium', FacultyBy: 'JHON Maxer' },
          { time: '10:00 AM', subject: 'English', room: 'R22', BuildingName: 'Main Block', FacultyBy: 'Sarah Walker' },
          { time: '11:00 AM', subject: 'Science', room: 'R23', BuildingName: 'Science Lab', FacultyBy: 'Dr. Lee' },
          { time: '12:00 PM', subject: 'Lunch Break' },  // Lunch break (after 11 AM)
          { time: '1:00 PM', subject: 'History', room: 'R24', BuildingName: 'History Hall', FacultyBy: 'James Smith' },
          { time: '2:00 PM', subject: 'Geography', room: 'R25', BuildingName: 'Geography Block' },
          { time: '3:00 PM', subject: 'Art', room: 'R26', BuildingName: 'Art Studio', FacultyBy: 'Emily Brown' },
          { time: '4:00 PM', subject: 'Physical Education', room: 'R27', BuildingName: 'Sports Complex', FacultyBy: 'Michael Clark' },
          { time: '3:30 PM', subject: 'Break' }  // Optional break before the last subject (Art)
        ]
        
      } },
      { status: 'Art Exhibition', date: '10/05/2024 10:00', icon: 'pi pi-palette', color: '#9C27B0', image: 'art.jpg' },
      { status: 'Field Trip', date: '10/06/2024 07:00', icon: 'pi pi-bus', color: '#8BC34A', image: 'field-trip.jpg' },
      { status: 'Debate Competition', date: '10/07/2024 12:00', icon: 'pi pi-comments', color: '#FFC107', image: 'debate.jpg' },
      { status: 'Literary Fest', date: '10/08/2024 13:30', icon: 'pi pi-book', color: '#673AB7', image: 'literary-fest.jpg' },
      { status: 'Sports Day', date: '10/09/2024 09:00', icon: 'pi pi-trophy', color: '#F44336', image: 'sports-day.jpg' },
      { status: 'Cultural Night', date: '10/10/2024 18:00', icon: 'pi pi-theater', color: '#607D8B', image: 'cultural-night.jpg' }

  ]

  dashboardItems = [
    { image: 'dash-std.svg', label: 'Students', alt: '' , navLink:"student-list"},
    { image: 'dash-presentation.svg', label: 'Staff', alt: 'Staff'  , navLink:"employee-list"},
    { image: 'dash-attendance.svg', label: 'Attendance', alt: 'Attendance'  , navLink:"student-list"},
    { image: 'dash-book.svg', label: 'Library', alt: 'Library'  , navLink:"student-list"},
    { image: 'dash-bus-stop.svg', label: 'Transport', alt: 'Transport' , navLink:"student-list"},
    { image: 'dash-exam.svg', label: 'Examination', alt: 'Examination' ,navLink:"student-list" },
    { image: 'dash-counter.svg', label: 'Visitors', alt: 'Visitors', navLink:"student-list" },
    { image: 'dash-hostel.svg', label: 'Hostel', alt: 'Hostel', navLink:"student-list"},
    { image: 'dash-exclamation-mark.svg', label: 'Grievance', alt: 'Grievance ', navLink:"student-list"},
    { image: 'dash-game.svg', label: 'Sports', alt: 'Games' , navLink:"student-list"},
  ];
  constructor(
    public dialog: MatDialog,
    private formsService: FormsService,
    private assetService:AssetService,
    private lightbox: Lightbox,
    private chartService:ChartsjsService){}

  ngOnInit() {
    this.loadAdminDashBoardData();
    this.getContentLoader();
    this.getTimeLinePosts();

    this.globalImagePath= this.assetService.getAssetPath('');
    this.setGreetingMessage();

    this.backgroundColors = Array.from({ length: 12 }, (_, i) => `var(--nxtDashBgColor-${i + 1})`);

  }


 getCardBackgroundColor(index: number): string {
    // Assign a color based on index (cyclic)
    return this.backgroundColors[index % this.backgroundColors.length];
  }


  setGreetingMessage(): void {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      this.greetingMessage = 'Good Morning... 🌞 ';
    } else if (currentHour < 18) {
      this.greetingMessage = 'Good Afternoon...🌤️ ';
    } else {
      this.greetingMessage = 'Good Evening... 🌙 ';
    }
  }

    // Dynamic path generation for specific files
    getDynamicImagePath(fileName: string): string {
      return this.assetService.getAssetPath(fileName);
    }

        // Function to generate random data for the chart
 generateRandomData(length: any, min: any, max: any): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1) + min));
}






  loadAdminDashBoardData() {
    this.chartService.createChart('lineChart', 'line', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Attendance',
      data:  this.generateRandomData(5, 10, 100),
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
  ],
    });


    // Bar Chart
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

    // Pie Chart
    // this.chartService.createChart('pieChart', 'pie', {
    //   labels: ['Red', 'Blue', 'Yellow'],
    //   datasets: [
    //     {
    //       data: [300, 50, 100],
    //       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //     },
    //   ],
    // });

    // Radar Chart
    // this.chartService.createChart('radarChart', 'radar', {
    //   labels: ['Eating', 'Drinking', 'Sleeping', 'Coding', 'Exercising'],
    //   datasets: [
    //     {
    //       label: 'My Data',
    //       data: [65, 59, 90, 81, 56],
    //       borderColor: 'rgba(153, 102, 255, 1)',
    //       backgroundColor: 'rgba(153, 102, 255, 0.2)',
    //     },
    //   ],
    // });

    // Polar Area Chart
    // this.chartService.createChart('polarAreaChart', 'polarArea', {
    //   labels: ['Red', 'Blue', 'Yellow', 'Green'],
    //   datasets: [
    //     {
    //       data: [11, 16, 7, 3],
    //       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    //     },
    //   ],
    // });

    // Bubble Chart
    // this.chartService.createChart('bubbleChart', 'bubble', {
    //   datasets: [
    //     {
    //       label: 'My Bubble Dataset',
    //       data: [
    //         { x: 10, y: 20, r: 15 },
    //         { x: 15, y: 10, r: 10 },
    //         { x: 25, y: 15, r: 20 },
    //       ],
    //       backgroundColor: '#FF6384',
    //     },
    //   ],
    // });

    // // Scatter Chart
    // this.chartService.createChart('scatterChart', 'scatter', {
    //   datasets: [
    //     {
    //       label: 'Scatter Dataset',
    //       data: [
    //         { x: -10, y: 0 },
    //         { x: 0, y: 10 },
    //         { x: 10, y: 5 },
    //       ],
    //       backgroundColor: '#36A2EB',
    //     },
    //   ],
    // });
    
  }
  // async loadTableData() {
  
  //   try {
  //     // Fetch the list data from the server using the forms service.
  //     // The specific endpoint for this data is provided as an argument.
  //     const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBlogAndPost);

  //     // Store the fetched data in the component's `listData` property.
  //     this.tableMetaDataList = listData.data;

  //     // Log the fetched data to the console for debugging purposes.
  //     console.log("this.listData", this.listData);

  //   } catch (error) {
  //     // Handle any errors that occur during the data fetch process.
  //     // Currently, the catch block is empty, but error handling could be added here if needed.
  //   }
  // }

  async getContentLoader() {
    try {
      const response = await this.formsService.getListData(schoolErpEndpoint.SchoolBlogAndPost);

      // const response = await axios.get('https://dummyapi.online/api/blogposts');
      this.contentList = response.data; // Correctly access the posts array
      console.log("metaData", response.data); // Logs the entire response


      this.blogImages = response.data.map((img: any) => ({
        src: img.imageUrl,
        caption: img.caption,
        thumb: img.thumbUrl, // Optional: If there's a thumbnail
      }));


    } catch (error) {
      console.error("Error fetching data:", error);

    }
  }

  async getTimeLinePosts() {
    try {
      // const response = await axios.get('https://dummyapi.online/api/social-profiles');
      // this.timelinePosts = response.data; // Correctly access the posts array
      // console.log("metaData", response.data); // Logs the entire response
      this.timelinePosts
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  

  ngOnDestroy(): void {
    // Destroy all charts when the component is destroyed
    this.chartService.destroyAllCharts();
  }

 // Function to open the lightbox for a particular image
 openLightbox(index: number): void {
  this.lightbox.open(this.blogImages, index); // Opens the lightbox starting from the clicked image index
}

 
}
