import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';
import { SwalService, AuthService, FormsService, MaterialModule, SharableModule, SnackbarService, SessionService } from 'school-erp-public';

@Component({
  selector: 'lib-erp-login',
  standalone: true,
  imports: [SharableModule,MaterialModule],
  providers:[FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './erp-login.component.html',
  styleUrl: './erp-login.component.scss'
})
export class ErpLoginComponent  implements OnInit {
  public sumittedDataID: any
  public submitted = false;
  public fetchedData: any;
  public selectedValue: any;
  public setLocalToken:any
  public showPassword = false; 
  public getMetaData :any


  form: FormGroup;

  constructor(private fb: FormBuilder,
    private sessionService: SessionService,
    private router:Router,
    public dialog: MatDialog,
    private swalService: SwalService,
    private authService:AuthService,
    private formsService: FormsService) {


    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      branchID:['',Validators.required]
    });

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadFormData();
  }

  async submitForm() {
    this.submitted = true;
  
    console.log("Before Form Values", this.form.value);
  
    if (this.form.valid) {
      console.log("this.form", this.form.value);
  
      const postData = {
        staff_id: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        branch_id:this.form.get('branchID')?.value.id
      };
  
      try {
        const response = await this.authService.login(postData, schoolErpEndpoint.SchoolERPLogin);
  
        await this.swalService.successNotification('Logged in successfully');
        
        // Ensure token is saved in localStorage
        localStorage.setItem('token', response.token); // Example, adjust as needed
        localStorage.setItem('branchID', response.branchID); // Example, adjust as needed
           // Dispatch the branch code to NgRx store

          
        
        
        // Redirect to dashboard
        this.router.navigate(['/dashboard']);
        this.resetForm();
        console.log("Final response", response);
  
      } catch (error) {
        console.error('Form submission failed:', error);
        await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
  
        this.resetForm();
      }
    } else {
      console.error('Form is invalid. Cannot submit.');
      await this.swalService.warningNotification('Invalid Form', 'Please check the fields and try again.');
      this.resetForm();
    }
  }
  
  

  
  

  resetForm() {
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      if (control) {
        control.setErrors(null);
      }
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.submitted = false;
  }


  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  async loadFormData() {
    try {
      const listData = await this.formsService.getListData(schoolErpEndpoint.SchoolBranch);
      this.getMetaData = listData?.data || [];
      console.log("this.getMetaData",   this.getMetaData);
      

     
    } catch (error) {
      console.log("Failed to load data");

    }
  }
 
}