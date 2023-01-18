import { AfterContentInit, asNativeElements, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterContentInit {
  constructor(){ }

  ngOnInit(): void {
    console.log(this.paragraphEl);
  }

  ngAfterContentInit(){
    this.paragraphEl.nativeElement.textContent = "This is now paragraph value"
    console.log(this.paragraphEl.nativeElement.textContent);
  }
  @ContentChild('paragraph') paragraphEl: ElementRef;
}
