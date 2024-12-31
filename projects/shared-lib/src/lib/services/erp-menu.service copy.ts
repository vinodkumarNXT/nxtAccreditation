import { Injectable } from "@angular/core";
import { MenuItem } from "school-erp-public";

@Injectable({
  providedIn: "root",
})
export class ErpMenuService {
  getMenuItems(): MenuItem[] {
    return [
      {
        label: "Dashboard",
        icon: "home",
        route: "/dashboard",
      },
      {
        label: "Student Enrollment & Admission",
        icon: "widgets",
        route: "",
        subMenu: [
          
          {
            label: "Enrollments",
            icon: "minimize",
            route: "/enrollment",
          },

          {
            label: "Student List",
            icon: "minimize",
            route: "/students-list",
          },

          {
            label: "Bulk Upload Students",
            icon: "minimize",
            route: "/add-bulk-EnrollStudent",
          },

          {
            label: "Student Transfers",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Transfer IN",
                icon: "minimize",
                route: "/student-transferIN",
              },
              {
                label: "Transfer OUT",
                icon: "minimize",
                route: "/student-transferOUT",
              },
            ],
          },

          {
            label: "General Master Settings",
            icon: "expand_more",
            route: "",
            subMenu: [

              {
                label: "Add Branch",
                icon: "minimize",
                route: "/add-branch",
              },
              {
                label: "Add Caste",
                icon: "minimize",
                route: "/add-caste",
              },
              {
                label: "Add Languages",
                icon: "minimize",
                route: "/add-languages",
              },
              {
                label: "SMS",
                icon: "minimize",
                route: "/add-sms",
              },
              {
                label: "Mail Setting",
                icon: "minimize",
                route: "/mail-setting",
              },
              {
                label: "Add Status Types",
                icon: "minimize",
                route: "/add-status-types",
              },
              {
                label: "Add Reservation Category",
                icon: "minimize",
                route: "/add-reservation-category", // Adjusted route for uniqueness
              },
              {
                label: "Add Relations Category",
                icon: "minimize",
                route: "/add-relations-category",
              },
              {
                label: "Add Document Type",
                icon: "minimize",
                route: "/add-document-type", // Adjusted for uniqueness
              },
              {
                label: "Add Mother Tongue",
                icon: "minimize",
                route: "/add-mother-tongue", // Adjusted route for uniqueness
              },
              {
                label: "Add Seat Type",
                icon: "minimize",
                route: "/add-seat-types",
              },
              {
                label: "Add Student Type",
                icon: "minimize",
                route: "/add-student-types", // Adjusted for uniqueness
              },
              {
                label: "Add Bank",
                icon: "minimize",
                route: "/add-bank",
              },
              {
                label: "Add Intake Admission",
                icon: "minimize",
                route: "/add-intake-admission", // Adjusted route for uniqueness
              },
              {
                label: "Entrance Exam",
                icon: "minimize",
                route: "/add-entrance-exam", // Adjusted for uniqueness
              },
            ],
          },
        ],
      },
     
