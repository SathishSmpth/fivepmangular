import { Directive, ElementRef } from "@angular/core";


@Directive({
  selector:'[basicDirective]'
})

export class BasicDirective {
  constructor(private elementRef:ElementRef) {}

  private t() {

  }
}
