import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public batch : string  = "Angular";
  public Fees  : number =18500;

  DisplayDetails()
  {
     return "This is a web devoplemnt batch";
  }
  constructor(){}

}
