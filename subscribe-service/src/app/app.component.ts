import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.servie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [EnrollService]
})
export class AppComponent {
  title = 'subscribe-service';

  constructor(private enrollService: EnrollService){

  }
}
