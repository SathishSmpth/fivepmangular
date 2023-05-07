import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('document:click', ['$event.target'])
  public onClickOutside(target: HTMLElement | null): void {
    if (target === null) {
      return;
    }

    const dropdownMenu =
      this.elRef.nativeElement.querySelector('.dropdown-menu');
    const clickedInside = dropdownMenu.contains(target);

    if (!clickedInside) {
      this.renderer.removeClass(dropdownMenu, 'show');
    }
  }
  @HostListener('click')
  public toggleDropdown(): void {
    const dropdownMenu =
      this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu.classList.contains('show')) {
      this.renderer.removeClass(dropdownMenu, 'show');
    } else {
      this.renderer.addClass(dropdownMenu, 'show');
    }
  }
}
