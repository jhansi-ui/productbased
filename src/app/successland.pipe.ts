import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'successland'
})
export class SuccesslandPipe implements PipeTransform {

transform(items: any, nameSearch: any, emailSearch: any, companySearch: any){
  if (items && items.length){
      return items.filter(item =>{
          if (nameSearch && item.launch_year.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
              return false;
          }
          if (emailSearch && item.launch_success.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1){
            return items ? "true" : "false";
        }
          if (companySearch && item.land_success.toLowerCase().indexOf(companySearch.toLowerCase()) === -1){
            return items ? "Yes" : "No";
          }
          return true;
     })
  }
  else{
      return items;
  }
}
}