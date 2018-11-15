import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swHeight'
})
export class HeightPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `${parseInt(value, 10) / 100}m`;
  }
}
