import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges ,OnDestroy,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy{
  @Input() value: string = 'proacademy'

  constructor(){
    console.log('Constructor called!');
    // console.log(this.value);
  }

  ngOnChanges(change: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(change);
  }

  ngOnInit(){
    console.log('ngOnInit called!');
    // console.log(this.value);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentCheked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');    
  }
}
