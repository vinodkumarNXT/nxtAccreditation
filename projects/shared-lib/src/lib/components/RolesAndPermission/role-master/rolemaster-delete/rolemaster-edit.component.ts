import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { FormsService, MaterialModule, SharableModule, SnackbarService } from 'shared-lib';

@Component({
  selector: 'lib-rolemaster-edit',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter() 
  ],
  templateUrl: './rolemaster-edit.component.html',
  styleUrl: './rolemaster-edit.component.scss'
})
export class RolemasterEditComponent implements OnInit {
  public data: any;
  public submitted: boolean = false;
  public editformID: any;

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private formsService: FormsService,
    private matDialog:MatDialog
  ) {
    this.data = data;
    this.editformID = data.id;

    this.form = this.formBuilder.group({
      roleName: ['', Validators.required],
  
    });

  }

  ngOnInit(): void {
    this.loadFormData();
  }

  async updateForm() {
    this.submitted = true;
    if (this.form.valid) {
      // Construct postData from form values
      const postData = {
        roleName: this.form.get('roleName')?.value,
       
      };
      try {
        const response = await this.formsService.updateFormData(postData, this.editformID, endpoints.RolesMaster);
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

  async loadFormData() {
    try {
      const formData = await this.formsService.getFormData(this.data.id, endpoints.RolesMaster);
      console.log("Getting Form Data", formData.data);

      // Assuming formData.data has the structure you need, otherwise map it
      const data = formData.data;
      this.form.patchValue({
        roleName: data.role_name,
      });
    } catch (error) {
      console.error('Failed to load form data:', error);
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


}
