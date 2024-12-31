import { Component, OnInit, OnDestroy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AuthService, AutoLogoutService, MenuItem, MenuService, SharableModule, SwalService } from 'shared-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharableModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [];
  public isExpanded = true;
  public isShowing = false;
  public showSubmenu: { [key: string]: boolean } = {};
  public showNestedSubmenu: { [key: string]: boolean } = {};
  public showLayout = true;
  public isLoginPage: boolean = false;
  public currentYear: number;

  public activeSubmenu: { [key: string]: boolean } = {};
  public activeNestedSubmenu: { [key: string]: boolean } = {};

  public userMenu: any[] = [];
  public availableActions: string[] = [];

  private idleTimer$: Subscription = new Subscription();

  constructor(
    private autoLogoutService: AutoLogoutService,
    private swalService: SwalService,
    private authService: AuthService,
    private router: Router,
    private menuService: MenuService
  ) {
    this.currentYear = new Date().getFullYear();

  }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    this.setupMenuForUserType('admin'); // Change user type here

    // Check for current route to toggle layout visibility
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showLayout = !event.url.includes('/login'); // Hide layout for login page
      });

    // Listen for route changes and check if the current route is the login page
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url.includes('login');
    });

    // Initialize the auto logout logic
    this.autoLogoutService.startListeningForUserActivity();
    this.idleTimer$ = this.autoLogoutService.logout$.subscribe(() => {
      this.autoLogoutService.triggerLogoutAlert();
    });
  }
  

  ngOnDestroy() {
    this.idleTimer$.unsubscribe(); // Clean up subscriptions
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  toggleSubmenu(label: string): void {
    this.showSubmenu[label] = !this.showSubmenu[label];
    this.activeSubmenu[label] = this.showSubmenu[label];
  }

  toggleNestedSubmenu(label: string): void {
    this.showNestedSubmenu[label] = !this.showNestedSubmenu[label];
    this.activeNestedSubmenu[label] = this.showNestedSubmenu[label];
  }

  setupMenuForUserType(userType: string) {
    switch (userType) {
      case 'admin':
        this.userMenu = [
          { label: 'Profile', icon: 'settings', disabled: false, route: "/profile" },
          { label: 'Log Out', icon: 'power_settings_new', disabled: false, route: "/logOut" },
        ];
        this.availableActions = ['Access to Admin dashboard', 'Manage All Users', 'Modify Settings', 'View Reports'];
        break;
      case 'principal':
        this.userMenu = [
          { label: 'Home', icon: 'home', disabled: false, route: "/dashboard" },
          { label: 'Profile', icon: 'person', disabled: false, route: "/dashboard" },
          { label: 'Settings', icon: 'settings', disabled: false, route: "/dashboard" },
          { label: 'Reports', icon: 'bar_chart', disabled: true, route: "/dashboard" },
          { label: 'Log Out', icon: 'power_settings_new', disabled: false, route: "/logOut" },
        ];
        this.availableActions = ['Access Home', 'View/Edit Profile', 'Modify Personal Settings'];
        break;
      case 'guest':
        this.userMenu = [
          { label: 'Home', icon: 'home', disabled: false, route: "/dashboard" },
          { label: 'Sign In', icon: 'login', disabled: false, route: "/dashboard" },
          { label: 'Help', icon: 'help', disabled: false, route: "/dashboard" },
          { label: 'Log Out', icon: 'power_settings_new', disabled: false, route: "/logOut" },
        ];
        this.availableActions = ['Access Home', 'Sign In', 'View Help'];
        break;
      default:
        this.userMenu = [];
        this.availableActions = [];
    }
  }

  handleMenuAction(route: string) {
    if (route === '/logOut') {
      this.authService.logout().subscribe({
        next: () => {
          this.swalService.successNotification('You have been logged out successfully');
        },
        error: (err) => {
          console.error('Logout error:', err);
          this.swalService.errorNotification('Logout failed. Please try again.');
        }
      });
    } else {
      this.router.navigate([route]);
    }
  }
}
