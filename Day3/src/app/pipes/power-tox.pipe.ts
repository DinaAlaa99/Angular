import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTox'
})
export class PowerToxPipe implements PipeTransform {

  transform(x:number,y:number): unknown {
    return Math.pow(x,y);
  }

}
