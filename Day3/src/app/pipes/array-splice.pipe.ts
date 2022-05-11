import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {

  transform(names:string[],filter:string): string[] {
    
    return names.filter(name => name.includes(filter));
    
  }

}
