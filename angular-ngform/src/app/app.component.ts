import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Start editing to see some magic happen :)';

  switchControl: FormControl;
  disabledSwitch: boolean;

  constructor() {
    this.switchControl = new FormControl({
      checked: false,
      disabled: false
    });
    this.disabledSwitch = false;
  }

  ngOnInit(): void {
    this.switchControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  disableSwitch(): void {
    this.disabledSwitch = !this.disabledSwitch;
    if (this.disabledSwitch) {
      this.switchControl.disable();
    } else {
      this.switchControl.enable();
    }
  }
}
