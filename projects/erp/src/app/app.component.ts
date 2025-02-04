import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NavigationEnd, Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { filter, Subscription } from 'rxjs';
import {
  SchoolBreadComService,
  SchoolGlobleSearchInputService,
} from 'school-erp-public';
import {
  SharableModule,
  SwalService,
  AuthService,
  ErpMenuService,
  AutoLogoutService,
} from 'shared-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharableModule],
  providers: [provideNativeDateAdapter(), SchoolBreadComService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  menuItems: any;
  public isExpanded = true;
  public isShowing = false;
  public showSubmenu: { [key: string]: boolean } = {};
  public showNestedSubmenu: { [key: string]: boolean } = {};
  public showLayout = true;
  public isLoginPage: boolean = false;
  public currentYear: number;

  public isSidebarVisible: boolean = false;
  public isLoading: boolean = false;

  public activeSubmenu: { [key: string]: boolean } = {};
  public activeNestedSubmenu: { [key: string]: boolean } = {};

  public userMenu: any;
  public availableActions: string[] = [];

  breadcrumbs: any;
  searchResults: any;
  randomColors: any;

  private idleTimer$: Subscription = new Subscription();

  constructor(
    private globalSearchInput: SchoolGlobleSearchInputService,
    private breadcrumbService: SchoolBreadComService,
    private autoLogoutService: AutoLogoutService,
    private swalService: SwalService,
    private authService: AuthService,
    private router: Router,
    private menuService: ErpMenuService
  ) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.breadcrumbService.breadcrumbs$.subscribe((items) => {
      this.breadcrumbs = items;
    });

    this.randomColors = this.generateLightColors(10);

    // this.items = [{ icon: 'pi pi-home', route: '/installation' }, { label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }];

    // this.menuItems = [
    //   {
    //     label: 'Administration',
    //     icon: ' pi pi-graduation-cap',
    //     items: [
    //       [
    //         {
    //           label: 'students',
    //           icon: ' pi pi-graduation-cap',

    //           items: [
    //             {
    //               label: 'Enrollment',
    //               routerLink: '/enrollment',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/dash-addUser.svg',
    //             },

    //             {
    //               label: 'Student List',
    //               routerLink: '/students-list',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/dash-StudentList.svg',
    //             },

    //             {
    //               label: 'Student Attendance',
    //               routerLink: '/attendance',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/attendance.svg',
    //             },

    //             {
    //               label: 'Student Assignments',
    //               routerLink: '/StudentAssignments',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/assignment.svg',
    //             },
    //           ],
    //         },
    //         {
    //           label: 'Communication',
    //           icon: ' pi pi-graduation-cap',

    //           items: [
    //             {
    //               label: 'Notice & Circular',
    //               routerLink: '/notice-circular',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/notices-board.svg',
    //             },

    //             {
    //               label: 'Blog & Post',
    //               routerLink: '/blog-post',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/blog.svg',
    //             },

    //             {
    //               label: 'School Magazine',
    //               routerLink: '/getAttendanceReport',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/magazine.svg',
    //             },

    //             {
    //               label: 'Academic Calender',
    //               routerLink: '/StudentAssignments',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/AcademiCalendar.svg',
    //             },
    //           ],
    //         },
    //       ],

    //       [
    //         {
    //           label: 'Attendance Management',
    //           icon: ' pi pi-users',

    //           items: [
    //             {
    //               label: 'Upload Attendance',
    //               routerLink: '/upload-Attendance',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/uploadAttendance.svg',
    //             },
    //             {
    //               label: 'Attendance Reports',
    //               routerLink: '/attendance-reports',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/Attendance_reports.svg',
    //             },
    //           ],
    //         },
    //         {
    //           label: 'Certificates',
    //           icon: ' pi pi-users',

    //           items: [
    //             {
    //               label: 'Transfer Certificates',
    //               routerLink: '/upload-Attendance',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/certificate.svg',
    //             },
    //             {
    //               label: 'Study & Conduct',
    //               routerLink: '/attendance-reports',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/merge.svg',
    //             },
    //           ],
    //         },

    //         {
    //           label: 'Grievance',
    //           icon: ' pi pi-users',

    //           items: [
    //             {
    //               label: 'Complaint',
    //               routerLink: '/upload-Attendance',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/exclamation-mark.svg',
    //             },
    //             {
    //               label: 'Reports and Analytics',
    //               routerLink: '/attendance-reports',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/report-analysis.png',
    //             },
    //           ],
    //         },
    //       ],
    //       [
    //         {
    //           label: 'Faculty',
    //           icon: ' pi pi-users',
    //           items: [
    //             {
    //               label: 'Faculty List',
    //               routerLink: '/employee-list',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/facList.svg',
    //             },
    //             {
    //               label: 'Staff Enrollment',
    //               routerLink: '/staff-enrollment',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/facultyAdd.svg',
    //             },
    //             {
    //               label: 'Leave',
    //               routerLink: '/leave-management',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/leave.svg',
    //             },
    //             {
    //               label: 'Payroll',
    //               routerLink: '/payrolls',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/payroll.svg',
    //             },
    //           ],
    //         },

    //         {
    //           label: 'Transport',
    //           icon: 'pi pi-users',
    //           items: [
    //             {
    //               label: 'Add Routes',
    //               routerLink: '/employee-list',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/route.svg',
    //             },
    //             {
    //               label: 'Add Vehicles', // Corrected "Vehiles" to "Vehicles"
    //               routerLink: '/staff-enrollment',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/busAdd.svg',
    //             },
    //             {
    //               label: 'Vehicle Maintenance', // Corrected "Vehile Maintaince" to "Vehicle Maintenance"
    //               routerLink: '/leave-management',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/setting.svg',
    //             },
    //             {
    //               label: 'Vehicle Logs', // Corrected "Vehile Logs" to "Vehicle Logs"
    //               routerLink: '/payrolls',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/add-to.svg',
    //             },
    //           ],
    //         },
    //       ],

    //       [
    //         ,
    //         {
    //           label: 'Sports & Events',
    //           icon: ' pi pi-graduation-cap',

    //           items: [
    //             {
    //               label: 'Event Add',
    //               routerLink: '/event-add',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/eventAdd.svg',
    //             },
    //             {
    //               label: 'Event Register',
    //               routerLink: '/event-register',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/eventRegister.svg',
    //             },
    //             {
    //               label: 'Grounds',
    //               routerLink: '/event-add',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/ground.svg',
    //             },
    //           ],
    //         },
    //         {
    //           label: 'Hostel',
    //           icon: ' pi pi-users',

    //           items: [
    //             {
    //               label: 'Hostel',
    //               routerLink: '/upload-Attendance',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/hostelAdd.svg',
    //             },
    //             {
    //               label: 'Room Allocation',
    //               routerLink: '/room-allocation',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/allocateRoom.svg',
    //             },

    //             {
    //               label: 'Gate Pass',
    //               routerLink: '/attendance-reports',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/gatePass.svg',
    //             },

    //             {
    //               label: 'Disciplinary Actions',
    //               routerLink: '/hostel-discipline',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/disciplinaryAction.svg',
    //             },

    //             {
    //               label: 'Maintenance Requests',
    //               routerLink: '/maintenance-requests',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/hostelSetting.svg',
    //             },
    //           ],
    //         },
    //       ],
    //     ],
    //   },

    //   {
    //     label: 'Academics',
    //     icon: 'pi pi-building-columns',
    //     items: [
    //       [
    //         {
    //           label: 'Class Management',
    //           icon: ' pi pi-graduation-cap',

    //           items: [
    //             {
    //               label: 'Class TimeTable Management',
    //               routerLink: '/ClassTimeTableManagement',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/classTimeTable.svg',
    //             },
    //             {
    //               label: 'Lesson Plan',
    //               routerLink: '/CreateLessonPlan',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/planning.svg',
    //             },
    //             {
    //               label: 'Timetable',
    //               routerLink: '/timetable',
    //               icon: ' pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/time.svg',
    //             },
    //           ],
    //         },
    //       ],
    //       [
    //         {
    //           label: 'Examinations',
    //           icon: 'pi pi-book',
    //           items: [
    //             {
    //               label: 'Exam Schedule',
    //               routerLink: '/exam-schedule',
    //               icon: 'pi pi-calendar',
    //               svgicon: 'assets/megaMenu/exam-announce.svg',
    //             },
    //             {
    //               label: 'Results',
    //               routerLink: '/exam-results',
    //               icon: 'pi pi-chart-line',
    //               svgicon: 'assets/megaMenu/exam-result.svg',
    //             },
    //             {
    //               label: 'Hall Tickets',
    //               routerLink: '/hall-tickets',
    //               icon: 'pi pi-ticket',
    //               svgicon: 'assets/megaMenu/hallticket.svg',
    //             },
    //             {
    //               label: 'Question Paper Upload',
    //               routerLink: '/question-paper-upload',
    //               icon: 'pi pi-cloud-upload',
    //               svgicon: 'assets/megaMenu/questionPaper.svg',
    //             },
    //             {
    //               label: 'Re-evaluation Requests',
    //               routerLink: '/re-evaluation',
    //               icon: 'pi pi-refresh',
    //               svgicon: 'assets/megaMenu/revalue.svg',
    //             },
    //           ],
    //         },
    //       ],
    //       [
    //         {
    //           label: 'Library',
    //           icon: 'pi pi-book',
    //           items: [
    //             {
    //               label: 'Books Catalog',
    //               routerLink: '/books-catalog',
    //               icon: 'pi pi-list',
    //               svgicon: 'assets/megaMenu/bookCategory.svg',
    //             },
    //             {
    //               label: 'Borrowed Books',
    //               routerLink: '/borrowed-books',
    //               icon: 'pi pi-bookmark',
    //               svgicon: 'assets/megaMenu/bookExchange.svg',
    //             },
    //             {
    //               label: 'Book Requests',
    //               routerLink: '/book-requests',
    //               icon: 'pi pi-send',
    //               svgicon: 'assets/megaMenu/bookRequest.svg',
    //             },
    //             {
    //               label: 'Library Fines',
    //               routerLink: '/library-fines',
    //               icon: 'pi pi-wallet',
    //               svgicon: 'assets/megaMenu/fine.svg',
    //             },
    //           ],
    //         },
    //       ],

    //       [
    //         {
    //           label: 'LMS',
    //           icon: 'pi pi-desktop',
    //           items: [
    //             {
    //               label: 'Online Courses',
    //               routerLink: '/online-courses',
    //               icon: 'pi pi-video',
    //               svgicon: 'assets/megaMenu/lms-online.svg',
    //             },
    //             {
    //               label: 'Assignments',
    //               routerLink: '/assignments',
    //               icon: 'pi pi-pencil',
    //               svgicon: 'assets/megaMenu/lms-assignment.svg',
    //             },
    //             {
    //               label: 'Grades',
    //               routerLink: '/grades',
    //               icon: 'pi pi-chart-line',
    //               svgicon: 'assets/megaMenu/lms-grade.svg',
    //             },
    //           ],
    //         },
    //       ],
    //     ],
    //   },

    //   {
    //     label: 'Finance',
    //     icon: 'pi pi-money-bill',
    //     items: [
    //       [
    //         {
    //           label: 'Students',
    //           icon: 'pi pi-graduation-cap',
    //           items: [
    //             {
    //               label: 'Academic',
    //               routerLink: '/academic-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/payment.svg',
    //             },
    //             {
    //               label: 'Hostel',
    //               routerLink: '/hostel-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/hostel.svg',
    //             },
    //             {
    //               label: 'Transport',
    //               routerLink: '/transport-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/bus.svg',
    //             },
    //             {
    //               label: 'Library',
    //               routerLink: '/library-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/library.svg',
    //             },
    //             {
    //               label: 'Examination',
    //               routerLink: '/examination-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/exam-fee.svg',
    //             },
    //           ],
    //         },
    //       ],
    //       [
    //         {
    //           label: 'Staff',
    //           icon: 'pi pi-users',
    //           items: [
    //             {
    //               label: 'Salary Payments',
    //               routerLink: '/salary-payments',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/salary.svg',
    //             },
    //             {
    //               label: 'Provident Fund',
    //               routerLink: '/provident-fund',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/pf.svg',
    //             },
    //             {
    //               label: 'Tax Deductions',
    //               routerLink: '/tax-deductions',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/taxes.svg',
    //             },
    //           ],
    //         },
    //       ],
    //       [
    //         {
    //           label: 'School Infrastructure',
    //           icon: 'pi pi-building',
    //           items: [
    //             {
    //               label: 'Maintenance Costs',
    //               routerLink: '/maintenance-costs',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/maintenance.svg',
    //             },
    //             {
    //               label: 'Utility Bills',
    //               routerLink: '/utility-bills',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/utility.svg',
    //             },
    //           ],
    //         },
    //       ],
    //     ],
    //   },

    //   {
    //     label: 'Setting',
    //     icon: 'pi pi-cog',
    //     items: [
    //       [
    //         {
    //           label: 'Infrastructure',
    //           icon: 'pi pi-graduation-cap',
    //           items: [
    //             {
    //               label: 'Builings',
    //               routerLink: '/academic-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/academicBlock.svg',
    //             },
    //             {
    //               label: 'Floors',
    //               routerLink: '/hostel-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/floor.svg',
    //             },
    //             {
    //               label: 'Rooms',
    //               routerLink: '/transport-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/schoolRoom.svg',
    //             },
    //             {
    //               label: 'class rooms',
    //               routerLink: '/library-fees',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/classRoom.svg',
    //             },
    //           ],
    //         },
    //       ],
    //       [
    //         {
    //           label: 'Staff',
    //           icon: 'pi pi-cog', // PrimeNG settings/configuration icon
    //           items: [
    //             {
    //               label: 'Add Designation',
    //               routerLink: '/add-designation',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/library.svg',
    //             },
    //             {
    //               label: 'Department Management',
    //               routerLink: '/department-management',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/library.svg',
    //             },
    //             {
    //               label: 'Staff Roles',
    //               routerLink: '/staff-roles',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/library.svg',
    //             },
    //             {
    //               label: 'Employment Types',
    //               routerLink: '/employment-types',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/library.svg',
    //             },
    //             {
    //               label: 'Shift Management',
    //               routerLink: '/shift-management',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/library.svg',
    //             },
    //             {
    //               label: 'Leave Policies',
    //               routerLink: '/leave-policies',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/library.svg',
    //             },
    //           ],
    //         }

    //       ],
    //       [
    //         {
    //           label: 'Activity Logs',
    //           icon: 'pi pi-history', // PrimeNG history icon
    //           items: [
    //             {
    //               label: 'Staff  History',
    //               routerLink: '/staff-login-history',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/stdLog.svg',
    //             },
    //             {
    //               label: 'Student  History',
    //               routerLink: '/user-login-history',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/staffLog.svg',
    //             },
    //             {
    //               label: 'Activity Logs',
    //               routerLink: '/activity-logs',
    //               icon: 'pi pi-angle-right',
    //               svgicon: 'assets/megaMenu/activityLog.svg',
    //             },
    //           ],
    //         }

    //       ],
    //     ],
    //   },
    // ];

    this.setupMenuForUserType('admin'); // Change user type here

    // Check for current route to toggle layout visibility
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showLayout = !event.url.includes('/login'); // Hide layout for login page
      });

    // Listen for route changes and check if the current route is the login page
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url.includes('login');
    });

    // Initialize the auto logout logic
    this.autoLogoutService.startListeningForUserActivity();
    this.idleTimer$ = this.autoLogoutService.logout$.subscribe(() => {
      this.autoLogoutService.triggerLogoutAlert();
    });

    this.loadMenuItems();
  }

  loadMenuItems() {
    this.menuItems = this.menuService.getMenuItems();
  }

  ngOnDestroy() {
    this.idleTimer$.unsubscribe(); // Clean up subscriptions
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  toggleSubmenu(label: string): void {
    this.showSubmenu[label] = !this.showSubmenu[label];
    this.activeSubmenu[label] = this.showSubmenu[label];
  }

  toggleNestedSubmenu(label: string): void {
    this.showNestedSubmenu[label] = !this.showNestedSubmenu[label];
    this.activeNestedSubmenu[label] = this.showNestedSubmenu[label];
  }

  setupMenuForUserType(userType: string) {
    switch (userType) {
      case 'admin':
        this.userMenu = [
          {
            label: 'Profile',
            icon: 'settings',
            disabled: false,
            route: '/profile',
          },
          {
            label: 'Log Out',
            icon: 'power_settings_new',
            disabled: false,
            route: '/logOut',
          },
        ];
        this.availableActions = [
          'Access to Admin dashboard',
          'Manage All Users',
          'Modify Settings',
          'View Reports',
        ];
        break;
      case 'principal':
        this.userMenu = [
          { label: 'Home', icon: 'home', disabled: false, route: '/dashboard' },
          {
            label: 'Profile',
            icon: 'person',
            disabled: false,
            route: '/dashboard',
          },
          {
            label: 'Settings',
            icon: 'settings',
            disabled: false,
            route: '/dashboard',
          },
          {
            label: 'Reports',
            icon: 'bar_chart',
            disabled: true,
            route: '/dashboard',
          },
          {
            label: 'Log Out',
            icon: 'power_settings_new',
            disabled: false,
            route: '/logOut',
          },
        ];
        this.availableActions = [
          'Access Home',
          'View/Edit Profile',
          'Modify Personal Settings',
        ];
        break;
      case 'guest':
        this.userMenu = [
          { label: 'Home', icon: 'home', disabled: false, route: '/dashboard' },
          {
            label: 'Sign In',
            icon: 'login',
            disabled: false,
            route: '/dashboard',
          },
          { label: 'Help', icon: 'help', disabled: false, route: '/dashboard' },
          {
            label: 'Log Out',
            icon: 'power_settings_new',
            disabled: false,
            route: '/logOut',
          },
        ];
        this.availableActions = ['Access Home', 'Sign In', 'View Help'];
        break;
      default:
        this.userMenu = [];
        this.availableActions = [];
    }
  }

  handleMenuAction(route: string) {
    if (route === '/logOut') {
      this.authService.logout().subscribe({
        next: () => {
          this.swalService.successNotification(
            'You have been logged out successfully'
          );
        },
        error: (err) => {
          console.error('Logout error:', err);
          this.swalService.errorNotification(
            'Logout failed. Please try again.'
          );
        },
      });
    } else {
      this.router.navigate([route]);
    }
  }

  logout() {
    // Clear user session (example)
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to the login page
    this.router.navigate(['/login']);
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e): void {
    this.sidebarRef.close(e);
  }

  // This method will be triggered when user types in the search input
  searchRoutes(event: any) {
    const searchTerm = event.query;
    if (searchTerm) {
      this.searchResults = this.globalSearchInput.getMatchingRoutes(searchTerm);
    } else {
      this.searchResults = [];
    }
  }

  // This method will handle the route navigation when user selects a result from auto-complete
  onSelectRoute(route: any) {
    // Navigate to the selected route
    this.router.navigate([route.route]);
  }

  generateLightColors(count: number): { background: string; text: string }[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      // Generate a light color by ensuring RGB values are closer to white
      const r = Math.floor(Math.random() * 156) + 100; // 100–255
      const g = Math.floor(Math.random() * 156) + 100;
      const b = Math.floor(Math.random() * 156) + 100;
      const backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Determine text color (black for light backgrounds, white for darker ones)
      const textColor =
        r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : '#fff';

      colors.push({ background: backgroundColor, text: textColor });
    }
    return colors;
  }
}
