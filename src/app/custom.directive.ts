import { Directive, ElementRef, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appCustomMatExpansionToggle]'
})
export class CustomMatExpansionToggleDirective implements AfterViewInit, OnDestroy {
  private elem: HTMLSpanElement;
  private uns: Subscription;
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.elem = this.elRef.nativeElement.querySelector(".mat-expansion-indicator");

    this.uns = fromEvent(this.elem, 'animationend').subscribe(() => {
      this.elem.classList.remove("openAnimate");
      this.elem.classList.remove("closeAnimate");
    });
  }

  @HostListener("opened")
  onOpen() {
    this.elem.classList.add("openAnimate");
  }

  @HostListener("closed")
  onClose() {
    this.elem.classList.add("closeAnimate");
  }

  ngOnDestroy() {
    this.uns.unsubscribe();
  }
}