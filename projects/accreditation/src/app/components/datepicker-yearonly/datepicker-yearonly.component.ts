import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared-lib/src/lib/modules/material.module';

@Component({
  selector: 'app-datepicker-yearonly',
  standalone: true,
  imports: [MaterialModule,],
  templateUrl: './datepicker-yearonly.component.html',
  styleUrl: './datepicker-yearonly.component.scss'
})
export class DatepickerYearonlyComponent {

}
