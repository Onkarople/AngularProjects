import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{

  name="Marvellous InfoSystems";

  today =new Date();

  value=32.8988978;

  Institue={
    "name" : "marvellous",
    "location" : "pune" 
  }

}
