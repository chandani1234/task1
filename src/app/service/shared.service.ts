import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dataarray: any;
  constructor() { }
  getdata()
  {
    this.dataarray=[
      {
        "firstname":"chandani",
        "lastname":"naikawadi"
      }
    ]
    return this.dataarray;
  }
  
}


