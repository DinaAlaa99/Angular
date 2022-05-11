import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert'
})
export class StringConvertPipe implements PipeTransform {

  transform(input:string): unknown {
     return input.replace("-", " ");
  }

}
