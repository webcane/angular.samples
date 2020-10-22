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

  checked = false;
  disabled = false;

  private propagateChange: (_: any) => void = noop;
  private propagateTouch: () => void = noop;

  constructor() { }

  get value() {
    return this.checked;
  }

  set value(val: boolean) {
    this.checked = val;
  }

  writeValue(options: any): void {
    // set default value

    if (options.checked !== this.checked) {
      this.checked = options.checked;
    }

    if (options.disabled !== this.disabled) {
      this.disabled = options.disabled;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.propagateTouch();
  }

  onChange(event: any) {
    this.value = event.target.checked;
    this.propagateChange(this.value);
    this.propagateTouch();
  }

}
