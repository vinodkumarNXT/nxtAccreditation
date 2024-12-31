import { ChangeDetectorRef, Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { Observable } from 'rxjs';
import { FormsService, MaterialModule, SharableModule, SnackbarService } from 'shared-lib';

@Component({
  selector: 'lib-featuremaster-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter()
  ],
  templateUrl: './featuremaster-edit.component.html',
  styleUrl: './featuremaster-edit.component.css'
})
export class FeaturemasterEditComponent {
  
  filteredOptions: Observable<string[]>;
  @Output() dataAdded = new EventEmitter<void>();

  public  roleNameOptions:any;
  public data: any;
  public submitted: boolean = false;
  public fetchedData: any;
  public listData: any;
  public roleMasterID:any;
  public foundRoleID:any;
  public  editedFormID:any;
  public displayedColumns: any;
  public dataSource: any;
  public roleMasterName: any;


  form: FormGroup;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private formsService: FormsService,
    private matDialog: MatDialog
  ) {
    this.data = data;
      this.editedFormID = data.id

    this.form = this.formBuilder.group({
      featureName: ['', Validators.required],
      roleNameSingle: [''],
      featureCreate: [false, Validators.required], // Set default value to false
      featureView: [false, Validators.required],  // Set default value to false
      featureEdit: [false, Validators.required],  // Set default value to false
      featureDelete: [false, Validators.required] // Set default value to false
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  }

  async upadteForm() {
    this.submitted = true;
  
    if (this.form.valid) {
  

      const featureCreate = this.form.get('featureCreate')?.value ? 1 : 0;
      const featureView = this.form.get('featureView')?.value ? 1 : 0;
      const featureEdit = this.form.get('featureEdit')?.value ? 1 : 0;
      const featureDelete = this.form.get('featureDelete')?.value ? 1 : 0;

      // Prepare postData with role IDs and role names
      const postData = {
        feature_name: this.form.get('featureName')?.value,
        role_master_id:  this.roleMasterID,
        featureCreate: featureCreate,
        featureView: featureView,
        featureEdit: featureEdit,
        featureDelete: featureDelete,
      };
  
      try {
        const response = await this.formsService.updateFormData(postData, this.editedFormID, endpoints.FeatureMaster);
        this.snackbarService.openSnackBar('Form updated successfully!', 'X', 'snackbar-success');
        this.resetForm();
        this.submitted = false; // Reset the submission state
        console.log("Final Submission response", response);

        setTimeout(() => {
          this.matDialog.closeAll()
        }, 2000);
        
      } catch (error) {
        console.error('Form update failed:', error);
        this.snackbarService.openSnackBar('Form update failed. Please try again.', 'X', 'snackbar-danger');
      }
    } else {
      console.error('Form is invalid. Cannot update.');
      this.snackbarService.openSnackBar('Form is invalid. Please check the fields and try again.', 'X', 'snackbar-warn');
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
      // Fetch the form data
      const listData = await this.formsService.getFormData(this.data.id, endpoints.FeatureMaster);
      const dataList = listData.data; // Assuming this is an array of items
  
      // Check if dataList is an array and has items
      if (Array.isArray(dataList) && dataList.length > 0) {
        // Loop through each item in the dataList
        for (const data of dataList) {
          // Convert values from 1/0 to true/false for checkboxes
          const featureCreate = data.feature_create === 1;
          const featureView = data.feature_view === 1;
          const featureEdit = data.feature_edit === 1;
          const featureDelete = data.feature_delete === 1;
  
          // Patch the form with the current item data
          this.form.patchValue({
            roleNameSingle: data.role_name,
            featureName: data.feature_name,
            featureCreate: featureCreate,
            featureView: featureView,
            featureEdit: featureEdit,
            featureDelete: featureDelete,
            roleMasterID: data.role_id
          });
          this.cdr.detectChanges(); // Ensure change detection is triggered

          // If you need to handle multiple forms or sections, you might need to update accordingly
          // For example, you could add these updates to an array or handle them as needed.
        }
      } else {
        console.warn('No data found or data is not in the expected format.');
      }
    } catch (error) {
      console.error('Failed to load form data:', error);
    }
  }
  
 
}
