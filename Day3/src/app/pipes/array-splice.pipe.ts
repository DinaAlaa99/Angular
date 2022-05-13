import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {

  transform(products:Product[],filter:string): Product[] {
      if( filter=='')
      return products;
    else
     return products.filter(product => product.name.includes(filter));

    
  }

}
