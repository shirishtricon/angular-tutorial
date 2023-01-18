import { Component } from '@angular/core';
import { ShareReplayConfig } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-directives';

  active: boolean = false;
  
  display: boolean = false;

  occupation: string = 'lawyer';

  DisplayNotice(){
    this.display = true;
  }
}
