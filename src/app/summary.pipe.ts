import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, maxLength?: number): string | null {

    if(!value)
    return null;

    maxLength = maxLength? maxLength: 50;
    return value.substr(0, maxLength) + '...';
  }

}
