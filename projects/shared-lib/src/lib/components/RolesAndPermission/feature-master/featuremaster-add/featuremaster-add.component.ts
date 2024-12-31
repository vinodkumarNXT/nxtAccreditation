import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { SnackbarService, FormsService, MaterialModule, SharableModule } from 'shared-lib';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lib-featuremaster-add',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter()
  ],
  templateUrl: './featuremaster-add.component.html',
  styleUrls: ['./featuremaster-add.component.css']
})
export class FeaturemasterAddComponent {
 public  roleNameOptions:any;
  filteredOptions: Observable<string[]>;

  @Output() dataAdded = new EventEmitter<void>();

  public data: any;
  public submitted: boolean = false;
  public fetchedData: any;
  public listData: any;

  displayedColumns: any;
  dataSource: any;

  public featureCreate:number;
  public featureView:number;
  public featureEdit:number;
  public featureDelete:number;


  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private formsService: FormsService,
    private matDialog: MatDialog
  ) {
    this.data = data;

    this.form = this.formBuilder.group({
      featureName: ['', Validators.required],
      roleName: ['', Validators.required],
      featureCreate: [false, Validators.required], // Set default value to false
      featureView: [false, Validators.required],  // Set default value to false
      featureEdit: [false, Validators.required],  // Set default value to false
      featureDelete: [false, Validators.required] // Set default value to false
    });
  }

  ngOnInit(): void {
    this.loadOptions();

    // this.filteredOptions = this.form.get('roleName')?.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
  }

  async submitForm() {
    this.submitted = true;
  
    if (this.form.valid) {
      console.log("Form values:", this.form.value);
  
      // Retrieve selected role IDs from the form control
      const selectedRoleIds = this.form.get('roleName')?.value || [];
  
      // Filter roleNameOptions to get selected role names
      const selectedRoles = this.roleNameOptions.filter(option => selectedRoleIds.includes(option.id));

    
      const featureCreate = this.form.get('featureCreate')?.value ? 1 : 0;
      const featureView = this.form.get('featureView')?.value ? 1 : 0;
      const featureEdit = this.form.get('featureEdit')?.value ? 1 : 0;
      const featureDelete = this.form.get('featureDelete')?.value ? 1 : 0;
  
      // Prepare postData with role IDs and role names
      const postData = {
        featureName: this.form.get('featureName')?.value,
        roleName: selectedRoles.map(role => role.id), // Send array of selected IDs
        featureCreate:  featureCreate,
        featureView: featureView,
        featureEdit: featureEdit,
        featureDelete: featureDelete,
      };
  
      try {
        const response = await this.formsService.onFormSubmit(postData, endpoints.FeatureMaster);
  
        console.log('Form submitted successfully:', response);
        this.snackbarService.openSnackBar('Form submitted successfully!', 'X', 'snackbar-success', 3000);
  
        this.fetchedData = response.data;
        // Emit event to notify the parent component
        this.dataAdded.emit();
  
        this.resetForm();
  
        setTimeout(() => {
          this.matDialog.closeAll();
        }, 2000);
  
      } catch (error) {
        console.error('Form submission failed:', error);
        this.snackbarService.openSnackBar('Form submission failed. Please try again.', 'X', 'snackbar-danger', 3000);
      }
    } else {
      console.error('Form is invalid. Cannot submit.');
      this.snackbarService.openSnackBar('Please check the fields and try again.', 'X', 'snackbar-warn', 3000);
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

  async loadFormData() {
    try {
      const listData = await this.formsService.getListData(endpoints.FeatureMaster);
      this.listData = listData.data;

      console.log("this.listData", this.listData);

      // Extracting column names from the first object in the list
      if (this.listData && this.listData.length > 0) {
        this.displayedColumns = Object.keys(this.listData[0]);
      }

      this.dataSource = this.listData;
    } catch (error) {
      this.snackbarService.openSnackBar('Failed to load data. Please try again.', 'X', 'snackbar-danger', 3000);
    }
  }

  async loadOptions() {
    try {
      // Fetch options from an API or other source
      const response = await this.formsService.getListData(endpoints.RolesMaster);
      // Map the response data to extract only the role_name field
      // this.roleNameOptions = response.data.map((item: any) => item.role_name);
      // console.log("Role Name Options", this.roleNameOptions);

           this.roleNameOptions = response.data;
           console.log("Role Name Options", this.roleNameOptions);
    } catch (error) {
      console.error('Failed to load options:', error);
      // Handle the error appropriately, e.g., show a user-friendly message
    }
  }
  
  

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.roleNameOptions.filter(option => option.toLowerCase().includes(filterValue));
  // }


}
