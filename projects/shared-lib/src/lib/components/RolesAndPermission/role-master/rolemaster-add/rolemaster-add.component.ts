import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { FormsService, MaterialModule, SharableModule, SnackbarService } from 'shared-lib';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'lib-rolemaster-add',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  providers: [
    FormsService,
    SnackbarService,
    provideNativeDateAdapter() 
  ],
  templateUrl: './rolemaster-add.component.html',
  styleUrl: './rolemaster-add.component.scss'
})
export class RolemasterAddComponent {
  

}
