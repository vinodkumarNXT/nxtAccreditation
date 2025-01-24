import { Injectable } from '@angular/core';
import { MenuItem } from 'shared-lib';

@Injectable({
  providedIn: 'root'
})
export class NbaMenuService {
getMenuItems(): MenuItem[] {
    return [
      

      {
       "label": "Dashboard Jai Balayya",
        "icon": "home",
        "route": "/nirf-dashboard",
        "menuOf":["nirf"],
        "accessBy": [
          'admin',
          'superadmin',
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
        "label": "Sanctioned Intake",
        "icon": "widgets",
        "route": "",
        "menuOf":["NIRF"],
        "accessBy": [
         'admin',
         'superadmin',
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
                 "menuOf":["NBA"],
                 "accessBy": [
                  'admin',
                  'superadmin',
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
                "menuOf":["NBA"],
                "accessBy": [
                  'admin',
                  'superadmin',
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
                "menuOf":["NBA"],
                "accessBy": [
                  'admin',
                  'superadmin',
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
                "menuOf":["NBA"],
                "accessBy": [
                  'admin',
                  'superadmin',
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
                "menuOf":["NBA"],
                "accessBy": [
                  'admin',
                  'superadmin',
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
           "menuOf":["NBA"],
           "accessBy": [
            'admin',
            'superadmin',
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
              "menuOf":["NBA"],

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
              "menuOf":["NBA"],
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
              "menuOf":["NBA"],
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
              "menuOf":["NBA"],
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
          "menuOf":["NBA"],

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
              "menuOf":["NBA"],
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
              "menuOf":["NBA"],
                "route": "/feedback-process"
              }
            ]
          }
        ]
      },
    ]}
  
  }
