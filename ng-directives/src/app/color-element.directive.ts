import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorElement]'
})
export class ColorElementDirective {

  private changeCount: number = 0;
  
  @Input() id: number;

  @HostBinding('style.color') color: string;

  @HostListener('click', ['$event']) changeColor(event) {
    this.color = '#' + Math.floor(Math.random() * 16777216).toString(16);
    console.log('%d. %s (%d)', this.id, this.color, ++this.changeCount);
  }
}
