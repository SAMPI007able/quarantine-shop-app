import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: string[], searchValue: string): unknown {
    if (!searchValue) {
      return arr;
    }
    return arr.filter(value => {
      const productInput = Object.values(value).join(` `);
      return productInput.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }

}
