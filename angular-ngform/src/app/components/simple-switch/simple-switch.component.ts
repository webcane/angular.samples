import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {};

export const SIMPLE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleSwitchComponent),
  multi: true
 };

@Component({
  selector: 'app-simple-switch',
  templateUrl: './simple-switch.component.html',
  styleUrls: ['./simple-switch.component.css'],
  providers: [SIMPLE_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SimpleSwitchComponent implements ControlValueAccessor {

  // private value: boolean;
  @Input() isChecked = false;


  private propagateChange: (_: any) => void = noop;
  private propagateTouch: () => void = noop;

  constructor() { }

  get value() {
    return this.isChecked;
  }

  set value(val: boolean) {
    this.isChecked = val;
  }

  writeValue(options: any): void {
    if (options.value !== this.isChecked) {
      // set default value
      this.isChecked = options.value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  onChange(event: any) {
    this.value = event.target.checked;
    this.propagateChange(this.value);
    this.propagateTouch();
  }

}
