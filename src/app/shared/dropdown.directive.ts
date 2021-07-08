import {Directive, HostBinding, HostListener, OnInit, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show')
  isOpen = false;
  span: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.span = this.el.nativeElement.querySelector('.dropdown-menu');
  }

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.renderer.removeClass(this.span, 'show');
    else this.renderer.addClass(this.span, 'show');
  }
}
