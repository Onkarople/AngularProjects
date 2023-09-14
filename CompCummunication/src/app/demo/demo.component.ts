import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{

  @Input() public MesssageFParent="";

  @Output() public MyEvent = new EventEmitter();

  public SendM()
  {
    this.MyEvent.emit("Hello from Child");
  }

}
