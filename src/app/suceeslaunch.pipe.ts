import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suceeslaunch'
})
export class SuceeslaunchPipe implements PipeTransform {

  transform(elements: any[]) {
    let successlands = [];
    elements.forEach(element => {
     if (!elements.find(fEle => fEle.launch_success === element.launch_success)) {
      successlands.push(element);
     }
   });
 return successlands;
 }

}
