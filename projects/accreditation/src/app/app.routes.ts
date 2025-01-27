import { Routes } from '@angular/router';

import {
  AccForgotpasswordComponent,
  AccreditationDashboardComponent,
  AccreditationLoginComponent,
  RoleMasterComponent,
  RolePermissionComponent,
  FeatureMasterComponent,
  AuthGuard,
} from 'shared-lib';

export const routes: Routes = [
  // Public Routes (Accessible without authentication)
  { path: 'login', component: AccreditationLoginComponent },
  { path: 'forgot-password', component: AccForgotpasswordComponent },

  // Protected Routes (Require authentication)
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      // Default Route (when no path is specified)
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      // Dashboard Route
      { path: 'dashboard', component: AccreditationDashboardComponent },

      // Lazy-loaded Modules
      {
        path: 'naac',
        loadChildren: () =>
          import('projects/shared-lib/src/lib/modules/naac/naac-routing.module').then(
            (m) => m.NaacRoutingModule
          ),
      },
      {
        path: 'nirf',
        loadChildren: () =>
          import('projects/shared-lib/src/lib/modules/nirf/nirf-routing.module').then(
            (m) => m.NirfRoutingModule
          ),
      },

      // Roles and Permissions
      { path: 'role-master', component: RoleMasterComponent },
      { path: 'feature-master', component: FeatureMasterComponent },
      { path: 'role-permission', component: RolePermissionComponent },
    ],
  },

  // Catch-All Route (Redirect to Dashboard if route is not found)
  { path: '**', redirectTo: 'dashboard' },
];
