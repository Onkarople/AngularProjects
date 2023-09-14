import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent 
{

  public Mycolor="orange";
  public Isset = false;
  public myclass="success";

  public Data="----";

  public MyAction()
  {
    this.Data="Submit button clicked...";
    //return this.Data;
  }

  public MyActionNew(value:any)
  {
     console.log(value);
  }
    
}
