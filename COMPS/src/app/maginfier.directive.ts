import { Directive,  HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaginfier]'
})
export class MaginfierDirective {
  @HostBinding('width') width = 100;
  @HostListener('mouseenter', ['$event'])
  onHover(e)
  {
       this.width = 300;
  }
  constructor() { }

}
