import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rr-button',
  template: `
    <button [ngClass]="classMap" (click)="onClick.emit($event)">{{text}}</button>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  @Input() color: "primary" | "success" | "danger" = "primary";
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;
  @Input() text = "";

  @Output() onClick = new EventEmitter<any>();

  rootClass: string;
  classMap: any;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
      this.rootClass = this.elementRef.nativeElement.tagName.toLowerCase();
      this.updateClassMap();
  }

  updateClassMap() {
      this.classMap = {
          [`${this.rootClass}`]: true,
          [`${this.rootClass}--${this.color}`]: !!this.color,
          [`${this.rootClass}--outline`]: this.outline,
          [`${this.rootClass}--disabled`]: this.disabled,
      };
  }

  ngOnChanges() {
      this.updateClassMap();
  }

}
