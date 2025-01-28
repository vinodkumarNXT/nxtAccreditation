import { Component, ViewChild, } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NavigationEnd, Router } from '@angular/router';
import { TieredMenu } from 'primeng/tieredmenu';
import { filter, Subscription } from 'rxjs';
import { SharableModule, NirfMenuService, NaacMenuService, AuthService } from 'shared-lib';
// import { Store } from '@ngrx/store';
// import { provideStore } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharableModule],
  providers: [provideNativeDateAdapter(), // Provide your reducers here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUserRole = 'admin';
  @ViewChild('menu') menu: TieredMenu; // Reference the menu using ViewChild
  isLoggedIn: boolean; // Default value
  private loginStatusSubscription: Subscription; // Store the subscription

  nirfMenu: boolean = false;
  naacMenu: boolean = false;
  nbaMenu: boolean = false;

  nirfMenuItems: any[] = []; // Your Nirf menu items
  naacMenuItems: any[] = []; // Your Naac menu items
  nbaMenuItems: any[] = []; // Your NBA menu items

  constructor(
    // private store: Store,
    private router: Router,
    private menuService: NaacMenuService,
    private nirfmenuService: NirfMenuService,
    private authService: AuthService,
  ) { }

  menuCardItem = [
    {
      title: 'NAAC',
      subtitle: 'CLICK HERE',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      route: '/naac' // Define the route for NAAC
    },
    {
      title: 'NBA',
      subtitle: 'CLICK HERE',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      route: '/nba' // Define the route for NBA
    },
    {
      title: 'NIRF',
      subtitle: 'CLICK HERE',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      route: '/nirf' // Define the route for NIRF
    }
  ];

  ngOnInit(): void {

    this.getMenuList();
    this.updateMenu();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateMenu();
    });

  }


  getMenuList() {
    this.nirfMenuItems = this.mapMenuItems(this.nirfmenuService.getMenuItems());
    this.naacMenuItems = this.menuService.getMenuItems();
    console.log('NAAC Menu Items:', this.naacMenuItems);

    // this.authService.loggedIn$.subscribe(status => {
    //   this.isLoggedIn = status; // Update isLoggedIn value when status changes
    // });

    // this.loginStatusSubscription = this.authService.loggedIn$.subscribe(status => {
    //   this.isLoggedIn = status; // Update isLoggedIn value when status changes

    //   console.log("this.isLoggedIn ", this.isLoggedIn);

    // });

    // this.loginStatusSubscription = this.store.select(selectIsLoggedIn).subscribe(status => {
    //   this.isLoggedIn = status; // Update the local isLoggedIn value when it changes
    //   console.log('Login Status:', this.isLoggedIn);
    // });
  }

  private mapMenuItems(items: any[], primaryRouteKey: string = 'routerLink', fallbackRouteKey: string = 'route') {
    return items.map(item => ({
      label: item.label,
      icon: item.icon,
      routerLink: item[primaryRouteKey] || item[fallbackRouteKey] // Use fallback if primary key is unavailable
    }));
  }


  updateMenu() {
    // Hide all menus
    this.nirfMenu = false;
    this.naacMenu = false;
    this.nbaMenu = false;

    // Check the current route and set the appropriate menu flag to true
    const currentRoute = this.router.url;

    if (currentRoute.includes('nirf')) {
      this.nirfMenu = true;
    } else if (currentRoute.includes('naac')) {
      this.naacMenu = true;
    } else if (currentRoute.includes('nba')) {
      this.nbaMenu = true;
    }
  }


  getCurrentRole() {
    const filterByRole = (items: any[]) =>
      items.filter(item => item.accessBy.includes(this.currentUserRole));

    this.nirfMenuItems = filterByRole(this.nirfmenuService.getMenuItems());
    this.naacMenuItems = filterByRole(this.menuService.getMenuItems());
  }


  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to prevent memory leaks
    if (this.loginStatusSubscription) {
      this.loginStatusSubscription.unsubscribe();
    }
  }

  logOut() {
    this.authService.logout();
  }

}