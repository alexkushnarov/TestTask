import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'positive'})
export class PositivePipe implements PipeTransform {
  transform(value: number) {
    if (value > 0) {
      return `+${value}`;
    }
    return value;
  }
}
