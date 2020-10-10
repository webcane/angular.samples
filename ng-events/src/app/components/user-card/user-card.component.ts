import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EEXIST } from 'constants';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;

  @Output() userSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(): void {
    this.userSelected.emit(this.user);
  }
}
