import { Component } from '@angular/core';
import { MaterialModule, SharableModule } from 'school-erp-public';

@Component({
  selector: 'lib-school-notfound',
  standalone: true,
  imports: [MaterialModule, SharableModule],
  templateUrl: './school-notfound.component.html',
  styleUrl: './school-notfound.component.scss'
})
export class SchoolNotfoundComponent {

}
