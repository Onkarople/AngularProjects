import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <h1>Inside Second Component</h1>
  <h2>Concept of Inline in Angular</h2>
  `,
  styles: [
    `
     h1
     {
       color:green
     }
     
     h2
     {
       color:red
     }
    `
  ]
})
export class SecondComponent {

}
