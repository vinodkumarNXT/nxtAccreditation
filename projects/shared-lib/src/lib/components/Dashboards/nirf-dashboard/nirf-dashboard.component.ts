import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { SharableModule, FormsService, SnackbarService, AuthService, AutoLogoutService, MenuItem, SwalService, NirfMenuService } from 'school-erp-public';

@Component({
  selector: 'lib-nirf-dashboard',
  standalone: true,
  imports: [SharableModule],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './nirf-dashboard.component.html',
  styleUrl: './nirf-dashboard.component.scss'
})
export class NirfDashboardComponent {
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
    private menuService: NirfMenuService
  ) {
    this.currentYear = new Date().getFullYear();

  }

  lightColors = [
    '#FFF0F5', '#FFFAF0', '#F0FFF0', '#F0F8FF', '#F5F5F5',
    '#E6E6FA', '#FFF8E8', '#FAFAD2', '#F5FFFA', '#E0FFFF',
    '#F8F8FF', '#FDF5E6', '#FFEBE8', '#F0E68C', '#EDEDED'
  ];
  
  
  // Array of card data with random background colors
  cards = [
    {
      imageSrc: '../../../assets/images/faculty.png',
      title: 'Teaching and Learning Excellence',
      description: 'Faculty Strength:',
      count: 356,
      backgroundColor: this.getRandomLightColor()
    },
    {
      imageSrc: '../../../assets/images/research.png',
      title: 'Driving Research Impact',
      description: 'Publications & Patents:',
      count: 12456,
      backgroundColor: this.getRandomLightColor()
    },
    {
      imageSrc: '../../../assets/images/graduation.png',
      title: 'Graduation Outcomes',
      description: 'Placement Rate:',
      count: '98%',
      backgroundColor: this.getRandomLightColor()
    },
    {
      imageSrc: '../../../assets/images/infra.png',
      title: 'World-Class Infrastructure',
      description: 'Campus Area (Acres):',
      count: 150,
      backgroundColor: this.getRandomLightColor()
    },
    {
      imageSrc: '../../../assets/images/outreach.png',
      title: 'Inclusivity and Outreach',
      description: 'Diversity Index:',
      count: '4.8/5',
      backgroundColor: this.getRandomLightColor()
    },
    {
      imageSrc: '../../../assets/images/innovation.png',
      title: 'Innovation and Startups',
      description: 'Startups Supported:',
      count: 56,
      backgroundColor: this.getRandomLightColor()
    },
    {
      imageSrc: '../../../assets/images/citations.png',
      title: 'Research Recognition',
      description: 'Citations Received:',
      count: 231456,
      backgroundColor: this.getRandomLightColor()
    },
    {
      imageSrc: '../../../assets/images/funding.png',
      title: 'Financial Resources',
      description: 'Annual Grants (INR Cr):',
      count: 123.45,
      backgroundColor: this.getRandomLightColor()
    }
  ];
  
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

 

  toggleSubmenu(label: string) {
    this.showSubmenu[label] = !this.showSubmenu[label];
    this.activeSubmenu[label] = this.showSubmenu[label];
  }
  
  toggleNestedSubmenu(label: string) {
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

  
   // Function to get a random light color from the array
   getRandomLightColor() {
    const randomIndex = Math.floor(Math.random() * this.lightColors.length);
    return this.lightColors[randomIndex];
  }

}
