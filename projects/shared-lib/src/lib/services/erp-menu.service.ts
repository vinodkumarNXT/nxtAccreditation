import { Injectable } from '@angular/core';

// Define available roles
type UserRole = 'MasterAdmin' | 'SuperAdmin' | 'Admin' | 'Vendor';

@Injectable({
  providedIn: 'root',
})
export class ErpMenuService {
  // Mock current user role (can be dynamically set in a real application)
  private currentUserRole: UserRole = 'MasterAdmin'; // Example role; replace with actual user role

  // Check if the user has access based on their role
  private hasRoleAccess(role: UserRole, allowedRoles: UserRole[]): boolean {
    return allowedRoles.includes(role);
  }

  // Check if a feature permission is active for the current user role
  private hasFeaturePermission(
    features: { [key: string]: string },
    permissionType: string
  ): boolean {
    return features[permissionType] === 'active';
  }

  // Define menu items with role-based access control
  getMenuItems(): any[] {
    return [
      {
        label: 'Administration',
        icon: ' pi pi-graduation-cap',
        items: [
          [
            {
              label: 'students',
              icon: ' pi pi-graduation-cap',

              items: [
                {
                  label: 'Enrollment',
                  routerLink: '/enrollment',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/dash-addUser.svg',
                },

                {
                  label: 'Student List',
                  routerLink: '/students-list',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/dash-StudentList.svg',
                },

                {
                  label: 'Student Attendance',
                  routerLink: '/attendance',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/attendance.svg',
                },

                {
                  label: 'Student Assignments',
                  routerLink: '/student-assignment',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/assignment.svg',
                },
              ],
            },
            {
              label: 'Communication',
              icon: ' pi pi-graduation-cap',

              items: [
                {
                  label: 'Notice & Circular',
                  routerLink: '/notice-circular',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/notices-board.svg',
                },

                {
                  label: 'Blog & Post',
                  routerLink: '/blogs-and-posts',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/blog.svg',
                },

                {
                  label: 'School Magazine',
                  routerLink: '/school-magazine',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/magazine.svg',
                },

                {
                  label: 'Academic Calender',
                  routerLink: '/academic-year-calender',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/AcademiCalendar.svg',
                },
              ],
            },
          ],

          [
            {
              label: 'Attendance Management',
              icon: ' pi pi-users',

              items: [
                {
                  label: 'Upload Attendance',
                  routerLink: '/upload-Attendance',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/uploadAttendance.svg',
                },
                {
                  label: 'Attendance Reports',
                  routerLink: '/attendance-reports',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/Attendance_reports.svg',
                },
              ],
            },
            {
              label: 'Certificates',
              icon: ' pi pi-users',

              items: [
                {
                  label: 'Transfer Certificates',
                  routerLink: '/transfer-Certificate',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/certificate.svg',
                },
                {
                  label: 'Study & Conduct',
                  routerLink: '/study-and-conduct',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/merge.svg',
                },
              ],
            },

            {
              label: 'Grievance',
              icon: ' pi pi-users',

              items: [
                {
                  label: 'Complaint',
                  routerLink: '/compliants',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/exclamation-mark.svg',
                },
                {
                  label: 'Reports and Analytics',
                  routerLink: '/reports-And-Analytics',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/report-analysis.png',
                },
              ],
            },
          ],
          [
            {
              label: 'Faculty',
              icon: ' pi pi-users',
              items: [
                {
                  label: 'Faculty List',
                  routerLink: '/employee-list',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/facList.svg',
                },
                {
                  label: 'Staff Enrollment',
                  routerLink: '/staff-enrollment',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/facultyAdd.svg',
                },
                {
                  label: 'Leave',
                  routerLink: '/leave-management',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/leave.svg',
                },
                {
                  label: 'Payroll',
                  routerLink: '/payroll',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/payroll.svg',
                },
              ],
            },

            {
              label: 'Transport',
              icon: 'pi pi-users',
              items: [
                {
                  label: 'Add Routes',
                  routerLink: '/employee-list',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/route.svg',
                },
                {
                  label: 'Add Vehicles', // Corrected "Vehiles" to "Vehicles"
                  routerLink: '/staff-enrollment',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/busAdd.svg',
                },
                {
                  label: 'Vehicle Maintenance', // Corrected "Vehile Maintaince" to "Vehicle Maintenance"
                  routerLink: '/leave-management',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/setting.svg',
                },
                {
                  label: 'Vehicle Logs', // Corrected "Vehile Logs" to "Vehicle Logs"
                  routerLink: '/payrolls',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/add-to.svg',
                },
              ],
            },
          ],

          [
            ,
            {
              label: 'Sports & Events',
              icon: ' pi pi-graduation-cap',

              items: [
                {
                  label: 'Event Add',
                  routerLink: '/event-add',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/eventAdd.svg',
                },
                {
                  label: 'Event Register',
                  routerLink: '/event-register',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/eventRegister.svg',
                },
                {
                  label: 'Grounds',
                  routerLink: '/event-add',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/ground.svg',
                },
              ],
            },
            {
              label: 'Hostel',
              icon: ' pi pi-users',

              items: [
                {
                  label: 'Hostel',
                  routerLink: '/upload-Attendance',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/hostelAdd.svg',
                },
                {
                  label: 'Room Allocation',
                  routerLink: '/room-allocation',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/allocateRoom.svg',
                },

                {
                  label: 'Gate Pass',
                  routerLink: '/attendance-reports',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/gatePass.svg',
                },

                {
                  label: 'Disciplinary Actions',
                  routerLink: '/hostel-discipline',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/disciplinaryAction.svg',
                },

                {
                  label: 'Maintenance Requests',
                  routerLink: '/maintenance-requests',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/hostelSetting.svg',
                },
              ],
            },
          ],
        ],
      },

      {
        label: 'Academics',
        icon: 'pi pi-building-columns',
        items: [
          [
            {
              label: 'Class Management',
              icon: ' pi pi-graduation-cap',

              items: [
                {
                  label: 'Class TimeTable Management',
                  routerLink: '/ClassTimeTableManagement',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/classTimeTable.svg',
                },
                {
                  label: 'Lesson Plan',
                  routerLink: '/CreateLessonPlan',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/planning.svg',
                },
                {
                  label: 'Timetable',
                  routerLink: '/timetable',
                  icon: ' pi pi-angle-right',
                  svgicon: 'assets/megaMenu/time.svg',
                },
              ],
            },
          ],
          [
            {
              label: 'Examinations',
              icon: 'pi pi-book',
              items: [
                {
                  label: 'Exam Schedule',
                  routerLink: '/exam-schedule',
                  icon: 'pi pi-calendar',
                  svgicon: 'assets/megaMenu/exam-announce.svg',
                },
                {
                  label: 'Results',
                  routerLink: '/exam-results',
                  icon: 'pi pi-chart-line',
                  svgicon: 'assets/megaMenu/exam-result.svg',
                },
                {
                  label: 'Hall Tickets',
                  routerLink: '/hall-tickets',
                  icon: 'pi pi-ticket',
                  svgicon: 'assets/megaMenu/hallticket.svg',
                },
                {
                  label: 'Question Paper Upload',
                  routerLink: '/question-paper-upload',
                  icon: 'pi pi-cloud-upload',
                  svgicon: 'assets/megaMenu/questionPaper.svg',
                },
                {
                  label: 'Re-evaluation Requests',
                  routerLink: '/re-evaluation',
                  icon: 'pi pi-refresh',
                  svgicon: 'assets/megaMenu/revalue.svg',
                },
              ],
            },
          ],
          [
            {
              label: 'Library',
              icon: 'pi pi-book',
              items: [
                {
                  label: 'Books Catalog',
                  routerLink: '/books-catalog',
                  icon: 'pi pi-list',
                  svgicon: 'assets/megaMenu/bookCategory.svg',
                },
                {
                  label: 'Borrowed Books',
                  routerLink: '/borrowed-books',
                  icon: 'pi pi-bookmark',
                  svgicon: 'assets/megaMenu/bookExchange.svg',
                },
                {
                  label: 'Book Requests',
                  routerLink: '/book-requests',
                  icon: 'pi pi-send',
                  svgicon: 'assets/megaMenu/bookRequest.svg',
                },
                {
                  label: 'Library Fines',
                  routerLink: '/library-fines',
                  icon: 'pi pi-wallet',
                  svgicon: 'assets/megaMenu/fine.svg',
                },
              ],
            },
          ],

          [
            {
              label: 'LMS',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Online Courses',
                  routerLink: '/online-courses',
                  icon: 'pi pi-video',
                  svgicon: 'assets/megaMenu/lms-online.svg',
                },
                {
                  label: 'Assignments',
                  routerLink: '/assignments',
                  icon: 'pi pi-pencil',
                  svgicon: 'assets/megaMenu/lms-assignment.svg',
                },
                {
                  label: 'Grades',
                  routerLink: '/grades',
                  icon: 'pi pi-chart-line',
                  svgicon: 'assets/megaMenu/lms-grade.svg',
                },
              ],
            },
          ],
        ],
      },

