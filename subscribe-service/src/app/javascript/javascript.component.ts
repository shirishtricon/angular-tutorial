import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.servie';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  title = 'JavaScript';
  OnEnroll(){
    const enrollService = new EnrollService();
    enrollService.OnEnrollClicked(this.title);
  }

}
