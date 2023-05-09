import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toggleOffCanvas]'
})
export class offCanvasDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('click')
  public removeOffCanvasShowClass(): void {
    this.offCanvas('show');
  }
  private offCanvas(className: string): void {
    const dropdownMenu =
      this.elRef.nativeElement.parentElement;
      console.log(dropdownMenu);

    const hasClassShow = dropdownMenu?.classList.contains(className);

    if (hasClassShow) {
      this.removeClass(className);
    }
  }
  private removeClass(className: string): void {
    const dropdownMenu = this.elRef.nativeElement.nextElementSibling;
    this.renderer.removeClass(dropdownMenu, className);
  }
}
