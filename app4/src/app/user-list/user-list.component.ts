import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [
    {"name": "Piotr"},
    {"name": "Aneta"},
    {"name": "Leon"},
    {"name": "Gloria"},
    {"name": "Walter"},
    {"name": "Maxine"},
    {"name": "Ana"},
    {"name": "Bradley"}
  ];

  @Output("userSelected")
  userSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user) {
    //console.log("selected user: ", user);
    this.userSelected.emit(user);
  }
}
