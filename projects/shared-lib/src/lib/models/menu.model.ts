export interface MenuItem {
  subMenu?: MenuItem[]; // Optional submenu property for recursive menu items
  label: string; // Label for the menu item
  icon: string; // Icon for the menu item
  route?: string; // Route for the menu item
  routerLink?: string; // Route for the menu item
  menuOf?: string[]; // Optional array of modules this menu belongs to
  accessBy?: string[]; // Optional array of roles that can access this menu
  items?: MenuItem[]; // Nested menu items
  module?: string; // Module can be a string like "active" or "inactive"
  permissions?: {
    page: string; // Page status can be "active" or "inactive"
    features: FeaturePermissions[]; // Permissions for specific features
  };
}

export interface FeaturePermissions {
  ADD: string; // Permissions for Add, Edit, Delete, View
  EDIT: string;
  DELETE: string;
  VIEW: string;
}
