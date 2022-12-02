import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBeSticky]'
})
export class BeStickyDirective {

  top: number = 0;
  isFixed: boolean = false;

  windowWidth: number = 0;

	constructor(
		private el: ElementRef
	) {}

@HostListener('window:scroll', ['$event'])onScroll(){
  if (this.top < window.scrollY && !this.isFixed ) {
    this.isFixed = true;
    this.repostion('fixed')
    this.el.nativeElement.style.top = '2.5%'
    if (window.innerWidth > 1200) {
      this.el.nativeElement.style.width = '14.5%'
      this.el.nativeElement.style.left = '68.5%'
    } else {
      this.el.nativeElement.style.width = '22%'
      this.el.nativeElement.style.right = '0%'
    }
  }
  if (this.top >= window.scrollY && this.isFixed ) {
    this.isFixed = false;
    this.repostion('absolute')
    this.el.nativeElement.style.width = ''
    this.el.nativeElement.style.height = ''
    this.el.nativeElement.style.left = ''
    this.el.nativeElement.style.top = ''
  }
}

private repostion(p: string) {
  this.el.nativeElement.style.position = p;
}

ngOnInit() {
  this.top = this.el.nativeElement.getBoundingClientRect().y*3.8; //this needs to be better implemented
  this.onScroll();
}

}