      {
        label: 'Finance',
        icon: 'pi pi-money-bill',
        items: [
          [
            {
              label: 'Students',
              icon: 'pi pi-graduation-cap',
              items: [
                {
                  label: 'Academic',
                  routerLink: '/academic-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/payment.svg',
                },
                {
                  label: 'Hostel',
                  routerLink: '/hostel-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/hostel.svg',
                },
                {
                  label: 'Transport',
                  routerLink: '/transport-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/bus.svg',
                },
                {
                  label: 'Library',
                  routerLink: '/library-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/library.svg',
                },
                {
                  label: 'Examination',
                  routerLink: '/examination-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/exam-fee.svg',
                },
              ],
            },
          ],
          [
            {
              label: 'Staff',
              icon: 'pi pi-users',
              items: [
                {
                  label: 'Salary Payments',
                  routerLink: '/salary-payments',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/salary.svg',
                },
                {
                  label: 'Provident Fund',
                  routerLink: '/provident-fund',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/pf.svg',
                },
                {
                  label: 'Tax Deductions',
                  routerLink: '/tax-deductions',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/taxes.svg',
                },
              ],
            },
          ],
          [
            {
              label: 'School Infrastructure',
              icon: 'pi pi-building',
              items: [
                {
                  label: 'Maintenance Costs',
                  routerLink: '/maintenance-costs',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/maintenance.svg',
                },
                {
                  label: 'Utility Bills',
                  routerLink: '/utility-bills',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/utility.svg',
                },
              ],
            },
          ],
        ],
      },

