import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'lunchyear'
})
export class LunchyearPipe implements PipeTransform {
 transform(value: any, sName: string,launchsucessfilters?:string): any {
    if(sName === ''){
      return value;
    }
    else{
      console.log(value);
      console.log(sName);
    const playersArray:any[]=[];
    //const playersArrays:any[]=[];
    
    for (let i=0;i< value.length;i++){
      let employeeNames:string=value[i].launch_year;
      //let employeeNamess:string=value[i].launch_success;
      if(employeeNames.startsWith(sName)){
      playersArray.push(value[i]);
      }
      // else if(employeeNamess.startsWith(launchsucessfilters)){
      // if( employeeNamess[launchsucessfilters].toLowerCase().includes(value.toLowerCase())){
      //   playersArrays.push(value[i]);
      // }
      // }
      //if (depature_city && items.depature.city.toLowerCase().indexOf(depature_city.toLowerCase()) === -1){
       // return false;
     // }
     // else{
 // return items;
//}
    }
    return playersArray;
  }
}


//transform(value:any[],searchString:string ){

  //if(!searchString){
   // console.log('no search')
   // return value  
  //}

//   return value.filter(it=>{   
//       const builderId = it.builderId.toString().includes(searchString) 
//       const groupName = it.groupName.toLowerCase().includes(searchString.toLowerCase())
//       const companyPersonName = it.companyPersonName.toLowerCase().includes(searchString.toLowerCase())
//       console.log( builderId + groupName + companyPersonName);
//       return (builderId + groupName + companyPersonName );      
//   }) 
// }
//}
// transform(value: any, sName: any): any {
//        if(sName === ""){
//          return value;
//        }

// return ValueConverter.filter(function(search){
//   return search.launch_year.toLowerCae().indexOf(sName.toLowerCase()) > -1
// });
// }
}
