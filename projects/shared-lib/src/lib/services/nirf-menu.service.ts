import { Injectable } from '@angular/core';
import { MenuItem } from 'shared-lib';

@Injectable({
  providedIn: 'root'
})
export class NirfMenuService {

  getMenuItems(): MenuItem[] {
    return [
      {
        "label": "Dashboard",
        "icon": "home",
        "routerLink": "/nirf/dashboard",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ],
      },
      {
        "label": "Sanctioned Intake",
        "icon": "widgets",
        "routerLink": "/nirf/sanctioned-intake",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Student Strength",
        "icon": "people",
        "routerLink": "/nirf/student-strength",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Consultancy Project Details",
        "icon": "engineering",
        "routerLink": "/nirf/consultancy-project-details",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Faculty Details",
        "icon": "school",
        "routerLink": "/nirf/faculty-details",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Financial Resources",
        "icon": "account_balance",
        "routerLink": "/nirf/financial-resource",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Intellectual Property Rights",
        "icon": "lightbulb",
        "routerLink": "/nirf/ipr",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "PCS Facilities",
        "icon": "desktop_windows",
        "routerLink": "/nirf/pcs-facility",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "PhD Student Details",
        "icon": "science",
        "routerLink": "/nirf/phd-student-details",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Placement & Higher Studies",
        "icon": "work",
        "routerLink": "/nirf/placement-higher-studies",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Sponsored Research Details",
        "icon": "biotech",
        "routerLink": "/nirf/sponsored-research-details",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      },
      {
        "label": "Chat Bot",
        "icon": "biotech",
        "routerLink": "/nirf/chat-bot",
        "menuOf": ["nirf"],
        "accessBy": [
          'admin', 'superadmin', 'principal', 'hod', 'coordinator',
          'alumni', 'dean', 'director', 'boardMember', 'accounts'
        ]
      }
    ];
  }
}
