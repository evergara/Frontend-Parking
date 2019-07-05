import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registerFilter'
})
export class RegisterFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
