/*import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let tzoffset = (new Date(value)).getTimezoneOffset() * 60000;
    let minOffSet = new Date(value).getTime() - tzoffset;
    let localISOTime = (new Date(minOffSet)).toISOString().replace('Z', '').replace('T', '');
    return localISOTime;
  }

}*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let tzoffset = (new Date(value)).getTimezoneOffset() * 60000;
    let minOffSet = new Date(value).getTime() - tzoffset;
    let localISOTime = (new Date(minOffSet)).toISOString().replace('Z', '').replace('T', '');
    let formattedTime = localISOTime.substring(0, 10) + '-' + localISOTime.substring(11, 16);
    return formattedTime.substring(0, formattedTime.length - 1);
  }

}
