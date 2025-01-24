// src/app/menu.service.ts
import { Injectable } from '@angular/core';
import { MenuItem } from 'shared-lib'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class NaacMenuService {
  getMenuItems(): MenuItem[] {
    return [
      

      {
       "label": "Dashboard",
        "icon": "home",
        "routerLink": "/naac/dashboard",
        "menuOf":["NAAC"],
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
        "routerLink": "/",
        "menuOf":["NAAC"],
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
            "routerLink": "/",
            "items": [
              {
                "label": "Curricular Developed",
                "icon": "minimize",
                "routerLink": "/naac/curricular-developed",
                 "menuOf":["NAAC"],
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
                "routerLink": "/naac/percentage-programmes",
                "menuOf":["NAAC"],
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
                "routerLink": "/naac/average-percentage",
                "menuOf":["NAAC"],
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
            "routerLink": "/",
            "items": [
              {
                "label": "Percentage of New Courses",
                "icon": "minimize",
                "routerLink": "/naac/percentageCourses",
                "menuOf":["NAAC"],
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
                "routerLink": "/naac/cbcs",
                "menuOf":["NAAC"],
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
           "menuOf":["NAAC"],
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
            "routerLink": "/",
            "items": [
              {
                "label": "Institution Integrates",
                "icon": "minimize",
                "routerLink": "/naac/institution-integrates",
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
              "menuOf":["NAAC"],

              },
              {
                "label": "Transferable and Life Skills",
                "icon": "minimize",
                "routerLink": "/naac/transferable-lifeSkills",
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
              "menuOf":["NAAC"],
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
              "menuOf":["NAAC"],
                "routerLink": "/naac/students-enrolled"
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
              "menuOf":["NAAC"],
                "routerLink": "/naac/UndertakingFieldProjects"
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
          "menuOf":["NAAC"],

            "label": "Feedback System",
            "icon": "expand_more",
            "routerLink": "/naac",
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
              "menuOf":["NAAC"],
                "routerLink": "/naac/design-review"
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
              "menuOf":["NAAC"],
                "routerLink": "/naac/feedback-process"
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
      "menuOf":["NAAC"],

        "label": "Teaching-Learning and Evaluation",
        "icon": "school",
        "routerLink": "/",
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
          "menuOf":["NAAC"],
            "routerLink": "/naac",
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
              "menuOf":["NAAC"],
                "routerLink": "/naac/demand-ratio"
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
              "menuOf":["NAAC"],
                "routerLink": "/naac/reserved-category"
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
          "menuOf":["NAAC"],

            "label": "Catering to Student Diversity",
            
            "icon": "expand_more",
            
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Special Programmes",
                "icon": "minimize",
                "routerLink": "/naac/special-program"
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
              "menuOf":["NAAC"],
                "label": "Full Time Teacher Ratio",
                "icon": "minimize",
                "routerLink": "/naac/full-time-teacher-ratio"
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
          "menuOf":["NAAC"],

            "label": "Teaching - Learning Process",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Experiential Learning",
                "icon": "minimize",
                "routerLink": "/naac/experimental-Learning"
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
              "menuOf":["NAAC"],
                "label": "Learning Processes",
                "icon": "minimize",
                "routerLink": "/naac/learning-processes"
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
              "menuOf":["NAAC"],
                "label": "Ratio of Students to Mentor",
                "icon": "minimize",
                "routerLink": "/naac/student-mentorRatio"
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
          "menuOf":["NAAC"],

            "label": "Teacher Profile and Quality",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Full Time Teachers",
                "icon": "minimize",
                "routerLink": "/naac/full-time-teachers"
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
              "menuOf":["NAAC"],
                "label": "Teachers with Ph.D",
                "icon": "minimize",
                "routerLink": "/naac/phd-teachers"
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
              "menuOf":["NAAC"],
                "label": "Teachers Who Received Awards",
                "icon": "minimize",
                "routerLink": "/naac/awarded-teachers"
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
          "menuOf":["NAAC"],

            "label": "Evaluation Process and Reforms",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Semester-end/ Year-end",
                "icon": "minimize",
                "routerLink": "/naac/end-semester"
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
              "menuOf":["NAAC"],
                "label": "Student Complaints/Grievances",
                "icon": "minimize",
                "routerLink": "/naac/student-complaints"
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
              "menuOf":["NAAC"],
                "label": "Integration & Reforms",
                "icon": "minimize",
                "routerLink": "/naac/integration-reforms"
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
              "menuOf":["NAAC"],
                "label": "Automation of Examination",
                "icon": "minimize",
                "routerLink": "/naac/automation-examination"
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
          "menuOf":["NAAC"],

            "label": "Student Performance and Learning",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Learning Outcomes",
                "icon": "minimize",
                "routerLink": "/naac/learning-outcomes"
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
              "menuOf":["NAAC"],
                "label": "Attainment of Programme Outcomes",
                "icon": "minimize",
                "routerLink": "/naac/program-outcomes"
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
              "menuOf":["NAAC"],
                "label": "Pass Percentage of Students",
                "icon": "minimize",
                "routerLink": "/naac/student-PassPercentage-survey"
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
          "menuOf":["NAAC"],
            "label": "Student Satisfaction Survey",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Teaching Learning Process",
                "icon": "minimize",
                "routerLink": "/naac/teaching-learning-process"
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
      "menuOf":["NAAC"],

        "label": "Research, Innovations and Extension",
        "icon": "search",
        "routerLink": "/",
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
          "menuOf":["NAAC"],

            "label": "Research and Facilities",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Research Facilities",
                "icon": "minimize",
                "routerLink": "/naac/research-facility"
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
              "menuOf":["NAAC"],
                "label": "Teachers for Research",
                "icon": "minimize",
                "routerLink": "/naac/teacher-research"
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
              "menuOf":["NAAC"],
                "label": "Fellowship",
                "icon": "minimize",
                "routerLink": "/naac/research-fellowship"
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
              "menuOf":["NAAC"],
                "label": "Research Fellows",
                "icon": "minimize",
                "routerLink": "/naac/research-fellow"
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
              "menuOf":["NAAC"],
                "label": "Support Research",
                "icon": "minimize",
                "routerLink": "/naac/support-research"
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
              "menuOf":["NAAC"],
                "label": "Recognitions",
                "icon": "minimize",
                "routerLink": "/naac/recognition"
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
          "menuOf":["NAAC"],

            "label": "Resource Mobilization for Research",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Funding for Research",
                "icon": "minimize",
                "routerLink": "/naac/funding-research"
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
              "menuOf":["NAAC"],
                "label": "Grants for Research Projects",
                "icon": "minimize",
                "routerLink": "/naac/project-grant"
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
              "menuOf":["NAAC"],
                "label": "Number of Research Projects",
                "icon": "minimize",
                "routerLink": "/naac/research-projects"
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
          "menuOf":["NAAC"],

            "label": "Innovation Ecosystem",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Ecosystem for Innovations",
                "icon": "minimize",
                "routerLink": "/naac/ecosystem-innovations"
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
              "menuOf":["NAAC"],
                "label": "Seminars Conducted",
                "icon": "minimize",
                "routerLink": "/naac/seminars-conducted"
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
              "menuOf":["NAAC"],
                "label": "Recognitions Received",
                "icon": "minimize",
                "routerLink": "/naac/recognizations-received"
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
          "menuOf":["NAAC"],

            "label": "Research Publications and Awards",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],
                "label": "Ethics for Research",
                "icon": "minimize",
                "routerLink": "/naac/ethics-research"
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
              "menuOf":["NAAC"],
                "label": "Incentives to Teachers",
                "icon": "minimize",
                "routerLink": "/naac/teachers-incentivies"
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
              "menuOf":["NAAC"],

                "label": "Patents Published",
                "icon": "minimize",
                "routerLink": "/naac/patent-published"
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
              "menuOf":["NAAC"],

                "label": "Ph.Ds Awarded per Teacher",
                "icon": "minimize",
                "routerLink": "/naac/phds-awarded-teacher"
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
              "menuOf":["NAAC"],
                "label": "Research Papers per Teacher",
                "icon": "minimize",
                "routerLink": "/naac/teacher-research-papers"
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
              "menuOf":["NAAC"],
                "label": "Edited Volumes Published",
                "icon": "minimize",
                "routerLink": "/naac/edited-volumes"
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
              "menuOf":["NAAC"],
                "label": "E-content Developed",
                "icon": "minimize",
                "routerLink": "/naac/teacher-econtent"
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
              "menuOf":["NAAC"],
                "label": "Bibliometrics",
                "icon": "minimize",
                "routerLink": "/naac/biblio-metrics"
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
              "menuOf":["NAAC"],
                "label": "Citation Index in Scopus",
                "icon": "minimize",
                "routerLink": "/naac/citation-index-scopus"
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
          "menuOf":["NAAC"],

            "label": "Consultancy",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "policy on consultancy",
                "icon": "minimize",
                "routerLink": "/naac/policy-on-consultancy"
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
              "menuOf":["NAAC"],

                "label": "consultancy revenue",
                "icon": "minimize",
                "routerLink": "/naac/consultancy-revenue"
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
              "menuOf":["NAAC"],

            "label": "Extension Activities",
            "icon": "expand_more",
            "routerLink": "/naac",
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
              "menuOf":["NAAC"],

                "label": "Extension Activities",
                "icon": "minimize",
                "routerLink": "/naac/extension-activity"
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
              "menuOf":["NAAC"],
                "label": "awards received",
                "icon": "minimize",
                "routerLink": "/naac/awards-received"
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
              "menuOf":["NAAC"],
                "label": "outreach programs",
                "icon": "minimize",
                "routerLink": "/naac/outreach-program"
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
              "menuOf":["NAAC"],
                "label": "activity percentage",
                "icon": "minimize",
                "routerLink": "/naac/activity-percentage"
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
          "menuOf":["NAAC"],

            "label": "Collaboration",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Collaborative Activities",
                "icon": "minimize",
                "routerLink": "/naac/collaborative-activity"
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
              "menuOf":["NAAC"],

                "label": "functional MoUs",
                "icon": "minimize",
                "routerLink": "/naac/functional-mous"
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
              "menuOf":["NAAC"],
                "label": "outreach programs",
                "icon": "minimize",
                "routerLink": "/naac/outreach-program"
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
      "menuOf":["NAAC"],


        "label": "Infrastructure and Learning Resources",
        "icon": "desktop_windows",
        "routerLink": "/",
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
          "menuOf":["NAAC"],

            "label": "Physical Facilities",
            "icon": "expand_more",
            "routerLink": "/naac",
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
              "menuOf":["NAAC"],

                "label": "Facilities for Teaching-Learning",
                "icon": "minimize",
                "routerLink": "/naac/facilities-teaching-learning"
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
              "menuOf":["NAAC"],

                "label": "Facilities for Cultural Activities",
                "icon": "minimize",
                "routerLink": "/naac/facilities-cultural"
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
              "menuOf":["NAAC"],

                "label": "General Campus Facilities",
                "icon": "minimize",
                "routerLink": "/naac/campus-facilities"
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
              "menuOf":["NAAC"],
                "label": "Infrastructure Expenditure",
                "icon": "minimize",
                "routerLink": "/naac/infrastructure-expenditure"
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
          "menuOf":["NAAC"],

            "label": "Library as a Learning Resource",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Automation of the Library",
                "icon": "minimize",
                "routerLink": "/naac/library-automation"
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
              "menuOf":["NAAC"],

                "label": "Library Resources",
                "icon": "minimize",
                "routerLink": "/naac/library-resources"
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
              "menuOf":["NAAC"],

                "label": "Library Expenditure",
                "icon": "minimize",
                "routerLink": "/naac/library-expenditure"
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
              "menuOf":["NAAC"],

                "label": "Library Users",
                "icon": "minimize",
                "routerLink": "/naac/library-users"
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
              "menuOf":["NAAC"],

            "label": "IT Infrastructure",
            "icon": "expand_more",
            "routerLink": "/naac",
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
              "menuOf":["NAAC"],

                "label": "ICT Facilities",
                "icon": "minimize",
                "routerLink": "/naac/ict-facilities"
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
              "menuOf":["NAAC"],

                "label": "IT Facilities",
                "icon": "minimize",
                "routerLink": "/naac/it-facilities"
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
              "menuOf":["NAAC"],

                "label": "Student-Computer Ratio",
                "icon": "minimize",
                "routerLink": "/naac/student-computer-ratio"
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
              "menuOf":["NAAC"],
                "label": "Internet Bandwidth",
                "icon": "minimize",
                "routerLink": "/naac/internet-bandwidth"
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
              "menuOf":["NAAC"],

                "label": "Facilities for E-Content",
                "icon": "minimize",
                "routerLink": "/naac/facilities-e-content"
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
              "menuOf":["NAAC"],

            "label": "Maintenance of Campus Infrastructure",
            "icon": "build",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Maintenance of Physical Facilities",
                "icon": "minimize",
                "routerLink": "/naac/maintenance-physical-facilities"
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
              "menuOf":["NAAC"],

                "label": "Systems and Procedures",
                "icon": "minimize",
                "routerLink": "/naac/systems-procedures"
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
              "menuOf":["NAAC"],

        "label": "Student Support and Progression",
        "icon": "support",
        "routerLink": "/",
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
          "menuOf":["NAAC"],

            "label": "Student Support",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Scholarship Schemes",
                "icon": "minimize",
                "routerLink": "/naac/scholarship-schemes"
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
              "menuOf":["NAAC"],

                "label": "Career Counseling",
                "icon": "minimize",
                "routerLink": "/naac/career-counseling"
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
              "menuOf":["NAAC"],

                "label": "Capacity Development",
                "icon": "minimize",
                "routerLink": "/naac/capacity-development"
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
              "menuOf":["NAAC"],

                "label": "Student Grievances",
                "icon": "minimize",
                "routerLink": "/naac/student-grievances"
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
              "menuOf":["NAAC"],

            "label": "Student Progression",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Government Examinations",
                "icon": "minimize",
                "routerLink": "/naac/government-examinations"
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
              "menuOf":["NAAC"],

                "label": "Percentage of Placement",
                "icon": "minimize",
                "routerLink": "/naac/placement-percentage"
              },
              {
                "label": "Graduated Students",
                "icon": "minimize",
                "routerLink": "/naac/graduated-students"
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
              "menuOf":["NAAC"],

            "label": "Participation and Activities",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Student Medals",
                "icon": "minimize",
                "routerLink": "/naac/students-medals"
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
              "menuOf":["NAAC"],

                "label": "Student Council",
                "icon": "minimize",
                "routerLink": "/naac/student-council"
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
              "menuOf":["NAAC"],

                "label": "Competitions Organised",
                "icon": "minimize",
                "routerLink": "/naac/competitions-organised"
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
              "menuOf":["NAAC"],

            "label": "Alumni Engagement",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Alumni Association",
                "icon": "minimize",
                "routerLink": "/naac/alumni-association"
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
              "menuOf":["NAAC"],

                "label": "Alumni Contribution",
                "icon": "minimize",
                "routerLink": "/naac/alumni-contribution"
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
      "menuOf":["NAAC"],


        "label": "Governance, Leadership and Management",
        "icon": "account_balance",
        "routerLink": "/",
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
          "menuOf":["NAAC"],

            "label": "Vision and Leadership",
            "icon": "expand_more",
            "routerLink": "/naac",
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
              "menuOf":["NAAC"],

                "label": "Administrative Governance",
                "icon": "minimize",
                "routerLink": "/naac/administrative-governance"
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
              "menuOf":["NAAC"],

                "label": "Participative Management",
                "icon": "minimize",
                "routerLink": "/naac/participative-management"
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
              "menuOf":["NAAC"],

            "label": "Strategy Development and Deployment",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Institutional Strategic Plan",
                "icon": "minimize",
                "routerLink": "/naac/strategic-plan"
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
              "menuOf":["NAAC"],

                "label": "Institutional Bodies",
                "icon": "minimize",
                "routerLink": "/naac/institutional-bodies"
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
              "menuOf":["NAAC"],

                "label": "Implements E-Governance",
                "icon": "minimize",
                "routerLink": "/naac/e-governance"
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
              "menuOf":["NAAC"],

            "label": "Faculty Empowerment Strategies",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Appraisal System",
                "icon": "minimize",
                "routerLink": "/naac/appraisal-system"
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
              "menuOf":["NAAC"],

                "label": "Financial Support",
                "icon": "minimize",
                "routerLink": "/naac/financial-support"
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
              "menuOf":["NAAC"],

                "label": "Training Programmes Organised",
                "icon": "minimize",
                "routerLink": "/naac/training-programmes"
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
              "menuOf":["NAAC"],

                "label": "Faculty Development Programmes",
                "icon": "minimize",
                "routerLink": "/naac/faculty-development"
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
              "menuOf":["NAAC"],

            "label": "Financial Management",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Mobilisation of Funds",
                "icon": "minimize",
                "routerLink": "/naac/fund-mobilisation"
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
              "menuOf":["NAAC"],

                "label": "Grants Received from Government",
                "icon": "minimize",
                "routerLink": "/naac/government-grants"
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
              "menuOf":["NAAC"],

                "label": "Grants Received from Non-Government",
                "icon": "minimize",
                "routerLink": "/naac/non-government-grants"
              },
              {
                "label": "Financial Audits",
                "icon": "minimize",
                "routerLink": "/naac/financial-audits"
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
              "menuOf":["NAAC"],

            "label": "Internal Quality Assurance System",
            "icon": "expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Quality Assurance Strategies",
                "icon": "minimize",
                "routerLink": "/naac/quality-strategies"
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
              "menuOf":["NAAC"],

                "label": "Adopted Quality Assurance",
                "icon": "minimize",
                "routerLink": "/naac/adopted-quality"
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
              "menuOf":["NAAC"],

                "label": "Incremental Improvements",
                "icon": "minimize",
                "routerLink": "/naac/incremental-improvements"
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
              "menuOf":["NAAC"],
        "label": "Institutional Values and Best Practices",
        "icon": "people",
        "routerLink": "/",
        "items": [
          {
            "label": "Values and Social Responsibilities",
            "icon": " expand_more",
            "routerLink": "/",
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
              "menuOf":["NAAC"],

                "label": "Promotion of Gender Equity",
                "icon": "minimize",
                "routerLink": "/naac/gender-equity"
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
              "menuOf":["NAAC"],

                "label": "Alternate Sources of Energy",
                "icon": "minimize",
                "routerLink": "/naac/alternate-energy-source"
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
              "menuOf":["NAAC"],

                "label": "Degradable and Non-Degradable Waste",
                "icon": "minimize",
                "routerLink": "/naac/degradable"
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
              "menuOf":["NAAC"],

                "label": "Water Conservation Facilities",
                "icon": "minimize",
                "routerLink": "/naac/water-conservation"
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
              "menuOf":["NAAC"],

                "label": "Green Campus Initiatives",
                "icon": "minimize",
                "routerLink": "/naac/green-campus"
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
              "menuOf":["NAAC"],

                "label": "Audits on Environment and Energy",
                "icon": "minimize",
                "routerLink": "/naac/environment-audits"
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
              "menuOf":["NAAC"],

                "label": "Disabled-Friendly, Barrier-Free Environment",
                "icon": "minimize",
                "routerLink": "/naac/disabled-friendly"
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
              "menuOf":["NAAC"],

                "label": "Institutional Efforts",
                "icon": "minimize",
                "routerLink": "/naac/institutional-efforts"
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
              "menuOf":["NAAC"],

                "label": "Constitutional Obligations",
                "icon": "minimize",
                "routerLink": "/naac/constitutional-obligations"
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
              "menuOf":["NAAC"],

                "label": "Code of Conduct",
                "icon": "minimize",
                "routerLink": "/naac/code-of-conduct"
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
              "menuOf":["NAAC"],

                "label": "Institution Celebrates",
                "icon": "minimize",
                "routerLink": "/naac/institutional-celebrates"
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
              "menuOf":["NAAC"],

            "label": "Best Practices",
            "icon": "expand_more",
            "routerLink": "/naac",
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
              "menuOf":["NAAC"],

                "label": "Two Best Practices",
                "icon": "minimize",
                "routerLink": "/naac/best-practices"
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
              "menuOf":["NAAC"],

                "label": "Performance of the Institution",
                "icon": "minimize",
                "routerLink": "/naac/institutional-performance"
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
              "menuOf":["NAAC"],

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
          "menuOf":["NAAC"],

            "label": "Role Master",
            "icon": "minimize",
            "routerLink": "/naac/role-master"
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
          "menuOf":["NAAC"],

            "label": "Feature Master",
            "icon": "minimize",
            "routerLink": "/naac/feature-master"
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
          "menuOf":["NAAC"],

            "label": "Role & Perimissions",
            "icon": "minimize",
            "routerLink": "/naac/role-permission"
            
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
            "routerLink": "/naac/role-master"
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
            "routerLink": "/naac/feature-master"
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
            "routerLink": "/naac/role-permission"
            
          }
        ]
      }
    ]
  }
}
