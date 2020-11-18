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
  isValid = false;
  nameValue$: Subscription;
  nameStatus$: Subscription;

  nameInput = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.isValid = this.nameInput.valid;

    this.nameValue$ = this.nameInput.valueChanges
    .pipe(tap(() => { this.isValid = false; }))
    .pipe(debounceTime(1000))
    .subscribe((po) => {
      this.isValid = true;
      console.log(po);
      this.value = po;
    });

    console.log("original status: %s", this.nameInput.status);
    
    this.nameStatus$ =  this.nameInput.statusChanges.subscribe(status => {
      console.log("status: %s", status);
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
    if (this.nameValue$) {
      this.nameValue$.unsubscribe();
      this.nameValue$ = null;
    }

    if(this.nameStatus$) {
      this.nameStatus$.unsubscribe();
      this.nameStatus$ = null;
    }
  }

  updateName(): void {
    this.nameInput.setValue('Nancy');
  }

}
