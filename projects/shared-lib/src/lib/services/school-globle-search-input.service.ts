import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SchoolGlobleSearchInputService {

  constructor(private router: Router) {}

  // This method will return routes that start with the search term
  getMatchingRoutes(searchTerm: string) {
    const routes = this.router.config;  // Access the global route config
    
    let matchedRoutes = [];

    // Recursively search through all routes
    const searchRoutes = (routes: any[], searchTerm: string) => {
      routes.forEach(route => {
        // If the route path matches the search term (starts with it), add it to the matched list
        if (route.path && route.path.toLowerCase().startsWith(searchTerm.toLowerCase())) {
          matchedRoutes.push({
            label: route.path,  // Display the route path
            route: route.path   // The actual route to navigate to
          });
        }
        if (route.children) {
          // Recurse into child routes
          searchRoutes(route.children, searchTerm);
        }
      });
    };

    // Start searching the routes
    searchRoutes(routes, searchTerm);

    return matchedRoutes;
  }
}