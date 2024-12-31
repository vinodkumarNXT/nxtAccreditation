import { Injectable } from "@angular/core";

// Define available roles
type UserRole = "MasterAdmin" | "SuperAdmin" | "Admin" | "Vendor";

@Injectable({
  providedIn: "root",
})
export class ErpMenuService {
  
  // Mock current user role (can be dynamically set in a real application)
  private currentUserRole: UserRole = "MasterAdmin"; // Example role; replace with actual user role

  // Check if the user has access based on their role
  private hasRoleAccess(role: UserRole, allowedRoles: UserRole[]): boolean {
    return allowedRoles.includes(role);
  }

  // Check if a feature permission is active for the current user role
  private hasFeaturePermission(
    features: { [key: string]: string },
    permissionType: string
  ): boolean {
    return features[permissionType] === "active";
  }

  // Define menu items with role-based access control
  getMenuItems() {
    const menuItems:any= [
      {
        label: "Dashboard",
        icon: "home",
        route: "/dashboard",
        module: "active",
        permissions: {
          page: "active",
          allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Roles allowed to access this module
          features: [
            {
              ADD: "active",
              EDIT: "inactive",
              DELETE: "inactive",
              VIEW: "active",
            },
          ],
        },
      },
      {
        label: "Student Enrollment & Admission",
        icon: "widgets",
        route: "",
        module: "active",

        permissions: {
          page: "active",
          allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Only MasterAdmin and SuperAdmin can access
          features: [
            {
              ADD: "active",
              EDIT: "active",
              DELETE: "inactive",
              VIEW: "active",
            },
          ],
        },
        subMenu: [
          {
            label: "Enrollments",
            icon: "minimize",
            route: "/enrollment",
            permissions: {
              page: "active",
              allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Admins can access local settings
              features: [
                {
                  ADD: "active",
                  EDIT: "active",
                  DELETE: "inactive",
                  VIEW: "active",
                },
              ],
            },
          },

          {
            label: "Bulk Upload Enrollments",
            icon: "minimize",
            route: "/add-bulk-EnrollStudent",
            permissions: {
              page: "active",
              allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Admins can access local settings
              features: [
                {
                  ADD: "active",
                  EDIT: "active",
                  DELETE: "inactive",
                  VIEW: "active",
                },
              ],
            },
          },
          {
            label: "Student List",
            icon: "minimize",
            route: "/students-list",
            permissions: {
              page: "active", // Page is inactive
              allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Only for MasterAdmin and SuperAdmin
              features: [
                {
                  ADD: "inactive",
                  EDIT: "inactive",
                  DELETE: "inactive",
                  VIEW: "active",
                },
              ],
            },
          },
        ],
      },


      {
        label: "Attendance",
        icon: "widgets",
        route: "",
        module: "active",

        permissions: {
          page: "active",
          allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Only MasterAdmin and SuperAdmin can access
          features: [
            {
              ADD: "active",
              EDIT: "active",
              DELETE: "inactive",
              VIEW: "active",
            },
          ],
        },
        subMenu: [
          {
            label: "View Attendance",
            icon: "minimize",
            route: "/attendance",
            permissions: {
              page: "active",
              allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Admins can access local settings
              features: [
                {
                  ADD: "active",
                  EDIT: "active",
                  DELETE: "inactive",
                  VIEW: "active",
                },
              ],
            },
          },
        ],
      },


      {
        label: "Grounds",
        icon: "widgets",
        route: "",
        module: "active",

        permissions: {
          page: "active",
          allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Only MasterAdmin and SuperAdmin can access
          features: [
            {
              ADD: "active",
              EDIT: "active",
              DELETE: "inactive",
              VIEW: "active",
            },
          ],
        },
        subMenu: [
          {
            label: "Ground",
            icon: "minimize",
            route: "/grounds",
            permissions: {
              page: "active",
              allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Admins can access local settings
              features: [
                {
                  ADD: "active",
                  EDIT: "active",
                  DELETE: "inactive",
                  VIEW: "active",
                },
              ],
            },
          },
        ],
      },

      {
        label: "Events",
        icon: "widgets",
        route: "",
        module: "active",

        permissions: {
          page: "active",
          allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Only MasterAdmin and SuperAdmin can access
          features: [
            {
              ADD: "active",
              EDIT: "active",
              DELETE: "inactive",
              VIEW: "active",
            },
          ],
        },
        subMenu: [
          {
            label: "Event Register",
            icon: "minimize",
            route: "/event-register",
            permissions: {
              page: "active",
              allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Admins can access local settings
              features: [
                {
                  ADD: "active",
                  EDIT: "active",
                  DELETE: "inactive",
                  VIEW: "active",
                },
              ],
            },
          },

          {
            label: "Event  Add",
            icon: "minimize",
            route: "/event-types",
            permissions: {
              page: "active",
              allowedRoles: ["MasterAdmin", "SuperAdmin", "Admin"], // Admins can access local settings
              features: [
                {
                  ADD: "active",
                  EDIT: "active",
                  DELETE: "inactive",
                  VIEW: "active",
                },
              ],
            },
          },
        ],
      },



    ];

    // Filter menu items based on role and permissions
    return menuItems
      .filter(
        (item) =>
          this.hasRoleAccess(this.currentUserRole, item.permissions.allowedRoles) &&
          item.module === "active" &&
          item.permissions.page === "active"
      )
      .map((item) => ({
        ...item,
        subMenu:
          item.subMenu?.filter(
            (sub) =>
              this.hasRoleAccess(this.currentUserRole, sub.permissions.allowedRoles) &&
              sub.permissions.page === "active"
          ) || [],
      }));
  }

  // Check specific feature permission for a given item and role
  getFeaturePermission(item: any, permissionType: string): boolean {
    const feature = item.permissions.features[0]; // Assuming single feature permission set per item
    return this.hasFeaturePermission(feature, permissionType);
  }
}
