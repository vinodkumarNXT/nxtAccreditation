export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  menuOf?: string;
  subMenu?: MenuItem[];
  module?: string;  // Module can be a string like "active" or "inactive"
  permissions?: {
    page: string;  // Page status can be "active" or "inactive"
    features: FeaturePermissions[];
  };
}

export interface FeaturePermissions {
  ADD: string;   // Permissions for Add, Edit, Delete, View
  EDIT: string;
  DELETE: string;
  VIEW: string;
}
