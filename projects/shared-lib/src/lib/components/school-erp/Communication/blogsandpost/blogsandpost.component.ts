import { Component } from '@angular/core';
import { SharableModule } from 'school-erp-public';

@Component({
  selector: 'lib-blogsandpost',
  imports: [SharableModule],
  standalone: true,
  templateUrl: './blogsandpost.component.html',
  styleUrl: './blogsandpost.component.css',
})
export class BlogsandpostComponent {}
