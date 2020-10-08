import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, tap  } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-form-component',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit, OnDestroy {

  nameInput = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
    console.log('ngOnInit');

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  updateName(): void {
    this.nameInput.setValue('Nancy');
  }

}