      {
        label: "Student Attendance",
        icon: "assignment_ind",
        subMenu: [
          {
            label: "Mark Daily Attendance",
            icon: "minimize",
            route: "/mark-daily-attendance",
          },
          {
            label: "Subject-wise Attendance",
            icon: "minimize",
            route: "/sub-wise-attendance",
          },
          {
            label: "Student Leaves Manage",
            icon: "minimize",
            route: "/std-leave-manage",
          },
          {
            label: "Overall Attendance",
            icon: "minimize",
            route: "/overall-attendance", // Adjusted route for uniqueness
          },
        ],
      },
      {
        label: "Academic Promotion",
        icon: "perm_identity",
        subMenu: [
          {
            label: "Individual Promotion",
            icon: "minimize",
            route: "/individual-promotion",
          },
          {
            label: "Bulk Promotion",
            icon: "minimize",
            route: "/bulk-promotion", // Adjusted route for uniqueness
          },
          {
            label: "Change Section",
            icon: "minimize",
            route: "/change-section", // Fixed extra space
          },
        ],
      },
      {
        label: "Student Warnings",
        icon: "warning",
        subMenu: [
          {
            label: "Send Warning",
            icon: "minimize",
            route: "/send-warning", // Adjusted route for uniqueness
          },
          {
            label: "Warning Master Settings",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Warning",
                icon: "minimize",
                route: "/add-warning", // Adjusted route for uniqueness
              },
            ],
          },
        ],
      },
      {
        label: "Scholarship Summary",
        icon: "card_giftcard",
        subMenu: [
          {
            label: "Scholarships",
            icon: "minimize",
            route: "/add-student-schloarships", // Corrected spelling
          },
          {
            label: "Scholarship Master Settings",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Scholarship Provider",
                icon: "minimize",
                route: "/add-schloarshipTypes",
              },
            ],
          },
        ],
      },
      {
        label: "Reports & Managements",
        icon: "pie_chart",
        subMenu: [
          {
            label: "Faculty Reports",
            icon: "minimize",
            route: "/faculty-reports",
          },
          {
            label: "Student Reports",
            icon: "minimize",
            route: "/std-reports",
          },
          {
            label: "Faculty Attendance",
            icon: "minimize",
            route: "/faculty-attendance",
          },
          {
            label: "Student Attendance",
            icon: "minimize",
            route: "/std-attendance",
          },
          {
            label: "Exam Results",
            icon: "minimize",
            route: "/exam-results",
          },
        ],
      },
      {
        label: "Fees",
        icon: "money",
        subMenu: [
          {
            label: "Student Fee",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Fee Dues",
                icon: "minimize",
                route: "/std-fee-due",
              },
              {
                label: "Receipt Generation",
                icon: "minimize",
                route: "/std-receipt-generation",
              },
              {
                label: "Fee Reports",
                icon: "minimize",
                route: "/std-fee-reports",
              },
            ],
          },
          {
            label: "Staff Fee",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Fee Dues",
                icon: "minimize",
                route: "/staff-fee-due",
              },
              {
                label: "Fee Registers",
                icon: "minimize",
                route: "/staff-receipt-generation",
              }
            ],
          },
        ],
      },

      {
        label: "Human Resource",
        icon: "spa",

        
        subMenu: [

          {
            label: "Employee List",
            icon: "minimize",
            route: "/employee-list"
          },

          {
            label: "Employee Attendance",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Mark Attendance",
                icon: "minimize",
                route: "/mark-attendance",
              },
              {
                label: "Attendance Processs",
                icon: "minimize",
                route: "/attendance-processs",
              },
              {
                label: "Staff Attendance Logs ",
                icon: "minimize",
                route: "/staff-attendance-logs",
              },

              {
                label: "Monthly Attendance Report",
                icon: "minimize",
                route: "/monthly-attendance-reports",
              },

              {
                label: "Attendance Rules",
                icon: "minimize",
                route: "/attendance-rules",
              },
            ],
          },
          {
            label: "Send Employee Note",
            icon: "minimize",
            route: "/sendEmployee-note"
          },

          {
            label: "Payroll",
            icon: "minimize",
            route: "/payroll"
          },
          {
            label: "Payroll Report",
            icon: "minimize",
            route: "/payroll-report"
          },

          {
            label: "Employee  Leaves",
            icon: "minimize",
            route: "/payroll-report"
          },

          {
            label: "Apply  Leave",
            icon: "minimize",
            route: "/apply-leave"
          },

          {
            label: "Add Leaves To Employee",
            icon: "minimize",
            route: "/add-leavesTo-emp"
          },

          {
            label: "Self Leave Report",
            icon: "minimize",
            route: "/selfLeave-report"
          },

          {
            label: "Consolidated Leave Report",
            icon: "minimize",
            route: "/consolidated-leaveReport"
          },

          {
            label: "Leave Report History",
            icon: "minimize",
            route: "/leaveReport-history"
          },
          {
            label: "HR Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [

              {
                label: "Employee",
                icon: "minimize",
                route: "/employee-list",
              },

              {
                label: "Shift Master",
                icon: "minimize",
                route: "/shift-master",
              },
              {
                label: "Add Leave Type",
                icon: "minimize",
                route: "/addLeave-type",
              },
              {
                label: "Add Work Shift Type",
                icon: "minimize",
                route: "/addWork-ShiftType",
              },
              {
                label: "Add Destinations",
                icon: "minimize",
                route: "/add-destinations",
              },
              {
                label: "Add Holiday",
                icon: "minimize",
                route: "/add-holiday",
              },
              {
                label: "Add Department",
                icon: "minimize",
                route: "/add-department",
              },
              {
                label: "Create Tax Slabs",
                icon: "minimize",
                route: "/add-taxSlabs",
              },
              {
                label: "Create Tax Slabs",
                icon: "minimize",
                route: "/add-taxSlabs",
              },
              {
                label: "Create Payslip Template",
                icon: "minimize",
                route: "/add-payslipTemplate",
              },
              {
                label: "Create ID Card Template",
                icon: "minimize",
                route: "/add-IDCardTemplate",
              }
            ],
          },
        ],
      },


      {
        label: "Inventory",
        icon: "store",

        
        subMenu: [
          {
            label: "Item Stock List",
            icon: "minimize",
            route: "/invStockItem-list"
          },
          {
            label: "Issue Item / Tracking",
            icon: "minimize",
            route: "/invIssueTracking"
          },
          {
            label: "HR Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Item Category",
                icon: "minimize",
                route: "/addItem-category",
              },
              {
                label: "Add Supplier Detials",
                icon: "minimize",
                route: "/addSupplier-details",
              },
              {
                label: "Add Store Detials",
                icon: "minimize",
                route: "/addStore-details",
              },

              {
                label: "Add Inventory Items",
                icon: "minimize",
                route: "/addInventory-Items",
              },
             
            ],
          },
        ],
      },

      {
        label: "Receiption",
        icon: "leak_add",

        
        subMenu: [
          {
            label: "Phone Logs",
            icon: "minimize",
            route: "/resPhone-logs"
          },
          {
            label: "Enquiry",
            icon: "minimize",
            route: "/res-enquiry"
          },
          {
            label: "Compliants Corners",
            icon: "minimize",
            route: "/res-complaintCorner"
          },
          {
            label: "Schedule Appointment ",
            icon: "minimize",
            route: "/res-scheduleAppointment"
          },
          {
            label: "Receiption Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Visit Purpose",
                icon: "minimize",
                route: "/addVisit-purpose",
              },
              {
                label: "Create Visitor Template",
                icon: "minimize",
                route: "/addvisitor-template",
              },
              {
                label: "Add Enquiry Source",
                icon: "minimize",
                route: "/addEnquiry-source",
              },
              {
                label: "Add Enquiry Refrence",
                icon: "minimize",
                route: "/addEnquiry-refrence",
              },
              {
                label: "Add Complaint Type",
                icon: "minimize",
                route: "/addComplaint-type",
              },
              {
                label: "Add Postal Types",
                icon: "minimize",
                route: "/addPostal-types",
              },{
                label: "Add Meeting Types",
                icon: "minimize",
                route: "/addMeeting-types",
              },
             
            ],
          },
        ],
      },


      {
        label: "Log Management",
        icon: "flare",
        
        subMenu: [
          {
            label: "Activity Logs",
            icon: "minimize",
            route: "/logActivity"
          },
          {
            label: "Session Activity Logs",
            icon: "minimize",
            route: "/sessionLogActivityLog"
          },
         
        ],
      },


      {
        label: "School Academics",
        icon: "gamepad",
        
        subMenu: [
          {
            label: "List Of Subjects",
            icon: "minimize",
            route: "/listOfSubjects"
          },
          {
            label: "Academic Calender",
            icon: "minimize",
            route: "/academic-calender"
          },
          {
            label: "Time Tables",
            icon: "minimize",
            route: "/timeTables"
          },

          {
            label: "Swap Time Table",
            icon: "minimize",
            route: "/swapTimeTable"
          },

          {
            label: "Faculty Availblity",
            icon: "minimize",
            route: "/facultyAvailblity"
          },

          {
            label: "Faculty Workload",
            icon: "minimize",
            route: "/facultyWorkload"
          }, 
          
          {
            label: "Faculty Time Tables",
            icon: "minimize",
            route: "/facultyTimeTables"
          },

          {
            label: "Academics Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Program",
                icon: "minimize",
                route: "/addAcademic-program",
              },
              {
                label: "Add Batch",
                icon: "minimize",
                route: "/addAcademic-batch",
              },
              {
                label: "Add Acedemic Year",
                icon: "minimize",
                route: "/addAcademic-year",
              },

              {
                label: "Add Sections",
                icon: "minimize",
                route: "/addAcademic-sections",
              },


              {
                label: "Add Class Rooms",
                icon: "minimize",
                route: "/addAcademic-classRooms",
              },

              {
                label: "Add Year",
                icon: "minimize",
                route: "/addAcademic-yearBooks",
              },

              {
                label: "Add Academic  Calender Cateogory",
                icon: "minimize",
                route: "/addAcademic-calenderCateogory",
              },

              {
                label: "Create Class Time Table Template",
                icon: "minimize",
                route: "/createClass-TimeTable",
              },

              {
                label: "Create Exam Time Table Template",
                icon: "minimize",
                route: "/createExam-TimeTable",
              },
              
             
            ],
          },
         
        ],
      },


      {
        label: "Faculty Lesson Plan",
        icon: "supervisor_account",
        
        subMenu: [
          {
            label: "Add Chapter",
            icon: "minimize",
            route: "/addChapter"
          },
          {
            label: "Add Topic",
            icon: "minimize",
            route: "/addTopic"
          },
         
        ],
      },


      {
        label: "Examination",
        icon: "markunread_mailbox",
        
        subMenu: [
          {
            label: "Exam Time Table",
            icon: "minimize",
            route: "/examTimeTable"
          },
          {
            label: " Exam Attendance",
            icon: "minimize",
            route: "/examAttendance"
          },

          {
            label: "Marks Ledger",
            icon: "minimize",
            route: "/marksLedger"
          },

          {
            label: "Subject Wise Result Report",
            icon: "minimize",
            route: "/subjectWiseResultReport"
          },


          {
            label: "Consolidated Result Report",
            icon: "minimize",
            route: "/consolidatedResultReport"
          },

          {
            label: "Examination Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Create Grade System",
                icon: "minimize",
                route: "/addGrade-system",
              },
              {
                label: "Create Exam Types",
                icon: "minimize",
                route: "/addExam-types",
              },
              {
                label: "Create Hall Ticket Template",
                icon: "minimize",
                route: "/addHallTicket-template",
              },
              {
                label: "Create Marks Weightage",
                icon: "minimize",
                route: "/addMarks-weightage",
              },
              {
                label: "Create Marks Template",
                icon: "minimize",
                route: "/addMarks-Template",
              },
              {
                label: "Create Sheet Template",
                icon: "minimize",
                route: "/addSheet-template",
              },
             
            ],
          },
         
        ],
      },



      {
        label: "Assignment / Study & Material",
        icon: "note",
        
        subMenu: [
          {
            label: "Create Assignment",
            icon: "minimize",
            route: "/examTimeTable"
          },
         

          {
            label: "Study Material",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Study Material Category",
                icon: "minimize",
                route: "/addStudyMaterial-category",
              },
              {
                label: "Upload Material Category",
                icon: "minimize",
                route: "/uploadMaterial-category",
              },
             
             
            ],
          },
         
        ],
      },

      {
        label: "Library",
        icon: "library_books",
        
        subMenu: [


          {
            label: "Library Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add New Titles",
                icon: "minimize",
                route: "/libAdd-newTitles",
              },
              {
                label: "Add New Subects",
                icon: "minimize",
                route: "/libAdd-newSubjects",
              },
              {
                label: "Add Book Categories",
                icon: "minimize",
                route: "/libAdd-newBookCategories",
              },


              {
                label: "Max Book Issues and Dates",
                icon: "minimize",
                route: "/lib-maxBook-issues",
              },
             

              {
                label: "Create ID Card Template",
                icon: "minimize",
                route: "/libAdd-IDCard-template",
              },
             
            ],
          },
         
        ],
      },



      {
        label: "Transport",
        icon: "commute",
        
        subMenu: [

          {
            label: "Transport Facility Users",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Student Users",
                icon: "minimize",
                route: "/transport-stdUsers",
              },
              {
                label: "Student Allocations",
                icon: "minimize",
                route: "/transport-stdAllocations",
              },

              {
                label: "Facility Users",
                icon: "minimize",
                route: "/transport-facilityUsers",
              },

              {
                label: "Staff Allocation",
                icon: "minimize",
                route: "/transport-staffAllocation",
              },
             
             
            ],

            
          },

          {
            label: "Driver Details",
            icon: "minimize",
            route: "/transport-driverDetails",
          },

          {
            label: "Assign Driver Details",
            icon: "minimize",
            route: "/transport-AssignDriverDetails",
          },
         

          {
            label: "Transport Reports",
            icon: "minimize",
            route: "/transport-AssignDriverDetails",
          },

          {
            label: "Vehile  Maintainance",
            icon: "minimize",
            route: "/transport-AssignDriverDetails",
          },


          {
            label: "Transport Fee Report",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Student Fee Out Standing",
                icon: "minimize",
                route: "/transport-stdFeeOut-Standing",
              },
              {
                label: "Staff Fee Out Standing",
                icon: "minimize",
                route: "/transport-staffOut-Standing-fee",
              },
             
             
            ],

            
          },



          {
            label: "Transport Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Route",
                icon: "minimize",
                route: "/transport-addRoute",
              },
              {
                label: "Add Vehile",
                icon: "minimize",
                route: "/transport-addVehile",
              },

              {
                label: "Create Vehile  Log Books",
                icon: "minimize",
                route: "/transport-vehileLogBooks",
              },

              {
                label: "Add Vehile   Maintainance Category",
                icon: "minimize",
                route: "/transport-AddVehile-MaintainanceCategory",
              },
             
            ],

            
          },
        ],
      },



      {
        label: "Hostel",
        icon: "home",
        
        subMenu: [

          {
            label: "Attendance",
            icon: "minimize",
            route: "/hostel-Attendance",
          },


          
          {
            label: "Student Allocation",
            icon: "minimize",
            route: "/hostel-StdAllocation",
          },

          {
            label: "Occupancy List",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Student List",
                icon: "minimize",
                route: "/hostel-student-list",
              }
            ],
          },

          {
            label: "Gate Pass",
            icon: "minimize",
            route: "/hostel-gatePass",
          },

          {
            label: "Fee Report",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Student Fee Out Standing",
                icon: "minimize",
                route: "/hostel-StudentFee-OutStanding",
              },
              {
                label: "Staff Fee Out Standing",
                icon: "minimize",
                route: "/hostel-StaffFee-OutStanding",
              },
             
            ],
          },

          {
            label: "Hostel Master Setting",
            icon: "expand_more",
            route: "",
            subMenu: [
              {
                label: "Add Room Types",
                icon: "minimize",
                route: "/addroomTypes-hostel",
              },
              {
                label: "Add Hostel Names",
                icon: "minimize",
                route: "/addNames-hostel",
              },

              {
                label: "Add Rooms Names",
                icon: "minimize",
                route: "/addRooms-hostel",
              },
             
            ],

            
          },
        ],
      },


      {
        label: "Visitors Mangement",
        icon: "markunread_mailbox",
        
        subMenu: [
          {
            label: "Visitors Logs",
            icon: "minimize",
            route: "/visitorsLogs"
          },
          {
            label: "Postal Exchange",
            icon: "minimize",
            route: "/postalExchange"
          },
        ],
      },

      {
        label: "E-Test/Content",
        icon: "chrome_reader_mode",
        
        subMenu: [
          {
            label: "View",
            icon: "minimize",
            route: "/viewContent"
          },
          {
            label: "QuestionBank",
            icon: "minimize",
            route: "/QuestionBank"
          },
        ],
      },
      {
        label: "Roles and Permission",
        icon: "build",
        subMenu: [
          {
            label: "Role Master",
            icon: "minimize",
            route: "/role-master",
          },
          {
            label: "Feature Master",
            icon: "minimize",
            route: "/feature-master",
          },
          {
            label: "Role & Permissions",
            icon: "minimize",
            route: "/role-permission",
          },
        ],
      },

      {
        label: "infra",
        icon: "build",
        subMenu: [
          {
            label: "Builing",
            icon: "minimize",
            route: "/add-building",
          },

          {
            label: "Floors",
            icon: "minimize",
            route: "/add-floor",
          },

          {
            label: "Rooms",
            icon: "minimize",
            route: "/add-room",
          },
          {
            label: "Grounds",
            icon: "minimize",
            route: "/add-ground",
          },

          {
            label: "Grounds",
            icon: "minimize",
            route: "/add-classRoom",
          },
          {
            label: "Role & Permissions",
            icon: "minimize",
            route: "/role-permission",
          },
        ],
      },

    ];
  }
}
