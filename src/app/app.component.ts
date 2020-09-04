import { Component,OnInit } from '@angular/core';
import { SpacexService } from './spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 filterfinalspacexres;
 filterfinallunch;
 filterlunchandland;
 filterall;
 filterData;
 constructor(private spacexdata:SpacexService) { }

 ngOnInit() {
   this.sapcexenduserdata();
   this.alldata();
  this.lunchsuccessdata();
  this.lunchandlanddata();
 
}
//*************************End users data**************************//
 sapcexenduserdata(){
  this.spacexdata.getendusers().subscribe((response) => {
     this.filterfinalspacexres=response;
     
})
    
     console.log("sapcexenduserdata()")
 }
 //**********************SuccessLaunch Data***********************//
 lunchsuccessdata(){
   this.spacexdata.lunchsuccessfilter().subscribe((res) => {
     this.filterfinallunch=res;
    
   })
   console.log("lunchsuccessdata()")
 }
 //*******************Successful Landing***********************//
 lunchandlanddata(){
  this.spacexdata.lunchandlandfilter().subscribe((res)=>{
  this.filterlunchandland=res;
    
  })
  console.log("lunchandlanddata()")
 }
 //************************All Data***************************//
 alldata(){
  this.spacexdata.allfilter().subscribe((res)=>{
   this.filterall=res;
   
  })
  console.log("alldata()")
 }
//***************************search**************************//
// search(){
//   this.userData=this.userData.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
// }
// lauchsuccessclick(filterlunchandland){
//   var filtereditems : any = [];
//   // Filter each
  
//      if(filterlunchandland === ''){
//       return this.filterfinallunch;
//     }
//     else{
      
//       console.log(filterlunchandland);
//     const playersArray:any[]=[];
//     //const playersArrays:any[]=[];
    
//     for (let i=0;i<this.filterfinallunch.length;i++){
//       let employeeNames:string=this.filterfinallunch[i].launch_year;
//       //let employeeNamess:string=items[i].launch_success;
//       if(employeeNames.startsWith(filterlunchandland)){
//       filtereditems.push(this.filterfinallunch[i]);
//       }
//     }
//   //if(depature_city){
//      //console.log("departure city",depature_city);
//     // filtereditems =  items.some(t=>  t.launch_success.includes(depature_city));
//   //}

//   //console.log("filtered",filtereditems);
//    return filtereditems;
// }
//}
}
