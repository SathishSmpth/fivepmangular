import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  public toggleDropdown(): void {
    this.toggleClass('show');
  }

  @HostListener('document:keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.removeClass('show');
    }
  }

  @HostListener('document:click', ['$event.target'])
  public onClickOutside(targetElement: HTMLElement | null): void {
    if (targetElement === null) {
      return;
    }

    const dropdownMenu = this.elRef.nativeElement.parentElement;
    const clickedInside = dropdownMenu?.contains(targetElement);

    if (clickedInside === false) {
      this.removeClass('show');
    }
  }

  private toggleClass(className: string): void {
    const dropdownMenu = this.elRef.nativeElement.nextElementSibling;
    const hasClassShow = dropdownMenu?.classList.contains(className);

    if (hasClassShow) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }
  }

  private addClass(className: string): void {
    const dropdownMenu = this.elRef.nativeElement.nextElementSibling;
    this.renderer.addClass(dropdownMenu, className);
  }

  private removeClass(className: string): void {
    const dropdownMenu = this.elRef.nativeElement.nextElementSibling;
    this.renderer.removeClass(dropdownMenu, className);
  }
}
