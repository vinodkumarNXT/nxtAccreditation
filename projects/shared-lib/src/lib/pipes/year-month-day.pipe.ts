import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearMonthDay',
  standalone: true, // Make the pipe standalone
})
export class YearMonthDayPipe implements PipeTransform {
  transform(value: any): string {
    // If the value is a digit number, return it unchanged
    if (typeof value === 'number' && !isNaN(value)) {
      return value.toString();
    }

    // Attempt to parse the value as a date
    const date = new Date(value);

    // Check if the value is a valid date
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Months are 0-based, so add 1
      const day = date.getDate();

      return `${this.padZero(day)}-${this.padZero(month)}-${year}`;
    }

    // If not a valid date, return the original value
    return value;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
