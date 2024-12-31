import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscoreToSpace',
  standalone: true
})
export class UnderscoreToSpacePipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return value;
    return this.titleCase(value.replace(/_/g, ' '));
  }

  private titleCase(text: string): string {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
