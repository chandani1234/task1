import { Component, OnInit } from '@angular/core';
import { home } from '../model/home';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 home=new home();
  homearray=[];
  title='Submit';
  activeindex=-1;
  servicedata: any;
  constructor(private sharedservice:SharedService) { }

  ngOnInit(): void {

  this.servicedata= this.sharedservice.getdata();
  console.log(this.servicedata);
}
onsubmit(form)
{
  if(this.activeindex==-1)
  {
    
    this.homearray.push(this.home);
     this.home=new home();
  }
else{
  this.homearray.splice(this.activeindex,1 ,this.home);
}
form.submitted=false;
this.home=new home();
this.title='Submit';
this.activeindex=-1;
}
delete(j)
{
  this.homearray.splice(j);
}
edit(obj,index)
{
  this.title='update';
  this.home=obj;
  this.activeindex=index;
}
}
