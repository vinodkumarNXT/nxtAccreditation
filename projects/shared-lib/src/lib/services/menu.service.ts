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
        "route": "/dashboard",
        "menuOf":["accreditation"],
        "accessBy": [
          'admin',
          'superadmin',
          'principal',
          'hod',
          'coordinator',
          'alumni',
          'dean',
          'director',
          'boardMember',
          'accounts'
        ],
      },

      {
        "label": "Curricular Aspects",
        "icon": "widgets",
        "route": "",
        "menuOf":["accreditation"],
        "accessBy": [
         'admin',
         'superadmin',
         'principal',
         'hod',
         'coordinator',
         'alumni',
         'dean',
         'director',
         'boardMember',
         'accounts'
       ],

        "items": [
          {
            "label": "Design and Development",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "label": "Curricular Developed",
                "icon": "minimize",
                "route": "/curricular-developed",
                 "menuOf":["accreditation"],
                 "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],

              },
              {
                "label": "Percentage of Programmes",
                "icon": "minimize",
                "route": "/percentage-programmes",
                "menuOf":["accreditation"],
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
                
              },
              {
                "label": "Average Percentage",
                "icon": "minimize",
                "route": "/average-percentage",
                "menuOf":["accreditation"],
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],

              }
            ]
          },
          {
            "label": "Academic Flexibility",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "label": "Percentage of New Courses",
                "icon": "minimize",
                "route": "/percentageCourses",
                "menuOf":["accreditation"],
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],

              },
              {
                "label": "CBCS",
                "icon": "minimize",
                "route": "/cbcs",
                "menuOf":["accreditation"],
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],

              }
            ]
          },
          {
            "label": "Curriculum Enrichment",
           "menuOf":["accreditation"],
           "accessBy": [
            'admin',
            'superadmin',
            'principal',
            'hod',
            'coordinator',
            'alumni',
            'dean',
            'director',
            'boardMember',
            'accounts'
          ],

            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "label": "Institution Integrates",
                "icon": "minimize",
                "route": "/institution-integrates",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

              },
              {
                "label": "Transferable and Life Skills",
                "icon": "minimize",
                "route": "/transferable-lifeSkills",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
              },
              {
                "label": "Students Enrolled",
                "icon": "minimize",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "route": "/students-enrolled"
              },
              {
                "label": "Undertaking Field Projects",
                "icon": "minimize",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "route": "/UndertakingFieldProjects"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Feedback System",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "label": "Design and Review",
                "icon": "minimize",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "route": "/design-review"
              },
              {
                "label": "Feedback Processes",
                "icon": "minimize",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "route": "/feedback-process"
              }
            ]
          }
        ]
      },
     
      {
        "accessBy": [
          'admin',
          'superadmin',
          'principal',
          'hod',
          'coordinator',
          'alumni',
          'dean',
          'director',
          'boardMember',
          'accounts'
        ],
      "menuOf":["accreditation"],

        "label": "Teaching-Learning and Evaluation",
        "icon": "school",
        "route": "",
        "items": [
          {
            "label": "Student Enrolment and Profile",
            "icon": "expand_more",
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],
            "route": "",
            "items": [
              {
                "label": "Demand Ratio",
                "icon": "minimize",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "route": "/demand-ratio"
              },
              {
                "label": "Reserved Categories",
                "icon": "minimize",
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "route": "/reserved-category"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Catering to Student Diversity",
            
            "icon": "expand_more",
            
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Special Programmes",
                "icon": "minimize",
                "route": "/special-program"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Full Time Teacher Ratio",
                "icon": "minimize",
                "route": "/full-time-teacher-ratio"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Teaching - Learning Process",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Experiential Learning",
                "icon": "minimize",
                "route": "/experimental-Learning"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Learning Processes",
                "icon": "minimize",
                "route": "/learning-processes"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Ratio of Students to Mentor",
                "icon": "minimize",
                "route": "/student-mentorRatio"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Teacher Profile and Quality",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Full Time Teachers",
                "icon": "minimize",
                "route": "/full-time-teachers"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Teachers with Ph.D",
                "icon": "minimize",
                "route": "/phd-teachers"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Teachers Who Received Awards",
                "icon": "minimize",
                "route": "/awarded-teachers"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Evaluation Process and Reforms",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Semester-end/ Year-end",
                "icon": "minimize",
                "route": "/end-semester"
              },

              
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Student Complaints/Grievances",
                "icon": "minimize",
                "route": "/student-complaints"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Integration & Reforms",
                "icon": "minimize",
                "route": "/integration-reforms"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Automation of Examination",
                "icon": "minimize",
                "route": "/automation-examination"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Student Performance and Learning",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Learning Outcomes",
                "icon": "minimize",
                "route": "/learning-outcomes"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Attainment of Programme Outcomes",
                "icon": "minimize",
                "route": "/program-outcomes"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Pass Percentage of Students",
                "icon": "minimize",
                "route": "/student-PassPercentage-survey"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],
            "label": "Student Satisfaction Survey",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Teaching Learning Process",
                "icon": "minimize",
                "route": "/teaching-learning-process"
              }
            ]
          }
        ]
      },
      {
        "accessBy": [
          'admin',
          'superadmin',
          'principal',
          'hod',
          'coordinator',
          'alumni',
          'dean',
          'director',
          'boardMember',
          'accounts'
        ],
      "menuOf":["accreditation"],

        "label": "Research, Innovations and Extension",
        "icon": "search",
        "route": "",
        "items": [
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Research and Facilities",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Research Facilities",
                "icon": "minimize",
                "route": "/research-facility"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Teachers for Research",
                "icon": "minimize",
                "route": "/teacher-research"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Fellowship",
                "icon": "minimize",
                "route": "/research-fellowship"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Research Fellows",
                "icon": "minimize",
                "route": "/research-fellow"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Support Research",
                "icon": "minimize",
                "route": "/support-research"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Recognitions",
                "icon": "minimize",
                "route": "/recognition"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Resource Mobilization for Research",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Funding for Research",
                "icon": "minimize",
                "route": "/funding-research"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Grants for Research Projects",
                "icon": "minimize",
                "route": "/project-grant"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Number of Research Projects",
                "icon": "minimize",
                "route": "/research-projects"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Innovation Ecosystem",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Ecosystem for Innovations",
                "icon": "minimize",
                "route": "/ecosystem-innovations"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Seminars Conducted",
                "icon": "minimize",
                "route": "/seminars-conducted"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Recognitions Received",
                "icon": "minimize",
                "route": "/recognizations-received"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Research Publications and Awards",
            "icon": "expand_more",
            "route": "",
            "items": [
              
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Ethics for Research",
                "icon": "minimize",
                "route": "/ethics-research"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Incentives to Teachers",
                "icon": "minimize",
                "route": "/teachers-incentivies"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Patents Published",
                "icon": "minimize",
                "route": "/patent-published"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Ph.Ds Awarded per Teacher",
                "icon": "minimize",
                "route": "/phds-awarded-teacher"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Research Papers per Teacher",
                "icon": "minimize",
                "route": "/teacher-research-papers"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Edited Volumes Published",
                "icon": "minimize",
                "route": "/edited-volumes"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "E-content Developed",
                "icon": "minimize",
                "route": "/teacher-econtent"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Bibliometrics",
                "icon": "minimize",
                "route": "/biblio-metrics"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Citation Index in Scopus",
                "icon": "minimize",
                "route": "/citation-index-scopus"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Consultancy",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "policy on consultancy",
                "icon": "minimize",
                "route": "/policy-on-consultancy"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "consultancy revenue",
                "icon": "minimize",
                "route": "/consultancy-revenue"
              }
            ]
          },
          {
   "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Extension Activities",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Extension Activities",
                "icon": "minimize",
                "route": "/extension-activity"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "awards received",
                "icon": "minimize",
                "route": "/awards-received"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "outreach programs",
                "icon": "minimize",
                "route": "/outreach-program"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "activity percentage",
                "icon": "minimize",
                "route": "/activity-percentage"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Collaboration",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Collaborative Activities",
                "icon": "minimize",
                "route": "/collaborative-activity"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "functional MoUs",
                "icon": "minimize",
                "route": "/functional-mous"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "outreach programs",
                "icon": "minimize",
                "route": "/outreach-program"
              }
            ]
          }
        ]
      },
      {
        "accessBy": [
          'admin',
          'superadmin',
          'principal',
          'hod',
          'coordinator',
          'alumni',
          'dean',
          'director',
          'boardMember',
          'accounts'
        ],
      "menuOf":["accreditation"],


        "label": "Infrastructure and Learning Resources",
        "icon": "desktop_windows",
        "route": "",
        "items": [
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Physical Facilities",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Facilities for Teaching-Learning",
                "icon": "minimize",
                "route": "/facilities-teaching-learning"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Facilities for Cultural Activities",
                "icon": "minimize",
                "route": "/facilities-cultural"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "General Campus Facilities",
                "icon": "minimize",
                "route": "/campus-facilities"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Infrastructure Expenditure",
                "icon": "minimize",
                "route": "/infrastructure-expenditure"
              }
            ]
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Library as a Learning Resource",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Automation of the Library",
                "icon": "minimize",
                "route": "/library-automation"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Library Resources",
                "icon": "minimize",
                "route": "/library-resources"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Library Expenditure",
                "icon": "minimize",
                "route": "/library-expenditure"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Library Users",
                "icon": "minimize",
                "route": "/library-users"
              }
            ]
          },
          {
          "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "IT Infrastructure",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "ICT Facilities",
                "icon": "minimize",
                "route": "/ict-facilities"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "IT Facilities",
                "icon": "minimize",
                "route": "/it-facilities"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Student-Computer Ratio",
                "icon": "minimize",
                "route": "/student-computer-ratio"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
                "label": "Internet Bandwidth",
                "icon": "minimize",
                "route": "/internet-bandwidth"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Facilities for E-Content",
                "icon": "minimize",
                "route": "/facilities-e-content"
              }
            ]
          },
          {
           "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Maintenance of Campus Infrastructure",
            "icon": "build",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Maintenance of Physical Facilities",
                "icon": "minimize",
                "route": "/maintenance-physical-facilities"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Systems and Procedures",
                "icon": "minimize",
                "route": "/systems-procedures"
              }
            ]
          }
        ]
      },

      {
        "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

        "label": "Student Support and Progression",
        "icon": "support",
        "route": "",
        "items": [
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Student Support",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Scholarship Schemes",
                "icon": "minimize",
                "route": "/scholarship-schemes"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Career Counseling",
                "icon": "minimize",
                "route": "/career-counseling"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Capacity Development",
                "icon": "minimize",
                "route": "/capacity-development"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Student Grievances",
                "icon": "minimize",
                "route": "/student-grievances"
              }
            ]
          },


          {
        "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Student Progression",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Government Examinations",
                "icon": "minimize",
                "route": "/government-examinations"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

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
           "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Participation and Activities",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Student Medals",
                "icon": "minimize",
                "route": "/students-medals"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Student Council",
                "icon": "minimize",
                "route": "/student-council"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Competitions Organised",
                "icon": "minimize",
                "route": "/competitions-organised"
              }
            ]
          },
          {
            "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Alumni Engagement",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Alumni Association",
                "icon": "minimize",
                "route": "/alumni-association"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Alumni Contribution",
                "icon": "minimize",
                "route": "/alumni-contribution"
              }
            ]
          }
        ]
      },
      {
        "accessBy": [
          'admin',
          'superadmin',
          'principal',
          'hod',
          'coordinator',
          'alumni',
          'dean',
          'director',
          'boardMember',
          'accounts'
        ],
      "menuOf":["accreditation"],


        "label": "Governance, Leadership and Management",
        "icon": "account_balance",
        "route": "",
        "items": [
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Vision and Leadership",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Administrative Governance",
                "icon": "minimize",
                "route": "/administrative-governance"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Participative Management",
                "icon": "minimize",
                "route": "/participative-management"
              }
            ]
          },
          {
      "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Strategy Development and Deployment",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Institutional Strategic Plan",
                "icon": "minimize",
                "route": "/strategic-plan"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Institutional Bodies",
                "icon": "minimize",
                "route": "/institutional-bodies"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Implements E-Governance",
                "icon": "minimize",
                "route": "/e-governance"
              }
            ]
          },
          {
           "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Faculty Empowerment Strategies",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Appraisal System",
                "icon": "minimize",
                "route": "/appraisal-system"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Financial Support",
                "icon": "minimize",
                "route": "/financial-support"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Training Programmes Organised",
                "icon": "minimize",
                "route": "/training-programmes"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Faculty Development Programmes",
                "icon": "minimize",
                "route": "/faculty-development"
              }
            ]
          },
          {
            "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Financial Management",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Mobilisation of Funds",
                "icon": "minimize",
                "route": "/fund-mobilisation"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Grants Received from Government",
                "icon": "minimize",
                "route": "/government-grants"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

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
           "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Internal Quality Assurance System",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Quality Assurance Strategies",
                "icon": "minimize",
                "route": "/quality-strategies"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Adopted Quality Assurance",
                "icon": "minimize",
                "route": "/adopted-quality"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Incremental Improvements",
                "icon": "minimize",
                "route": "/incremental-improvements"
              }
            ]
          }
        ]
      },
      {
           "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],
        "label": "Institutional Values and Best Practices",
        "icon": "people",
        "route": "",
        "items": [
          {
            "label": "Values and Social Responsibilities",
            "icon": " expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Promotion of Gender Equity",
                "icon": "minimize",
                "route": "/gender-equity"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Alternate Sources of Energy",
                "icon": "minimize",
                "route": "/alternate-energy-source"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Degradable and Non-Degradable Waste",
                "icon": "minimize",
                "route": "/degradable"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Water Conservation Facilities",
                "icon": "minimize",
                "route": "/water-conservation"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Green Campus Initiatives",
                "icon": "minimize",
                "route": "/green-campus"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Audits on Environment and Energy",
                "icon": "minimize",
                "route": "/environment-audits"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Disabled-Friendly, Barrier-Free Environment",
                "icon": "minimize",
                "route": "/disabled-friendly"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Institutional Efforts",
                "icon": "minimize",
                "route": "/institutional-efforts"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Constitutional Obligations",
                "icon": "minimize",
                "route": "/constitutional-obligations"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Code of Conduct",
                "icon": "minimize",
                "route": "/code-of-conduct"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Institution Celebrates",
                "icon": "minimize",
                "route": "/institutional-celebrates"
              }
            ]
          },
          {
         "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

            "label": "Best Practices",
            "icon": "expand_more",
            "route": "",
            "items": [
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Two Best Practices",
                "icon": "minimize",
                "route": "/best-practices"
              },
              {
                "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

                "label": "Performance of the Institution",
                "icon": "minimize",
                "route": "/institutional-performance"
              }
            ]
          }
        ]
      },
      {
           "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["accreditation"],

        "label": "Roles and Permission",
        "icon": "build",
        "items": [
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Role Master",
            "icon": "minimize",
            "route": "/role-master"
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Feature Master",
            "icon": "minimize",
            "route": "/feature-master"
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["accreditation"],

            "label": "Role & Perimissions",
            "icon": "minimize",
            "route": "/role-permission"
            
          }
        ]
      },

      {
           "accessBy": [
                  'admin',
                  'superadmin',
                  'principal',
                  'hod',
                  'coordinator',
                  'alumni',
                  'dean',
                  'director',
                  'boardMember',
                  'accounts'
                ],
              "menuOf":["naac"],

        "label": "Roles and Permission",
        "icon": "build",
        "items": [
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["naac"],

            "label": "Role Master",
            "icon": "minimize",
            "route": "/role-master"
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["naac"],

            "label": "Feature Master",
            "icon": "minimize",
            "route": "/feature-master"
          },
          {
            "accessBy": [
              'admin',
              'superadmin',
              'principal',
              'hod',
              'coordinator',
              'alumni',
              'dean',
              'director',
              'boardMember',
              'accounts'
            ],
          "menuOf":["naac"],

            "label": "Role & Perimissions",
            "icon": "minimize",
            "route": "/role-permission"
            
          }
        ]
      }
    ]
  }
}
