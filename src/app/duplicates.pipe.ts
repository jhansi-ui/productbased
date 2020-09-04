import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicates'
})
export class DuplicatesPipe implements PipeTransform {
  transform(elements: any[]) {
    let result = [];
    elements.forEach(element => {
     if (!elements.find(fEle => fEle.launch_year === element.launch_year)) {
       result.push(element);
     }
   });
 return result;
 }

}
