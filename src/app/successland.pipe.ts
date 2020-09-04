import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'successland'
})
export class SuccesslandPipe implements PipeTransform {

//   transform(items: any, max_price: string,launchsucessfilters?:any): any {
//     if(max_price === ''){
//       return items;
//     }
   
//    else{
     
//       console.log(items);
//       console.log(max_price);
//     const playersArray:any[]=[];
//     //const playersArrays:any[]=[];
    
//     for (let i=0;i< items.length;i++){
//       let employeeNames:string=items[i].launch_year;
//       //let employeeNamess:string=items[i].launch_success;
//       if(employeeNames.startsWith(max_price)){
//       playersArray.push(items[i]);
//       }
    
//     }
//     return playersArray 
//   }

// }
transform(items: any, max_price: any, depature_city: any): any {
    
  var filtereditems : any = [];
  // Filter each
  
     if(max_price === ''){
      return items;
    }
    else if(max_price){
      console.log(items);
      console.log(max_price);
    const playersArray:any[]=[];
    //const playersArrays:any[]=[];
    
    for (let i=0;i< items.length;i++){
      let employeeNames:string=items[i].launch_year;
      let launchsucessdata:string=items[i].launch_success;
      
      if(employeeNames.startsWith(max_price)){
      filtereditems.push(items[i]);
      }
    //   else if(launchsucessdata.startsWith(depature_city)){
    //     console.log("departure city",depature_city);
    //    filtereditems =  items.some(t=>  t.launch_success.includes(depature_city));
    //  }
    }
  
 

  console.log("filtered",filtereditems);
   return filtereditems;
}
}
}