import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function yearRangeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const regex = /^[0-9]{4}-[0-9]{4}$/;
      return regex.test(control.value) ? null : { invalidYearRange: { value: control.value } };
    }
    return null;
  };
}
