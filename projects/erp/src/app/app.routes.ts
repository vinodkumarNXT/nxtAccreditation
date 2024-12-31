import { Routes } from '@angular/router';
import { BranchComponent,  LanguagesComponent, SmsComponent, HolidayComponent, ShiftMasterComponent, MailSettingComponent, ErpAppAdminComponent, BuildingComponent, GroundComponent, FloorComponent, RoomComponent, ClassRoomsComponent, StudentEnrollmentComponent, StaffEnrollmentComponent, RegistrationListComponent, TodayThoughtComponent, SchloarshipTypeComponent, AcknowledgmentComponent, StudentBulkUploadComponent, EmployeesComponent, RoleGuard, ErpMasterAdminLoginComponent, EventTypesComponent, EventRegisterComponent, ClassTimeTableComponent, StdSchloarshipsComponent, StudentListComponent, ClassRoomsAddComponent, ClassTimeTableAddComponent, SubjectsComponent, LessionplanComponent, SchoolNotfoundComponent, BlogPostComponent, NoticeCircularComponent } from 'school-erp-public';
import { AuthGuard, ErpDashboardComponent, ErpLoginComponent, FeatureMasterComponent, RoleMasterComponent, RolePermissionComponent } from 'shared-lib';

export const routes: Routes = [
  { path: 'login', component: ErpLoginComponent, data: { title: 'Login' } },

  {
    path: 'erp-eduSchoolMaster-login',
    component: ErpMasterAdminLoginComponent,
    canActivate: [RoleGuard],
    data: { role: 'school-masterAdmin' }
  },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [



      { path: '', component: ErpDashboardComponent, data: { title: 'Dashboard', breadcrumb: 'Dashboard' } },
      { path: 'add-branch', component: BranchComponent, data: { title: 'Branch', breadcrumb: 'Branch' } },
      { path: 'add-domain', component: ErpAppAdminComponent, data: { title: 'Mail Setting', breadcrumb: 'Mail Setting' } },
      { path: 'add-holiday', component: HolidayComponent, data: { title: 'Holiday', breadcrumb: 'Holiday' } },
      { path: 'add-languages', component: LanguagesComponent, data: { title: 'Languages', breadcrumb: 'Languages' } },
      { path: 'add-sms', component: SmsComponent, data: { title: 'SMS', breadcrumb: 'SMS' } },
      { path: 'dashboard', component: ErpDashboardComponent, data: { title: 'Dashboard', breadcrumb: 'Dashboard' } },
      { path: 'mail-setting', component: MailSettingComponent, data: { title: 'Mail Setting', breadcrumb: 'Mail Setting' } },
      { path: 'role-master', component: RoleMasterComponent, data: { title: 'Role Master', breadcrumb: 'Role Master' } },
      { path: 'role-feature', component: FeatureMasterComponent, data: { title: 'Feature Masters', breadcrumb: 'Feature Masters' } },
      { path: 'role-permissions', component: RolePermissionComponent, data: { title: 'Role Permissions', breadcrumb: 'Role Permissions' } },
      { path: 'shift-master', component: ShiftMasterComponent, data: { title: 'Shift Master', breadcrumb: 'Shift Master' } },
      { path: 'add-building', component: BuildingComponent, data: { title: 'Building', breadcrumb: 'Building' } },
      { path: 'add-floor', component: FloorComponent, data: { title: 'Floor', breadcrumb: 'Floor' } },
      { path: 'add-room', component: RoomComponent, data: { title: 'Rooms', breadcrumb: 'Rooms' } },
      { path: 'add-classRoom', component: ClassRoomsComponent, data: { title: 'ClassRoom', breadcrumb: 'ClassRoom' } },
      { path: 'add-schloarshipTypes', component: SchloarshipTypeComponent, data: { title: 'Schloarship Types', breadcrumb: 'Schloarship Types' } },
      { path: 'add-student-schloarships', component: StdSchloarshipsComponent, data: { title: 'Student Schloarships', breadcrumb: 'Student Schloarships' } },
      { path: 'enrollment', component: StudentEnrollmentComponent, data: { title: 'Enrollment', breadcrumb: 'Enrollment' } },
      { path: 'acknowledgment', component: AcknowledgmentComponent, data: { title: 'Acknowledgment', breadcrumb: 'Acknowledgment' } },
      { path: 'students-list', component: StudentListComponent, data: { title: 'Students', breadcrumb: 'Students' } },
      { path: 'add-bulk-EnrollStudent', component: StudentBulkUploadComponent, data: { title: 'Bulk Upload Students', breadcrumb: 'Bulk Upload Students' } },
      { path: 'registration-list', component: RegistrationListComponent, data: { title: 'Enrollment List', breadcrumb: 'Enrollment List' } },
      { path: 'staff-enrollment', component: StaffEnrollmentComponent, data: { title: 'Staff Enrollment', breadcrumb: 'Staff Enrollment' } },
      { path: 'add-todayTought', component: TodayThoughtComponent, data: { title: 'ClassRoom', breadcrumb: 'ClassRoom' } },
      { path: 'employee-list', component: EmployeesComponent, data: { title: 'Employees', breadcrumb: 'Employees' } },
      { path: 'grounds', component: GroundComponent, data: { title: 'Grounds', breadcrumb: 'Grounds' } },
      { path: 'event-add', component: EventTypesComponent, data: { title: 'Event-type', breadcrumb: 'Event-type' } },
      { path: 'event-register', component: EventRegisterComponent, data: { title: 'Event-Register', breadcrumb: 'Event-Register' } },
      { path: 'class-time-tables', component: ClassTimeTableComponent, data: { title: 'Class-Time-Table', breadcrumb: 'Class-Time-Table' } },
      { path: 'class-time-table-add', component: ClassTimeTableAddComponent, data: { title: 'Add-Class-Time-Table', breadcrumb: 'Add-Class-Time-Table' } },

      { path: 'subjects', component: SubjectsComponent, data: { title: 'Subjects', breadcrumb: 'Subjects' } },

      { path: 'not-found', component: SchoolNotfoundComponent, data: { title: 'Lesson-Plan', breadcrumb: 'Lesson-Plan' } },


      { path: 'lesson-plan', component: LessionplanComponent, data: { title: 'Lesson-Plan', breadcrumb: 'Lesson-Plan' } },
      { path: 'blog-post', component: BlogPostComponent, data: { title: 'blog-post', breadcrumb: 'blog-post' } },
      
      { path: 'notice-circular', component: NoticeCircularComponent, data: { title: 'notice-circular', breadcrumb: 'notice-circular' } },

        {
          path: 'dashboard', component: ErpDashboardComponent, data: { breadcrumb: 'Dashboard' },
          children: [
            { path: 'students-list', component: StudentListComponent, data: { breadcrumb: 'Students List' },
              children: [
                { path: 'student-details', component: StudentListComponent, data: { breadcrumb: 'Student Details' } }
              ]
            }
          ]
        },
      
      { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
    ],
  }
  
  
  
];
