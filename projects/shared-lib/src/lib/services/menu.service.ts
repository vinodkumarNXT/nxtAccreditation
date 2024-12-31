// src/app/menu.service.ts
import { Injectable } from '@angular/core';
import { MenuItem } from 'shared-lib'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuItems(): MenuItem[] {
    return [
      

      {
       "label": "Dashboard",
        "icon": "home",
        "route": "/dashboard"
        
      },
      {
        "label": "Curricular Aspects",
        "icon": "widgets",
        "route": "",
        "subMenu": [
          {
            "label": "Design and Development",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Curricular Developed",
                "icon": "minimize",
                "route": "/curricular-developed"
              },
              {
                "label": "Percentage of Programmes",
                "icon": "minimize",
                "route": "/percentage-programmes"
              },
              {
                "label": "Average Percentage",
                "icon": "minimize",
                "route": "/average-percentage"
              }
            ]
          },
          {
            "label": "Academic Flexibility",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Percentage of New Courses",
                "icon": "minimize",
                "route": "/percentageCourses"
              },
              {
                "label": "CBCS",
                "icon": "minimize",
                "route": "/cbcs"
              }
            ]
          },
          {
            "label": "Curriculum Enrichment",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Institution Integrates",
                "icon": "minimize",
                "route": "/institution-integrates"
              },
              {
                "label": "Transferable and Life Skills",
                "icon": "minimize",
                "route": "/transferable-lifeSkills"
              },
              {
                "label": "Students Enrolled",
                "icon": "minimize",
                "route": "/students-enrolled"
              },
              {
                "label": "Undertaking Field Projects",
                "icon": "minimize",
                "route": "/UndertakingFieldProjects"
              }
            ]
          },
          {
            "label": "Feedback System",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Design and Review",
                "icon": "minimize",
                "route": "/design-review"
              },
              {
                "label": "Feedback Processes",
                "icon": "minimize",
                "route": "/feedback-process"
              }
            ]
          }
        ]
      },
      {
        "label": "Teaching-Learning and Evaluation",
        "icon": "school",
        "route": "",
        "subMenu": [
          {
            "label": "Student Enrolment and Profile",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Demand Ratio",
                "icon": "minimize",
                "route": "/demand-ratio"
              },
              {
                "label": "Reserved Categories",
                "icon": "minimize",
                "route": "/reserved-category"
              }
            ]
          },
          {
            "label": "Catering to Student Diversity",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Special Programmes",
                "icon": "minimize",
                "route": "/special-program"
              },
              {
                "label": "Full Time Teacher Ratio",
                "icon": "minimize",
                "route": "/full-time-teacher-ratio"
              }
            ]
          },
          {
            "label": "Teaching - Learning Process",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Experiential Learning",
                "icon": "minimize",
                "route": "/experimental-Learning"
              },
              {
                "label": "Learning Processes",
                "icon": "minimize",
                "route": "/learning-processes"
              },
              {
                "label": "Ratio of Students to Mentor",
                "icon": "minimize",
                "route": "/student-mentorRatio"
              }
            ]
          },
          {
            "label": "Teacher Profile and Quality",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Full Time Teachers",
                "icon": "minimize",
                "route": "/full-time-teachers"
              },
              {
                "label": "Teachers with Ph.D",
                "icon": "minimize",
                "route": "/phd-teachers"
              },
              {
                "label": "Teachers Who Received Awards",
                "icon": "minimize",
                "route": "/awarded-teachers"
              }
            ]
          },
          {
            "label": "Evaluation Process and Reforms",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Semester-end/ Year-end",
                "icon": "minimize",
                "route": "/end-semester"
              },

              
              {
                "label": "Student Complaints/Grievances",
                "icon": "minimize",
                "route": "/student-complaints"
              },
              {
                "label": "Integration & Reforms",
                "icon": "minimize",
                "route": "/integration-reforms"
              },
              {
                "label": "Automation of Examination",
                "icon": "minimize",
                "route": "/automation-examination"
              }
            ]
          },
          {
            "label": "Student Performance and Learning",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Learning Outcomes",
                "icon": "minimize",
                "route": "/learning-outcomes"
              },
              {
                "label": "Attainment of Programme Outcomes",
                "icon": "minimize",
                "route": "/program-outcomes"
              },
              {
                "label": "Pass Percentage of Students",
                "icon": "minimize",
                "route": "/student-PassPercentage-survey"
              }
            ]
          },
          {
            "label": "Student Satisfaction Survey",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Teaching Learning Process",
                "icon": "minimize",
                "route": "/teaching-learning-process"
              }
            ]
          }
        ]
      },
      {
        "label": "Research, Innovations and Extension",
        "icon": "search",
        "route": "",
        "subMenu": [
          {
            "label": "Research and Facilities",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Research Facilities",
                "icon": "minimize",
                "route": "/research-facility"
              },
              {
                "label": "Teachers for Research",
                "icon": "minimize",
                "route": "/teacher-research"
              },
              {
                "label": "Fellowship",
                "icon": "minimize",
                "route": "/research-fellowship"
              },
              {
                "label": "Research Fellows",
                "icon": "minimize",
                "route": "/research-fellow"
              },
              {
                "label": "Support Research",
                "icon": "minimize",
                "route": "/support-research"
              },
              {
                "label": "Recognitions",
                "icon": "minimize",
                "route": "/recognition"
              }
            ]
          },
          {
            "label": "Resource Mobilization for Research",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Funding for Research",
                "icon": "minimize",
                "route": "/funding-research"
              },
              {
                "label": "Grants for Research Projects",
                "icon": "minimize",
                "route": "/project-grant"
              },
              {
                "label": "Number of Research Projects",
                "icon": "minimize",
                "route": "/research-projects"
              }
            ]
          },
          {
            "label": "Innovation Ecosystem",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Ecosystem for Innovations",
                "icon": "minimize",
                "route": "/ecosystem-innovations"
              },
              {
                "label": "Seminars Conducted",
                "icon": "minimize",
                "route": "/seminars-conducted"
              },
              {
                "label": "Recognitions Received",
                "icon": "minimize",
                "route": "/recognizations-received"
              }
            ]
          },
          {
            "label": "Research Publications and Awards",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Ethics for Research",
                "icon": "minimize",
                "route": "/ethics-research"
              },
              {
                "label": "Incentives to Teachers",
                "icon": "minimize",
                "route": "/teachers-incentivies"
              },
              {
                "label": "Patents Published",
                "icon": "minimize",
                "route": "/patent-published"
              },
              {
                "label": "Ph.Ds Awarded per Teacher",
                "icon": "minimize",
                "route": "/phds-awarded-teacher"
              },
              {
                "label": "Research Papers per Teacher",
                "icon": "minimize",
                "route": "/teacher-research-papers"
              },
              {
                "label": "Edited Volumes Published",
                "icon": "minimize",
                "route": "/edited-volumes"
              },
              {
                "label": "E-content Developed",
                "icon": "minimize",
                "route": "/teacher-econtent"
              },
              {
                "label": "Bibliometrics",
                "icon": "minimize",
                "route": "/biblio-metrics"
              },
              {
                "label": "Citation Index in Scopus",
                "icon": "minimize",
                "route": "/citation-index-scopus"
              }
            ]
          },
          {
            "label": "Consultancy",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "policy on consultancy",
                "icon": "minimize",
                "route": "/policy-on-consultancy"
              },
              {
                "label": "consultancy revenue",
                "icon": "minimize",
                "route": "/consultancy-revenue"
              }
            ]
          },
          {
            "label": "Extension Activities",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Extension Activities",
                "icon": "minimize",
                "route": "/extension-activity"
              },
              {
                "label": "awards received",
                "icon": "minimize",
                "route": "/awards-received"
              },
              {
                "label": "outreach programs",
                "icon": "minimize",
                "route": "/outreach-program"
              },
              {
                "label": "activity percentage",
                "icon": "minimize",
                "route": "/activity-percentage"
              }
            ]
          },
          {
            "label": "Collaboration",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Collaborative Activities",
                "icon": "minimize",
                "route": "/collaborative-activity"
              },
              {
                "label": "functional MoUs",
                "icon": "minimize",
                "route": "/functional-mous"
              },
              {
                "label": "outreach programs",
                "icon": "minimize",
                "route": "/outreach-program"
              }
            ]
          }
        ]
      },
      {
        "label": "Infrastructure and Learning Resources",
        "icon": "desktop_windows",
        "route": "",
        "subMenu": [
          {
            "label": "Physical Facilities",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Facilities for Teaching-Learning",
                "icon": "minimize",
                "route": "/facilities-teaching-learning"
              },
              {
                "label": "Facilities for Cultural Activities",
                "icon": "minimize",
                "route": "/facilities-cultural"
              },
              {
                "label": "General Campus Facilities",
                "icon": "minimize",
                "route": "/campus-facilities"
              },
              {
                "label": "Infrastructure Expenditure",
                "icon": "minimize",
                "route": "/infrastructure-expenditure"
              }
            ]
          },
          {
            "label": "Library as a Learning Resource",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Automation of the Library",
                "icon": "minimize",
                "route": "/library-automation"
              },
              {
                "label": "Library Resources",
                "icon": "minimize",
                "route": "/library-resources"
              },
              {
                "label": "Library Expenditure",
                "icon": "minimize",
                "route": "/library-expenditure"
              },
              {
                "label": "Library Users",
                "icon": "minimize",
                "route": "/library-users"
              }
            ]
          },
          {
            "label": "IT Infrastructure",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "ICT Facilities",
                "icon": "minimize",
                "route": "/ict-facilities"
              },
              {
                "label": "IT Facilities",
                "icon": "minimize",
                "route": "/it-facilities"
              },
              {
                "label": "Student-Computer Ratio",
                "icon": "minimize",
                "route": "/student-computer-ratio"
              },
              {
                "label": "Internet Bandwidth",
                "icon": "minimize",
                "route": "/internet-bandwidth"
              },
              {
                "label": "Facilities for E-Content",
                "icon": "minimize",
                "route": "/facilities-e-content"
              }
            ]
          },
          {
            "label": "Maintenance of Campus Infrastructure",
            "icon": "build",
            "route": "",
            "subMenu": [
              {
                "label": "Maintenance of Physical Facilities",
                "icon": "minimize",
                "route": "/maintenance-physical-facilities"
              },
              {
                "label": "Systems and Procedures",
                "icon": "minimize",
                "route": "/systems-procedures"
              }
            ]
          }
        ]
      },

      {
        "label": "Student Support and Progression",
        "icon": "support",
        "route": "",
        "subMenu": [
          {
            "label": "Student Support",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Scholarship Schemes",
                "icon": "minimize",
                "route": "/scholarship-schemes"
              },
              {
                "label": "Career Counseling",
                "icon": "minimize",
                "route": "/career-counseling"
              },
              {
                "label": "Capacity Development",
                "icon": "minimize",
                "route": "/capacity-development"
              },
              {
                "label": "Student Grievances",
                "icon": "minimize",
                "route": "/student-grievances"
              }
            ]
          },


          {
            "label": "Student Progression",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Government Examinations",
                "icon": "minimize",
                "route": "/government-examinations"
              },
              {
                "label": "Percentage of Placement",
                "icon": "minimize",
                "route": "/placement-percentage"
              },
              {
                "label": "Graduated Students",
                "icon": "minimize",
                "route": "/graduated-students"
              }
            ]
          },
          {
            "label": "Participation and Activities",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Student Medals",
                "icon": "minimize",
                "route": "/students-medals"
              },
              {
                "label": "Student Council",
                "icon": "minimize",
                "route": "/student-council"
              },
              {
                "label": "Competitions Organised",
                "icon": "minimize",
                "route": "/competitions-organised"
              }
            ]
          },
          {
            "label": "Alumni Engagement",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Alumni Association",
                "icon": "minimize",
                "route": "/alumni-association"
              },
              {
                "label": "Alumni Contribution",
                "icon": "minimize",
                "route": "/alumni-contribution"
              }
            ]
          }
        ]
      },
      {
        "label": "Governance, Leadership and Management",
        "icon": "account_balance",
        "route": "",
        "subMenu": [
          {
            "label": "Vision and Leadership",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Administrative Governance",
                "icon": "minimize",
                "route": "/administrative-governance"
              },
              {
                "label": "Participative Management",
                "icon": "minimize",
                "route": "/participative-management"
              }
            ]
          },
          {
            "label": "Strategy Development and Deployment",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Institutional Strategic Plan",
                "icon": "minimize",
                "route": "/strategic-plan"
              },
              {
                "label": "Institutional Bodies",
                "icon": "minimize",
                "route": "/institutional-bodies"
              },
              {
                "label": "Implements E-Governance",
                "icon": "minimize",
                "route": "/e-governance"
              }
            ]
          },
          {
            "label": "Faculty Empowerment Strategies",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Appraisal System",
                "icon": "minimize",
                "route": "/appraisal-system"
              },
              {
                "label": "Financial Support",
                "icon": "minimize",
                "route": "/financial-support"
              },
              {
                "label": "Training Programmes Organised",
                "icon": "minimize",
                "route": "/training-programmes"
              },
              {
                "label": "Faculty Development Programmes",
                "icon": "minimize",
                "route": "/faculty-development"
              }
            ]
          },
          {
            "label": "Financial Management",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Mobilisation of Funds",
                "icon": "minimize",
                "route": "/fund-mobilisation"
              },
              {
                "label": "Grants Received from Government",
                "icon": "minimize",
                "route": "/government-grants"
              },
              {
                "label": "Grants Received from Non-Government",
                "icon": "minimize",
                "route": "/non-government-grants"
              },
              {
                "label": "Financial Audits",
                "icon": "minimize",
                "route": "/financial-audits"
              }
            ]
          },
          {
            "label": "Internal Quality Assurance System",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Quality Assurance Strategies",
                "icon": "minimize",
                "route": "/quality-strategies"
              },
              {
                "label": "Adopted Quality Assurance",
                "icon": "minimize",
                "route": "/adopted-quality"
              },
              {
                "label": "Incremental Improvements",
                "icon": "minimize",
                "route": "/incremental-improvements"
              }
            ]
          }
        ]
      },
      {
        "label": "Institutional Values and Best Practices",
        "icon": "people",
        "route": "",
        "subMenu": [
          {
            "label": "Values and Social Responsibilities",
            "icon": " expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Promotion of Gender Equity",
                "icon": "minimize",
                "route": "/gender-equity"
              },
              {
                "label": "Alternate Sources of Energy",
                "icon": "minimize",
                "route": "/alternate-energy-source"
              },
              {
                "label": "Degradable and Non-Degradable Waste",
                "icon": "minimize",
                "route": "/degradable"
              },
              {
                "label": "Water Conservation Facilities",
                "icon": "minimize",
                "route": "/water-conservation"
              },
              {
                "label": "Green Campus Initiatives",
                "icon": "minimize",
                "route": "/green-campus"
              },
              {
                "label": "Audits on Environment and Energy",
                "icon": "minimize",
                "route": "/environment-audits"
              },
              {
                "label": "Disabled-Friendly, Barrier-Free Environment",
                "icon": "minimize",
                "route": "/disabled-friendly"
              },
              {
                "label": "Institutional Efforts",
                "icon": "minimize",
                "route": "/institutional-efforts"
              },
              {
                "label": "Constitutional Obligations",
                "icon": "minimize",
                "route": "/constitutional-obligations"
              },
              {
                "label": "Code of Conduct",
                "icon": "minimize",
                "route": "/code-of-conduct"
              },
              {
                "label": "Institution Celebrates",
                "icon": "minimize",
                "route": "/institutional-celebrates"
              }
            ]
          },
          {
            "label": "Best Practices",
            "icon": "expand_more",
            "route": "",
            "subMenu": [
              {
                "label": "Two Best Practices",
                "icon": "minimize",
                "route": "/best-practices"
              },
              {
                "label": "Performance of the Institution",
                "icon": "minimize",
                "route": "/institutional-performance"
              }
            ]
          }
        ]
      },
      {
        "label": "Roles and Permission",
        "icon": "build",
        "subMenu": [
          {
            "label": "Role Master",
            "icon": "minimize",
            "route": "/role-master"
          },
          {
            "label": "Feature Master",
            "icon": "minimize",
            "route": "/feature-master"
          },
          {
            "label": "Role & Perimissions",
            "icon": "minimize",
            "route": "/role-permission"
          }
        ]
      }
    ]
  }
}
