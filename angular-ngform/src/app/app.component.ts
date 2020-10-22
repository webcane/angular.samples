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

  constructor() {
    this.switchControl = new FormControl({
      value: false
    });
  }

  ngOnInit(): void {
    this.switchControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
