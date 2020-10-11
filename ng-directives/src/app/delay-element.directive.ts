import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelayElement]'
})
export class DelayElementDirective implements OnInit {

  @Input() appDelayElement: number;

  constructor(private template: TemplateRef<any>,
    private view: ViewContainerRef) { 
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.appDelayElement * 1000);
  }


}
