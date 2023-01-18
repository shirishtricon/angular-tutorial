import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  // what to add or remove
  // from where to add or remove
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { 

  }

  @Input() set appIf(condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template)
    }else{
      this.viewContainer.clear();
    }
  }

}
