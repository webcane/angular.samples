import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorElement]',
  exportAs: 'colorDir'
})
export class ColorElementDirective {

  private changeCount: number = 0;
  
  @Input() id: number;

  @HostBinding('style.color') color: string;

  @HostListener('click', ['$event']) changeColor(event) {
    this.setRandomColor();
    console.log('%d. %s (%d)', this.id, this.color, ++this.changeCount);
  }

  setRandomColor(): void {
    this.color = '#' + Math.floor(Math.random() * 16777216).toString(16);
  }
}
