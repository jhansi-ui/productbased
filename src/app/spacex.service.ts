import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { catchError ,map} from 'rxjs/operators';
import {throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private httpdata:HttpClient) { }

  getendusers(){
    return this.httpdata.get('https://api.spacexdata.com/v3/launches?limit=100').pipe(
      map((result: any) => {
      const returnarray=[]
      return result.reduce((unique, o) => {
        if(!unique.some(obj => obj.launch_year === o.launch_year && obj.launch_success === o.launch_success && obj.land_success === o.land_success)) {
          unique.push(o);
        }
        return unique;
    },[]);
    })
    )}

    
  
  lunchsuccessfilter(){
    return this.httpdata.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true').pipe(
      map((result: any) => {
      const returnarray=[]
      return result.reduce((unique, o) => {
        if(!unique.some(obj => obj.launch_success === o.launch_success)) {
          unique.push(o);
        }
        return unique;
    },[]);
    })
    )}

  
  lunchandlandfilter(){
    return this.httpdata.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true').pipe(
      map((result: any) => {
      const returnarray=[]
      return result.reduce((unique, o) => {
        if(!unique.some(obj =>  obj.land_success === o.land_success)) {
          unique.push(o);
        }
        return unique;
    },[]);
    })
    )}

  
  allfilter(){
    return this.httpdata.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014').pipe(
      map((result: any) => {
      const returnarray=[]
      return result.reduce((unique, o) => {
        if(!unique.some(obj => obj.launch_year === o.launch_year && obj.launch_success === o.launch_success && obj.land_success === o.land_success)) {
          unique.push(o);
        }
        return unique;
    },[]);
    })
    )}
  }
  


