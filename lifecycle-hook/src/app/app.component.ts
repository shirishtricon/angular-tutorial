import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle-hook';
  inputText: string = '';
  destroy: boolean = true;

  OnSubmit(inputEL: HTMLInputElement){
    this.inputText = inputEL.value;
  }

  DestroyComponent(){
    this.destroy = false;
  }
}
