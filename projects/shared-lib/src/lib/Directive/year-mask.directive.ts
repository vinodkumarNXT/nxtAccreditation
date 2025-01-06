import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[libYearMask]'
})
export class YearMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');  // Remove all non-digit characters
    
    if (value.length > 4) {
      value = `${value.slice(0, 4)}-${value.slice(4, 8)}`; // Add hyphen after the 4th digit
    }

    input.value = value;
  }
}
