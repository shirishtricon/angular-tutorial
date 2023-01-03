import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything';
  source: string = 'https://png.pngtree.com/png-vector/20210225/ourlarge/pngtree-shopping-logo-design-png-image_2951622.jpg';

  getSlogan(){
    return 'This is a new slogan for this application';
  }
}
