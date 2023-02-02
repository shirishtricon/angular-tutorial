import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  defaultCountry: string = 'india';
  firstname: string;
  lastname: string;
  @ViewChild('myForm') form: NgForm;


  onSubmit() {
    console.log(this.form);    
  }
}
