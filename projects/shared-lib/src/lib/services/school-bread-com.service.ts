import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SchoolBreadComService {
  private breadcrumbsSource = new BehaviorSubject<any[]>([]);
  breadcrumbs$ = this.breadcrumbsSource.asObservable();

  constructor(private router: Router) {
    // Listen to navigation events
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.setBreadcrumbs();
    });
  }

  private setBreadcrumbs() {
    let currentRoute = this.router.routerState.root;
    let breadcrumbs = [];

    // Traverse the router state to get all breadcrumbs
    while (currentRoute) {
      if (currentRoute.snapshot.data['breadcrumb']) {
        breadcrumbs.push({
          label: currentRoute.snapshot.data['breadcrumb'],
          route: currentRoute.snapshot.url.map((segment) => segment.path).join('/'),
        });
      }
      currentRoute = currentRoute.firstChild;
    }

    // Ensure Dashboard is always the first and shows Home Icon
    const dashboardBreadcrumb = {
      label: 'Home',
      route: '/dashboard',
      icon: 'pi pi-home',  // Home icon
      colorClass: 'color-1',  // Default color for Home
    };

    // If there are breadcrumbs, make sure dashboard is first
    if (breadcrumbs.length && breadcrumbs[0].route !== '/dashboard') {
      breadcrumbs = [dashboardBreadcrumb, ...breadcrumbs];
    } else if (!breadcrumbs.length) {
      breadcrumbs = [dashboardBreadcrumb];
    }

    // Assign random colors to each breadcrumb dynamically
    breadcrumbs = breadcrumbs.map((breadcrumb, index) => ({
      ...breadcrumb,
      colorClass: this.getRandomColorClass(index),
    }));

    this.breadcrumbsSource.next(breadcrumbs);
  }

  // Generate a random color from a set of predefined colors
  private getRandomColorClass(index: number): string {
    const colors = [
      'color-1', 'color-2', 'color-3', 'color-4', 
      'color-5', 'color-6', 'color-7', 'color-8',
    ];
    return colors[index % colors.length]; // Ensures cyclic usage of colors
  }
}
