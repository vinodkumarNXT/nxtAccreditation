import { Component } from '@angular/core';
import { SharableModule } from 'shared-lib';

@Component({
  selector: 'lib-skelton',
  standalone: true,
  imports: [SharableModule],
  templateUrl: './skelton.component.html',
  styleUrl: './skelton.component.scss'
})
export class SkeltonComponent {

}
