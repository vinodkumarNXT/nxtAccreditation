import { Routes } from '@angular/router';

import {
  AccForgotpasswordComponent,
  AccreditationDashboardComponent,
  AccreditationLoginComponent,
  RoleMasterComponent,
  RolePermissionComponent,
  FeatureMasterComponent,
  NirfDashboardComponent,
  NaacDashboardComponent,
  NbaDashboardComponent
} from 'shared-lib';

export const routes: Routes = [
  { path: 'login', component: AccreditationLoginComponent },
  { path: 'forgot-password', component: AccForgotpasswordComponent },
  { path: '', component: AccreditationDashboardComponent },
  { path: 'dashboard', component: AccreditationDashboardComponent },
  
  // Lazy-loaded modules
  {
    path: 'naac',
    loadChildren: () => 
      import('projects/shared-lib/src/lib/modules/naac/naac-routing.module').then(m => m.NaacRoutingModule)
  },
  {
    path: 'nirf',
    loadChildren: () => 
      import('projects/shared-lib/src/lib/modules/nirf/nirf-routing.module').then(m => m.NirfRoutingModule)
  },


  // Roles and Permissions
  { path: 'role-master', component: RoleMasterComponent },
  { path: 'feature-master', component: FeatureMasterComponent },
  { path: 'role-permission', component: RolePermissionComponent },
];
