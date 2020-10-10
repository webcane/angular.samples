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

  value = '';
  valueColor = 'red';

  disableButtons = false;
  
  name$: Subscription;
  nameInput = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.disableButtons = !this.nameInput.valid;

    this.name$ = this.nameInput.valueChanges
    .pipe(tap(() => { this.disableButtons = true; }))
    .pipe(debounceTime(1000))
    .subscribe((po) => {
      this.disableButtons = false;
      console.log(po);
      this.value = po;
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
    if (this.name$) {
      this.name$.unsubscribe();
      this.name$ = null;
    }
  }

  updateName(): void {
    this.nameInput.setValue('red');
  }

  changeColor(color: string): void {
    this.valueColor = color;
  }

}