      {
        label: 'Setting',
        icon: 'pi pi-cog',
        items: [
          [
            {
              label: 'Infrastructure',
              icon: 'pi pi-graduation-cap',
              items: [
                {
                  label: 'Builings',
                  routerLink: '/academic-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/academicBlock.svg',
                },
                {
                  label: 'Floors',
                  routerLink: '/hostel-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/floor.svg',
                },
                {
                  label: 'Rooms',
                  routerLink: '/transport-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/schoolRoom.svg',
                },
                {
                  label: 'class rooms',
                  routerLink: '/library-fees',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/classRoom.svg',
                },
              ],
            },
          ],
          [
            {
              label: 'Staff',
              icon: 'pi pi-cog', // PrimeNG settings/configuration icon
              items: [
                {
                  label: 'Add Designation',
                  routerLink: '/add-designation',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/library.svg',
                },
                {
                  label: 'Department Management',
                  routerLink: '/department-management',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/library.svg',
                },
                {
                  label: 'Staff Roles',
                  routerLink: '/staff-roles',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/library.svg',
                },
                {
                  label: 'Employment Types',
                  routerLink: '/employment-types',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/library.svg',
                },
                {
                  label: 'Shift Management',
                  routerLink: '/shift-management',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/library.svg',
                },
                {
                  label: 'Leave Policies',
                  routerLink: '/leave-policies',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/library.svg',
                },
              ],
            },
          ],
          [
            {
              label: 'Activity Logs',
              icon: 'pi pi-history', // PrimeNG history icon
              items: [
                {
                  label: 'Staff  History',
                  routerLink: '/staff-login-history',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/stdLog.svg',
                },
                {
                  label: 'Student  History',
                  routerLink: '/user-login-history',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/staffLog.svg',
                },
                {
                  label: 'Activity Logs',
                  routerLink: '/activity-logs',
                  icon: 'pi pi-angle-right',
                  svgicon: 'assets/megaMenu/activityLog.svg',
                },
              ],
            },
          ],
        ],
      },
    ];
  }

  // Check specific feature permission for a given item and role
  getFeaturePermission(item: any, permissionType: string): boolean {
    const feature = item.permissions.features[0]; // Assuming single feature permission set per item
    return this.hasFeaturePermission(feature, permissionType);
  }
}

// // Filter menu items based on role and permissions
// return menuItems
//   .filter(
//     (item) =>
//       this.hasRoleAccess(
//         this.currentUserRole,
//         item.permissions.allowedRoles
//       ) &&
//       item.module === 'active' &&
//       item.permissions.page === 'active'
//   )
//   .map((item) => ({
//     ...item,
//     subMenu:
//       item.subMenu?.filter(
//         (sub) =>
//           this.hasRoleAccess(
//             this.currentUserRole,
//             sub.permissions.allowedRoles
//           ) && sub.permissions.page === 'active'
//       ) || [],
//   }));
