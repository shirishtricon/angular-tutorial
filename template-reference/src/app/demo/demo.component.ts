import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  sayHello(inputEL: HTMLInputElement){
    // alert("Hello "+inputEL.value);
    console.log(inputEL);
  }
}
